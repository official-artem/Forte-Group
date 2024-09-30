const saveWeatherToCache = (key: string, data: unknown) => {
	localStorage.setItem(key, JSON.stringify(data));
};

export default saveWeatherToCache;