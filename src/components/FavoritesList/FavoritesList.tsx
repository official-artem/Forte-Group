import { MenuItem, MenuList } from '@chakra-ui/react';
import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { City } from '../../types/city.type';
import { selectCity } from '../../redux/slices/selectedCity.slice';
import { fetchWeather } from '../../redux/thunk/getWeather';
import useLocalStorage from '../../hooks/useLocalStorage';

function FavoritesList() {
	const favorites = useAppSelector(state => state.favorites);
	const [, addSelectedCity] = useLocalStorage('selectedCity', []);
	const dispatch = useAppDispatch();

	const handleClick = (city: City) => {
		dispatch(selectCity(city));
		addSelectedCity(city);
		dispatch(fetchWeather());
	}

	return (
		<MenuList>
			{favorites.map(city => (
				<MenuItem onClick={() => handleClick(city)} key={`${city.name}-${city.lon}`}>{city.name}</MenuItem>
			))}
		</MenuList>
	)
}

export default memo(FavoritesList)