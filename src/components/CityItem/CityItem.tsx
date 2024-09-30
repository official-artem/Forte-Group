import { memo } from 'react';
import { City } from '../../types/city.type';
import { ListItem, Text } from '@chakra-ui/react';
import { selectCity } from '../../redux/slices/selectedCity.slice';
import useLocalStorage from '../../hooks/useLocalStorage';
import { addToFavorites } from '../../redux/slices/favorites.slice';
import { useAppDispatch } from '../../hooks/redux';
import { fetchWeather } from '../../redux/thunk/getWeather';
import { addToLocalStorageThunk } from '../../redux/thunk/addToFavorites';


interface Props {
	city: City
	setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function CityItem({ city, setQuery }: Readonly<Props>) {
	const dispatch = useAppDispatch();
	const [, addSelectedCity] = useLocalStorage('selectedCity', []);

	const handleCityClick = (city: City) => {
		dispatch(selectCity(city));
		addSelectedCity(city);
		setQuery('');
		dispatch(fetchWeather());
		dispatch(addToLocalStorageThunk(city))
	}

	return (
		<ListItem  p={2} _hover={{ bg: 'gray.100' }}>
			<Text onClick={() => handleCityClick(city)} style={{ cursor: 'pointer' }}>{city.name}, {city.state}</Text>
		</ListItem>
	)
}

export default memo(CityItem);