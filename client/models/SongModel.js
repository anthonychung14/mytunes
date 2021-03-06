// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    //set current song to this
    //app.get('songQueue').push(this)
    this.trigger('enqueue', this);
  },
  ended: function() {
    this.trigger('ended', this);
  },

  remove: function() {
    this.trigger('removeFromQueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
    this.trigger('ended', this);
  }
});
