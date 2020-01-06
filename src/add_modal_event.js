import showWeatherDetails from './show_weather_details'
export default function addModalEvent() {
  const weatherChangeForm = document.getElementById("w-form");
  const changeWetaherButton = document.getElementById('w-change-btn')
  weatherChangeForm.addEventListener("submit", changeWeather);
 changeWetaherButton.addEventListener('click', changeWeather)
}

function changeWeather(e) {
    e.preventDefault(); 
    let city = document.getElementById("city");
    showWeatherDetails(city.value);
    document.querySelector('.close-modal').click();
    city.value = '';
}

