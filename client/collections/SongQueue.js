// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.dequeue();
      if (this.length > 0) {
        this.playFirst();
      }
    });
    
    this.on('removeFromQueue', function(song) {
      this.remove(song);
    });


  },


  playFirst: function() {
    var song = this.at(0)
    song.play()
  },

  dequeue: function(){
    this.shift();
  }
});