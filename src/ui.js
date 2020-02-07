export default class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.country = document.getElementById('country');
    this.temperature = document.getElementById('w-temperature');
    this.description = document.getElementById('w-description');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(data, unit) {
    let temperatureUnit; let
      windSpeedUnit;
    if (unit === 'celcius') {
      temperatureUnit = '°C';
      windSpeedUnit = 'meter/sec';
    } else {
      temperatureUnit = '°F';
      windSpeedUnit = 'miles/hour';
    }
    this.country.textContent = data.sys.country;
    this.location.textContent = data.name;
    this.temperature.textContent = `${Math.round(data.main.temp)} ${temperatureUnit}`;
    this.description.textContent = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;
    this.icon.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    this.feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)} ${temperatureUnit} `;
    this.humidity.textContent = `Humidity: ${data.main.humidity}%`;
    this.wind.textContent = `Wind speed: ${data.wind.speed} ${windSpeedUnit} `;
  }
}
