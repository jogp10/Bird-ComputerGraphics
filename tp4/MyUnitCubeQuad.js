import {CGFobject} from '../lib/CGF.js';
import {MyQuad} from './MyQuad.js';

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {	
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.front = new MyQuad(this.scene);
        this.back = new MyQuad(this.scene);
        this.left = new MyQuad(this.scene);
        this.right = new MyQuad(this.scene);
        this.top = new MyQuad(this.scene);
        this.bottom = new MyQuad(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        //this.scene.scale(10, 10, 10);
        //this.scene.translate(0, 0, -0.505); // push back to avoid z-fighting
        this.scene.setDiffuse(0.5,0.5,0.5,1);

        // Front square
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.front.display();
        this.scene.popMatrix();

        // Back square
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.back.display();
        this.scene.popMatrix();
    
        // Left square
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.left.display();
        this.scene.popMatrix();

        // Right square
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.right.display();
        this.scene.popMatrix();

        // Top square
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.top.display();
        this.scene.popMatrix();

        // Bottom square
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.bottom.display();
        this.scene.popMatrix();
        
        this.scene.popMatrix();
    }

    updateBuffers() {}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}
