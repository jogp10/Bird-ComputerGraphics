import {CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
import { MyTriangle } from './MyTriangle.js';

export class MyBirdWing extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        
    }

    initBuffers() {

        this.quad = new MyQuad(this.scene);
        this.triangle = new MyTriangle(this.scene);
        
    }

    create_materials() {
        this.materials = [];

         }

    display() {

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.8,0.4,0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.6,-0.21,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.scale(0.3,0.2,0.3);
        this.triangle.display();
        this.scene.popMatrix();
    }

    updateBuffers() {}

    enableNormalViz() {
        
        this.quad.enableNormalViz();
        this.triangle.enableNormalViz();
        
    }
    disableNormalViz() {
        this.quad.disableNormalViz();
        this.triangle.disableNormalViz();

    }

}
