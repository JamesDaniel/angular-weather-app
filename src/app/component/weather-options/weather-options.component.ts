import { Component, EventEmitter, Output } from '@angular/core';
import CITIES from '../../constants/city.list.json';
import COUNTRIES from '../../constants/CountryCodes.json';

@Component({
  selector: 'weather-options',
  templateUrl: './weather-options.component.html',
  styleUrls: ['./weather-options.component.css']
})
export class WeatherOptionsComponent {

  @Output() newLocationEvent = new EventEmitter<string>();


  public CITIES_LIST: { name: string, country: string }[] = CITIES;
  public COUNTRIES: { name: string, code: string }[] = COUNTRIES;
  citiesForCountry: { name: string, country: string }[] = []

  selectedCountry: string
  selectedCity: string

  constructor() {
    this.citiesForCountry = this.CITIES_LIST
      .filter(e => e.country === COUNTRIES[0].code)
      .sort((a, b) => a.name.localeCompare(b.name));
    this.selectedCountry = this.COUNTRIES[0].code;
    this.selectedCity = this.citiesForCountry[0].name;
  }

  onCountrySelect(event: any) {
    if (!event) {
      return;
    }
    this.selectedCountry = event.target.value;
    this.citiesForCountry = this.CITIES_LIST
      .filter(e => e.country === event.target.value)
      .sort((a, b) => a.name.localeCompare(b.name));
    this.selectedCity = this.citiesForCountry[0].name;
    this.newLocationEvent.emit(`${this.selectedCity},${this.selectedCountry}`);
  }

  onCitySelect(event: any) {
    if (!event) {
      return;
    }
    this.selectedCity = event.target.value;
    this.newLocationEvent.emit(`${this.selectedCity},${this.selectedCountry}`);
  }

  ngAfterContentInit(): void {
    this.newLocationEvent.emit(`${this.selectedCity},${this.selectedCountry}`);
  }

}
