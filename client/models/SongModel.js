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
  add: function() {
    this.trigger('add', this);
  }
});
