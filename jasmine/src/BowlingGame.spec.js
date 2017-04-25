describe("BowlingGame", function() {

      var bowlinggame;

      beforeEach(function() { 
        bowlinggame = new BowlingGame(); 
      });

      it("should set correct initial values - empty rolls, current roll at 0", function() {
        expect(bowlinggame.rolls).toEqual([]);
        expect(bowlinggame.currentRoll).toEqual(0);
        //var gamescore = bowlinggame.score;
        //expect(bowlinggame.score()).toEqual(0);
      });

      it("should set correct values for next roll after initial one", function() {
        bowlinggame.roll(1);
        expect(bowlinggame.currentRoll).toEqual(1);
        expect(bowlinggame.rolls).toEqual([1]);
      });

      it("should set correct values after three rolls", function() {
        bowlinggame.roll(10);
        bowlinggame.roll(6);
        bowlinggame.roll(7);        
        expect(bowlinggame.currentRoll).toEqual(3);
        expect(bowlinggame.rolls).toEqual([10,6,7]);
      });
 
       it("should score correctly all strike rolls - for a total pro!", function() {
        //12 rolls = 10 + 2 bonus rolls at 10th frame
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        bowlinggame.roll(10);
        expect(bowlinggame.score()).toEqual(300);
      });

       it("should score correctly all gutter balls - for a total beginner!", function() {
        //20 rolls - 2x frame
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        expect(bowlinggame.score()).toEqual(0);
      });      
      
       it("should score correctly strike roll", function() {
        //1st frame
        bowlinggame.roll(10);
        //2nd frame
        bowlinggame.roll(6);
        bowlinggame.roll(7);
        
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);  

        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);        
        expect(bowlinggame.score()).toEqual(36);
      });

       it("should score correctly spare roll", function() {
        //1st frame
        bowlinggame.roll(7);
        bowlinggame.roll(3);
        //2nd frame
        bowlinggame.roll(4);
        bowlinggame.roll(2);
        
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);  

        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);        
        expect(bowlinggame.score()).toEqual(20);
      });

      
       it("should score correctly non strike and non spare frame", function() {
        //1st frame
        bowlinggame.roll(9);
        bowlinggame.roll(3);
        //2nd frame
        bowlinggame.roll(4);
        bowlinggame.roll(2);
        
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);  

        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);
        bowlinggame.roll(0);        
        expect(bowlinggame.score()).toEqual(18);
      });      
});