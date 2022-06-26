import { TestBed } from '@angular/core/testing';
import { WeatherOptions } from './weather-options.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherOptions
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WeatherOptions);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  fit('should render title', () => {
    const fixture = TestBed.createComponent(WeatherOptions);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('weather-app app is running!');
  });
});
