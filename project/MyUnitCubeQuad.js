import {CGFobject, CGFtexture} from '../lib/CGF.js';
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
  
        this.initTextures();
    }

    initTextures() {
     
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
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
       
        this.front.display();
        this.scene.popMatrix();

        // Back square
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.back.display();
        this.scene.popMatrix();
    
        // Left square
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.left.display();
        this.scene.popMatrix();

        // Right square
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.right.display();
        this.scene.popMatrix();

        // Top square
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.top.display();
        this.scene.popMatrix();

        // Bottom square
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.bottom.display();
        this.scene.popMatrix();
        
        this.scene.popMatrix();
    }

    updateBuffers() {

      
    }

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

    enableNormalViz() {
        this.front.enableNormalViz();
        this.back.enableNormalViz();
        this.left.enableNormalViz();
        this.right.enableNormalViz();
        this.top.enableNormalViz();
        this.bottom.enableNormalViz();
    }

    disableNormalViz() {
        this.front.disableNormalViz();
        this.back.disableNormalViz();
        this.left.disableNormalViz();
        this.right.disableNormalViz();
        this.top.disableNormalViz();
        this.bottom.disableNormalViz();
    }
}
