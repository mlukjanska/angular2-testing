var customMatchers = {
      toBeEmptyArray: function toBeEmptyArrayMatcher() {
      
      return {
        compare: function isEmptyComparer(array) {
          
          var result = {};
          
          result.pass = (array.length === 0);
          result.message = "Expected array to be an empty array [], but it was ["+ array + "]";
          
          return result;

        }
      };
    }
}

describe('FivesArray', function() {

  var fives;

  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
    fives = new FivesArray();
  });

  describe("create", function() {

    it('should be empty if 0 is passed', function() {
      var a = fives.create(0);
      expect(a).toBeEmptyArray();
    })

    it('should contain 1 element [5] if 1 is passed', function() {
      var a = fives.create(1);
      expect(a).toEqual([5]);
    })
  });
});
