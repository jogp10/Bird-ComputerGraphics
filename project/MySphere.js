import { CGFobject } from "../lib/CGF.js";
/**
 * MyPrism
 *  @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of slices
 * @param stacks - number of stacks
 */
export class MySphere extends CGFobject {
  constructor(scene, slices, stacks, inverted) {
    super(scene);
    this.slices = slices;
    this.stacks = stacks;
    
    if (inverted) this.inverted = -1;
    else this.inverted = 1;

    this.initBuffers();
  }

  initBuffers() {
    //Counter-clockwise reference of vertices
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var wide = this.slices;
    var height = this.stacks*2;

    var ang = 0;
    var alphaAng = (2 * Math.PI) / wide;
    var radius = 0;
    var tetaRadius = Math.PI / height;

    for (var i = 0; i < height + 1; i++) {
        var sr = Math.sin(radius);
        var cr = Math.cos(radius);

        var k = i * (wide + 1);
        ang = 0;

        for (var j = 0; j < wide + 1; j++) {
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different            
            var sa = Math.sin(ang);
            var ca = Math.cos(ang);
            var x = sr * ca;
            var y = -cr;
            var z = sr * sa;

            this.vertices.push(x, y, z);

            // texture Coords, west to east, south to north, latitude and longitude
            var texCoordX = 1 - j / wide; // longitude
            var texCoordY = 1 - i / height; // latitude
            this.texCoords.push(texCoordX, texCoordY);


            // triangle normal computed by cross product of two edges
            var normal = [
                this.inverted * x,
                this.inverted * y,
                this.inverted * z
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

            ang += alphaAng;

            if(i == height || j == wide) continue;

            var current = i * (wide + 1) + j;
            var next = current + (wide + 1);
            var current_next = (current + 1) % (wide + 1) + k;
            var next_next = (next + 1) % (wide + 1) + k + (wide + 1);

            if (this.inverted == 1) {
                this.indices.push(current, next_next, current_next);
                this.indices.push(current, next, next_next);
            } else if(this.inverted == -1) {
                this.indices.push(current, current_next, next_next);
                this.indices.push(current, next_next, next);
            }
        }
        radius += tetaRadius;
    }


    //The defined indices (and corresponding vertices)
    //will be read in groups of three to draw triangles
    this.primitiveType = this.scene.gl.TRIANGLES;

    this.initGLBuffers();
  }

  updateBuffers(objectComplexity) {
    this.slices = Math.round(100 * objectComplexity);
    this.stacks = Math.round(100 * objectComplexity);

    this.initBuffers();
    this.initNormalVizBuffers();
  }
}
