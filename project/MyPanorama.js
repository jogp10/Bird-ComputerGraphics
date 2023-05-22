import { CGFappearance, CGFobject, CGFtexture } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";

/**
 * MyPanorama
 * @constructor
 * @param scene - Reference to MyScene object
 * @param texture - Path to the texture
 * @param slices - number of slices
 * @param stacks - number of stacks
 */
export class MyPanorama extends CGFobject {
    constructor(scene, texture, slices, stacks) {
        super(scene);
        this.initBuffers(slices, stacks);
        this.initTextures(texture);
    }

    initBuffers(slices, stacks) {
        this.sphere = new MySphere(this.scene, slices, stacks, true);
    }

    initTextures(texture) {
        this.texture = new CGFtexture(this.scene, texture);
        this.material = new CGFappearance(this.scene);
        this.material.setTexture(this.texture);
        this.material.setEmission(0.5, 0.5, 0.5, 1);
    }

    display() {
        this.scene.pushMatrix();
            this.scene.translate(this.scene.camera.position[0], this.scene.camera.position[1], this.scene.camera.position[2]);
            this.scene.translate(0, 50, 0);
            this.scene.scale(300,300,300);
            this.material.apply();
            this.sphere.display();
        this.scene.popMatrix();
    }

    updateBuffers(objectComplexity) {
        this.sphere.updateBuffers(objectComplexity);
    }

    enableNormalViz() {
        this.sphere.enableNormalViz();
    }

    disableNormalViz() {
        this.sphere.disableNormalViz();
    }
}