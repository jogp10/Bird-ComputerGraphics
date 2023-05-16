import { CGFappearance, CGFobject, CGFtexture } from "../lib/CGF.js";
import { MyBillboard } from "./MyBillboard.js";

export class MyTreeGroupPatch extends CGFobject{
    constructor(scene, position) {
        super(scene);
        this.position = position;
        this.initBuffers();
        this.initTextures();
        const offset = 2;
        this.pos1 = getRandomFloat(-offset,offset);
        this.pos2 = getRandomFloat(-offset,offset);
        this.pos3 = getRandomFloat(-offset,offset);
        this.pos4 = getRandomFloat(-offset,offset);
        this.pos5 = getRandomFloat(-offset,offset);
        this.pos6 = getRandomFloat(-offset,offset);
        this.pos7 = getRandomFloat(-offset,offset);
        this.pos8 = getRandomFloat(-offset,offset);
        this.pos9 = getRandomFloat(-offset,offset);
        console.log(this.pos1 + " " + this.pos2 + " " + this.pos3 + " " + this.pos4 + " " + this.pos5 + " " + this.pos6 + " " + this.pos7 + " " + this.pos8 + " " + this.pos9)

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

  
    }
    
    initTextures(){
    }
    display() {
      let i = 4.5;
      this.scene.pushMatrix();

        this.scene.pushMatrix()
        this.scene.translate(0 + this.pos1, 0, 0 + this.pos1/2)
        this.scene.scale(1, 1, 1)
        this.tree1.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*1 + this.pos2, 0, 0 + this.pos2/2)
        this.scene.scale(1, 1, 1)
        this.tree2.display()
        this.scene.popMatrix()
  
        this.scene.pushMatrix()
        this.scene.translate(i*2 + this.pos3, 0, 0 + this.pos3/2)
        this.scene.scale(1, 1, 1)
        this.tree3.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(0 + this.pos4, 0, i + this.pos4/2)
        this.scene.scale(1, 1, 1)
        this.tree4.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i + this.pos5, 0, i + this.pos5/2)
        this.scene.scale(1, 1, 1)
        this.tree5.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*2 + this.pos6, 0, i + this.pos6/2)
        this.scene.scale(1, 1, 1)
        this.tree6.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(0 + this.pos7, 0, i*2 + this.pos7/2)
        this.scene.scale(1, 1, 1)
        this.tree7.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i + this.pos8, 0, i*2 + this.pos8/2)
        this.scene.scale(1, 1, 1)
        this.tree8.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*2 + this.pos9, 0, i*2 + this.pos9/2)
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