import showWeatherDetails from './show_weather_details';

function changeWeather(e) {
  e.preventDefault();
  const city = document.getElementById('city');
  showWeatherDetails(city.value);
  document.querySelector('.close-modal').click();
  city.value = '';
}

export default function addModalEvent() {
  const weatherChangeForm = document.getElementById('w-form');
  const changeWetaherButton = document.getElementById('w-change-btn');
  weatherChangeForm.addEventListener('submit', changeWeather);
  changeWetaherButton.addEventListener('click', changeWeather);
}
