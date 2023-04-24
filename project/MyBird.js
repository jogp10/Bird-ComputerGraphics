import {CGFobject, CGFappearance, CGFshader} from '../lib/CGF.js';
import { MyTriangle } from './MyTriangle.js';
import { MyPyramid } from './MyPyramid.js';
import { MySphere } from './MySphere.js';
import { MyBirdWing } from './MyBirdWing.js';
import { MyBirdFoot } from './MyBirdFoot.js';

export class MyBird extends CGFobject {
    constructor(scene, orientation, speed, position) {
        super(scene);
        this.initBuffers();

        this.initialPosition = position;
        this.position = position;
		this.lastPosition = position;
        this.orientation = orientation;
        this.speed = speed;
		this.hasEgg = false;
		this.egg = null;
    }

	initBuffers() {
		this.triangle = new MyTriangle(this.scene);
		this.eye1 = new MySphere(this.scene, 10,10);
		this.eye2 = new MySphere(this.scene, 10,10);
		this.beak1 = new MyPyramid(this.scene, 4, 2, 2);
		this.beak2 = new MyPyramid(this.scene, 4, 2,2);
		this.body = new MySphere(this.scene, 10,10);
		this.wing1 = new MyBirdWing(this.scene);
		this.wing2 = new MyBirdWing(this.scene);
		this.foot1 = new MyBirdFoot(this.scene);



		this.initTextures();
		this.initShaders();
    }

	initTextures() {
        this.birdText = new CGFappearance(this.scene);
    }

	initShaders() {
		this.birdShader = new CGFshader(this.scene.gl, "shaders/bird.vert", "shaders/bird.frag");
		this.birdShader.setUniformsValues({timeFactor: 0});
	}

    updateTexCoords() {
        this.updateTexCoordsGLBuffers();
    }
    enableNormalViz() {
		this.triangle.enableNormalViz();
		this.eye1.enableNormalViz();
		this.eye2.enableNormalViz();
		this.body.enableNormalViz();
		this.beak1.enableNormalViz();
		this.beak2.enableNormalViz();
		this.wing1.enableNormalViz();
		this.wing2.enableNormalViz();
		this.foot1.enableNormalViz();
	

    }
    disableNormalViz() {
		this.triangle.disableNormalViz();
		this.eye1.disableNormalViz();
		this.eye2.disableNormalViz();
		this.body.disableNormalViz();
		this.beak1.disableNormalViz();
		this.beak2.disableNormalViz();
		this.wing1.disableNormalViz();
		this.wing2.disableNormalViz();
		this.foot1.disableNormalViz();

		
	}
    updateBuffers(complexity) {
    }

    update(t) {
        // Calculate the new position of the bird
        this.lastPosition = this.position;
        this.position = [this.position[0] + Math.cos(this.orientation)*(this.speed), this.position[1], this.position[2] + Math.sin(this.orientation)*(this.speed)];

        console.log("pos: " + this.position + " ori: " + this.orientation + " speed: " + this.speed);
    }

    turn(v) {
        this.orientation = this.orientation + v;
    }

    accelerate(v) {
        this.speed = this.speed + v * this.scene.speedFactor;
        if(this.speed < 0) this.speed = 0;
    }

    reset() {
        this.position = this.initialPosition;
        this.orientation = 0;
        this.speed = 0;
    }

	pickEgg() {
		console.log("pickEgg");
		// In a period of time of 2 seconds, the bird should got from y=3 to y=0 and back to y=3. If it is in the middle of the period and there is an egg in the colision point, it should pick it


		// TODO down animation

		for (let i = 0; i < this.scene.birdEggs.length; i++) {
            const egg = this.scene.birdEggs[i];

            // Check if the egg is at the bird's current position
            const distance = vec3.distance(egg.position, this.position);
            if (distance < 1) {
				console.log("egg picked");
                // Remove the egg from the scene
                this.scene.birdEggs.splice(i, 1);

                // Store a reference to the egg
				this.egg = egg;
				this.hasEgg = true;

                // Break out of the loop
                break;
            }
        }

		// TODO up animation
	}

	dropEgg() {
		console.log("dropEgg");
		// If Bird has egg, it should drop it
		if(!this.hasEgg) return;
		this.hasEgg = false;

		console.log("egg dropped");
		this.egg.drop(this.position);

		this.scene.birdEggs.push(this.egg);
		this.egg = null;
	}

	display() {
		this.scene.pushMatrix();
			this.birdText.apply();

			this.scene.translate(this.position[0], this.position[1], this.position[2]);
			this.scene.rotate(this.orientation, 0, 1, 0);
			
			// Bird Eyes
			this.scene.pushMatrix();
			this.scene.translate(0.15, 0.18, 0.17);
			this.scene.scale(0.05, 0.05, 0.05);
			this.eye1.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.translate(-0.15, 0.18, 0.17);
			this.scene.scale(0.05, 0.05, 0.05);
			this.eye2.display();
			this.scene.popMatrix();


			// Bird Beak
			this.scene.pushMatrix();
			this.scene.translate(0, 0.01, 0.24);
			this.scene.scale(0.1, 0.1, 0.12);
			this.scene.rotate(Math.PI/2, 1, 0, 0);
			this.beak1.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.translate(0, -0.02, 0.24);
			this.scene.scale(0.1, 0.1, 0.12);
			this.scene.rotate(Math.PI/2, 1, 0, 0);
			this.scene.rotate(Math.PI, 0, 1, 0);
			this.beak2.display();
			this.scene.popMatrix();

			// Bird Body
			this.scene.pushMatrix();
			this.scene.translate(0, 0, -0.6);
			this.scene.scale(0.5, 0.5, 0.9);
			this.scene.rotate(Math.PI/2, 1, 0, 0);
			this.body.display();
			this.scene.popMatrix();


			// Bird Wings
			this.scene.pushMatrix();
			this.scene.translate(0.5, .3, -0.4);
			this.scene.scale(0.5, 0.5, 0.5);
			this.scene.rotate(Math.PI, 0, 1, 0);
			this.scene.rotate(Math.PI, 1, 0, 0);
			this.wing1.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.translate(1.6,0,0);
			this.scene.scale(1,1,1);
			this.scene.rotate(-Math.PI, 0, 0, 1);
			this.scene.rotate(-1*Math.PI/10, 0, 1, 0);
			this.wing2.display();
			this.scene.popMatrix();

		
			// Bird Feet
			this.scene.pushMatrix();
			this.scene.translate(0.5, -0.3, -0.4);
			this.scene.scale(0.5, 0.5, 0.5);
			this.scene.rotate(Math.PI, 0, 1, 0);
		
			this.foot1.display();
			this.scene.popMatrix();

		this.scene.popMatrix();
	}

}