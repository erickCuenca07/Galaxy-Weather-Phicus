<template>
  <div class="weather-card">
    <h2>Tiempo en:</h2>
    <h1>{{ weather.name }} {{ weather.sys.country }}</h1>
    
    <div class="main-info">
      <div class="temperature-line">
        <img :src="weatherIcon" alt="Weather Icon" class="weather-icon" />
        <div class="temperature-details">
          <p class="temperature">{{ weather.main.temp }}°C</p>
          <p class="temp-range">
            <span><i class="fa-solid fa-temperature-arrow-down"></i>{{ weather.main.temp_min }}°C</span> 
            <span><i class="fa-solid fa-temperature-arrow-up"></i> {{ weather.main.temp_max }}°C</span>
          </p>
        </div>
      </div>
        <h3>{{ weather.weather[0].description }}</h3>
    </div>

    <div class="additional-info">
      <p><strong>Pressure:</strong> {{ weather.main.pressure }} hPa</p>
      <p><strong>Humidity:</strong> {{ weather.main.humidity }}%</p>
      <p><strong>Visibility:</strong> {{ visibilityInKm }} m</p>
      <p><strong>Wind:</strong> {{ weather.wind.speed }} m/s - {{ weather.wind.deg }}° <i class="fa-solid fa-wind"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
  computed: {
    weatherIcon() {
      return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`;
    },
    visibilityInKm() {
      return (this.weather.visibility / 1000).toFixed(1);
    },
  },
};
</script>

<style scoped>
.weather-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 350px;
  margin: 0 auto;
  text-align: left;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 36px;
  margin: 0;
  margin-bottom: 10px;
}

h2 {
  font-size: 18px;
  margin: 0;
  color: gray;
  margin-bottom: 20px;
}

h3 {
  font-size: 16px;
  margin-top: 10px;
  color: gray;
}

.main-info {
  margin-bottom: 20px;
}

.temperature-line {
  display: flex;
  align-items: center;
}

.weather-icon {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}

.temperature-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.temperature {
  font-size: 48px;
  margin: 0;
  font-weight: 300;
}

.temp-range {
  font-size: 16px;
  color: gray;
}

.temp-range span {
  margin-right: 10px;
}

.additional-info p {
  margin: 8px 0;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

.additional-info p:last-child {
  border-bottom: none;
}
</style>
