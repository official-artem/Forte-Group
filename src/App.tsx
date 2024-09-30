import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './hooks/redux';
import Home from './pages/Home/Home';
import { fetchWeather } from './redux/thunk/fetchWeather';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <BrowserRouter basename='/forte-group/'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
