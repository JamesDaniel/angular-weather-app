import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './component/parent/parent.component';
import { WeatherService } from './service/weather.service';
import { FiveDayWeather } from './component/five-day-weather/five-day.component';
import { SingleDayWeather } from './component/single-day-weather/single-day.component';
import { WeatherOptions } from './component/weather-options/weather-options.component';

@NgModule({
  declarations: [
    AppComponent,
    FiveDayWeather,
    SingleDayWeather,
    WeatherOptions
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
