import { Component } from '@angular/core';
import { WeatherItem } from 'src/app/model/WeatherItem';
import { WeatherResponse } from 'src/app/model/WeatherResponse';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'five-day-weather',
  templateUrl: './five-day.component.html',
  styleUrls: ['./five-day.component.css']
})
export class FiveDayWeather {

  weatherItems: WeatherItem[] = []

  constructor(private weatherService:WeatherService) {}

  onLocationSelected($event: any) {
    if (!$event)
      return;
    this.weatherService.getFiveDayWeather($event)
    .subscribe((data: WeatherResponse) => {
      const days = new Set();
      if (data.list) {
        for (let i=0; i<data.list?.length; i++) {
          days.add(data.list[i].dt_txt?.split(' ')[0]);
        }
      }

      let weatherList = Array.from(days).map(e => {
        return data.list?.find(el => el.dt_txt?.split(' ')[0] === e)
      }) as WeatherItem[]

      this.weatherItems = weatherList;
    });
  }
}
