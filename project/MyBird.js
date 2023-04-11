import {CGFobject, CGFappearance} from '../lib/CGF.js';
import {MyCone} from './MyCone.js';

export class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.cone = new MyCone(this.scene, 10, 10);
    }

    display() {

        // Bird Head
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(0.5, 0.5, 0.5);
        this.cone.display();
        this.scene.popMatrix();

    }
}
