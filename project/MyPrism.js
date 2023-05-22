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
    // Counter-clockwise reference of vertices
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var ang = 0;
    var alphaAng = (2 * Math.PI) / this.slices;

    // Generate side faces
    for (var i = 0; i < this.stacks; i++) {
        for (var j = 0; j < this.slices; j++) {
            // Generate vertices
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

            ang += alphaAng;
        }
    }

    // Generate top face vertices
    for (var i = 0; i < this.slices; i++) {
        var ang = i * alphaAng;
        var ca = Math.cos(ang);
        var sa = Math.sin(ang);
        this.vertices.push(ca, 1, -sa);
        this.normals.push(0, 1, 0);

    }

    // Generate bottom face vertices
    for (var i = 0; i < this.slices; i++) {
        var ang = i * alphaAng;
        var ca = Math.cos(ang);
        var sa = Math.sin(ang);
        this.vertices.push(ca, 0, -sa);
        this.normals.push(0, -1, 0);


    }

    // Generate indices for top face
    var topStartIndex = (this.stacks * this.slices * 4);
    for (var i = 0; i < this.slices - 2; i++) {
        this.indices.push(topStartIndex, topStartIndex + i + 1, topStartIndex + i + 2);
      }


    // Generate indices for bottom face
    var bottomStartIndex = (this.stacks * this.slices * 4) + this.slices;
    for (var i = 0; i < this.slices - 2; i++) {

        this.indices.push(bottomStartIndex, bottomStartIndex + i + 2, bottomStartIndex + i + 1);
      }

    // Generate texture coordinates for side faces
    for (var i = 0; i < this.stacks; i++) {
      for (var j = 0; j < this.slices; j++) {
        this.texCoords.push(j / this.slices, i / this.stacks);
        this.texCoords.push((j + 1) / this.slices, i / this.stacks);
        this.texCoords.push((j + 1) / this.slices, (i + 1) / this.stacks);
        this.texCoords.push(j / this.slices, (i + 1) / this.stacks);
      }
    }

    // Generate texture coordinates for top face
    for (var i = 0; i < this.slices; i++) {
      var ang = i * alphaAng;
      var ca = Math.cos(ang);
      var sa = Math.sin(ang);
      this.texCoords.push(0.5 + 0.5 * ca, 0.5 + 0.5 * sa);
    }

    // Generate texture coordinates for bottom face
    for (var i = 0; i < this.slices; i++) {
      var ang = i * alphaAng;
      var ca = Math.cos(ang);
      var sa = Math.sin(ang);
      this.texCoords.push(0.5 + 0.5 * ca, 0.5 - 0.5 * sa);
    }



    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }


  updateBuffers() {}
}
