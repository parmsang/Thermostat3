var Thermostat = function(){
  this.temperature = 20;
  this.powerSavemode = true
};

Thermostat.prototype.increaseBy = function (number) {
  if (this.powerSavemode) {
    if ((this.temperature + number) > 25) {
      return "temperature exceeded maximum";
    } else {
      return this.temperature = this.temperature + number;
    }
  } else {
    if ((this.temperature + number) > 32) {
      return "temperature exceeded maximum";
    } else {
      return this.temperature = this.temperature + number;
    }
  }
};

Thermostat.prototype.decreaseBy = function (number) {

  if ((this.temperature - number) < 10) {
    return "temperature too low";
  } else {
    return this.temperature = this.temperature - number;
  }
};

Thermostat.prototype.resetTemp = function() {
  return this.temperature = 20;
};

Thermostat.prototype.psmswitch = function() {
  if (this.powerSavemode) {
    this.powerSavemode = false;
  } else {
    this.powerSavemode = true;
  }
};
