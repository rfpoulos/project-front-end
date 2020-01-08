import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
	private map: L.Map;
	private markers: L.Marker[] = [];

	constructor() { }

	ngAfterViewInit(): void {
		this.initMap(33.7490, -84.3880, 6);
	}

	public adjustCenter(lat: number, lng: number): void {
		this.map.panTo(new L.LatLng(lat, lng));
	}

	private initMap(
		lat: number,
		lng: number,
		zoom: number
	): void {
		this.map = L.map('map', {
			center: [lat, lng],
			zoom
		});

		const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});

		tiles.addTo(this.map);
	}

	private addMarker(lat: number, lng: number): void {
		const latLng = new L.LatLng(lat, lng);
		const newMarker = new L.Marker(latLng);

		newMarker.addTo(this.map);

		newMarker.on('click', () => {
			this.map.removeLayer(newMarker);
		});
	}
}
