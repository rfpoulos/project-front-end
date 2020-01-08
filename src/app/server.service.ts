import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

	readonly server = '127.0. 0.1:8000';

  constructor() { }

  public async getDataByCity(city: string) {
	const cityRoute = '/getbycity/';
	const results = await fetch(this.server + cityRoute + city);
	const parsed = await results.json();
	return parsed;
  }

  public async getDataByDate(date: string) {
	const dateRoute = '/getbydate/';
	const results = await fetch(this.server + dateRoute + date);
	const parsed = await results.json();
	return parsed;
  }
}
