import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyPlane } from "./MyPlane.js";
import { MySphere } from "./MySphere.js";
import { MyBird } from "./MyBird.js";
import { MyPanorama } from "./MyPanorama.js";

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
    this.plane = new MyPlane(this,30);
    this.sphere = new MySphere(this, 50, 50);
    this.bird = new MyBird(this);
    this.panorama = new MyPanorama(this, 'images/panorama4.jpg', 50, 50);

    this.objects = [this.plane, this.sphere, this.bird, this.panorama];

    // Labels and ID's for object selection on MyInterface
    this.objectIDs = { 'Plane': 0, 'Sphere': 1 , 'Bird': 2, 'Panorama' : 3};


    //Objects connected to MyInterface
    this.displayAxis = true;
    this.displayNormals = false;
    this.scaleFactor = 1;
    this.selectedObject = 3;
    this.objectComplexity = 0.5;


    this.enableTextures(true);

    this.textureTerrain = new CGFtexture(this, "images/terrain.jpg");
    this.appearance = new CGFappearance(this);
    this.appearance.setTexture(this.textureTerrain);
    this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    this.textureEarth = new CGFtexture(this, "images/earth.jpg");
    this.earth = new CGFappearance(this);
    this.earth.setTexture(this.textureEarth);
    this.earth.setTextureWrap('REPEAT', 'REPEAT');

  }
  
  initLights() {
    this.lights[0].setPosition(15, 0, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
    // change FOV
  }

  initCameras() {
    this.camera = new CGFcamera(
      1.0,
      0.1,
      1000,
      vec3.fromValues(50, 10, 150),
      vec3.fromValues(0, 0, 0)
    );
  }

  hexToRgbA(hex)
  {
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
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }

  updateObjectComplexity(){
    this.objects[this.selectedObject].updateBuffers(this.objectComplexity);
  }

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

    // Draw axis
    if (this.displayAxis) 
        this.axis.display();

    // Draw normals
    if (this.displayNormals)
        this.objects[this.selectedObject].enableNormalViz();
    else
        this.objects[this.selectedObject].disableNormalViz();

    // ---- BEGIN Primitive drawing section
    
    this.pushMatrix();

    this.appearance.apply();

    this.translate(0,-100,0);
    this.scale(400,400,400);
    this.rotate(-Math.PI/2.0,1,0,0);
    
    if(this.selectedObject == 0) this.objects[0].display();

    this.popMatrix();
    
    
    this.pushMatrix();

    this.earth.apply();
    this.scale(200,200,200);

    if(this.selectedObject == 1) this.objects[1].display();

    this.popMatrix();


    this.pushMatrix();

    this.translate(this.camera.position[0], this.camera.position[1], this.camera.position[2]);
    if(this.selectedObject == 3) this.objects[3].display();

    this.popMatrix();

    // ---- END Primitive drawing section
  }
}
