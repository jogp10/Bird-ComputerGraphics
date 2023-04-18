import { CGFobject } from "../lib/CGF.js";
/**
 * MyPrism
 *  @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of slices
 * @param stacks - number of stacks
 */
export class MyPrism extends CGFobject {
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

    for (var i = 0; i < this.stacks; i++) {
        for (var j = 0; j < this.slices; j++) {
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different
            
            var sa = Math.sin(ang);
            var saa = Math.sin(ang + alphaAng);
            var ca = Math.cos(ang);
            var caa = Math.cos(ang + alphaAng);

            this.vertices.push(ca, i / this.stacks, -sa);
            this.vertices.push(caa, i / this.stacks, -saa);
            this.vertices.push(caa, (i + 1) / this.stacks, -saa);
            this.vertices.push(ca, (i + 1) / this.stacks, -sa);

            // triangle normal computed by cross product of two edges
            var normal = [
                saa - sa,
                0,
                caa - ca,
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
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            var k = 4 * i * this.slices;

            this.indices.push(4 * j + k, 4 * j + 1 + k, 4 * j + 2 + k);
            this.indices.push(4 * j + k, 4 * j + 2 + k, 4 * j + 3 + k);

            //this.indices.push(4 * j + k, 4 * j + 2 + k, 4 * j + 1 + k);
            //this.indices.push(4 * j + k, 4 * j + 3 + k, 4 * j + 2 + k);


            ang += alphaAng;
        }
    }


    //The defined indices (and corresponding vertices)
    //will be read in groups of three to draw triangles
    this.primitiveType = this.scene.gl.TRIANGLES;

    this.initGLBuffers();
  }

  updateBuffers() {}
}
