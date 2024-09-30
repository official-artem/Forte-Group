import { ListItem, Text } from '@chakra-ui/react';
import { memo, useCallback } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { addToFavorites } from '../../redux/slices/favorites.slice';
import { selectCity } from '../../redux/slices/selectedCity.slice';
import { fetchWeather } from '../../redux/thunk/fetchWeather';
import { City } from '../../types/city.type';


interface Props {
	city: City
	setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function CityItem({ city, setQuery }: Readonly<Props>) {
	const dispatch = useAppDispatch();

	const handleCityClick = useCallback(() => {
		dispatch(selectCity(city));
		dispatch(fetchWeather());
		dispatch(addToFavorites(city));
		setQuery('');

	}, [city, dispatch, setQuery]);

	return (
		<ListItem  p={2} _hover={{ bg: 'gray.100' }}>
			<Text onClick={handleCityClick} style={{ cursor: 'pointer' }}>{city.name}, {city.state}</Text>
		</ListItem>
	)
}

export default memo(CityItem);