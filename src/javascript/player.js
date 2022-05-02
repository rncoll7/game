import {MarioSprite} from "./sprite/base.js";

export class Player {

  constructor() {
    this.sprite = new MarioSprite();
    this.life = 100;
    this.def = 0;
    this.aceleration = 1;
    this.maxSpeed = 5;
    this.size = 1;
    this.x_pos = 100;
    this.y_pos = 100;
    this.x_velocity = 0;
    this.y_velocity = 0;
    this.dead = false;
    this.state = "idle";
  }

  hit(damage) {
    this.life -= damage;
    if (this.life <= 0) {
      this.dead = true;
    }
  }

  move(actions) {
    if (actions.right.pressed || actions.left.pressed || actions.up.pressed || actions.down.pressed) {
      if (actions.right.pressed || actions.left.pressed) {
        if(actions.right.pressed){
          this.x_velocity = (this.x_velocity + this.aceleration) % this.maxSpeed;
          this.state = "run-right";
        } else {
          this.x_velocity = (this.x_velocity - this.aceleration) % this.maxSpeed;
          this.state = "run-left";
        }
      } else {
        this.x_velocity = 0;
      }

      if (actions.up.pressed || actions.down.pressed) {
        if(actions.up.pressed){
          this.y_velocity = (this.y_velocity - this.aceleration) % this.maxSpeed;
          this.state = "run-up";
        } else {
          this.y_velocity = (this.y_velocity + this.aceleration) % this.maxSpeed;
          this.state = "run-down";
        }
      } else {
        this.y_velocity = 0;
      }
    } else {
      this.x_velocity = 0;
      this.y_velocity = 0;
      this.state = "idle";
    }

    this.x_pos += this.x_velocity;
    this.y_pos += this.y_velocity;
  }

  update(actions) {
    if (this.dead) {
      this.x_velocity = 0;
      this.y_velocity = 0;
      this.state = "dead";
      return;
    }
    this.move(actions);

  }

  draw(context) {
    this.sprite.draw(context, this.x_pos, this.y_pos, this.size, this.state);
  }
}