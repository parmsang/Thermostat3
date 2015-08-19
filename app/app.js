// $(document).ready(function() {
//   thermostat.temperature();
// };

// $('.increaseBy').on('click', function() {
//   thermostat.increaseBy(1);
//   thermostat.temperature();
//   });
thermostat = new Thermostat;
function value() {
  document.getElementsByTagName("h1")[0].innerHTML = thermostat.temperature + ' &deg;C'
  document.getElementsByTagName("h1")[0].style.color = colour()
};
value()
document.getElementsByTagName("h1")[0].style.color = colour()
function increase() {
  thermostat.increaseBy(1)
  value()
};
function decrease() {
  thermostat.decreaseBy(1)
  value()
};
function reset() {
  thermostat.resetTemp()
  value()
};
function psm() {
  thermostat.psmswitch()
};
function colour() {
  if (thermostat.temperature < 18) {
    return "green";
  } else if (thermostat.temperature < 25) {
    return "orange";
  } else {
    return "red";
  };
};