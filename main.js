import GameOfLife from './game-of-life.js';
const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 495,
    height:495 
  },
  scene: GameOfLife,
};
const game = new Phaser.Game(config);
