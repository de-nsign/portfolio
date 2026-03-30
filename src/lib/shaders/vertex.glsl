uniform float uTime;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uDensity;
uniform float uStrength;

varying vec2 vUv;
varying float vDistortion;

// simplex noise inlined via string concatenation in MeshGradient.tsx

void main() {
  vUv = uv;
  vec3 pos = position;

  float noise = snoise(vec3(
    pos.x * uDensity,
    pos.y * uDensity,
    uTime * uSpeed
  ));

  pos.z += noise * uAmplitude * uStrength;
  vDistortion = noise;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
