import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City } from '../../types/city.type';
import { WeatherResponse } from '../../types/weather.type';
import { fetchWeather } from '../thunk/getWeather';

interface SelectedCityState {
	weather: WeatherResponse | null,
	city: City | null
}

const initialState: SelectedCityState = {
	city: null,
	weather: null,
};

export const selectedCitySlice = createSlice({
	name: "selectedCity",
	initialState,
	reducers: {
		selectCity: (state, { payload }: PayloadAction<City>) => {
			state.city = payload;
		},
		setWeather: (state, { payload }: PayloadAction<WeatherResponse>) => {
			state.weather = payload;
		}
	},
	extraReducers(builder) {
		builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
				if (payload) {
					state.weather = payload.weather;
					state.city = payload.city
				}
		});
		builder.addCase(fetchWeather.rejected, (state) => {
			state.weather = null;
			state.city = null;
		});
	},
})

export const { selectCity } = selectedCitySlice.actions;

export default selectedCitySlice.reducer;