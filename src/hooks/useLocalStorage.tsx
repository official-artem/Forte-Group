import { useState } from 'react';
import { City } from '../types/city.type';


const useLocalStorage = (key: string, initialValue: City[]) => {
	const [storedValue, setStoredValue] = useState(() => {

	try {
		const items = localStorage.getItem(key);
		return items ? JSON.parse(items) : initialValue;
	} catch (e) {
		console.error('Error reading localStorage', e);
		return initialValue;
	}});

	const addValue = (value: City) => {
		try {
			const isExist = storedValue.some((item: City) => item.name === value.name);

			if (!isExist) {
				setStoredValue([value]);
				localStorage.setItem(key, JSON.stringify([value]));
			}
		} catch (error) {
			console.error('Error saving localStorage', error);
		}
	};

	const removeValue = (value: City) => {
		try {
			const updatedValue = storedValue.filter((city: City) => city.name !== value.name);
			setStoredValue(updatedValue);
			localStorage.setItem(key, JSON.stringify(updatedValue));
		} catch (error) {
			console.error('Error removing localStorage', error);
		}
	}

	return [ storedValue, addValue, removeValue ] as const;
}

export default useLocalStorage;