import './style.scss'
import 'bootstrap';
import printApp from './print_app'; 
import Weather from './weather'; 
import UI from './ui'
import getRadioValue from './get_radio_value'
printApp();

const ui = new UI();
const weather = new Weather('Dakar'); 
 const weatherData = weather.getWeatherCelcius().then(result => {
console.log('result', result)
  ui.paint(result);

 })


const tempUnit = getRadioValue();


