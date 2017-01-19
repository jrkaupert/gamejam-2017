var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('playStarsLevel',starsLevelState);
game.state.add('playBoxLevel', boxLevelState);
game.state.add('win', winState);

// After all states added, start by calling boot state
game.state.start('boot');
