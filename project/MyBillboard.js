import { CGFappearance, CGFobject, CGFtexture } from "../lib/CGF.js";
import { MyQuad } from "./MyQuad.js";

/**
 * MyPanorama
 * @constructor
 * @param scene - Reference to MyScene object
 * @param texture - Path to the texture
 * @param slices - number of slices
 * @param stacks - number of stacks
 */
export class MyBillboard extends CGFobject {
    constructor(scene, position) {
        super(scene);
        this.position = position;
        this.initBuffers();
        this.initTextures();
    }

    initBuffers() {
        this.quad = new MyQuad(this.scene);
    }

    initTextures() {
        this.texture = new CGFtexture(this.scene, "images/billboardtree.png");
        this.material = new CGFappearance(this.scene);
        this.material.setTexture(this.texture);
    }

    display() {
        this.calculateOrientation();
        this.scene.pushMatrix();
            this.scene.rotate(Math.PI, 0, 1, 0);
            this.scene.translate(this.position[0], this.position[1], this.position[2]);
            this.material.apply();
            this.scene.scale(2,5,2);
            this.quad.display();
        this.scene.popMatrix();
    }

    calculateOrientation() {
        // Always facing the camera
        var camera = [this.scene.camera.position[0] - this.scene.camera.target[0], this.scene.camera.position[1] - this.scene.camera.target[1], this.scene.camera.position[2] - this.scene.camera.target[2]];
        vec3.normalize(camera, camera);
        
        var normal = [this.quad.normals[0], this.quad.normals[1], this.quad.normals[2]];
        vec3.normalize(normal, normal);
        
        // Calculate the angle between the vectors
        var ang = Math.acos(vec3.dot(camera, normal));

        // Calculate the cross product
        var cross = [];
        vec3.cross(cross, camera, normal);
        vec3.normalize(cross, cross);

        // Rotate the object
        this.scene.rotate(-ang, 0, cross[1], 0);
    }

    updateBuffers(objectComplexity) {
        this.quad.updateBuffers(objectComplexity);
    }

    enableNormalViz() {
        this.quad.enableNormalViz();
    }

    disableNormalViz() {
        this.quad.disableNormalViz();
    }
}