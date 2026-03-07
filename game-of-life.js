import randomArray2D from './random-array-2d.js';
import changeArray2D from './change-array-2d.js';
export default class GameOfLife extends Phaser.Scene {
  constructor() {
    super('GameOfLife');
    this.ARRAY_SIZE = 100;
    this.RECTANGLE_SIZE = 10;
    this.array2D = randomArray2D(this.ARRAY_SIZE);
  }
  create () {
    this.input.on('pointerdown', () => {
      this.array2D = randomArray2D(this.ARRAY_SIZE);
    });
  }
  update() {
    console.log("FPS:", this.game.loop.actualFps);
    this.drawRectangle();
    this.array2D = changeArray2D(this.array2D);
    this.scene.restart();
  }
  drawRectangle() {
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
