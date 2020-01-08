import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { InputComponent } from './input/input.component';
import { CityAutocompleteComponent } from './city-autocomplete/city-autocomplete.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WrapperComponent,
    InputComponent,
    CityAutocompleteComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
