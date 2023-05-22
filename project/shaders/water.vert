attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float normScale;
uniform float timeFactor;
uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {
	vec3 offset = vec3(0.0, 0.0, 0.0);

	float z_offset = texture2D(uSampler2, timeFactor*0.01 * aTextureCoord).b*0.02;
	offset=vec3(0.0, 0.0, z_offset);


	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);

	vTextureCoord = aTextureCoord;

}
