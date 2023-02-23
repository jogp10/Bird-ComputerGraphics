import {CGFobject} from '../lib/CGF.js';

export class MyQuad extends CGFobject {
    constructor(scene) {
		super(scene);
		this.initBuffers();
	}

    initBuffers() {
        //square in (0,0,0)
        this.vertices = [
            -0.5, -0.5, 0,	//0
            0.5, -0.5, 0,	//1
            -0.5, 0.5, 0,	//2
            0.5, 0.5, 0		//3
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2,
            3, 2, 1
        ];
    }
}