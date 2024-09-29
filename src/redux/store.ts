import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favorites.slice';

const reducers = combineReducers({
	favorites: favoritesReducer,
});

export const store = configureStore({
	reducer: reducers,
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;