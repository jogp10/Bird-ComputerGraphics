attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying vec3 vTransformedNormal;
varying mat4 vNMatrix;

void main() {
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  vTextureCoord = aTextureCoord;

  // Transform the normal vector from model space to world space.
  vTransformedNormal = normalize(mat3(uNMatrix) * aVertexNormal);
  vNMatrix = uMVMatrix;
}
