
var loadState = {
  preload: function() {
    // Add a loading label on the screen
    var loadingLabel = game.add.text(80, 150, 'loading...',
                                     {font: '30px Courier', fill: '#ffffff'});
    // Load all assets
    game.load.image('player', 'assets/player.png');
    game.load.image('win', 'assets/win.png');
    game.load.image('sky','assets/sky.png');
  	game.load.image('ground','assets/platform.png');
  	game.load.image('star','assets/star.png');
  	game.load.spritesheet('dude','assets/dude.png', 32, 48);
  },

  create: function() {
    // call the menu state
    game.state.start('menu');
  }
};
