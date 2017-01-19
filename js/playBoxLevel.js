var cursors;
var boxLevelState = {
  create: function() {
    cursors = game.input.keyboard.createCursorKeys();
    this.keyboard = game.input.keyboard;

    // create the player sprite and enable physics
    this.player = game.add.sprite(16, 16, 'player');
    game.physics.enable(this.player, Phaser.Physics.ARCADE);

    // create the win sprite and enable physics
    this.win = game.add.sprite(256, 256, 'win');
    game.physics.enable(this.win, Phaser.Physics.ARCADE);
  },

  update: function() {
    //When the player sprite and win sprite overlap, the Win function is called
    game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

    //movement for the player along x axis
    if (cursors.left.isDown) {
      this.player.body.velocity.x = -175;
    }
    else if (cursors.right.isDown) {
      this.player.body.velocity.x = 175;
    }
    else {
      this.player.body.velocity.x = 0;
    }

    // movement for the player along y axis
    if (cursors.up.isDown) {
      this.player.body.velocity.y = -175;
    }
    else if (cursors.down.isDown) {
      this.player.body.velocity.y = 175;
    }
    else {
      this.player.body.velocity.y = 0;
    }
  },

  Win: function() {
    game.state.start('win');
  }
};
