var Thermostat = function(){
  this.temperature = 20;
  this.powerSavemode = false
};

Thermostat.prototype.increaseBy = function (number) {
  if (this.powerSavemode == true) {
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


// Javabuzz.prototype._isDivisibleBy = function (number, divisor) {
//   return (number % divisor === 0);
//
// };
//
// Javabuzz.prototype.isDivisibleByThree = function(number) {
//   return this._isDivisibleBy(number, 3);
//
// };
//
// Javabuzz.prototype.isDivisibleByFive = function(number) {
//   return this._isDivisibleBy(number, 5);
//
// };
//
// Javabuzz.prototype.isDivisibleByFifteen = function(number) {
//   return this._isDivisibleBy(number, 15);
//
// };
//
// Javabuzz.prototype.says = function(number) {
//   if (this.isDivisibleByFifteen(number)) {
//       return "Javabuzz";
//     }
//     if (this.isDivisibleByThree(number)) {
//       return "Java";
//     }
//     if (this.isDivisibleByFive(number)) {
//        return "Buzz";
//     }
//     return number;
  // };
