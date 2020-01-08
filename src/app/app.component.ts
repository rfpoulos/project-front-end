import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'map-app';
  public route$: Subject<string> = new Subject();
  public route = 'city';
  public view$: Subject<string> = new Subject();
  public view = 'map';
  public data$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
	  private serverService: ServerService
  ) {}

  ngOnInit() {
	this.route$.subscribe((route) => {
		this.route = route;
	});

	this.view$.subscribe((view) => {
		this.view = view;
	});
  }

  public async getDate(date: string): Promise<void> {
	  const data = await this.serverService.getDataByDate(date);
	  this.data$.next(data);
  }

  public async getCity(city: string): Promise<void> {
	  const data = await this.serverService.getDataByCity(city);
	  this.data$.next(data);
  }
}
