export default class Weather {
  constructor(city) {
    this.apiKey = '72b63d4c4e119568962d73e61d8a4714';
    this.city = city;
  }

  async getWeatherCelcius() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`);
    const data = await response.json();
    return data;
  }

  async getWeatherFahrenheit() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.apiKey}`);
    const data = await response.json();
    return data;
  }
}
