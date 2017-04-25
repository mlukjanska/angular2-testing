describe("Joiner", function() {
    describe("join", function() {
      var joiner;

      beforeEach(function() { 
        joiner = new Joiner(); 
      });

      it("should join an array with a custom separator", function() {
        var joined = joiner.join([1,2], '-');
        expect(joined).toEqual('1-2');
      });

      it("should join with a comma if no separator is provided", function() {
        var joined = joiner.join([3,4]);
        expect(joined).toEqual('3,4');
      });

      it("should work with an empty string separator", function() {
        var joined = joiner.join([3,11], '');
        expect(joined).toEqual('311');
      });      

      it("should work with non numeric values", function() {
        var joined = joiner.join(['zz','yyy'], 'x');
        expect(joined).toEqual('zzxyyy');
      }); 
      
      it('should error when not passed an array', function() {
        expect(function() { joiner.join({}, ',') }).toThrow();
      });
    
      it("should return an empty string if array is empty", function() {
        var joined = joiner.join([]);
        expect(joined).toEqual('');
      });
      
    });
});