import { Component, EventEmitter, Output } from '@angular/core';
import COUNTRIES from '../../constants/CountryCodes.json';

@Component({
  selector: 'weather-options',
  templateUrl: './weather-options.component.html',
  styleUrls: ['./weather-options.component.css']
})
export class WeatherOptionsComponent {

  @Output() newLocationEvent = new EventEmitter<string>();

  public COUNTRIES: { name: string, code: string }[] = COUNTRIES;

  selectedCountry: string
  selectedCity: string

  constructor() {
    this.selectedCountry = this.COUNTRIES[0].code;
    this.selectedCity = '';
  }

  onCountrySelect(event: any) {
    if (!event) {
      return;
    }
    this.selectedCountry = event.target.value;
    this.selectedCity = '';
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
