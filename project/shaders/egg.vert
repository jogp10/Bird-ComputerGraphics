attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;


void main() {
  float scaleFactor = (aVertexPosition.y > 0.0) ? 1.00 : 0.75;
  vec3 scaledPosition = vec3(aVertexPosition.x, aVertexPosition.y * scaleFactor, aVertexPosition.z);
  
  gl_Position = uPMatrix * uMVMatrix * vec4(scaledPosition, 1.0);

  vTextureCoord = aTextureCoord;
}
