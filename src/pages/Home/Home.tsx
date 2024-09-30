import { Box, Heading } from '@chakra-ui/react';
import { memo } from 'react';
import CityForm from '../../components/CityForm/CityForm';
import { Header } from '../../components/Header/Header';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import { useAppSelector } from '../../hooks/redux';
import WeekForecast from '../../components/WeekForecast/WeekForecast';

function Home() {
	const { weather } = useAppSelector(state => state.selectedCity);

  return (
		<>
			<Header />
			
			<Box p={8}>
				<Heading mb={8} textAlign={'center'}>Weather App</Heading>

				<CityForm />

				{weather && <CurrentWeather />}
				
				{weather && <WeekForecast />}
			</Box>
		</>
	)
}

export default memo(Home)
