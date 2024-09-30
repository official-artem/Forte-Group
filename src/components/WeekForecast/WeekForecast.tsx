import { memo, useEffect, useState } from 'react';
import getWeekForecast from '../../api/GET/weekForecast';
import { useAppSelector } from '../../hooks/redux';
import { Box, Text } from '@chakra-ui/react';
import { WeatherResponse } from '../../types/weather.type';

function WeekForecast() {
	const { city } = useAppSelector(state => state.selectedCity);
	const [days, setDays] = useState<WeatherResponse[]>([])

	useEffect(() => {
		const getData = async () => {
			const response = await getWeekForecast(city!)

			setDays(response.list)
		}

		getData()
	}, [city])

	return (
		<Box justifyContent={'space-around'} gap={10} flexWrap={'wrap'} display={'flex'}>
			{days.map((city, i) => (
				<Box
					key={city.id}
					display={'flex'} 
					flexDirection={'column'} 
					justifyContent={'space-around'} 
					p={2} minW={150} 
					minH={150} 
					bg={'gray.100'} 
					rounded={'xl'}
				>
					<Text fontStyle={'italic'}>Temperature: {days[i].main.temp}</Text>
					<Text fontStyle={'italic'}>Humidity: {days[i].main.humidity}</Text>
					<Text fontStyle={'italic'}>Wind: {days[i].wind.speed}</Text>
				</Box>
			))}
		</Box>
	)
}

export default memo(WeekForecast);