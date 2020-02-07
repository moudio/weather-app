import showWeatherDetails from './show_weather_details';

export default function getRadioValue(e) {
  if (e.target.type === 'radio') {
    const unit = e.target.value;
    const city = document.getElementById('w-location').textContent;
    showWeatherDetails(city, unit);
  }
}
