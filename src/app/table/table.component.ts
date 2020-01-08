import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	@Input() data$: BehaviorSubject<any[]>;

	public headers: string[] = [];
	public data: any[] = [];

  constructor() { }

  ngOnInit() {
	  this.data$.subscribe((data) => {
		this.headers = data[0] ? Object.keys(data[0]) : [];
		this.data = data;
	  });
  }

}
