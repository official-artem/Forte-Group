import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../types/city.type';

const favoritesSlice = createSlice({
	name: "favorites",
	initialState: [] as City[],
	reducers: {
		addToFavorites: (state, { payload  }: PayloadAction<City>) => {
			const isExist = state.some(city => city.name === payload.name);

			if (isExist) {
				return;
			}

			state.push(payload);
		},

		removeFromFavorites: (state, { payload }: PayloadAction<City>) => {
			return state.filter(city => city.name !== payload.name);
		}
	}
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;