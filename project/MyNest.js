import { CGFobject, CGFappearance } from "../lib/CGF.js";
import { MyCylinder } from "./MyCylinder.js";

export class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.cylinder = new MyCylinder(this.scene, 20, 20);
    }

    initTextures() {
        this.nestMaterial = new CGFappearance(this.scene);
    }
    initShaders() {
    }

    enableNormalViz() {
    }
    disableNormalViz() {
    }
    updateBuffers(complexity) {
    }

    display() {
        this.cylinder.display();
    }
}