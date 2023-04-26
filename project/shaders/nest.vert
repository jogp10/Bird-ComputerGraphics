attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D roughnessMap;



void main() {
  vec3 offset = vec3(0.0, 0.0, 0.0);
	float axis_offset = texture2D(roughnessMap, aTextureCoord).g;

	offset = vec3(axis_offset, 0.0, axis_offset)*0.25;

  float scaleFactor = (aVertexPosition.x > 0.5 && aVertexPosition.z > 0.5) ? 1.00 : 0.75;
  vec3 scaledPosition = vec3(aVertexPosition.x, aVertexPosition.y, aVertexPosition.z);
  
  gl_Position = uPMatrix * uMVMatrix * vec4(scaledPosition + offset, 1.0);

  vTextureCoord = aTextureCoord;
}
