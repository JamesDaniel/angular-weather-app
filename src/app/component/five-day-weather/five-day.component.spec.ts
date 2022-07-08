import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WeatherResponse } from 'src/app/model/WeatherResponse';
import { WeatherService } from 'src/app/service/weather.service';
import { FiveDayWeatherComponent } from './five-day.component';

describe('FiveDayWeatherComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [FiveDayWeatherComponent],
            providers: [WeatherService]
        }).compileComponents();
    });

    it('should onLocationSelected return undefined', inject([WeatherService], (weatherService: WeatherService) => {
        const fixture = TestBed.createComponent(FiveDayWeatherComponent);
        const app = fixture.componentInstance;

        const weatherServiceSpy = spyOn(weatherService, 'getFiveDayWeather').and.callFake(() => of(expectedWeather));

        app.onLocationSelected(null);
        expect(weatherServiceSpy).not.toHaveBeenCalled();
    }));

    it('should onLocationSelected call weatherService getFiveDayWeather', inject([WeatherService], (weatherService: WeatherService) => {
        const fixture = TestBed.createComponent(FiveDayWeatherComponent);
        const app = fixture.componentInstance;

        const weatherServiceSpy = spyOn(weatherService, 'getFiveDayWeather').and.callFake(() => of(expectedWeather));

        app.onLocationSelected('Dublin,IE');
        expect(weatherServiceSpy).toHaveBeenCalledWith('Dublin,IE');
    }));
});

const expectedWeather: WeatherResponse = {
    list: [{
        main: {
            temp: 30.1
        },
        weather: [
            {
                icon: 'http://www.test.com/icon.png'
            }
        ],
        dt_txt: '2022-02-02 00:00:00',
    }
    ]
};
