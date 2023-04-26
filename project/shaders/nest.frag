precision mediump float;


uniform sampler2D uSampler;
uniform sampler2D roughnessMap;

varying vec2 vTextureCoord;
varying vec3 vTransformedNormal;
varying mat4 vNMatrix;


void main() {
  // Sample the texture to get the base color.
  vec4 baseColor = texture2D(uSampler, vTextureCoord);

  // Sample the roughness map to get the bumpiness factor.
  float roughness = texture2D(roughnessMap, vTextureCoord).r;

  // Perturb the surface normal based on the texture map and the bumpiness factor.
  vec3 perturbedNormal = vTransformedNormal + roughness * (texture2D(uSampler, vTextureCoord + vec2(0.01, 0.01)).rgb - texture2D(uSampler, vTextureCoord - vec2(0.01, 0.01)).rgb);

  // Transform the perturbed normal from world space back to model space.
  vec3 transformedPerturbedNormal = normalize(vec3(vNMatrix * vec4(perturbedNormal, 0.0)).xyz);

  // Compute the final color based on the perturbed normal.
  vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));  // Example light direction.
  float diffuse = max(dot(transformedPerturbedNormal, lightDirection), 0.0);
  vec3 finalColor = baseColor.rgb * diffuse;

  gl_FragColor = vec4(finalColor, baseColor.a);
}
