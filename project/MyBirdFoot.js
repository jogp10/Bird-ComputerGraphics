import {CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyPrism } from './MyPrism.js';
import { MyUnitCubeQuad } from './MyUnitCubeQuad.js';


export class MyBirdFoot extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initTextures();
    }

    initBuffers() {
        this.prism = new MyPrism(this.scene, 10, 4);
        this.cube1 = new MyUnitCubeQuad(this.scene);
        this.cube2 = new MyUnitCubeQuad(this.scene);
        this.cube3 = new MyUnitCubeQuad(this.scene);
        this.cube4 = new MyUnitCubeQuad(this.scene);
    }

    initTextures() {
        this.materials = [];
    }

    display() {

        this.scene.pushMatrix();
     

            this.scene.pushMatrix();
            this.scene.translate(-.15, 0, 0);
            this.scene.rotate(Math.PI/2,0,0,0);
            this.scene.scale(0.1, 1, .1);
            this.prism.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-0.1, 0, 0);
            this.scene.rotate(Math.PI/2,0,0,0);
            this.scene.scale(0.5, 0.1, 0.3);
            this.cube1.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(.2, 0, -0.12);
            this.scene.rotate(Math.PI/8,0,1,0);
            this.scene.scale(0.5, 0.1, 0.1);
            this.cube2.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(.2, 0, 0.12);
            this.scene.rotate(-Math.PI/8,0,1,0);
            this.scene.scale(0.5, 0.1, 0.1);
            this.cube3.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(.2, 0, 0);
            this.scene.rotate(Math.PI/2,0,0,0);
            this.scene.scale(0.6, 0.1, 0.1);
            this.cube4.display();
            this.scene.popMatrix();

        this.scene.popMatrix();

        
    }

    updateBuffers() {}

    enableNormalViz() {
        this.prism.enableNormalViz();
        this.cube1.enableNormalViz();
        this.cube2.enableNormalViz();
        this.cube3.enableNormalViz();
        this.cube4.enableNormalViz();
        
    }
    disableNormalViz() {
        this.prism.disableNormalViz();
        this.cube1.disableNormalViz();
        this.cube2.disableNormalViz();
        this.cube3.disableNormalViz();
        this.cube4.disableNormalViz();
    }

}
