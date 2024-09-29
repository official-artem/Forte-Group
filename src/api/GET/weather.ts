import axios from "axios";
import { WeatherResponse } from '../../types/weather.type';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_LIMIT = import.meta.env.VITE_API_LIMIT;
const API_UNITS = import.meta.env.VITE_API_UNITS;

export const getCities = async (city: string) => {
	const response = await axios.get<WeatherResponse>(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${API_LIMIT}&appid=${API_KEY}&units=${API_UNITS}`);

	return response;
};