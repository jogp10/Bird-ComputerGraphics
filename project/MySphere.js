import { CGFobject } from "../lib/CGF.js";
/**
 * MyPrism
 *  @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of slices
 * @param stacks - number of stacks
 */
export class MySphere extends CGFobject {
  constructor(scene, slices, stacks) {
    super(scene);
    this.slices = slices;
    this.stacks = stacks;
    this.initBuffers();
  }

  initBuffers() {
    //Counter-clockwise reference of vertices
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var ang = 0;
    var alphaAng = (2 * Math.PI) / this.slices;
    var radius = 0;
    var alphaRadius = Math.PI / this.stacks;

    for (var i = 0; i < this.stacks * 2; i++) {
        var sr = Math.sin(radius);
        var cr = Math.cos(radius);

        var k = i * this.slices;


        for (var j = 0; j < this.slices; j++) {
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different            
            var sa = Math.sin(ang);
            var ca = Math.cos(ang);
            var x = ca * sr;
            var y = cr;
            var z = -sa * sr;

            this.vertices.push(x, y, z);

            // texture Coords, west to east, south to north, latitude and longitude
            var texCoordX = j / (this.slices-1); // longitude
            var texCoordY = i / (this.stacks-1); // latitude
            this.texCoords.push(texCoordX, texCoordY);


            // triangle normal computed by cross product of two edges
            var normal = [
                x,
                y,
                z
            ];
            
            // normalization
            var nsize = Math.sqrt(
                normal[0] * normal[0] +
                normal[1] * normal[1] +
                normal[2] * normal[2]
            );
            normal[0] /= nsize;
            normal[1] /= nsize;
            normal[2] /= nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);

            if(i == this.stacks*2 - 1) continue;
            
            var current = i * this.slices + j;
            var next = current + this.slices;
            var current_next = (current + 1) % (this.slices) + k;
            var next_next = (next + 1) % (this.slices) + k + this.slices;

            this.indices.push(current, next_next, current_next);
            this.indices.push(current, next, next_next);

            ang += alphaAng;
        }
        radius += alphaRadius;
    }


    //The defined indices (and corresponding vertices)
    //will be read in groups of three to draw triangles
    this.primitiveType = this.scene.gl.TRIANGLES;

    this.initGLBuffers();
  }

  setFillMode() { 
		this.primitiveType=this.scene.gl.TRIANGLE_STRIP;
	}

	setLineMode() 
	{ 
		this.primitiveType=this.scene.gl.LINES;
	};

  updateBuffers() {}
}
