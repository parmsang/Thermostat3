describe('Thermostat', function(){

    beforeEach(function() {
       thermostat = new Thermostat();
     });

  var thermostat;

  describe('thermostat should show current temperature', function(){

      it('thermostat starts at 20 degrees', function(){
        expect(thermostat.temperature).toBe(20);
      });

      it('and by default is on power saving mode', function() {
        expect(thermostat.powerSavemode).toBe(true);
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

        it('and be reset to default', function() {
          thermostat.increaseBy(5)
          thermostat.resetTemp()
          expect(thermostat.temperature).toBe(20)
        });

      });

});
