// $(document).ready(function() {
//   thermostat.temperature();
// };

// $('.increaseBy').on('click', function() {
//   thermostat.increaseBy(1);
//   thermostat.temperature();
//   });
thermostat = new Thermostat;
document.getElementsByTagName("h1")[0].innerHTML = thermostat.temperature + ' &deg;C'

function increase() {
  thermostat.increaseBy(1)
  document.getElementsByTagName("h1")[0].innerHTML = thermostat.temperature + ' &deg;C'
};