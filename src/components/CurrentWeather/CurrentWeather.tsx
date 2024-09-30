import { Box, Text } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/redux';
import { memo } from 'react';

function CurrentWeather() {
	const { weather, city } = useAppSelector(state => state.selectedCity);

	return (
		<Box p={4}>
			<Text fontWeight={"bold"} fontSize={'xx-large'}>{city?.name}</Text>
			<Text fontSize={20}>Temperature: {weather?.main.temp}</Text>
			<Text fontSize={20}>Humidity: {weather?.main.humidity}</Text>
			<Text fontSize={20}>Temperature: {weather?.wind.speed}</Text>
		</Box>
	)
}

export default memo(CurrentWeather)