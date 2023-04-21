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

        this.texture = new CGFtexture(this.scene, texture);

        this.sphere = new MySphere(this.scene, slices, stacks, true);

        this.material = new CGFappearance(this.scene);
        this.material.setTexture(this.texture);
        this.material.setEmission(0.5, 0.5, 0.5, 1);

        this.initBuffers();
    }

    initBuffers() {}

    display() {
        this.scene.pushMatrix();

        this.material.apply();
        
        this.scene.translate(0,25,0);
        this.scene.scale(200,200,200);
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