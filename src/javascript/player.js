import {MarioSprite} from "./sprite/base.js";

export class Player {

  constructor() {
    this.sprite = new MarioSprite();
    this.life = 100;
    this.def = 0;
    this.speed = 10;
    this.size = 1;
    this.x_pos = 0;
    this.y_pos = 0;
    this.dead = false;
    this.state = "run"; // idle, walk
  }

  hit(damage) {
    this.life -= damage;
    if (this.life <= 0) {
      this.dead = true;
    }
  }

  update() {
    this.x_pos += this.speed;
  }

  draw(context) {
    this.sprite.draw(context, this.x_pos, this.y_pos, this.size, this.state);
  }

}