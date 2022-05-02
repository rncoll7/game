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
                    { x: 0, y:   0, w: width, h: height, d: 1000 },
                ]
            },
            {
                name: 'run-down',
                frames: [
                    { x:  70, y:  0, w: width, h: height, d: 150 },
                    { x: 140, y:  0, w: width, h: height, d: 150 },
                    { x: 210, y:  0, w: width, h: height, d: 150 },
                    { x: 280, y:  0, w: width, h: height, d: 150 },
                ]
            },
            {
                name: 'run-up',
                frames: [
                    { x:  70, y:  85, w: width, h: height, d: 150 },
                    { x: 140, y:  85, w: width, h: height, d: 150 },
                    { x: 210, y:  85, w: width, h: height, d: 150 },
                    { x: 280, y:  85, w: width, h: height, d: 150 },
                ]
            },
            {
                name: 'run-left',
                frames: [
                    { x:  70, y: 170, w: width, h: height, d: 150 },
                    { x: 140, y: 170, w: width, h: height, d: 150 },
                    { x: 210, y: 170, w: width, h: height, d: 150 },
                    { x: 280, y: 170, w: width, h: height, d: 150 },
                ]
            },
            {
                name: 'run-right',
                frames: [
                    { x:  70, y: 255, w: width, h: height, d: 150 },
                    { x: 140, y: 255, w: width, h: height, d: 150 },
                    { x: 210, y: 255, w: width, h: height, d: 150 },
                    { x: 280, y: 255, w: width, h: height, d: 150 },
                ]
            }
        ], width, height);
    }

}