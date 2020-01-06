export default class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.temperature = document.getElementById('w-temperature');
        this.description = document.getElementById('w-description');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
  }

paint(data, unit) {
    let temperature_unit, wind_speed_unit;
    if(unit === "celcius"){
        temperature_unit = '°C';
        wind_speed_unit = 'meter/sec'
    } else {
        temperature_unit = '°F'; 
        wind_speed_unit = 'miles/hour'
    }
    this.location.textContent =  data.name;
    this.temperature.textContent = `${Math.round(data.main.temp)} ${temperature_unit}`;
    this.description.textContent = data.weather[0].description;
    const weather_icon = data.weather[0].icon;
    this.icon.src = `http://openweathermap.org/img/wn/${weather_icon}@2x.png`;
    this.feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)} ${temperature_unit} `;
    this.humidity.textContent = `Humidity: ${data.main.humidity}%`; 
    this.wind.textContent = `Wind speed: ${data.wind.speed} ${wind_speed_unit} `;
}
}