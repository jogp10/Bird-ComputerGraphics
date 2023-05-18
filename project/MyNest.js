import {CGFobject,CGFappearance,CGFtexture,CGFshader} from "../lib/CGF.js";
import { MyCylinder } from "./MyCylinder.js";
import { MySphere } from "./MySphere.js";
import { MyBirdEgg } from "./MyBirdEgg.js";

export class MyNest extends CGFobject {
    constructor(scene, slices, stacks, position) {
        super(scene);
        this.position = position;
        this.eggs = [];
        for (let i = 0; i < 4; i++) {
            this.eggs.push(new MyBirdEgg(this.scene, 20, 20, [0, 0, 0]));
        }
        this.numEggs = 0;
       
        this.initBuffers(slices, stacks);
        this.initTextures();
        this.initShaders();
    }

    initBuffers(slices, stacks) {
        this.inside = new MySphere(this.scene, slices, stacks, true, true);
        this.outside = new MySphere(this.scene, slices, stacks, false, true);
    }

    initTextures() {
        this.nestTexture = new CGFtexture(this.scene, "images/nest.jpg");
        this.nestMaterial = new CGFappearance(this.scene);
        this.nestMaterial.setTexture(this.nestTexture);
        this.nestMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.roughnessMap = new CGFtexture(this.scene, "images/roughnessmap.png");
    }
    initShaders() {
        this.nestShader = new CGFshader(this.scene.gl, "shaders/nest.vert", "shaders/nest.frag");
        this.nestShader.setUniformsValues({ roughnessMap: 1 });
    }

    enableNormalViz() {
        this.inside.enableNormalViz();
        this.outside.enableNormalViz();
    }
    disableNormalViz() {
        this.inside.disableNormalViz();
        this.outside.disableNormalViz();
    }
    updateBuffers(complexity) {
        this.inside.updateBuffers(complexity);
        this.outside.updateBuffers(complexity);
    }

    addEgg() {
        
        if (this.numEggs < 4) {
            this.numEggs++;
        }
    }

    display() {
        this.scene.pushMatrix();
            this.scene.pushMatrix();
                this.scene.translate(this.position[0], this.position[1], this.position[2]);
                this.scene.scale(5, 5, 5);
                this.nestMaterial.apply();
                this.roughnessMap.bind(1);
                this.scene.setActiveShader(this.nestShader);
                this.scene.scale(1.25, 0.75, 1.25);
                this.inside.display();
                this.outside.display();
                this.scene.setActiveShader(this.scene.defaultShader);
            this.scene.popMatrix();

            this.scene.pushMatrix()
            if (this.eggs[0]&& this.numEggs > 0) {

                this.scene.translate(this.position[0], this.position[1], this.position[2]);
                this.scene.scale(1.2,1.2,1.2)
                this.scene.translate(-2,0,-2)
                this.eggs[0].display()
            }           
            this.scene.popMatrix()


            this.scene.pushMatrix()
            if (this.eggs[1] && this.numEggs > 1) {
                this.scene.translate(this.position[0], this.position[1], this.position[2]);
                this.scene.scale(1.2,1.2,1.2)
                this.scene.translate(2,0,-2)
                this.eggs[1].display(); 
            }
            this.scene.popMatrix()
    

            this.scene.pushMatrix()
            if (this.eggs[2] && this.numEggs > 2) {
                this.scene.translate(this.position[0], this.position[1], this.position[2]);
                this.scene.scale(1.2,1.2,1.2)
                this.scene.translate(2,0,2)
                this.eggs[2].display();
            }
            this.scene.popMatrix()


            this.scene.pushMatrix()
            if (this.eggs[3] && this.numEggs > 3) {~
                this.scene.translate(this.position[0], this.position[1], this.position[2]);
                this.scene.scale(1.2,1.2,1.2)
                this.scene.translate(-2,0,2)
                this.eggs[3].display();
            }
            this.scene.popMatrix()

        this.scene.popMatrix();
    }
}
