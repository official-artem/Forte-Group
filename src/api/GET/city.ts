import axios from "axios";
import { City } from '../../types/city.type';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_LIMIT = import.meta.env.VITE_API_LIMIT;

export const getCities = async (city: string) => {
	const response = await axios.get<City[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${API_LIMIT}&appid=${API_KEY}`);

	return response;
};