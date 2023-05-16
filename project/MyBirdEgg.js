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

    dropEgg(position, speed, birdSpeed, birdOrientation) {
        console.log("start drop");
        this.drop = true;
        this.position = position;
        this.dropSpeed = speed;
        this.birdSpeed = birdSpeed;
        this.birdOrientation = birdOrientation;
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
            this.initialX = this.position[0]; // Store the initial x-position
            this.initialY = this.position[1]; // Store the initial y-position
            this.initialZ = this.position[2]; // Store the initial z-position
        }

        if (t - this.initDropTime <= 1000) {
            console.log("drop");
            const elapsedTime = t - this.initDropTime;
            const gravity = -9.8; // Acceleration due to gravity
            const timeInSeconds = elapsedTime / 1000; // Convert milliseconds to seconds

            // Calculate the vertical displacement using the formula: y = y0 - v0t + (1/2)gt^2
            this.position[1] = this.initialY - (this.dropSpeed * timeInSeconds) + (0.5 * gravity * Math.pow(timeInSeconds, 2));
            
            // Calculate the horizontal displacement using the formula: x = x0 + vt
            this.position[0] = this.initialX + Math.sin(this.birdOrientation) * this.birdSpeed * 3 * timeInSeconds;
            this.position[2] = this.initialZ + Math.cos(this.birdOrientation) * this.birdSpeed * 3 * timeInSeconds;
            console.log("egg dropping position: " + this.position);
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