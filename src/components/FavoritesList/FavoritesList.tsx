import { MenuItem, MenuList } from '@chakra-ui/react';
import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectCity } from '../../redux/slices/selectedCity.slice';
import { fetchWeather } from '../../redux/thunk/fetchWeather';
import { City } from '../../types/city.type';

function FavoritesList() {
	const favorites = useAppSelector(state => state.favorites);
	const dispatch = useAppDispatch();

	const handleClick = (city: City) => {
		dispatch(selectCity(city));
		dispatch(fetchWeather());
	}

	return (
		<MenuList>
			{favorites.map((city: City) => (
				<MenuItem 
					onClick={() => handleClick(city)} 
					key={crypto.randomUUID()}
				>
					{city.name}
				</MenuItem>
			))}
		</MenuList>
	)
}

export default memo(FavoritesList)