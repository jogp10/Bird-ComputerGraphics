import {CGFobject, CGFappearance} from '../lib/CGF.js';
import {MyCone} from './MyCone.js';
import {MyTriangle} from './MyTriangle.js';
import { MyUnitCubeQuad } from './MyUnitCubeQuad.js';
import { MyCylinder } from './MyCylinder.js';
import { MyPyramid } from './MyPyramid.js';
import { MyParallelogram } from './MyParallelogram.js';
import { MyPrism } from './MyPrism.js';
import { MySphere } from './MySphere.js';

export class MyBird extends CGFobject {
    constructor(scene, nrDivs, minS, maxS, minT, maxT) {
		super(scene);
		this.initBuffers();

	}
	initBuffers() {
		
		
		this.triangle = new MyTriangle(this.scene);
		this.eye1 = new MyUnitCubeQuad(this.scene);
		this.eye2 = new MyUnitCubeQuad(this.scene);
	
		this.beak1 = new MyPyramid(this.scene, 4, 2, 2);
		this.beak2 = new MyPyramid(this.scene, 4, 2,2);
		this.body = new MySphere(this.scene, 10,10);


	}

	display() {

	

		// Bird Eyes
		this.scene.pushMatrix();
		this.scene.translate(0.2, 0.2, 0.1);
		this.scene.scale(0.1, 0.1, 0.1);
		this.scene.rotate(Math.PI/6, 0, 1, 0);
		this.scene.rotate(-Math.PI/6, 1, 0, 0)
		this.eye1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.2, 0.2, 0.1);
		this.scene.scale(0.1, 0.1, 0.1);
		this.scene.rotate(-Math.PI/6, 0, 1, 0);
		this.scene.rotate(-Math.PI/6, 1, 0, 0)
		this.eye2.display();
		this.scene.popMatrix();


		// Bird Beak
		this.scene.pushMatrix();
		this.scene.translate(0, 0.02, 0.24);
		this.scene.scale(0.1, 0.1, 0.2);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.beak1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.02, 0.24);
		this.scene.scale(0.1, 0.1, 0.2);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.beak2.display();
		this.scene.popMatrix();

		// Bird Body
		this.scene.pushMatrix();
		this.scene.translate(0, 0, -0.7);
		this.scene.scale(0.5, 0.5, 1);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.body.display();
		this.scene.popMatrix();






		


	}


	updateBuffers() {}

    updateTexCoords() {
        this.updateTexCoordsGLBuffers();
    }

    enableNormalViz() {
       
		this.triangle.enableNormalViz();
		this.eye1.enableNormalViz();
		this.eye2.enableNormalViz();
		this.body.enableNormalViz();
		this.beak1.enableNormalViz();
		this.beak2.enableNormalViz();
		

    }
	disableNormalViz() {
		this.triangle.disableNormalViz();
		this.eye1.disableNormalViz();
		this.eye2.disableNormalViz();
		this.body.disableNormalViz();
		this.beak1.disableNormalViz();
		this.beak2.disableNormalViz();
		
	}

	updateBuffers() {
		
		
	  }
}


