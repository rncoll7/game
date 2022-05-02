import {gameLoop, keydown, keyup} from "./game";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
})


addEventListener('keydown', keydown)
addEventListener('keyup', keyup)

const animate = () => {
  requestAnimationFrame(animate);
  gameLoop(context, canvas.width, canvas.height);
}

animate()
