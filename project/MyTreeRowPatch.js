import { CGFappearance, CGFobject, CGFtexture } from "../lib/CGF.js";
import { MyBillboard } from "./MyBillboard.js";

export class MyTreeRowPatch extends CGFobject{
    constructor(scene, position) {
        super(scene);
        this.position = position;
        this.initBuffers();
        this.initTextures();
        this.initVariables();
    }

    initBuffers(){
        this.tree = []
        for(let i = 0; i < 6; i++){
            this.tree[i] = new MyBillboard(this.scene, [0,0,0])
        }

    }
    initVariables(){
        const max = .8;
        const min = -.8;
        const min_scale = 1;
        const max_scale = 1.5;
        this.pos = []
        this.z_pos = []
        this.scale = []


        for(let i = 0; i < 6; i++){
            this.pos[i] = getRandomFloat(min, max);
        }
        for(let i = 0; i < 6; i++){
            this.z_pos[i] = getRandomFloat(min, max);
        }
        for(let i = 0; i < 6; i++){
            this.scale[i] = getRandomFloat(min_scale,max_scale);
        }

    }


    initTextures(){
        
    }

    display() {


      
        
        this.scene.pushMatrix();
        for(let i = 0; i < 6; i++){
            this.scene.pushMatrix()

           
            this.scene.scale(this.scale[i], this.scale[i], this.scale[i])
            this.scene.translate(4*i + this.pos[i], 0, this.z_pos[i])
            this.tree[i].display()


            this.scene.popMatrix()
        }
/*
        this.scene.pushMatrix()
        this.scene.translate(0 + this.pos1, 0, this.z_pos1)
        let scale = getRandomFloat(min_scale,max_scale)
        this.scene.scale(scale, scale, scale)
        this.tree1.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*1 + this.pos2, 0, this.z_pos2)
        scale = getRandomFloat(min_scale,max_scale)
        this.scene.scale(scale, scale, scale)
        this.tree2.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*2 + this.pos3, 0, this.z_pos3)
        scale = getRandomFloat(min_scale,max_scale)
        this.scene.scale(scale, scale, scale)
        this.tree3.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*3 + this.pos4, 0, this.z_pos4)
        scale = getRandomFloat(min_scale,max_scale)
        this.scene.scale(scale, scale, scale)
        this.tree4.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*4 + this.pos5, 0, this.z_pos5)
        scale = getRandomFloat(min_scale,max_scale)
        this.scene.scale(scale, scale, scale)
        this.tree5.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(i*5 + this.pos6, 0, this.z_pos6)
        scale = getRandomFloat(min_scale,max_scale)
        this.scene.scale(scale, scale, scale)
        this.tree6.display()
        this.scene.popMatrix()*/



      this.scene.popMatrix();
    }

    updateBuffers() {}

    enableNormalViz() {
        for(let i = 0; i < this.tree.length; i++){
            this.tree[i].enableNormalViz()
        }
 

    }
    disableNormalViz() {
        for(let i = 0; i < this.tree.length; i++){
            this.tree[i].disableNormalViz()
        }

    }

}

function getRandomFloat(min, max) {
    const str = (Math.random() * (max - min) + min);

    return parseFloat(str);
  }