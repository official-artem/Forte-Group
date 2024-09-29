import { Box, Heading } from '@chakra-ui/react';
import { memo } from 'react';
import CityForm from '../../components/CityForm/CityForm';
import { Header } from '../../components/Header/Header';

function Home() {
  return (
		<>
			<Header />
			
			<Box p={8}>
				<Heading mb={8} textAlign={'center'}>Weather App</Heading>

				<CityForm />
			</Box>
		</>
	)
}

export default memo(Home)
