import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../types/city.type';
import { addToLocalStorageThunk  } from '../thunk/addToFavorites';
import { loadState, saveState } from '../../utils/localStorage.utils';

const favoritesSlice = createSlice({
	name: "favorites",
	initialState: loadState('favorites') || [] as City[],
	reducers: {
		addToFavorites: (state, { payload }: PayloadAction<City>) => {
			if (!state.some((city: City) => city.name === payload.name)) {
				state.push(payload);
				console.log(payload)
				saveState('favorites', state);
			}
		},

		removeFromFavorites: (state, { payload }: PayloadAction<City>) => {
			const newState = state.filter((city: City) => city.name !== payload.name);
			saveState('favorites', newState);
			return newState;
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