import randomArray2D from './random-array-2d.js';
import changeArray2D from './change-array-2d.js';
console.log('Phaser Version:', Phaser.VERSION);
class Example extends Phaser.Scene {
  constructor() {
    super('Example');
    this.ARRAY_SIZE = 100;
    this.RECTANGLE_SIZE = 5;
    this.array2D = randomArray2D(this.ARRAY_SIZE);
  }
  update() {
    console.log("FPS:", this.game.loop.actualFps);
    this.array2D = changeArray2D(this.array2D);
    this.drawLife();
    this.scene.restart();
  }
  drawLife() {
    for (let i = 0; i < this.ARRAY_SIZE; i++) {
      for (let j = 0; j < this.ARRAY_SIZE; j++) {
        if (this.array2D[i][j] == 1) {
          this.add.rectangle(this.RECTANGLE_SIZE * i, this.RECTANGLE_SIZE * j,
            this.RECTANGLE_SIZE - 1, this.RECTANGLE_SIZE - 1, 0xffffff);
        }
      }
    }
  }
}
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: Example,
};
const game = new Phaser.Game(config);
