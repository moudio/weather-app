import './style.scss';
import 'bootstrap';
import printApp from './print_app';
import getRadioValue from './get_radio_value';
import showWeatherDetails from './show_weather_details';

printApp();
showWeatherDetails();

document.querySelector('.radios').addEventListener('click', getRadioValue);
