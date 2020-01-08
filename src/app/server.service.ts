import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

	readonly server = '127.0.0.1:8000';

  constructor() { }

  public async getDataByCity(city: string) {
	// const cityRoute = '/getbycity/';
	// const results = await fetch(this.server + cityRoute + city);
	// const parsed = await results.json();
	// return parsed;
	return [{"Description":"Two lanes blocked due to accident on I-85 Northbound at Exit 61 GA-74 Senoia Rd.","Latitude":33.546177,"Longitude":-84.577347,"Lookup Date":"11/30/2016","Severity":3,"Time":"15:13","Weather Condition":"Rain"}];
  }

  public async getDataByDate(date: string) {
	// const dateRoute = '/getbydate/';
	// const results = await fetch(this.server + dateRoute + date);
	// const parsed = await results.json();
	// return parsed;
	return [{"Description":"Two lanes blocked due to accident on I-85 Northbound at Exit 61 GA-74 Senoia Rd.","Latitude":33.546177,"Longitude":-84.577347,"Lookup Date":"11/30/2016","Severity":3,"Time":"15:13","Weather Condition":"Rain"},{"Description":"Restrictions on exit ramp due to accident on I-20 Westbound at GA-70 Fulton Industrial Blvd.","Latitude":33.766376,"Longitude":-84.527321,"Lookup Date":"11/30/2016","Severity":3,"Time":"15:25","Weather Condition":"Rain"},{"Description":"Slow traffic due to accident on I-285 Southbound at Exit 12 US-278 Donald Lee Hollowell Pkwy.","Latitude":33.786896,"Longitude":-84.493134,"Lookup Date":"11/30/2016","Severity":3,"Time":"14:42","Weather Condition":"Heavy Rain"},{"Description":"Accident on GA-166 Arthur Langford Pkwy at Sylvan Rd.","Latitude":33.697849,"Longitude":-84.418266,"Lookup Date":"11/30/2016","Severity":2,"Time":"16:27","Weather Condition":"Overcast"}]
  }
}
