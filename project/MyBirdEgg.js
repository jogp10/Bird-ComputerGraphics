import {CGFobject,CGFtexture, CGFappearance, CGFshader} from '../lib/CGF.js';
import {MySphere} from "./MySphere.js";

export class MyBirdEgg extends CGFobject {
    constructor(scene, slices, stacks, position) {
        super(scene);
        this.position = position;
        this.initBuffers(slices, stacks);
        this.initTextures();
        this.initShaders();
        this.drop = false;
    }

    initBuffers(slices, stacks) {
        this.egg = new MySphere(this.scene, slices, stacks);
    }
    initTextures() {
        this.eggTexture = new CGFtexture(this.scene, "images/dinosaurEgg.jpg");
        this.eggMaterial = new CGFappearance(this.scene);
        this.eggMaterial.setTexture(this.eggTexture);
        this.eggMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }
    initShaders() {
        this.eggShader = new CGFshader(this.scene.gl, "shaders/egg.vert", "shaders/egg.frag");
    }

    dropEgg(position, speed) {
        console.log("start drop");
        this.drop = true;
        this.position = position;
        this.dropSpeed = speed;
    }

    updateBuffers(complexity) {
        this.egg.updateBuffers(complexity);
        this.initBuffers();
        this.egg.initNormalVizBuffers();
    }

    enableNormalViz() {
        this.egg.enableNormalViz();
    }
    disableNormalViz() {
        this.egg.disableNormalViz();
    }

    update(t) {
        if (this.drop) {
            console.log("drop started");
            this.initDropTime = t;
            this.drop = false;
        }

        if (t - this.initDropTime <= 1000) {
            console.log("drop");
            this.position[1] -= this.dropSpeed;
        }
    }

    display(scale) {
        this.scene.pushMatrix();
            this.eggMaterial.apply();
            this.scene.translate(this.position[0], this.position[1], this.position[2]);
            if (scale) this.scene.scale(scale, scale, scale);
            else {this.scene.scale(2, 2, 2);}
            this.scene.setActiveShader(this.eggShader);
            this.scene.scale(0.8, 1.2, 0.8);
            this.egg.display();
            this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();
    }
}