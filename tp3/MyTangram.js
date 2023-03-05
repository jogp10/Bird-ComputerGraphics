import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyDiamond } from './MyDiamond.js';
import { MyTriangleSmall } from './MyTriangleSmall.js';
import { MyTriangleBig } from './MyTriangleBig.js';
import { MyTriangle } from './MyTriangle.js';
import { MyParallelogram } from './MyParallelogram.js';

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.create_materials();
    }

    initBuffers() {
        this.greenDiamond = new MyDiamond(this.scene);
        this.purpleTriangle = new MyTriangleSmall(this.scene);
        this.redTriangle = new MyTriangleSmall(this.scene);
        this.orangeTriangle = new MyTriangleBig(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene);
        this.pinkTriangle = new MyTriangle(this.scene);
        this.yellowParallelogram = new MyParallelogram(this.scene);
    }

    create_materials() {
        this.materials = [];

        //Green Square
        this.scene.material_green = new CGFappearance(this.scene);
        this.scene.material_green.setAmbient(0.0, 0.2, 0.0, 1.0);
        this.scene.material_green.setDiffuse(0.0, 1, 0.0, 1.0);
        this.scene.material_green.setSpecular(1,1,1,1);
        this.scene.material_green.setShininess(10.0);

        //Orange Triangle
        this.scene.material_orange = new CGFappearance(this.scene);
        this.scene.material_orange.setAmbient(0.2, 0.0, 0.0, 1.0);
        this.scene.material_orange.setDiffuse(1, 128/255, 0, 0);
        this.scene.material_orange.setSpecular(1,1,1,1);
        this.scene.material_orange.setShininess(10.0);

        //Blue Triangle
        this.scene.material_blue = new CGFappearance(this.scene);
        this.scene.material_blue.setAmbient(0.0, 0.0, 0.2, 1.0);
        this.scene.material_blue.setDiffuse(0, 0, 1, 0);
        this.scene.material_blue.setSpecular(1,1,1,1);
        this.scene.material_blue.setShininess(10.0);
        
        //Pink Triangle
        this.scene.material_pink = new CGFappearance(this.scene);
        this.scene.material_pink.setAmbient(0.2, 0.0, 0.2, 1.0);    
        this.scene.material_pink.setDiffuse(1, 0, 1, 0);
        this.scene.material_pink.setSpecular(1,1,1,1);
        this.scene.material_pink.setShininess(10.0);

        //Red Triangle
        this.scene.material_red = new CGFappearance(this.scene);
        this.scene.material_red.setAmbient(0.2, 0.0, 0.0, 1.0);
        this.scene.material_red.setDiffuse(1, 0, 0, 0);
        this.scene.material_red.setSpecular(1, 1, 1, 1);
        this.scene.material_red.setShininess(10.0);

        //Yellow Parallelogram
        this.scene.material_yellow = new CGFappearance(this.scene);
        this.scene.material_yellow.setAmbient(0.2, 0.2, 0.0, 1.0);
        this.scene.material_yellow.setDiffuse(1, 1, 0, 0);
        this.scene.material_yellow.setSpecular(1,1,1,1);
        this.scene.material_yellow.setShininess(10.0);

        //Purple Triangle
        this.scene.material_purple = new CGFappearance(this.scene);
        this.scene.material_purple.setAmbient(0.2, 0.0, 0.2, 1.0);
        this.scene.material_purple.setDiffuse(128/255, 0, 128/255, 0);
        this.scene.material_purple.setSpecular(1,1,1,1);
        this.scene.material_purple.setShininess(10.0);


        this.materials = [this.scene.material_green, this.scene.material_orange, this.scene.material_blue, this.scene.material_pink, this.scene.material_red, this.scene.material_yellow, this.scene.material_purple];
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(-0.5, -1, 0); // Move all trangram

        // ORANGE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), 3, 0);
        this.scene.rotate(-3 * Math.PI/4, 0, 0, 1);
        this.materials[1].apply();
        this.orangeTriangle.display();
        this.scene.popMatrix()

        // GREEN DIAMOND
        this.scene.pushMatrix();
        
        let matrixTranslate = 
                    [1, 0, 0, 0, 
                     0, 1, 0, 0,
                     0, 0, 1, 0,
                     -1.8, 4, 0, 1];
        let matrixRotate = [
                Math.cos((2 * Math.PI) / 3), Math.sin((2 * Math.PI) / 3), 0, 0,
                -Math.sin((2 * Math.PI) / 3),  Math.cos((2 * Math.PI) / 3), 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1];
                
        this.scene.multMatrix(matrixTranslate);
        this.scene.multMatrix(matrixRotate);
        //this.materials[0].apply();
        this.scene.materials[3].apply();
        this.greenDiamond.display();
        this.scene.popMatrix();

        // BLUE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), 1, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.materials[2].apply();
        this.blueTriangle.display();
        this.scene.popMatrix();

        // RED TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8) + 0.7 , 3.1 ,0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.materials[4].apply();
        this.redTriangle.display();
        this.scene.popMatrix();

        // YELLOW PARALLELOGRAM
        this.scene.pushMatrix();
        this.scene.translate(0, 0.6, 0);
        this.scene.rotate(3*Math.PI/2, 0, 0, 1);
        this.materials[5].apply();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.scene.translate(-3, 0, 0);
        this.yellowParallelogram.display();
        this.scene.popMatrix();

        // PINK TRIANGLE
        this.scene.pushMatrix();    
        this.scene.translate(Math.sqrt(8) - 0.42 , 2 ,0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.materials[3].apply();
        this.pinkTriangle.display();
        this.scene.popMatrix();

        // PURPLE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(-0.4, -2.8, 0);
        this.scene.rotate(5*Math.PI/4, 0, 0, 1);
        this.materials[6].apply();
        this.purpleTriangle.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    updateBuffers() {}

    enableNormalViz() {
        this.greenDiamond.enableNormalViz();
        this.purpleTriangle.enableNormalViz();
        this.redTriangle.enableNormalViz();
        this.orangeTriangle.enableNormalViz();
        this.blueTriangle.enableNormalViz();
        this.pinkTriangle.enableNormalViz();
        this.yellowParallelogram.enableNormalViz();
    }
}
