import { CGFappearance, CGFobject, CGFtexture } from "../lib/CGF.js";
import { MyBillboard } from "./MyBillboard.js";

export class MyTreeRowPatch extends CGFobject{
    constructor(scene, position) {
        super(scene);
        this.position = position;
        this.initBuffers();
        this.initTextures();
    }

    initBuffers(){
        this.tree1 = new MyBillboard(this.scene, [0, 0, 0]);
        this.tree2 = new MyBillboard(this.scene, [0, 0, 0]);
        this.tree3 = new MyBillboard(this.scene, [0, 0, 0]);
        this.tree4 = new MyBillboard(this.scene, [0, 0, 0]);
        this.tree5 = new MyBillboard(this.scene, [0, 0, 0]);
        this.tree6 = new MyBillboard(this.scene, [0, 0, 0]);
        this.tree7 = new MyBillboard(this.scene, [0, 0, 0]);
        this.tree8 = new MyBillboard(this.scene, [0, 0, 0]);
        this.tree9 = new MyBillboard(this.scene, [0, 0, 0]);

        this.pos1 = getRandomFloat(-1,1);
        this.pos2 = getRandomFloat(-1,1);
        this.pos3 = getRandomFloat(-1,1);
        this.pos4 = getRandomFloat(-1,1);
        this.pos5 = getRandomFloat(-1,1);
        this.pos6 = getRandomFloat(-1,1);
        this.pos7 = getRandomFloat(-1,1);
        this.pos8 = getRandomFloat(-1,1);
        this.pos9 = getRandomFloat(-1,1);

    }

    initTextures(){
    }
    display() {
        const i = 4;
        this.scene.pushMatrix();

        this.scene.pushMatrix()
        this.scene.translate(0 + this.pos1, 0, this.pos1)
        this.scene.scale(1, 1, 1)
        this.tree1.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*1 + this.pos2, 0, this.pos2)
        this.scene.scale(1, 1, 1)
        this.tree2.display()
        this.scene.popMatrix()
  
        this.scene.pushMatrix()
        this.scene.translate(i*2 + this.pos3, 0, this.pos3)
        this.scene.scale(1, 1, 1)
        this.tree3.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*3 + this.pos4, 0, this.pos4)
        this.scene.scale(1, 1, 1)
        this.tree4.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*4 + this.pos5, 0, this.pos5)
        this.scene.scale(1, 1, 1)
        this.tree5.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*5 + this.pos6, 0, this.pos6)
        this.scene.scale(1, 1, 1)
        this.tree6.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*6 + this.pos7, 0, this.pos7)
        this.scene.scale(1, 1, 1)
        this.tree7.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*7 + this.pos8, 0, this.pos8)
        this.scene.scale(1, 1, 1)
        this.tree8.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*8 + this.pos9, 0, this.pos9)
        this.scene.scale(1, 1, 1)
        this.tree9.display()
        this.scene.popMatrix()

  
  
      this.scene.popMatrix();
    }

    updateBuffers() {}

    enableNormalViz() {
        this.tree1.enableNormalViz()
        this.tree2.enableNormalViz()
        this.tree3.enableNormalViz()
        this.tree4.enableNormalViz()
        this.tree5.enableNormalViz()
        this.tree6.enableNormalViz()
        this.tree7.enableNormalViz()
        this.tree8.enableNormalViz()
        this.tree9.enableNormalViz()
        
    }
    disableNormalViz() {
        this.tree1.disableNormalViz()
        this.tree2.disableNormalViz()
        this.tree3.disableNormalViz()
        this.tree4.disableNormalViz()
        this.tree5.disableNormalViz()
        this.tree6.disableNormalViz()
        this.tree7.disableNormalViz()
        this.tree8.disableNormalViz()
        this.tree9.disableNormalViz()
        
        
    }

}

function getRandomFloat(min, max) {
    const str = (Math.random() * (max - min) + min);
  
    return parseFloat(str);
  }