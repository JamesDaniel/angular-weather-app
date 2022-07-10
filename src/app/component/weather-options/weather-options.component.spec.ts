import { TestBed } from '@angular/core/testing';
import { WeatherOptionsComponent } from './weather-options.component';

describe('WeatherOptionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherOptionsComponent
      ],
    }).compileComponents();
  });

  it('should show data after init', () => {
    const fixture = TestBed.createComponent(WeatherOptionsComponent);
    const app = fixture.componentInstance;

    const locationEmitSpy = spyOn(app.newLocationEvent, 'emit');

    app.selectedCity = 'Dublin';
    app.selectedCountry = 'IE';

    app.ngAfterContentInit();

    expect(locationEmitSpy).toHaveBeenCalledWith('Dublin,IE');
  });

  it('should onCitySelect', () => {
    const fixture = TestBed.createComponent(WeatherOptionsComponent);
    const app = fixture.componentInstance;

    const locationEmitSpy = spyOn(app.newLocationEvent, 'emit');

    app.selectedCountry = 'IE';

    app.onCitySelect({
        target: {
            value: 'Dublin'
        }
    });

    expect(app.selectedCity).toBe('Dublin');
    expect(locationEmitSpy).toHaveBeenCalledWith('Dublin,IE');
  });

  it('should onCountrySelect', () => {
    const fixture = TestBed.createComponent(WeatherOptionsComponent);
    const app = fixture.componentInstance;

    const locationEmitSpy = spyOn(app.newLocationEvent, 'emit');

    app.onCountrySelect({
        target: {
            value: 'IE'
        }
    });

    expect(app.selectedCity).toBe('');
    expect(locationEmitSpy).toHaveBeenCalledWith(',IE');
  });
});
