#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec2 vLightMapCoord;

uniform sampler2D uSampler;
uniform sampler2D heightMap;
uniform sampler2D altimetry;

void main() {
	vec4 color = texture2D(uSampler,  vTextureCoord);
	
	vec4 altimetryColor = texture2D(altimetry,  vLightMapCoord);

	gl_FragColor = mix(color, altimetryColor, 0.3);
}
