import { Input, List, ListItem, Menu, Text, VStack } from '@chakra-ui/react';
import { memo, useState } from 'react';

const fakeNames = [
	'John Doe',
	'Jane Smith',
	'Alice Johnson',
	'Bob Williams',
	'Emma Brown',
	'Michael Davis',
	'Olivia Wilson',
	'James Taylor',
];

function CityForm() {
	const [query, setQuery] = useState('');
	const [searchResults, setSearchResults] = useState<string[]>([]);

	const handleSearch = (value: string) => {
		console.log('Searching for:', value);
		setTimeout(() => {
			const filteredNames = fakeNames.filter((name) =>
				name.toLowerCase().includes(value.toLowerCase())
			);
			setSearchResults(filteredNames);
		}, 300);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);

		if (value.length > 0) {
			handleSearch(value);
		} else {
			setSearchResults([]);
		}
	};

	return (
		<Menu>
			<VStack spacing={4} align={"stretch"}>
				<Input 
					placeholder="Search for a city"
					value={query}
					onChange={handleInputChange}
				/>
				{searchResults.length > 0 && (
					<List
						borderWidth={1}
						borderRadius={"md"}
						p={2}
						bg={"white"}
						boxShadow={"sm"}
						>
						{searchResults.map((name, index) => (
							<ListItem key={index} p={2} _hover={{ bg: 'gray.100' }}>
								<Text style={{ cursor: 'pointer' }}>{name}</Text>
							</ListItem>
						))}
						</List>
				)}
			</VStack>
		</Menu>
	)
}

export default memo(CityForm)