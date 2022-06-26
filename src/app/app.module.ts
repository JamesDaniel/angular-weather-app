import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './component/parent/parent.component';
import { WeatherService } from './service/weather.service';
import { FiveDayWeatherComponent } from './component/five-day-weather/five-day.component';
import { SingleDayWeatherComponent } from './component/single-day-weather/single-day.component';
import { WeatherOptionsComponent } from './component/weather-options/weather-options.component';

@NgModule({
  declarations: [
    AppComponent,
    FiveDayWeatherComponent,
    SingleDayWeatherComponent,
    WeatherOptionsComponent
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
