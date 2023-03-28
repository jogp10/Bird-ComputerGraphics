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

    var ang = 0;
    var alphaAng = (2 * Math.PI) / this.slices;
    var radius = 0;
    var alphaRadius = Math.PI / this.stacks;

    for (var i = 0; i < this.stacks * 2; i++) {
        var sr = Math.sin(radius);
        var cr = Math.cos(radius);

        ang = 0;

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

            var k = 2 * i * this.slices;
            var current = i * this.slices + j;
            var next = current + this.slices;

            this.indices.push(current + 1, current, next);
            this.indices.push(current + 1, next, next + 1);

            ang += alphaAng;
        }
        radius += alphaRadius;
    }


    //The defined indices (and corresponding vertices)
    //will be read in groups of three to draw triangles
    this.primitiveType = this.scene.gl.TRIANGLES;

    this.initGLBuffers();
  }

  updateBuffers() {}
}
