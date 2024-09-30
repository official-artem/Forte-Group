import { Box, Text } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/redux';
import { memo } from 'react';

function CurrentWeather() {
	const { weather, city } = useAppSelector(state => state.selectedCity);

	return (
		<Box p={4}>
			<Text fontWeight={"bold"} fontSize={'xx-large'}>{city?.name}</Text>
			<Text fontSize={20}>Temperature: {Math.ceil(+weather!.main.temp)}&deg;</Text>
			<Text fontSize={20}>Humidity: {Math.ceil(weather!.main.humidity)}</Text>
			<Text fontSize={20}>Wind: {Math.ceil(weather!.wind.speed)}</Text>
		</Box>
	)
}

export default memo(CurrentWeather)