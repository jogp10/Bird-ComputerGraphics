import {CGFobject} from '../lib/CGF.js';
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

    display() {
        this.scene.pushMatrix();
        this.scene.translate(-0.5, -1, 0); // Move all trangram

        // ORANGE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), 3, 0);
        this.scene.rotate(-3 * Math.PI/4, 0, 0, 1);
        this.scene.setDiffuse(1, 128/255, 0, 0);
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
        this.scene.setDiffuse(0, 1, 0, 0);
        this.greenDiamond.display();
        this.scene.popMatrix();

        // BLUE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), 1, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.setDiffuse(0, 0, 1, 0);
        this.blueTriangle.display();
        this.scene.popMatrix();

        // RED TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8) + 0.7 , 3.1 ,0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.setDiffuse(1, 0, 0, 0);
        this.redTriangle.display();
        this.scene.popMatrix();

        // YELLOW PARALLELOGRAM
        this.scene.pushMatrix();
        this.scene.translate(1, 0.6, 0);
        this.scene.rotate(3*Math.PI/2, 0, 0, 1);
        this.scene.setDiffuse(1, 1, 0, 0);
        this.scene.scale(1, -1, 1)
        this.yellowParallelogram.display();
        this.scene.popMatrix();

        // PINK TRIANGLE
        this.scene.pushMatrix();    
        this.scene.translate(Math.sqrt(8) - 0.42 , 2 ,0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.setDiffuse(1, 0, 1, 0);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        // PURPLE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(-0.4, -2.8, 0);
        this.scene.rotate(5*Math.PI/4, 0, 0, 1);
        this.scene.setDiffuse(128/255, 0, 128/255, 0);
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
