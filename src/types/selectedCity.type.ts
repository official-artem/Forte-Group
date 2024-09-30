import { City } from './city.type';
import { WeatherResponse } from './weather.type';

export interface InitialCityState {
	weather: WeatherResponse | null,
	city: City | null;
}