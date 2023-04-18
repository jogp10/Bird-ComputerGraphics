import {CGFobject, CGFtexture} from '../lib/CGF.js';
import {MyPlane} from './MyPlane.js';

export class MyWing extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        
    }

    initBuffers() {

        this.plane = new MyPlane(this.scene, 20);
        
    }

    create_materials() {
        this.materials = [];

         }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.plane.display();
        this.scene.popMatrix();
        
    }

    updateBuffers() {}

    enableNormalViz() {
        
    }
    disableNormalViz() {
    }

}
