import {CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyPrism } from './MyPrism.js';

export class MyBirdFeather extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        
    }

    initBuffers() {
        this.prism = new MyPrism(this.scene, 4, 4);
        this.prism2 = new MyPrism(this.scene, 3, 4);
    
    }

    create_materials() {
        this.materials = [];

         }
        
    display() {
        this.scene.pushMatrix();
            this.scene.pushMatrix();
                this.scene.translate(0, 0, 0);
                this.scene.rotate(Math.PI/2,1,0,0);
                this.scene.rotate(Math.PI/4,0,1,0);
                this.scene.scale(0.1, .5, .1);
                this.prism.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.scene.translate(0, -.07, -.09);
                this.scene.rotate(Math.PI/2,0,1,0);
                this.scene.scale(0.2, .14, .085);
                this.prism2.display();
            this.scene.popMatrix();
        this.scene.popMatrix();
    }

    updateBuffers() {}

    enableNormalViz() {

    }

    disableNormalViz() {
            
        }

}