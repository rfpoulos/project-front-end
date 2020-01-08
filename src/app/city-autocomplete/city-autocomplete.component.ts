import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { googleKey } from 'variables';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { map, get } from 'lodash';

@Component({
  selector: 'app-city-autocomplete',
  templateUrl: './city-autocomplete.component.html',
  styleUrls: ['./city-autocomplete.component.scss']
})
export class CityAutocompleteComponent implements OnInit {
	@Output() getCity: EventEmitter<string> = new EventEmitter();

	public cityResults: string[] = [];
	public value = '';

	readonly placesUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${googleKey}&types=(cities)&input=`;
	readonly proxyUrl = 'https://cors-anywhere.herokuapp.com/';

	private query$: Subject<string> = new Subject();

	constructor() { }

	ngOnInit() {
		this.query$.pipe(
			debounceTime(500)
		).subscribe((query) => {
			this.generateCityOptions(query);
		});
	}

	OnDestroy() {
		this.query$.unsubscribe();
	}

	public valueChange(query: string): void {
		this.query$.next(query);
	}

	public onClickCity(city: string): void {
		this.value = city;
		this.getCity.emit(city);
	}

	private async generateCityOptions(query: string): Promise<void> {
		const results = await fetch(this.proxyUrl + this.placesUrl + 'GA, ' + query);
		const parsed = await results.json();
		const cityResults = map(parsed.predictions, (prediction) => {
			return get(prediction, ['structured_formatting', 'main_text']);
		});
		this.cityResults = cityResults;
		if (this.cityResults.length === 1) {
			this.getCity.emit(this.cityResults[0]);
		}
	}
}
