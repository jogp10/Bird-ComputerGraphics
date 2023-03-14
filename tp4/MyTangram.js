import {CGFobject, CGFappearance, CGFtexture} from '../lib/CGF.js';
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
        this.create_textures();
        this.create_materials();
        this.updateTexCoords();
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
        this.material_green = new CGFappearance(this.scene);
        this.material_green.setAmbient(0.0, 0.2, 0.0, 1.0);
        this.material_green.setDiffuse(0.0, 1, 0.0, 1.0);
        this.material_green.setSpecular(1,1,1,1);
        this.material_green.setShininess(10.0);
       

        //Orange Triangle
        this.material_orange = new CGFappearance(this.scene);
        this.material_orange.setAmbient(0.2, 0.0, 0.0, 1.0);
        this.material_orange.setDiffuse(1, 128/255, 0, 0);
        this.material_orange.setSpecular(1,1,1,1);
        this.material_orange.setShininess(10.0);

        //Blue Triangle
        this.material_blue = new CGFappearance(this.scene);
        this.material_blue.setAmbient(0.0, 0.0, 0.2, 1.0);
        this.material_blue.setDiffuse(0, 0, 1, 0);
        this.material_blue.setSpecular(1,1,1,1);
        this.material_blue.setShininess(10.0);
        
        //Pink Triangle
        this.material_pink = new CGFappearance(this.scene);
        this.material_pink.setAmbient(0.2, 0.0, 0.2, 1.0);    
        this.material_pink.setDiffuse(1, 0, 1, 0);
        this.material_pink.setSpecular(1,1,1,1);
        this.material_pink.setShininess(10.0);

        //Red Triangle
        this.material_red = new CGFappearance(this.scene);
        this.material_red.setAmbient(0.2, 0.0, 0.0, 1.0);
        this.material_red.setDiffuse(1, 0, 0, 0);
        this.material_red.setSpecular(1, 1, 1, 1);
        this.material_red.setShininess(10.0);

        //Yellow Parallelogram
        this.material_yellow = new CGFappearance(this.scene);
        this.material_yellow.setAmbient(0.2, 0.2, 0.0, 1.0);
        this.material_yellow.setDiffuse(1, 1, 0, 0);
        this.material_yellow.setSpecular(1,1,1,1);
        this.material_yellow.setShininess(10.0);

        //Purple Triangle
        this.material_purple = new CGFappearance(this.scene);
        this.material_purple.setAmbient(0.2, 0.0, 0.2, 1.0);
        this.material_purple.setDiffuse(128/255, 0, 128/255, 0);
        this.material_purple.setSpecular(1,1,1,1);
        this.material_purple.setShininess(10.0);
        
     
        //New Material for MyDiamond
        this.new_material_diamond = new CGFappearance(this.scene);
        this.new_material_diamond.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.new_material_diamond.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.new_material_diamond.setSpecular(1,1,1,1);
        this.new_material_diamond.setShininess(10.0);

        this.materials = [this.material_green, this.material_orange, this.material_blue, this.material_pink, this.material_red, this.material_yellow, this.material_purple, this.new_material_diamond];
    }

    create_textures(){
        this.textures = [];

        this.texture1 = new CGFtexture(this.scene, 'images/tangram.png');
        

        this.textures = [this.texture1];       
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(-0.5, -1, 0); // Move all trangram

        // ORANGE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), 3, 0);
        this.scene.rotate(-3 * Math.PI/4, 0, 0, 1);
        //this.scene.quadMaterial.apply();    
        this.materials[1].apply();
        this.orangeTriangle.display();
        this.scene.popMatrix();

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
        this.materials[0].setTexture(this.textures[0]);
        this.materials[0].apply();

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

    updateTexCoords() {
        /*this.vertices = [
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0,	//3
			// Other face
			-1, 0, 0,	//4
			0, -1, 0,	//5
			0, 1, 0,	//6
			1, 0, 0		//7
		];*/
        this.greenDiamond.updateTexCoords(
			[0.5, 0,
			0.75, 0.75,
			0.25, 0.25,
			0.5, 0.5,
			0.5, 0,
			0.75, 0.75,
			0.25, 0.25,
			0.5, 0.5]
		);
        this.updateTexCoordsGLBuffers();
    }

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
