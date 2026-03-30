uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uBrightness;

varying vec2 vUv;
varying float vDistortion;

void main() {
  float t = (vDistortion + 1.0) * 0.5;

  vec3 color;
  if (t < 0.5) {
    color = mix(uColor1, uColor2, t * 2.0);
  } else {
    color = mix(uColor2, uColor3, (t - 0.5) * 2.0);
  }

  color *= uBrightness;
  gl_FragColor = vec4(color, 1.0);
}
