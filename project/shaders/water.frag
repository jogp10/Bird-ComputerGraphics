#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
	vec4 filter = texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord);

	vec2 move = vec2(timeFactor, timeFactor);

	vec4 color = texture2D(uSampler,  move + vTextureCoord);

	gl_FragColor = color;
}
