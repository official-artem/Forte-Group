import { Box, Heading } from '@chakra-ui/react';
import { memo } from 'react';
import CityForm from '../../components/CityForm/CityForm';

function Home() {
  return (
		<Box p={8}>
			<Heading textAlign={'center'}>Weather App</Heading>

			<CityForm />
		</Box>
	)
}

export default memo(Home)
