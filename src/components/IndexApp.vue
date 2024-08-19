<template>
  <div class="container">
    <div class="row">
      <h1>El tiempo by Erick</h1>
      <p>Busca la temperatura de tu ciudad</p>
      <div class="col-4 offset-4 d-flex justify-content-between">
        <input id="city"
         v-model="city" required placeholder="Escribe el nombre de la ciudad" class="form-control rounded" />
        <button @click="fetchWeather" class="btn btn-success">Buscar</button>
      </div>
    </div>
  </div>
  <!-- Lista de ciudades buscadas -->
      <div class="col-4 offset-4 mt-4">
        <h3>Ciudades buscadas:</h3>
        <ul class="list-group">
          <li 
            v-for="(searchedCity, index) in searchedCities" 
            :key="index" 
            class="list-group-item d-flex justify-content-between align-items-center" 
            style="cursor: pointer;"
          >
             <span @click="searchAgain(searchedCity)">
              {{ searchedCity }}
            </span>
            <button @click.stop="removeCity(index)" class="btn btn-danger btn-sm">Eliminar</button>
         
          </li>
        </ul>
      </div>
  <WeatherCard v-if="weatherData" :weather="weatherData" />
   
</template>

<script>
import { getWeather } from '../store/index.js';
import WeatherCard from './WeatherCard.vue';
export default {
  data() {
    return {
      city: '',
      weatherData: null,
      searchedCities: [],
    };
  },
  methods: {
    async fetchWeather() {
      this.weatherData = await getWeather(this.city);
      if (this.weatherData && !this.searchedCities.includes(this.city)) {
        this.searchedCities.push(this.city);
      }
      this.city = '';
      document.getElementById('city').focus();
      console.log(this.weatherData);
    },
    searchAgain(searchedCity) {
      this.city = searchedCity;
      this.fetchWeather();
    },
    removeCity(index) {
      this.searchedCities.splice(index, 1);
    },
  },
  components: {
    WeatherCard,
  },
};
</script>
