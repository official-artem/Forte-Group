import { Box, Heading } from '@chakra-ui/react';
import { memo, useEffect } from 'react';
import CityForm from '../../components/CityForm/CityForm';
import { Header } from '../../components/Header/Header';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchWeather } from '../../redux/thunk/getWeather';

function Home() {
	const dispatch = useAppDispatch();
	const { weather } = useAppSelector(state => state.selectedCity);

	useEffect(() => {
		dispatch(fetchWeather());
	}, [dispatch]);

  return (
		<>
			<Header />
			
			<Box p={8}>
				<Heading mb={8} textAlign={'center'}>Weather App</Heading>

				<CityForm />

				{weather && <CurrentWeather />}
			</Box>
		</>
	)
}

export default memo(Home)
