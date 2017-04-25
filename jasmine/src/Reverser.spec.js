describe("Reverser", function() {

      var reverser;

      beforeEach(function() { 
        reverser = new Reverser(); 
      });

      it("should return correct one character string - nothing to reverse, e.g, 0 for 0", function() {
        var reversed = reverser.reverseNumber(0);
        expect(reversed).toEqual('0');
      });
 
      it("should return correct same characters string  - nothing to reverse, e.g, 333 for 333", function() {
        var reversed = reverser.reverseNumber(333);
        expect(reversed).toEqual('333');
      });
      
      it("should return correct reversed not same characters string, e.g, 123 for 321", function() {
        var reversed = reverser.reverseNumber(123);
        expect(reversed).toEqual('321');
      });

      it("should return correct reversed non numeric string, e.g, '12.3' for 3.21", function() {
        var reversed = reverser.reverseNumber('12.3');
        expect(reversed).toEqual('3.21');
      });      

      it("should return correct reversed non numeric string, e.g, '5-' for -5", function() {
        var reversed = reverser.reverseNumber('5-');
        expect(reversed).toEqual('-5');
      }); 

});