"use client";

import { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import simplexNoise from "@/lib/shaders/simplexNoise.glsl";
import vertexShader from "@/lib/shaders/vertex.glsl";
import fragmentShader from "@/lib/shaders/fragment.glsl";

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    uSpeed: 0.1,
    uAmplitude: 0.5,
    uDensity: 0.15,
    uStrength: 5.5,
    uBrightness: 1.0,
    uColor1: new THREE.Color(255 / 255, 115 / 255, 0 / 255),
    uColor2: new THREE.Color(255 / 255, 0 / 255, 0 / 255),
    uColor3: new THREE.Color(20 / 255, 0 / 255, 0 / 255),
  },
  simplexNoise + "\n" + vertexShader,
  fragmentShader
);

extend({ GradientMaterial });

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type GradientMaterialImpl = InstanceType<typeof GradientMaterial> & {
  uTime: number;
};

declare module "@react-three/fiber" {
  interface ThreeElements {
    gradientMaterial: ThreeElements["meshStandardMaterial"] & {
      uTime?: number;
    };
  }
}

export default function MeshGradient() {
  const materialRef = useRef<GradientMaterialImpl>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
    }
  });

  return (
    <mesh position={[0, -8, 0]} rotation={[-Math.PI / 3, 0, 0]} scale={[3.1, 3.1, 1]}>
      <planeGeometry args={[10, 10, 128, 128]} />
      {/* @ts-expect-error - custom shader material */}
      <gradientMaterial ref={materialRef} side={THREE.DoubleSide} />
    </mesh>
  );
}
