import {CGFobject,CGFtexture,CGFappearance,CGFshader} from '../lib/CGF.js';
import { MyPlane } from "./MyPlane.js";


export class MyTerrain extends CGFobject {
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
        this.terrainTexture = new CGFtexture(this.scene, "images/terrain.jpg");
        this.terrainMaterial = new CGFappearance(this.scene);
        this.terrainMaterial.setTexture(this.terrainTexture);
        this.terrainMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.terrainHeight = new CGFtexture(this.scene, "images/heightmapflat.jpg");
        this.terrainAltimetry = new CGFtexture(this.scene, "images/altimetry.png");
    }

    initShaders() {
        this.terrainShader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.terrainShader.setUniformsValues({ heightMap: 1 });
        this.terrainShader.setUniformsValues({ altimetry: 2 });
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
            this.terrainMaterial.apply();

            this.terrainHeight.bind(1);
            this.terrainAltimetry.bind(2);
            this.scene.setActiveShader(this.terrainShader);
            this.scene.translate(0,-100,0);
            this.scene.scale(400, 400, 400);
            this.scene.rotate(-Math.PI / 2, 1, 0, 0);
            this.plane.display();
            this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();

    }
}
