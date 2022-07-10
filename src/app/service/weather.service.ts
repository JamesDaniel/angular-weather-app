import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { catchError, Observable, throwError } from 'rxjs';
import { WeatherResponse } from '../model/WeatherResponse';

@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) {}

    getFiveDayWeather(location: string): Observable<any> {
      return this.http.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=377453ea6963542d2b4896b9ec7a9aca`).pipe(
        catchError(err => this.catchError(err))
      );
    }

    catchError = (err: any) => {
      if (err && err.error && err.error.message) {
        alert(err.error.message);
      } else if (err && err.message) {
        alert(err.message);
      } else {
        alert(JSON.stringify(err));
      }
      return throwError(err);
    }
}
