import {CGFobject,CGFappearance,CGFtexture,CGFshader} from "../lib/CGF.js";
import { MyCylinder } from "./MyCylinder.js";
import { MySphere } from "./MySphere.js";

export class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.cylinder = new MyCylinder(this.scene, 20, 20);
        this.inside = new MySphere(this.scene, 20, 20, true, true);
        this.outside = new MySphere(this.scene, 20, 20, false, true);

        this.initTextures();
        this.initShaders();
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
    }
    disableNormalViz() {
    }
    updateBuffers(complexity) {
    }

    display() {
        this.scene.pushMatrix();
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