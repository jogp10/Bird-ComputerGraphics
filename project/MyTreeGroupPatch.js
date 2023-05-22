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

          this.scene.translate(this.position[0] + 4.5*(i%3) + this.pos[i], this.position[1] + 0, this.position[2] + 4.5*(i/3) + this.pos[i]/2)
          this.scene.scale(this.scale[i],this.scale[i], this.scale[i])
          this.tree[i].display()

          this.scene.popMatrix()
        }

        this.scene.scale(5,5,5)
      

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