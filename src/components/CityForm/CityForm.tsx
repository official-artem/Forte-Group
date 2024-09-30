import { Input, InputGroup, InputLeftElement, InputRightElement, List, Menu, Spinner, Text, VStack } from '@chakra-ui/react';
import { memo, useCallback, useMemo, useState } from 'react';
import useCities from '../../hooks/useCities';
import useDebounce from '../../hooks/useDebounce';
import { CiSearch } from "react-icons/ci";
import CityItem from '../CityItem/CityItem';

function CityForm() {
	const [query, setQuery] = useState('');
	const debouncedQuery = useDebounce(query, 2000);
	const { data, isLoading, error } = useCities(debouncedQuery);
	const isCitiesNotFound = useMemo(() => debouncedQuery.length > 0 && data.length === 0, [debouncedQuery, data]);
	const isShowCitiesList = useMemo(() => query.length > 0 && data.length !== 0, [query, data]);

	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
	}, []);

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
							<CityItem 
								key={crypto.randomUUID()} 
								setQuery={setQuery} 
								city={city }
							/>
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