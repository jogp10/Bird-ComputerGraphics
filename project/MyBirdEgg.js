import {CGFobject,CGFtexture, CGFappearance} from '../lib/CGF.js';
import {MySphere} from "./MySphere.js";

export class MyBirdEgg extends CGFobject {
    constructor(scene, slices, stacks, position) {
        super(scene);
        this.position = position;
        this.egg = new MySphere(scene, slices, stacks);
        this.initBuffers();
    }

    initBuffers() {
        this.eggTexture = new CGFtexture(this.scene, "images/dinosaurEgg.jpg");
        this.eggMaterial = new CGFappearance(this.scene);

        this.eggMaterial.setTexture(this.eggTexture);
        this.eggMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(0.8, 1.2, 0.8);
        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        this.eggMaterial.apply();
        this.egg.display();
        this.scene.popMatrix();
    }

    updateBuffers(complexity) {
        this.egg.updateBuffers(complexity);
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    enableNormalViz() {
        this.egg.enableNormalViz();
    }
    disableNormalViz() {
        this.egg.disableNormalViz();
    }

    drop(position) {
        // TODO
    }
}