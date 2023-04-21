import {CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyUnitCubeQuad } from './MyUnitCubeQuad.js';


export class MyBirdFoot extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        
    }

    initBuffers() {

        this.quad = new MyUnitCubeQuad(this.scene);
    }

    create_materials() {
        this.materials = [];

         }

    display() {

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        

        
    }

    updateBuffers() {}

    enableNormalViz() {
        
       
        
    }
    disableNormalViz() {
       

    }

}
