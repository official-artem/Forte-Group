import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favorites.slice';
import selectedCityReducer from './slices/selectedCity.slice';

const reducers = combineReducers({
	favorites: favoritesReducer,
	selectedCity: selectedCityReducer
});

export const store = configureStore({
	reducer: reducers,
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;