import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../../api/GET/currentWeather';

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async (_, { rejectWithValue }) => {
		try {
			const localStorageValue = localStorage.getItem('selectedCity');

			if (!localStorageValue) {
				return;
			}

			const [ selectedCity ] = JSON.parse(localStorageValue);
			const currentWeather = await getCurrentWeather(selectedCity);

			return {
				city: selectedCity,
				weather: currentWeather
			}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (err) {
			rejectWithValue('Failed to fetch weather data');
		}
	}
)