import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
	@Input() label: string;
	@Input() value = '';
	@Output() valueChange: EventEmitter<string> = new EventEmitter();


	constructor() { }

	ngOnInit() {

	}

	public updateValue(event): void {
		this.value = event.target.value;
		this.valueChange.emit(this.value);
	}

}
