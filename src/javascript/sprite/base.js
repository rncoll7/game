import {Sprite} from "./sprite.js";
import image from '../../images/base.png'

export class MarioSprite extends Sprite {
    constructor() {
        const width = 70;
        const height = 85;
        super(image, [
            {
                name: 'idle',
                frames: [
                    { x: 0, y: 170, w: width, h: height, d: 1000 },
                ]
            },
            {
                name: 'walk',
                frames: [
                    { x:  70, y: 0, w: width, h: height, d: 300 },
                    { x:   0, y: 0, w: width, h: height, d: 200 },
                    { x: 140, y: 0, w: width, h: height, d: 300 },
                    { x:   0, y: 0, w: width, h: height, d: 200 },
                ]
            },
            {
                name: 'run',
                frames: [
                    { x: 210, y: 0, w: width, h: height, d: 150 },
                    { x: 280, y: 0, w: width, h: height, d: 150 },
                    { x: 350, y: 0, w: width, h: height, d: 150 },
                    { x: 420, y: 0, w: width, h: height, d: 150 },
                ]
            }
        ], width, height);
    }

}