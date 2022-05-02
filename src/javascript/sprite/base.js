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
                    { x: 1, y:   1, w: width, h: height, d: 1000 },
                ]
            },
            {
                name: 'run-down',
                frames: [
                    { x:  72, y:  1, w: width, h: height, d: 150 },
                    { x: 143, y:  1, w: width, h: height, d: 150 },
                    { x: 214, y:  1, w: width, h: height, d: 150 },
                    { x: 285, y:  1, w: width, h: height, d: 150 },
                ]
            },
            {
                name: 'run-up',
                frames: [
                    { x:  72, y:  87, w: width, h: height, d: 150 },
                    { x: 143, y:  87, w: width, h: height, d: 150 },
                    { x: 214, y:  87, w: width, h: height, d: 150 },
                    { x: 285, y:  87, w: width, h: height, d: 150 },
                ]
            },
            {
                name: 'run-left',
                frames: [
                    { x:  72, y: 173, w: width, h: height, d: 150 },
                    { x: 143, y: 173, w: width, h: height, d: 150 },
                    { x: 214, y: 173, w: width, h: height, d: 150 },
                    { x: 285, y: 173, w: width, h: height, d: 150 },
                ]
            },
            {
                name: 'run-right',
                frames: [
                    { x:  72, y: 259, w: width, h: height, d: 150 },
                    { x: 143, y: 259, w: width, h: height, d: 150 },
                    { x: 214, y: 259, w: width, h: height, d: 150 },
                    { x: 285, y: 259, w: width, h: height, d: 150 },
                ]
            }
        ], width, height);
    }

}