import { WeatherMain } from './WeatherMain';
import { Weather } from './Weather';

export interface WeatherItem {
    main?: WeatherMain;
    weather?: Weather[];
    dt_txt?: string;
}
