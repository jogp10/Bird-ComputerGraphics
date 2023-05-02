import {CGFobject,CGFtexture, CGFappearance, CGFshader} from '../lib/CGF.js';
import {MySphere} from "./MySphere.js";

export class MyBirdEgg extends CGFobject {
    constructor(scene, slices, stacks, position) {
        super(scene);
        this.position = position;
        this.initBuffers(slices, stacks);
        this.initTextures();
        this.initShaders();
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

    display() {
        this.scene.pushMatrix();
            this.eggMaterial.apply();
            this.scene.setActiveShader(this.eggShader);
            this.scene.scale(0.8, 1.2, 0.8);
            this.scene.translate(this.position[0], this.position[1], this.position[2]);
            this.egg.display();
            this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();
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

    drop(position, speed) {
        // TODO
    }
}