import axios from 'axios';
import { toast } from 'vue3-toastify';
const API_KEY = '9e41813b70682250517ee67ece784f4b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
  if (!city){
    toast.info('Por favor, ingresa una ciudad');
    return;
  }
  const response = await axios.get(`${BASE_URL}?q=${city}&limit=1&appid=${API_KEY}&units`);
  return response.data;
};

