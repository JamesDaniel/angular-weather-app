import { HttpClient } from '@angular/common/http';
import { TestBed, getTestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

let weatherService: WeatherService;
let httpClientSpy: jasmine.SpyObj<HttpClient>;

describe('Test WeatherService', () => {
  let injector: TestBed;
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    weatherService = new WeatherService(httpClientSpy);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    injector = getTestBed();
    service = injector.inject(WeatherService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getFiveDayWeather', () => {
    it('should get weather data', () => {
      service.getFiveDayWeather('Dublin,IE')
        .subscribe(() => {}, err => {
          fail();
        });
      httpMock.expectOne('https://api.openweathermap.org/data/2.5/forecast?q=Dublin,IE&units=metric&appid=377453ea6963542d2b4896b9ec7a9aca')
    });

    it('should handle client error', () => {
      const alertSpy = spyOn(window, 'alert');
      service.catchError({
        error: {
          message: 'client-side error'
        }
      });
      expect(alertSpy).toHaveBeenCalledWith('client-side error');
    });

    it('should handle server client error', () => {
      const alertSpy = spyOn(window, 'alert');
      service.catchError({
        message: 'server-side error'
      });
      expect(alertSpy).toHaveBeenCalledWith('server-side error');
    });

    it('should handle unknown error', () => {
      const alertSpy = spyOn(window, 'alert');
      service.catchError({
        unknownError: 'unknown error'
      });
      expect(alertSpy).toHaveBeenCalledWith(JSON.stringify({unknownError:'unknown error'}));
    });
  });
});
