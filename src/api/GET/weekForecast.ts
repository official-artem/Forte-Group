import axios from 'axios';
import { City } from '../../types/city.type';
import { ForecastResponse } from '../../types/forecast.type';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_UNITS = import.meta.env.VITE_API_UNITS;

const getWeekForecast = async function({ lat, lon }: City) {
	try {
		const response = await axios.get<ForecastResponse>('https://api.openweathermap.org/data/2.5/forecast', {
			params: {
				lat,
				lon,
				appid: API_KEY,
				units: API_UNITS,
				cnt: 5
			}
		});

		return response.data;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		throw new Error(error);
	}
}

export default getWeekForecast;