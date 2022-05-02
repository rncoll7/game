import {Player} from './player.js';

const player = new Player();

const actions = {
    right: {
        keys: [39, 68],
        pressed: false,
    },
    left: {
        keys: [37, 65],
        pressed: false,
    },
    up: {
        keys: [38, 87],
        pressed: false,
    },
    down: {
        keys: [40, 83],
        pressed: false,
    },
}

const gameLoop = (context, width, height) => {
    context.clearRect(0, 0, width, height);
    player.update(actions);
    player.draw(context);
};

const keydown = ({keyCode}) => {
    for (const action in actions) {
        if (actions[action].keys.includes(keyCode)) {
            actions[action].pressed = true;
        }
    }
};

const keyup = ({keyCode}) => {
    for (const action in actions) {
        if (actions[action].keys.includes(keyCode)) {
            actions[action].pressed = false;
        }
    }
};

export {gameLoop, keydown, keyup};