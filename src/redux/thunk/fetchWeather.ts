import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../../api/GET/currentWeather';
import { loadState } from '../../utils/localStorage.utils';
import { InitialCityState } from '../../types/selectedCity.type';

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async (_, { rejectWithValue }) => {
		try {
			const selectedCity = loadState('selectedCity') as InitialCityState;

			if (!selectedCity.city) {
				return {
					city: null,
					weather: null
				};
			}

			const currentWeather = await getCurrentWeather(selectedCity.city);


			return {
				city: selectedCity.city,
				weather: currentWeather
			};

		} catch (err) {
			return rejectWithValue('Failed to fetch weather data: ' + (err instanceof Error ? err.message : 'Unknown error'));
		}
	}
)