thermostat = new Thermostat;
$(document).ready(function() {
  $('h1').text(thermostat.temperature);
  $('increasebutton').click(function() {
      thermostat.increaseBy(1);
      $('h1').text(thermostat.temperature);
  });
  $('decreasebutton').click(function() {
    thermostat.decreaseBy(1);
    $('h1').text(thermostat.temperature);
  });
  $('resetbutton').click(function() {
    thermostat.resetTemp();
    $('h1').text(thermostat.temperature);
  });
  $('PSMbutton').click(function() {
    thermostat.psmswitch();
  });
});
