import { CGFappearance, CGFobject, CGFtexture } from "../lib/CGF.js";
import { MyBillboard } from "./MyBillboard.js";

export class MyTreeGroupPatch extends CGFobject{
    constructor(scene, position) {
        super(scene);
        this.position = position;
        this.initBuffers();
        this.initTextures();
        this.pos = []
        this.z_pos = []
        this.scale = []
        const min_scale = 1;
        const max_scale = 1.5;

        const offset = 2;
        for(let i = 0; i < 9; i++){
            this.pos[i] = getRandomFloat(-offset,offset);
        }
       
        for(let i = 0; i < 9; i++){
            this.scale[i] = getRandomFloat(min_scale,max_scale);
        }
    
      }

    initBuffers(){
      this.tree = []
        for(let i = 0; i < 9; i++){
            this.tree[i] = new MyBillboard(this.scene, [0,0,0])
        }


    }

    initTextures(){
    }
    display() {
    
      this.scene.pushMatrix();

        for(let i = 0; i < 9; i++){
          this.scene.pushMatrix()
          console.log(this.pos[i])

          this.scene.translate(4.5*(i%3) + this.pos[i], 0, 4.5*(i/3) + this.pos[i]/2)
          this.scene.scale(this.scale[i], this.scale[i], this.scale[i])
          this.tree[i].display()

          this.scene.popMatrix()
        }
        /*this.scene.pushMatrix()
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
        this.scene.popMatrix()*/



      this.scene.popMatrix();
    }
    updateBuffers() {}

    enableNormalViz() {
        for(let i = 0; i < 9; i++){
            this.tree[i].enableNormalViz()
        }

    }
    disableNormalViz() {
        for(let i = 0; i < 9; i++){
            this.tree[i].disableNormalViz()
        }

    }
}

function getRandomFloat(min, max) {
  const str = (Math.random() * (max - min) + min);

  return parseFloat(str);
}