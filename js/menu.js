var menuState = {

  create: function() {
    var nameLabel = game.add.text(80, 80, 'GameJam 2017 Game',
                                  {font: '50px Arial', fill: '#ffffff'});

    var startLabel = game.add.text(80, game.world.height - 80,
                                   'press the "W" key to start',
                                    {font: '25px Arial', fill: '#ffffff'});

    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    // Call the start function when 'w' is pressed
    wkey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('playStarsLevel');
  }
};
