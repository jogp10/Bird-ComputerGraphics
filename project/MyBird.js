import {CGFobject, CGFappearance} from '../lib/CGF.js';
import {MyCone} from './MyCone.js';

export class MyBird extends CGFobject {
    constructor(scene, orientation, speed, position) {
        super(scene);
        this.initBuffers();

        this.initialPosition = position;
        this.position = position;
        this.orientation = orientation;
        this.speed = speed;
    }

    initBuffers() {
        this.cone = new MyCone(this.scene, 10, 10);
    }

    display() {
        this.scene.translate(this.position[0], this.position[1], this.position[2]);

        // Bird Head
        this.scene.pushMatrix();
        this.cone.display();
        this.scene.popMatrix();
    }

    updateBuffers(complexity) {
        this.cone.updateBuffers(complexity);
    }

    enableNormalViz() {
        this.cone.enableNormalViz();
    }
    
    disableNormalViz() {
        this.cone.disableNormalViz();
    }

    update(t) {
        // Calculate the new position of the bird
        this.position = [this.position[0] + Math.cos(this.orientation)*(this.speed), this.position[1], this.position[2] + Math.sin(this.orientation)*(this.speed)];

        console.log("pos: " + this.position + " ori: " + this.orientation + " speed: " + this.speed);
    }

    turn(v) {
        this.orientation = this.orientation + v;
    }

    accelerate(v) {
        this.speed = this.speed + v * this.scene.speedFactor;
        if(this.speed < 0) this.speed = 0;
    }

    reset() {
        this.position = this.initialPosition;
        this.orientation = 0;
        this.speed = 0;
    }
}
