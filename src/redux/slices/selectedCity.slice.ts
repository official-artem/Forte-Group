import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City } from '../../types/city.type';
import { WeatherResponse } from '../../types/weather.type';
import { fetchWeather } from '../thunk/fetchWeather';
import { InitialCityState } from '../../types/selectedCity.type';
import { loadState, saveState } from '../../utils/localStorage.utils';

const initialState: InitialCityState = {
	city: null,
	weather: null,
};

export const selectedCitySlice = createSlice({
	name: "selectedCity",
	initialState:(loadState('selectedCity') ?? initialState) as InitialCityState,
	reducers: {
		selectCity: (state, { payload }: PayloadAction<City>) => {
			state.city = payload;
			saveState('selectedCity', state);
		},
		setWeather: (state, { payload }: PayloadAction<WeatherResponse>) => {
			state.weather = payload;
			saveState('selectedCity', state);
		}
	},
	extraReducers(builder) {
		builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
					state.city = payload.city;
					state.weather = payload.weather;

					saveState('selectedCity', state);

		});
		builder.addCase(fetchWeather.rejected, (state) => {
			state.weather = null;
			state.city = null;
			
			saveState('selectedCity', state);
		});
	},
})

export const { selectCity } = selectedCitySlice.actions;

export default selectedCitySlice.reducer;