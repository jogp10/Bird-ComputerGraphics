import { CGFscene, CGFcamera, CGFaxis, CGFappearance} from "../lib/CGF.js";
import { MyPanorama } from "./MyPanorama.js";
import { MyTerrain } from "./MyTerrain.js";
import { MyBird } from "./MyBird.js";
import { MyBirdWing } from "./MyBirdWing.js";
import { MyBirdFoot } from "./MyBirdFoot.js";
import { MyBirdTail } from "./MyBirdTail.js";
import { MyBirdEgg } from "./MyBirdEgg.js";
import { MyBirdFeather } from "./MyBirdFeather.js";
import { MyNest} from "./MyNest.js";
import { MyBillboard } from "./MyBillboard.js";
import { MyTreeGroupPatch } from "./MyTreeGroupPatch.js";
import { MyTreeRowPatch } from "./MyTreeRowPatch.js";


/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);

    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.initObjects();

    //Objects connected to MyInterface
    this.appearance = null
    this.displayAxis = true;
    this.displayNormals = false;
    this.scaleFactor = 3;
    this.speedFactor = 1;
    this.selectedObject = 6;
    this.objectComplexity = 0.5;

    this.setDefaultAppearance();
    this.enableTextures(true);

		// force initial setup
    this.updateObjectComplexity();

		// set the scene update period
		// (to invoke the update() method every y ms or as close as possible to that )
    this.setUpdatePeriod(1000/60);
  }

  // initialize objects
  initObjects() {
    this.terrain = new MyTerrain(this,30);
    this.panorama = new MyPanorama(this, 'images/panorama.jpg', 50, 50);
    this.birdEgg = new MyBirdEgg(this, 20, 20, [0, 0, 0]);
    this.bird = new MyBird(this, 0, 0, [0, -30, 0]);
    this.testBird = new MyBird(this, 0, 0, [0, 0 , 0]);
    this.wing = new MyBirdWing(this);
    this.foot = new MyBirdFoot(this);
    this.tail = new MyBirdTail(this);
    this.egg1 = new MyBirdEgg(this, 20, 20, [Math.random() * (50) + 50, -54, Math.random() * (100) + (-40)]);
    this.egg2 = new MyBirdEgg(this, 20, 20, [Math.random() * (50) + 50, -54, Math.random() * (100) + (-40)]);
    this.egg3 = new MyBirdEgg(this, 20, 20, [Math.random() * (40) + (-100), -54, Math.random() * (40) + (-20)]);
    this.egg4 = new MyBirdEgg(this, 20, 20, [Math.random() * (30) + (-15), -54, Math.random() * (20) + (-100)]);
    this.feather = new MyBirdFeather(this, [0, 0, 0]);
    this.birdEggs = [this.egg1, this.egg2, this.egg3, this.egg4];

    this.nest = new MyNest(this, 20, 20, [53, -51, 20]);
    this.mynest = new MyNest(this, 20, 20, [0, 0, 0]);
    this.billboard = new MyBillboard(this, [0, 0, 0]);
    this.MyTreeGroupPatch = new MyTreeGroupPatch(this, [0, 0, 0]);
    this.MyTreeRowPatch = new MyTreeRowPatch(this, [0, 0, 0]);
    this.scene = 0;

    this.objects = [this.scene, this.terrain ,this.testBird,this.wing , this.foot ,this.panorama, , this.feather, this.mynest, this.tail, this.billboard, this.MyTreeGroupPatch, this.MyTreeRowPatch];

    // Labels and ID's for object selection on MyInterface
    this.objectIDs = { 'Scene': 0, 'Terrain': 1, 'Bird': 2, 'Wing': 3, 'Foot': 4, 'Panorama' : 5, 'Egg': 6, 'Feather': 7, 'Nest': 8, 'Tail': 9, 'Billboard': 10, 'TreeGroupPatch': 11, 'TreeRowPatch': 12};
  }

  // initialize lights
  initLights() {
    this.lights[0].setPosition(2, 0, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].setAmbient(0.2, 0.4, 0.8, 1.0);
    this.lights[0].enable();
    this.lights[0].update();

    this.lights[1].setPosition(-2, 0, -5, 1);
    this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[1].setAmbient(0.2, 0.4, 0.8, 1.0);
    this.lights[1].enable();
    this.lights[1].update();
  }

  initCameras() {
    this.camera = new CGFcamera(
      2*Math.PI/3,
      0.1,
      1000,
      vec3.fromValues(50, 10, 150),
      //vec3.fromValues(0, -80, 0)
      vec3.fromValues(0, 0, 0)
    );
  }

  hexToRgbA(hex) {
      var ret;
      //either we receive a html/css color or a RGB vector
      if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
          ret=[
              parseInt(hex.substring(1,3),16).toPrecision()/255.0,
              parseInt(hex.substring(3,5),16).toPrecision()/255.0,
              parseInt(hex.substring(5,7),16).toPrecision()/255.0,
              1.0
          ];
      }
      else
          ret=[
              hex[0].toPrecision()/255.0,
              hex[1].toPrecision()/255.0,
              hex[2].toPrecision()/255.0,
              1.0
          ];
      return ret;
  }

  setDefaultAppearance() {
    this.appearance = new CGFappearance(this);
    this.appearance.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.appearance.setDiffuse(1,1,1,1);
    this.appearance.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.appearance.setShininess(10.0);
  }

  updateObjectComplexity(){
    if(this.selectedObject!=0 && this.selectedObject!=6 && this.selectedObject!=3)this.objects[this.selectedObject].updateBuffers(this.objectComplexity);
  }

  updateScaleFactor(){
    this.bird.updateScaleFactor(this.scaleFactor);
  }

  checkKeys() {
    var text="Keys pressed: ";
    var keysPressed=false;

    // Check for key codes e.g. in https://keycode.info/
    if (this.gui.isKeyPressed("KeyW")) {
      text+=" W ";
      keysPressed=true;
      this.bird.accelerate(0.05);
    }

    if (this.gui.isKeyPressed("KeyS")) {
      text+=" S ";
      keysPressed=true;
      this.bird.accelerate(-0.05);
    }

    if (this.gui.isKeyPressed("KeyA")) {
      text+=" A ";
      keysPressed=true;
      this.bird.turn(2*Math.PI/200);
    }

    if (this.gui.isKeyPressed("KeyD")) {
      text+=" D ";
      keysPressed=true;
      this.bird.turn(-2*Math.PI/200);
    }

    if (this.gui.isKeyPressed("KeyR")) {
      text+=" R ";
      keysPressed=true;
      this.bird.reset();
    }

    if (this.gui.isKeyPressed("KeyP")) {
      text+=" P ";
      keysPressed=true;
      if (!this.bird.hasEgg) this.bird.pickEgg(35/60);
    }

    if (this.gui.isKeyPressed("KeyO")) {
      text+=" O ";
      keysPressed=true;
      this.bird.dropEgg();

    }

    if (keysPressed)
      console.log(text);
  }

  // called periodically (as per setUpdatePeriod() in init())
  update(t) {
    this.checkKeys();
    this.bird.update(t);
    for (var i = 0; i < this.birdEggs.length; i++) this.birdEggs[i].update(t);
  }

  distance(position1, position2) {
    return Math.sqrt(Math.pow(position1[0]-position2[0],2) + Math.pow(position1[1]-position2[1],2) + Math.pow(position1[2]-position2[2],2));
  }

	// main display function
  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

		this.lights[0].update();

    // Draw axis
    if (this.displayAxis) 
        this.axis.display();

    this.appearance.apply();


    this.scale(3,3,3);

    // Draw normals
    if (this.displayNormals) {
        if(this.selectedObject!=0 && this.selectedObject!=6 && this.selectedObject!=3)this.objects[this.selectedObject].enableNormalViz();
    } else {
        if(this.selectedObject!=0 && this.selectedObject!=6 && this.selectedObject!=3)this.objects[this.selectedObject].disableNormalViz();
    }


    // ---- BEGIN Primitive drawing section
    this.pushMatrix();
      if(this.selectedObject == 0) {
          this.pushMatrix();
            // Scene
            this.panorama.display(); // Panorama
            this.terrain.display(); // Terrain
            for(var i = 0; i < this.birdEggs.length; i++) this.birdEggs[i].display(); // Eggs
            this.bird.display(); // Bird

            this.nest.display(); // Nest
          this.popMatrix();
      }

      if(this.selectedObject == 1) {
        this.pushMatrix();
          // Terrain
          this.objects[1].display();
        this.popMatrix();
      }

      if(this.selectedObject == 2) {
        this.pushMatrix();
          // Bird
          this.objects[2].display();
        this.popMatrix();
      }

      if(this.selectedObject == 3) {
        this.pushMatrix();
          // Wing
          this.scale(5,5,5)
          this.objects[3].display();
        this.popMatrix();
      }

      if(this.selectedObject == 4) {
        this.pushMatrix();
          // Foot
          this.scale(5,5,5)
          this.objects[4].display();
        this.popMatrix();
      }

      if(this.selectedObject == 5) {
        this.pushMatrix();
          // Panorama
          this.objects[5].display();
        this.popMatrix();
      }

      if(this.selectedObject == 6) {
        this.pushMatrix();
          // Bird Egg
          this.scale(5,5,5)
          this.birdEgg.display();
      this.popMatrix();
      }

      if(this.selectedObject == 7) {
        this.pushMatrix();
          // Feather
          this.scale(5,5,5)
          this.objects[7].display();
        this.popMatrix();
      }

      if(this.selectedObject == 8) {
        this.pushMatrix();
          // Nest
          this.objects[8].display();
        this.popMatrix();
      }

      if(this.selectedObject == 9) {
        this.pushMatrix();
          // Tail
          this.scale(5,5,5)
          this.objects[9].display()
        this.popMatrix();
      }

      if(this.selectedObject == 10) {
        this.pushMatrix();
          // Billboard
          this.scale(5,5,5)
          this.objects[10].display()
        this.popMatrix();
      }

      if(this.selectedObject == 11) {
        this.pushMatrix();
          // MyTreeGroupPatch
          this.scale(5,5,5)
          this.objects[11].display()
        this.popMatrix();
      }

      if(this.selectedObject == 12) {
        this.pushMatrix();
          // MyTreeRowPatch
          this.scale(5,5,5)
          this.objects[12].display()
        this.popMatrix();
      }

    this.popMatrix();

    // ---- END Primitive drawing section

		// restore default shader (will be needed for drawing the axis in next frame)
		this.setActiveShader(this.defaultShader);
  }
}
