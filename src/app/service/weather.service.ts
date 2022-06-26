import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { WeatherResponse } from '../model/WeatherResponse';

@Injectable()
export class WeatherService {
    
    constructor(private http:HttpClient) {}

    getFiveDayWeather(location: string) {
      return this.http.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=377453ea6963542d2b4896b9ec7a9aca`);
    }
}
