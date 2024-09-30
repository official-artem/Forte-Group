/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { City } from '../../types/city.type';

export const addToLocalStorageThunk = createAsyncThunk(
	'favorites/addToLocalStorageThunk',
	async (city: City, { rejectWithValue }) => {
		try {
			const existFavoriteItems = localStorage.getItem('favorites');

			if (!existFavoriteItems) {
				localStorage.setItem('favorites', JSON.stringify(city));

				return city;
			}

			const favorites = JSON.parse(existFavoriteItems);

			Object.assign(favorites, city);
			localStorage.setItem('favorites', JSON.stringify(favorites));

			return city;
		} catch (error) {
			rejectWithValue('Something went wrong');
		}
	}
)