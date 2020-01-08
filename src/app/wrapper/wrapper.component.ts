import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
	@Input() route$: Subject<string>;
	@Input() view$: Subject<string>;

	public view = 'map';

  constructor() { }

  ngOnInit() {
  }

  public optionClick(option: string): void {
	  this.route$.next(option);
  }

  public viewClick(view: string): void {
	this.view = view;
	this.view$.next(view);
  }
}
