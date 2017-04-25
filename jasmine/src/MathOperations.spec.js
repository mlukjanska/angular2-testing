var customMatchersMath = {
      toBeSquare: function toBeSquareMatcher() {
      
      return {
        compare: function isSquareComparer(Actual, Expected) {
          
          var result = {};
          
          result.pass = (Actual === Expected*Expected);
          result.message = "Expected " + Expected*Expected + ", but it was "+ Actual;
          
          return result;

        }
      };
    }
}

describe('MathOperations', function() {

  var mathops;

  beforeEach(function() {
    jasmine.addMatchers(customMatchersMath);
    mathops = new MathOperations();
  });

  describe("square", function() {

    it('should be 9 if 3 is passed', function() {
      var a = mathops.square(3);
      expect(a).toBeSquare(3);
    })
  });
});
