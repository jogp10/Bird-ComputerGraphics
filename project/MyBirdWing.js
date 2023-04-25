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
        this.wing_angle = 0;
        this.feathers = []
        for (var i=0;i<25; i++) {
            this.feathers.push(new MyBirdFeather(this.scene));
        }
        this.ex = 2;
    }

    create_materials() {
        this.materials = [];
        }

    display() {
       
        this.scene.pushMatrix();
       
            
            this.scene.rotate(this.wing_angle,0,0,1);
            this.scene.translate(-.15-0.5,0 , 0);
            
            this.scene.pushMatrix();
            this.scene.translate(-.15, -.05, 0);
            this.scene.rotate(Math.PI/2,0,0,0);
            this.scene.scale(1, .1, .8);
            this.prism.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(.39,-.05, -.37);
            this.scene.rotate(18*Math.PI/20,0,1,0);
            this.scene.scale(1.1,.1,.3);
            this.prism3.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-.7, -.05, 0);
            this.scene.rotate(Math.PI/2,0,0,0);
            this.scene.scale(.5, .1, .7);
            this.prism2.display();
            this.scene.popMatrix();

           

            // Feathers
            /*
            var i = 0
            this.scene.pushMatrix();
            this.scene.translate(-1, 0.05, .85);
            this.scene.rotate(Math.PI*2/3,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.2,0.05,.75);
            this.scene.rotate(Math.PI*2/3-Math.PI/20,0,1,0);
            this.scene.scale(1,.7,1);
            //this.feathers[i].display()
            i++
            this.scene.popMatrix();*/
        
            
            var i = 0
            this.scene.pushMatrix();
            this.scene.translate(-1, 0.00, .85);
            this.scene.rotate(Math.PI*2/3,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.2,0,.75);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.32,0,.60);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.45,0,.45);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.54,0,.28);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.58,0,.10);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.55,0,-.08);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.53,0,-.24);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.50,0,-.40);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.43,0,-.55);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.32,0,-.68);
            this.scene.rotate(Math.PI*2/3-i*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.20,0,-.82);
            this.scene.rotate(Math.PI*2/3-12*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1.05,0,-.92);
            this.scene.rotate(Math.PI*2/3-14*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-.9,0,-1);
            this.scene.rotate(Math.PI*2/3-16*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-.75,0,-1.07);
            this.scene.rotate(Math.PI*2/3-18*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-.57,0,-1.08);
            this.scene.rotate(Math.PI*2/3-19*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-.40,0,-1.1);
            this.scene.rotate(Math.PI*2/3-20*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-.23,0,-1.08);
            this.scene.rotate(Math.PI*2/3-21*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i
            this.scene.popMatrix();

            

            this.scene.pushMatrix();
            this.scene.translate(-.07,0,-1.03);
            this.scene.rotate(Math.PI*2/3-22*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(.08,0,-.95);
            this.scene.rotate(Math.PI*2/3-23*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(.20,0,-.9);
            this.scene.rotate(Math.PI*2/3-24*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(.30,0,-.82);
            this.scene.rotate(Math.PI*2/3-25*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(.40,0,-.76);
            this.scene.rotate(Math.PI*2/3-26*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(.52,0,-.68);
            this.scene.rotate(Math.PI*2/3-27*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

            
            this.scene.pushMatrix();
            this.scene.translate(.6,0,-.56);
            this.scene.rotate(Math.PI*2/3-27*Math.PI/30,0,1,0);
            this.scene.scale(1,.7,1);
            this.feathers[i].display()
            i++
            this.scene.popMatrix();

        this.scene.popMatrix();       
    }

    update(t)
    {   //Max angle = 45 degrees and min angle = 0

        this.wing_angle = Math.PI/-6*Math.sin(t*0.008);
    }

    updateBuffers() {}

    enableNormalViz() {}
    disableNormalViz() {}
}
