import { TestBed } from '@angular/core/testing';
import { SingleDayWeather } from './single-day.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SingleDayWeather
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SingleDayWeather);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  fit('should render title', () => {
    const fixture = TestBed.createComponent(SingleDayWeather);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('weather-app app is running!');
  });
});
