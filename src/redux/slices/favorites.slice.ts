import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../types/city.type';
import { addToLocalStorageThunk  } from '../thunk/addToFavorites';

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
		},
	},
	extraReducers(builder) {
		builder.addCase(addToLocalStorageThunk.fulfilled, (state, { payload }) => {
			if (payload) {
				state.push(payload)
			}
		});
	}
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;