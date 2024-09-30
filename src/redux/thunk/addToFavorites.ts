/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { City } from '../../types/city.type';

export const addToLocalStorageThunk = createAsyncThunk(
	'favorites/addToLocalStorageThunk',
	async (city: City, { rejectWithValue }) => {
		try {
			const existFavoriteItems = localStorage.getItem('favorites');

			if (!existFavoriteItems) {
				localStorage.setItem('favorites', JSON.stringify([city]));

				return city;
			}

			const favorites = JSON.parse(existFavoriteItems);

			const updatedFavorites = [...favorites, city]
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

			return city;
		} catch (error) {
			return rejectWithValue('Something went wrong');
		}
	}
)