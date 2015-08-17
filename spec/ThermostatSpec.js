describe('Thermostat', function(){

    beforeEach(function() {
       thermostat = new Thermostat();
     });

  var thermostat;

  describe('thermostat should show current termperature', function(){

      it('thermostat starts at 20 degrees', function(){
        expect(thermostat.temperature).toBe(20);
      });

    });

    describe('Thermostat temperature value can be modified', function(){

        it('temperature can be increased', function(){
          thermostat.increaseBy(5);
          expect(thermostat.temperature).toBe(25);
        });

        it('temperature can be decreased', function(){
          thermostat.decreaseBy(5);
          expect(thermostat.temperature).toBe(15);
        });

        it('temperature can not be below 10 degrees', function(){
          expect(thermostat.decreaseBy(11)).toBe("temperature too low")
        });

        it('temperature can not exceed 25 degrees when power saving mode is on', function(){
          thermostat.powerSavemode = true
          expect(thermostat.increaseBy(6)).toBe("temperature exceeded maximum")
        });

        it('temperature can not exceed 32 degrees when power saving mode is off', function(){
          expect(thermostat.increaseBy(13)).toBe("temperature exceeded maximum")
        });

      });

});





// describe('Javabuzz', function(){
//
//   beforeEach(function() {
//      javabuzz = new Javabuzz();
//    });
//
//   var javabuzz;
//
//   describe('knows when a number is', function(){
//
//     it('divisible by 3', function(){
//       expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
//     });
//
//   });
//
//   describe('knows when a number is NOT', function() {
//
//     it('NOT divisible by 3', function() {
//       expect(javabuzz._isDivisibleBy(1, 3)).toBe(false);
//     });
//
//   });
//
//   describe('knows when a number is', function(){
//
//     it('divisible by 5', function(){
//       expect(javabuzz._isDivisibleBy(10, 5)).toBe(true);
//     });
//
//   });
//
//   describe('knows when a number is NOT', function() {
//
//     it('NOT divisible by 5', function(){
//       expect(javabuzz._isDivisibleBy(9, 5)).toBe(false);
//     });
//
//   });
//
//   describe('knows when a number is', function(){
//
//     it('divisible by 15', function(){
//       expect(javabuzz._isDivisibleBy(30, 15)).toBe(true);
//     });
//
//   });
//
//   describe('knows when a number is NOT', function() {
//
//     it('NOT divisible by 15', function(){
//       expect(javabuzz._isDivisibleBy(18, 15)).toBe(false);
//     });
//
//   });
//
//   describe('when playing, says', function() {
//
//     it('"Java" when a number is divisible by 3', function() {
//       expect(javabuzz.says(3)).toEqual("Java");
//     });
//
//     it('"Buzz" when a number is divisible by 5', function() {
//       expect(javabuzz.says(5)).toEqual("Buzz");
//     });
//
//     it('"Javabuzz" when a number is divisible by 15', function() {
//       expect(javabuzz.says(15)).toEqual("Javabuzz");
//     });
//
//   });
//
// });
