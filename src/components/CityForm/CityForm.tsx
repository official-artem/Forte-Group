import { Input, InputGroup, InputLeftElement, InputRightElement, List, ListItem, Menu, Spinner, Text, VStack } from '@chakra-ui/react';
import { memo, useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import useCities from '../../hooks/useCities';
import useDebounce from '../../hooks/useDebounce';
import { CiSearch } from "react-icons/ci";
import { addToFavorites } from '../../redux/slices/favorites.slice';
import { City } from '../../types/city.type';
import { useAppSelector } from '../../hooks/redux';
import useLocalStorage from '../../hooks/useLocalStorage';

function CityForm() {
	const [query, setQuery] = useState('');
	const debouncedQuery = useDebounce(query, 2000);
	const { data, isLoading, error } = useCities(debouncedQuery);
	const favorites = useAppSelector(state => state.favorites);
	const dispatch = useDispatch();
	const { storedValue, addValue } = useLocalStorage('favorites' , []);
	const isCitiesNotFound = useMemo(() => debouncedQuery.length > 0 && data.length === 0, [debouncedQuery, data]);
	const isShowCitiesList = useMemo(() => query.length > 0 && data.length !== 0, [query, data]);

	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
	}, []);

	const handleCityClick = (city: City) => {
		addValue(city);
		dispatch(addToFavorites(city));
		setQuery('');
	}

	return (
		<Menu>
			<VStack spacing={4} align={"stretch"}>
				<InputGroup>
					<InputLeftElement>
						<CiSearch />
					</InputLeftElement>
					<Input
						placeholder="Search for a city"
						value={query}
						onChange={handleInputChange}
					/>
					<InputRightElement>
						{isLoading && <Spinner size="sm" /> }
					</InputRightElement>
				</InputGroup>
				{isShowCitiesList && (
					<List
						borderWidth={1}
						borderRadius={"md"}
						p={2}
						bg={"white"}
						boxShadow={"sm"}
						>
						{data.map(city => (
							<ListItem key={`${city.name}-${city.state}`} p={2} _hover={{ bg: 'gray.100' }}>
								<Text onClick={() => handleCityClick(city)} style={{ cursor: 'pointer' }}>{city.name}, {city.state}</Text>
							</ListItem>
						))}
						</List>

				)}
			</VStack>

			{isCitiesNotFound && <Text p={2} color={"red.500"}>City not found</Text>}
			{error && <Text p={2} color={"red.500"}>Something went wrong. Try again later</Text>}

		</Menu>
	)
}

export default memo(CityForm)