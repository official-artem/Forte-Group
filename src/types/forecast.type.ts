import { WeatherResponse } from './weather.type';

export interface ForecastResponse {
	cod: string;
	message: number;
	cnt: number,
	list: WeatherResponse[]
}