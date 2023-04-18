attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float normScale;
uniform sampler2D heightMap;

varying vec2 vTextureCoord;
varying vec2 vLightMapCoord;

void main() {
	vec3 offset = vec3(0.0, 0.0, 0.0);
	float z_offset = texture2D(heightMap, aTextureCoord).g;

	offset = vec3(0.0, 0.0, z_offset)*0.35;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);

	vTextureCoord = aTextureCoord;
	vLightMapCoord = vec2(0, 1.0-z_offset);
}
