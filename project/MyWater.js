import {CGFobject,CGFtexture,CGFappearance,CGFshader} from '../lib/CGF.js';
import { MyPlane } from "./MyPlane.js";


export class MyWater extends CGFobject {
    constructor(scene, nrDivs) {
        super(scene);
        this.initBuffers(nrDivs);
        this.initTextures();
        this.initShaders();
    }

    initBuffers(nrDivs) {
        this.plane = new MyPlane(this.scene, nrDivs);
    }

    initTextures() {
        this.waterTexture = new CGFtexture(this.scene, "images/waterTex.jpg");
        this.waterMaterial = new CGFappearance(this.scene);
        this.waterMaterial.setTexture(this.waterTexture);
        this.waterMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.waterHeight = new CGFtexture(this.scene, "images/waterMap.jpg");
    }

    initShaders() {
        this.waterShader = new CGFshader(this.scene.gl, "shaders/water.vert", "shaders/water.frag");
        this.waterShader.setUniformsValues({ uSampler2: 1 });
		this.waterShader.setUniformsValues({ timeFactor: 0 });
    }

    updateBuffers() {
        this.plane.updateBuffers();
    }
    updateTexCoords() {
        this.updateTexCoordsGLBuffers();
    }
    enableNormalViz() {
        this.plane.enableNormalViz();
    }
    disableNormalViz() {
        this.plane.disableNormalViz();
    }

    display() {
        this.scene.pushMatrix();
            this.scene.translate(0,-72,0);
            this.scene.scale(400, 450, 400);
            this.scene.rotate(Math.PI / 2, 0, 1, 0);
            this.scene.rotate(-Math.PI / 2, 1, 0, 0);
            this.waterMaterial.apply();
            this.waterHeight.bind(1);
            this.scene.setActiveShader(this.waterShader);
            this.plane.display();
            this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();

    }
}
