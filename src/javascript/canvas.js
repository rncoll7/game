import {gameLoop} from "./game";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
})

const animate = () => {
  requestAnimationFrame(animate);
  gameLoop(context, canvas.width, canvas.height);
}

animate()
