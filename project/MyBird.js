import {CGFobject, CGFappearance} from '../lib/CGF.js';
import {MyCone} from './MyCone.js';
import {MyTriangle} from './MyTriangle.js';
import { MyUnitCubeQuad } from './MyUnitCubeQuad.js';
import { MyCylinder } from './MyCylinder.js';
import { MyPyramid } from './MyPyramid.js';
import { MyParallelogram } from './MyParallelogram.js';
import { MyPrism } from './MyPrism.js';
import { MySphere } from './MySphere.js';
import { MyWing } from './MyWing.js';

export class MyBird extends CGFobject {
    constructor(scene, nrDivs, minS, maxS, minT, maxT) {
		super(scene);
		this.initBuffers();

	}
	initBuffers() {
		
		
		this.triangle = new MyTriangle(this.scene);
		this.eye1 = new MySphere(this.scene, 10,10);
		this.eye2 = new MySphere(this.scene, 10,10);
		this.beak1 = new MyPyramid(this.scene, 4, 2, 2);
		this.beak2 = new MyPyramid(this.scene, 4, 2,2);
		this.body = new MySphere(this.scene, 10,10);
		this.wing1 = new MyWing(this.scene);
		this.wing2 = new MyWing(this.scene);


	}

	display() {

		this.scene.scale(2,2,2);
		this.scene.translate(0, 0, 0.3);

		// Bird Eyes
		this.scene.pushMatrix();
		this.scene.translate(0.15, 0.18, 0.17);
		this.scene.scale(0.05, 0.05, 0.05);

		this.eye1.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
		this.scene.translate(-0.15, 0.18, 0.17);
		this.scene.scale(0.05, 0.05, 0.05);
		this.eye2.display();
		this.scene.popMatrix();


		// Bird Beak
		this.scene.pushMatrix();
		this.scene.translate(0, 0.01, 0.24);
		this.scene.scale(0.1, 0.1, 0.12);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.beak1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.02, 0.24);
		this.scene.scale(0.1, 0.1, 0.12);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.beak2.display();
		this.scene.popMatrix();

		// Bird Body
		this.scene.pushMatrix();
		this.scene.translate(0, 0, -0.6);
		this.scene.scale(0.5, 0.5, 0.9);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.body.display();
		this.scene.popMatrix();


		// Bird Wings
		this.scene.pushMatrix();
		this.scene.translate(0.5, 0, -0.3);
		this.scene.scale(0.5, 0.5, 0.5);
		this.wing1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.5, 0, -0.3);
		this.scene.scale(0.5, 0.5, 0.5);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.wing2.display();
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


