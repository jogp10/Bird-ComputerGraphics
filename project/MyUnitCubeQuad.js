import {CGFobject, CGFtexture} from '../lib/CGF.js';
import {MyQuad} from './MyQuad.js';

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {

    constructor(scene, texture_top, texture_front, texture_right, texture_back, texture_left, texture_bottom) {	
        super(scene);
        this.initBuffers();
  
        this.initTextures(texture_top, texture_front, texture_right, texture_back, texture_left, texture_bottom);
    }

    initTextures(texture_top, texture_front, texture_right, texture_back, texture_left, texture_bottom) {
        this.texture_top = new CGFtexture(this.scene, texture_top) || new CGFtexture(this.scene, 'images/default.png');
        this.texture_front = new CGFtexture(this.scene, texture_front) || new CGFtexture(this.scene, 'images/default.png');
        this.texture_right = new CGFtexture(this.scene, texture_right) || new CGFtexture(this.scene, 'images/default.png');
        this.texture_back = new CGFtexture(this.scene, texture_back) || new CGFtexture(this.scene, 'images/default.png');
        this.texture_left = new CGFtexture(this.scene, texture_left) || new CGFtexture(this.scene, 'images/default.png');
        this.texture_bottom = new CGFtexture(this.scene, texture_bottom) || new CGFtexture(this.scene, 'images/default.png');
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
        this.texture_front.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
       
        this.front.display();
        this.scene.popMatrix();

        // Back square
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.texture_back.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.back.display();
        this.scene.popMatrix();
    
        // Left square
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.texture_left.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.left.display();
        this.scene.popMatrix();

        // Right square
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.texture_right.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.right.display();
        this.scene.popMatrix();

        // Top square
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.texture_top.bind();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.top.display();
        this.scene.popMatrix();

        // Bottom square
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.texture_bottom.bind();
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
