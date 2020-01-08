import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

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

  constructor() {}

  ngOnInit() {
	this.route$.subscribe((route) => {
		this.route = route;
	});

	this.view$.subscribe((view) => {
		this.view = view;
	});
  }

  public getDate(date): void {
	  console.log(date);
  }
}
