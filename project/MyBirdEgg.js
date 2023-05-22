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
        if(this.is_going_to_nest(position, speed, birdSpeed, birdOrientation)) {
            this.drop = true;
            this.position = position;
            this.dropSpeed = speed;
            this.birdSpeed = birdSpeed;
            this.birdOrientation = birdOrientation;
            return true;
        }
        return false;
    }

    is_going_to_nest(position, speed, birdSpeed, birdOrientation) {
        const nestPosition = this.scene.nest.position;
        const nestRadius = 5;
        let final_position = [0, 0, 0]

        const dropTime = 1;

        const gravity = -9.8; // Acceleration due to gravity

        final_position[0] = position[0] + Math.sin(birdOrientation) * birdSpeed * 3 *  dropTime;
        final_position[1] = nestPosition[1];
        final_position[2] = position[2] + Math.cos(birdOrientation) * birdSpeed * 3 *  dropTime;

        const distance = this.scene.distance(nestPosition, final_position);
        //console.log("nestPosition: " + nestPosition + " initial_position: " + position + " final_position: " + final_position);
        //console.log("distance: " + distance);
        if (distance <= nestRadius) {
            return true;
        }
        return false;
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
            this.initDropTime = t;
            this.drop = false;
            this.initialX = this.position[0]; // Store the initial x-position
            this.initialY = this.position[1]; // Store the initial y-position
            this.initialZ = this.position[2]; // Store the initial z-position
            this.canAddEgg = true;

        }

        if (t - this.initDropTime <= 1000) {
            const elapsedTime = t - this.initDropTime;
            const gravity = -9.8; // Acceleration due to gravity
            const timeInSeconds = elapsedTime / 1000; // Convert milliseconds to seconds

            // Calculate the vertical displacement using the formula: y = y0 - v0t + (1/2)gt^2
            this.position[1] = this.initialY - (this.dropSpeed * timeInSeconds) + (0.5 * gravity * Math.pow(timeInSeconds, 2));

            // Calculate the horizontal displacement using the formula: x = x0 + vt
            this.position[0] = this.initialX + Math.sin(this.birdOrientation) * this.birdSpeed * 3 * timeInSeconds;
            this.position[2] = this.initialZ + Math.cos(this.birdOrientation) * this.birdSpeed * 3 * timeInSeconds;
        }
        else if(this.canAddEgg){
            this.scene.nest.addEgg();
            this.scene.birdEggs.pop()
            this.canAddEgg = false;
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
