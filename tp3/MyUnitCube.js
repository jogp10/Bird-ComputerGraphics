import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
    constructor(scene) {	
        super(scene);
        this.initBuffers();
    }

    duplicateVertices() {
        let newVertices = [ 
            -0.5, -0.5, 0.5, //0 Front left bottom
            0.5, -0.5, 0.5, //1 Front right bottom
            -0.5, 0.5, 0.5, //2 Front left top
            0.5, 0.5, 0.5, //3 Front right top
            -0.5, -0.5, -0.5, //4 Back left bottom
            0.5, -0.5, -0.5, //5 Back right bottom
            -0.5, 0.5, -0.5, //6 Back left top
            0.5, 0.5, -0.5, //7 Back right top
        ];
        this.vertices = this.vertices.concat(newVertices);
    }

    initBuffers() {
       //define 8 vertices of cube
        this.vertices = [];

        this.duplicateVertices();

        this.duplicateVertices();

        this.duplicateVertices();

        //Counter-clockwise reference of vertices
        this.indices = [
            //front
            0, 1, 2,

            3, 2, 1,
            //right
            1, 5, 3,
            7, 3, 5,
            //back
            5, 4, 7,
            6, 7, 4,
            //left
            4, 0, 6,
            2, 6, 0,
            //top
            2, 3, 6,
            7, 6, 3,
            //bottom
            4, 5, 0,
            1, 0, 5
        ];
        
        this.normals = [ 

            //Normals for X axis
            -1,0,0,
            1,0,0,
            -1,0,0,
            1,0,0,
            -1,0,0,
            1,0,0,
            -1,0,0,
            1,0,0,

            //Normals for Z axis
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1,

            //Normals for Y axis
            0,-1,0,
            0,-1,0,
            0,1,0,
            0,1,0,
            0,-1,0,
            0,-1,0,
            0,1,0,
            0,1,0

        
        ]

        this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.51); // push back to avoid z-fighting
      
        super.display();
        this.scene.popMatrix();
    }
}
