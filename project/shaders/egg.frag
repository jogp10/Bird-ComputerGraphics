#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec3 vNormal;

uniform sampler2D uSampler;

void main() {
    // Calculate diffuse lighting
    vec3 lightDirection = normalize(vec3(0.5, 0.7, 1.0));  // Example light direction
    float diffuse = max(dot(vNormal, lightDirection), 0.0);
    vec3 diffuseColor = vec3(1.0, 1.0, 1.0);  // Example diffuse color
    vec3 ambientColor = vec3(0.1, 0.1, 0.1);  // Example ambient color

    // Sample the texture
    vec4 texColor = texture2D(uSampler, vTextureCoord);

    // Calculate final color
    vec3 finalColor = texColor.rgb * (diffuseColor.rgb * diffuse + ambientColor);

    // Output final color
    gl_FragColor = vec4(finalColor, texColor.a);
}
