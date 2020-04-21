import Weather from './weather';
import UI from './ui';
import showError from './show_error';

export default function printWeather(location = 'Dakar', unit = 'celcius') {
  const ui = new UI();
  const weather = new Weather(location);
  let weatherData;
  if (unit === 'celcius') {
    weatherData = weather.getWeatherCelcius();
  } else {
    weatherData = weather.getWeatherFahrenheit();
  }

  weatherData
    .then(result => {
      ui.paint(result, unit);
    })
    .catch(() => {
      showError('Please enter a valid city');
      printWeather();
    });
}
