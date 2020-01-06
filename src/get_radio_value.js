export default function getRadioValue() {
  const radios= document.getElementsByName("unit");
  for (var i = 0, length = radios.length; i < length; i++) {
   if (radios[i].checked) {
     return radios[i].value;
   }
 }

}


