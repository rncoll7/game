class Sprite {

    constructor(file, animations, width, height) {
        this.file = file;
        this.loaded = false;
        this.width = width;
        this.height = height;

        this.time = new Date().getTime();

        this.animations = {};
        for (const animation of animations) {
            let time = 0;
            this.animations[animation.name] = {frames: []};
            for (const frame of animation.frames) {
                this.animations[animation.name].frames.push({
                    x: frame.x,
                    y: frame.y,
                    w: frame.w,
                    h: frame.h,
                    t: (time += frame.d)
                });
            }
            this.animations[animation.name].time = time;
        }
    }

    getWidth() {
        return this.animations.width;
    }

    getHeight() {
        return this.animations.height;
    }

    load(){
        this.image = new Image();
        this.image.src = this.file;
        this.loaded = true;
    }

    draw(context, x, y, s, state){

        if(!this.loaded){
            this.load();
        }
        if(state != null){
            this.state = state;
        }

        const animation = this.animations[this.state];
        if(!animation){
            throw new Error(`Animation ${this.state} not found`);
        }

        const frames = animation.frames;
        const maxTime = animation.time;

        const time = (new Date().getTime() - this.time) % maxTime;
        const frame = frames.find(frame => { return frame.t > time; });

        context.drawImage(this.image, frame.x, frame.y, frame.w, frame.h, x, y, this.width * s, this.height * s);

    }

}

export {Sprite};