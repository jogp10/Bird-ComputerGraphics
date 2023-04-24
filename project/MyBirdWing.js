import {CGFobject} from '../lib/CGF.js';
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

        this.feathers = []
        for (var i=0;i<22; i++) {
            this.feathers.push(new MyBirdFeather(this.scene));
        }
    }

    create_materials() {
        this.materials = [];

         }

    display() {
        this.scene.pushMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-.15, 0, 0);
        this.scene.rotate(Math.PI/2,0,0,0);
        this.scene.scale(1, .1, .8);
        //this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.39, 0, -.37);
        this.scene.rotate(18*Math.PI/20,0,1,0);
        this.scene.scale(1.1,.1,.3);
        //this.prism3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-.7, 0, 0);
        this.scene.rotate(Math.PI/2,0,0,0);
        this.scene.scale(.5, .1, .7);
        //this.prism2.display();
        this.scene.popMatrix();

       

        
        // Feathers
        var i = 0
        this.scene.pushMatrix();
        this.scene.translate(-1, 0.05, .85);
        this.scene.rotate(Math.PI*2/3,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-0.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-0.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-0.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,-0.1);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,0);
        this.scene.rotate(-Math.PI/20,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,.05);
        this.scene.rotate(-Math.PI/30,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.2,0,.05);
        this.scene.rotate(-Math.PI/30,0,1,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.17,0,.05);
        this.scene.rotate(-Math.PI/30,0,0,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.17,0,.05);
        this.scene.rotate(-Math.PI/30,0,0,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.17,0,.05);
        this.scene.rotate(-Math.PI/30,0,0,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(.17,0,.05);
        this.scene.rotate(-Math.PI/30,0,0,0);
        this.scene.scale(1,.7,1);
        this.feathers[i].display()
        i++
        this.scene.popMatrix();

        this.scene.popMatrix();

        /*for(var i=0; i<22; i++) {
            this.scene.pushMatrix();
            if(i > 1 && i < 7) var a = .1 * i
            else a = 5*0.1
                this.scene.translate(-1+0.2*i,0.05,0.85-a);
                this.scene.rotate(Math.PI*2/3-(Math.PI/30)*i,0,1,0);
                this.feathers[i].display();
            this.scene.popMatrix();   
        }*/






    

       
    }

    updateBuffers() {}

    enableNormalViz() {
        
    
        
    }
    disableNormalViz() {
 

    }

}
