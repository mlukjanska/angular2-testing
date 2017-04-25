//Jasmine 2.0 spysheet https://www.codeproject.com/Articles/1070642/Jasmine-Spy-Cheat-Sheet

describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  beforeEach(function() {
      jasmine.addMatchers({
        toBePlaying: function () {
          return {
            compare: function (player, song) {
              return {
                pass: player.currentlyPlayingSong === song && player.isPlaying,
                message: "Expected player to be playing " + song,
              };
            }
          };
        }
  });

  });

  describe('play(song)', function() {

    it("should update currentlyPlayingSong and playing", function() {
      player.play(song);
      expect(player.currentlyPlayingSong).toEqual(song);
      expect(player.isPlaying).toBe(true);
    });

    // demonstrates custom matcher
    it('should play the song', function() {
      player.play(song);
      expect(player).toBePlaying(song);
    });
  });

  describe('makeFavorite()', function() {
    // demonstrates use of spies to intercept and test method calls
    it("should update the song that it is a favorite (with spyOn)", function() {
        spyOn(song, 'persistFavoriteStatus'); 
        player.play(song);
        player.makeFavorite();
        expect(player.currentlyPlayingSong.persistFavoriteStatus).toHaveBeenCalledWith(true);

    });

    // same as above except with createSpyObj()
    it("should update the song that it is a favorite (with createSpyObj())", function() {
        var song = jasmine.createSpyObj('song', ['persistFavoriteStatus']); 
        player.play(song);
        player.makeFavorite();
        
        expect(player.currentlyPlayingSong.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });
  });
});
