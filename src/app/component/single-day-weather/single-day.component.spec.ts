import { TestBed } from '@angular/core/testing';
import { SingleDayWeatherComponent } from './single-day.component';
import { WeatherItem } from 'src/app/model/WeatherItem';

describe('SingleDayWeatherComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SingleDayWeatherComponent
      ],
    }).compileComponents();
  });

  it('should get correct day name', () => {
    const fixture = TestBed.createComponent(SingleDayWeatherComponent);
    const app = fixture.componentInstance;

    const sunday = app.getDayName('10 Jul 2022');
    const monday = app.getDayName('11 Jul 2022');
    const tuesday = app.getDayName('12 Jul 2022');
    const wednesday = app.getDayName('13 Jul 2022');
    const thursday = app.getDayName('14 Jul 2022');
    const friday = app.getDayName('15 Jul 2022');
    const saturday = app.getDayName('16 Jul 2022');
    expect(sunday).toBe('Sunday');
    expect(monday).toBe('Monday');
    expect(tuesday).toBe('Tuesday');
    expect(wednesday).toBe('Wednesday');
    expect(thursday).toBe('Thursday');
    expect(friday).toBe('Friday');
    expect(saturday).toBe('Saturday');
  });

  it('should input data to the component', () => {
    const fixture = TestBed.createComponent(SingleDayWeatherComponent);
    const app = fixture.componentInstance;

    const data = {
        main: {
            temp: 30.1
        },
        weather: [
            {
                icon: '42'
            }
        ],
        dt_txt: '2022-07-10 00:00:00',
    } as WeatherItem;

    app.dayWeather = data;

    expect(app.dayName).toBe('Sunday');
    expect(app.temperature).toBe('30.1 C');
    expect(app.icon).toBe('https://openweathermap.org/img/wn/42d@2x.png')
  });
});
