import { Component, Input } from '@angular/core';
import { WeatherItem } from 'src/app/model/WeatherItem';

@Component({
  selector: 'single-day-weather',
  templateUrl: './single-day.component.html',
  styleUrls: ['./single-day.component.css']
})
export class SingleDayWeather {

  temperature?: string;
  icon?: string;
  dayName?: string;

  @Input() set dayWeather(inputValue: WeatherItem) {
    if (!inputValue) return;
      this.temperature = `${inputValue.main?.temp} C`;
      const weather = inputValue.weather;
      if (weather) {
        let weatherIconCode;
        if (weather[0].icon) {
          weatherIconCode = weather[0].icon.substr(0,2)
        }
        this.icon = `https://openweathermap.org/img/wn/${weatherIconCode}d@2x.png`
      }
      if (inputValue.dt_txt) {
        this.dayName = this.getDayName(inputValue.dt_txt);
      }
  }

  getDayName(dateStr: string) {
    var a = new Date(dateStr);
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var r = weekdays[a.getDay()];
    return r;
  }

}
