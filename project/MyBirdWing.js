import {CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyPrism } from './MyPrism.js';
import { MyBirdFeather } from './MyBirdFeather.js';

export class MyBirdWing extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        
    }

    initBuffers() {

        this.prism = new MyPrism(this.scene, 3, 3);
   
        this.prism2 = new MyPrism(this.scene, 20, 3);

        this.prism3 = new MyPrism(this.scene, 3, 3);

        this.feather1 = new MyBirdFeather(this.scene);
        this.feather2 = new MyBirdFeather(this.scene);
        this.feather3 = new MyBirdFeather(this.scene);
        this.feather4 = new MyBirdFeather(this.scene);
        this.feather5 = new MyBirdFeather(this.scene);
        this.feather6 = new MyBirdFeather(this.scene);
        this.feather7 = new MyBirdFeather(this.scene);
        this.feather8 = new MyBirdFeather(this.scene);
        this.feather9 = new MyBirdFeather(this.scene);
        this.feather10 = new MyBirdFeather(this.scene);
        this.feather11 = new MyBirdFeather(this.scene);
        this.feather12 = new MyBirdFeather(this.scene);
        this.feather13 = new MyBirdFeather(this.scene);
        this.feather14 = new MyBirdFeather(this.scene);
        this.feather15 = new MyBirdFeather(this.scene);
        this.feather16 = new MyBirdFeather(this.scene);
        this.feather17 = new MyBirdFeather(this.scene);
        this.feather18 = new MyBirdFeather(this.scene);
        this.feather19 = new MyBirdFeather(this.scene);
        this.feather20 = new MyBirdFeather(this.scene);
        this.feather21 = new MyBirdFeather(this.scene);
        this.feather22 = new MyBirdFeather(this.scene);


        
    }

    create_materials() {
        this.materials = [];

         }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(-.15, 0, 0);
        this.scene.rotate(Math.PI/2,0,0,0);
        this.scene.scale(1, .1, .8);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.39, 0, -.37);
        this.scene.rotate(18*Math.PI/20,0,1,0);
        this.scene.scale(1.1,.1,.3);
        this.prism3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-.7, 0, 0);
        this.scene.rotate(Math.PI/2,0,0,0);
        this.scene.scale(.5, .1, .7);
        this.prism2.display();
        this.scene.popMatrix();

       

        
        // Feathers
        this.scene.pushMatrix();
        this.scene.translate(-1, 0.05, .85);
        this.scene.rotate(Math.PI*2/3,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-0.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-0.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-0.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather5.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-0.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather6.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather7.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather8.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather9.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather10.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather11.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather12.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather13.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather14.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather15.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,.05);
        this.scene.rotate(-Math.PI/30,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather16.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,.05);
        this.scene.rotate(-Math.PI/30,0,1,0);
        this.scene.scale(1,.7,1);
        this.feather17.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.17,0,.05);
        this.scene.rotate(-Math.PI/30,0,0,0);
        this.scene.scale(1,.7,1);
        this.feather19.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.17,0,.05);
        this.scene.rotate(-Math.PI/30,0,0,0);
        this.scene.scale(1,.7,1);
        this.feather20.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.17,0,.05);
        this.scene.rotate(-Math.PI/30,0,0,0);
        this.scene.scale(1,.7,1);
        this.feather21.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.17,0,.05);
        this.scene.rotate(-Math.PI/30,0,0,0);
        this.scene.scale(1,.7,1);
        this.feather22.display();
        this.scene.popMatrix();








    

       
    }

    updateBuffers() {}

    enableNormalViz() {
        
    
        
    }
    disableNormalViz() {
 

    }

}
