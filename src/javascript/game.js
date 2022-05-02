import {Player} from './player.js';

const player = new Player();

const gameLoop = (context, width, height) => {
    context.clearRect(0, 0, width, height);
    player.draw(context);
};

export {gameLoop};