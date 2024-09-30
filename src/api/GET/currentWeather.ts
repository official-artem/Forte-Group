import axios from "axios";
import { WeatherResponse } from '../../types/weather.type';
import { City } from '../../types/city.type';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_UNITS = import.meta.env.VITE_API_UNITS;

export const getCurrentWeather = async ({lat, lon}: City) => {
	const response = await axios.get<WeatherResponse>(
		'https://api.openweathermap.org/data/2.5/weather', {
		params: {
			lat,
			lon,
			appid: API_KEY,
			units: API_UNITS
		}
	});

	return response.data;
};