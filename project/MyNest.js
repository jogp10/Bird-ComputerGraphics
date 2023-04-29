import {CGFobject,CGFappearance,CGFtexture,CGFshader} from "../lib/CGF.js";
import { MyCylinder } from "./MyCylinder.js";
import { MySphere } from "./MySphere.js";

export class MyNest extends CGFobject {
    constructor(scene, slices, stacks, position) {
        super(scene);
        this.position = position;
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

    display() {
        this.scene.pushMatrix();
            this.scene.translate(this.position[0], this.position[1], this.position[2]);
            this.scene.scale(3.5, 3.5, 3.5);
            this.nestMaterial.apply();
            this.roughnessMap.bind(1);
            this.scene.setActiveShader(this.nestShader);
            this.scene.scale(1.25, 0.75, 1.25);
            this.inside.display();
            this.outside.display();
            this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();
    }
}