
import {CGFobject, CGFtexture,CGFappearance} from '../lib/CGF.js';
import { MyPrism } from './MyPrism.js';



export class MyBirdTail extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initTextures();
        this.bird_angle = 0;
    }

    initBuffers() {
        this.prism = new MyPrism(this.scene, 3, 4);
        this.prism2 = new MyPrism(this.scene, 3, 4);
        this.prism3 = new MyPrism(this.scene, 3, 4);
        this.prism4 = new MyPrism(this.scene, 3, 4);


    }

    initTextures() {
        this.tailTexture = new CGFtexture(this.scene, "images/tail.jpg");
		this.tailMaterial = new CGFappearance(this.scene);
		this.tailMaterial.setTexture(this.tailTexture);
		this.tailMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.scene.pushMatrix()
            this.tailMaterial.apply()
            this.scene.translate(1,0 , 0);
            this.scene.rotate(this.bird_angle, 0, 0, 1)
            this.scene.translate(-1,0 , 0);

            this.scene.pushMatrix()
            this.scene.translate(0, 0, 0)
            this.scene.rotate(Math.PI/2,0,0,0)
            this.scene.scale(1, .1, 1)
            this.prism.display()
            this.scene.popMatrix()

            this.scene.pushMatrix()
            this.scene.translate(-.75, 0, .56)
            this.scene.rotate(Math.PI,0,1,0)
            this.scene.scale(.5, .1, .35)
            this.prism2.display()
            this.scene.popMatrix()

            this.scene.pushMatrix()
            this.scene.translate(-.75, 0, 0)
            this.scene.rotate(Math.PI,0,1,0)
            this.scene.scale(.5, .1, .35)
            this.prism3.display()
            this.scene.popMatrix()

            this.scene.pushMatrix()
            this.scene.translate(-.75, 0, -.56)
            this.scene.rotate(Math.PI,0,1,0)
            this.scene.scale(.5, .1, .35)
            this.prism4.display()
            this.scene.popMatrix()

        this.scene.popMatrix()

    }

    updateBuffers() {}

    enableNormalViz() {
        this.prism.enableNormalViz();
        this.prism2.enableNormalViz();
        this.prism3.enableNormalViz();
        this.prism4.enableNormalViz();
    }
    disableNormalViz() {
        this.prism.disableNormalViz();
        this.prism2.disableNormalViz();
        this.prism3.disableNormalViz();
        this.prism4.disableNormalViz();
    }

    update(t, frequency) {

        this.bird_angle = Math.PI/-10*Math.sin(t*frequency);
    }

}