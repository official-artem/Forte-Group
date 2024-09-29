/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import { getCities } from '../api/GET/city';
import { City } from '../types/city.type';

function useCities(value: string) {
	const [cities, setCities] = useState<City[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCities = async () => {
			setIsLoading(true);

			if (value.length === 0) {
				setCities([]);
				setIsLoading(false);
				return;
			}

			try {
				const response = await getCities(value);

				if (response.status !== 200) {
					setError(response.statusText);
				}

				setCities(response.data);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCities();
	}, [value]);

	return { data: cities, isLoading, error };
}

export default useCities;