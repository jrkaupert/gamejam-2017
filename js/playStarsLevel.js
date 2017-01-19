var player;
var platforms;
var cursors;

var scoreText;


var starsLevelState = {



    create: function() {

        this.score = 0;

        //background for the game
        game.add.sprite(0, 0, 'sky');

        scoreText = game.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#000'
        });

        // The platforms group contains the ground and the 2 ledges we jump on
        platforms = game.add.group();

        // Enable physics for any object in the platforms group
        platforms.enableBody = true;

        // create the ground
        var ground = platforms.create(0, game.world.height - 64, 'ground');

        // Scale the ground to fit the width of the game (original sprite = 400x32)
        ground.scale.setTo(2, 2);

        // Make the ground immovable when you jump on it
        ground.body.immovable = true;

        // create two ledges
        var ledge = platforms.create(400, 400, 'ground');
        ledge.body.immovable = true;

        ledge = platforms.create(-150, 250, 'ground');
        ledge.body.immovable = true;

        // the player and its settings
        player = game.add.sprite(32, game.world.height - 150, 'dude');

        // enable physics for the player
        game.physics.arcade.enable(player)

        // player physics properties, let him bounce!
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

        // Our two animations, walking left and right
        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);

        cursors = game.input.keyboard.createCursorKeys();

        stars = game.add.group();

        stars.enableBody = true;

        // create 12 evenly spaced apart:
        for (var i = 0; i < 12; i++) {
            var star = stars.create(i * 70, 0, 'star')

            star.body.gravity.y = 6;

            // add a little random bounce
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }
    },

    collectStar: function(player, star) {
        // remove star from screen
        star.kill();

        //update score
        this.score += 10;
        scoreText.text = 'Score: ' + this.score;
				console.log(this.score);
    },

    update: function() {

        // Collide the player and stars with the platforms
        var hitPlatform = game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(stars, platforms);
        game.physics.arcade.overlap(player, stars, this.collectStar, null, this);

        // reset player's velocity
        player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            //move to the left
            player.body.velocity.x = -150;
            player.animations.play('left');
        } else if (cursors.right.isDown) {
            //move to the right
            player.body.velocity.x = 150;
            player.animations.play('right');
        } else {
            // stand still
            player.animations.stop();
            player.frame = 4;
        }

        // Allow the player to jump if they are touching the ground
        if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
            player.body.velocity.y = -350;
        }

        // move on to the box level if they get all the stars
				if (this.score >= 120) {
					game.state.start('playBoxLevel')
				}
    },


}
