"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import MeshGradient from "./MeshGradient";

function WebGLFallback() {
  return (
    <div
      className="absolute inset-0 bg-black"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, rgb(255,115,0) 0%, rgb(255,0,0) 30%, #000 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}

export default function GradientCanvas() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div
        id="gradient-canvas"
        className="absolute top-0 left-0 w-full h-[150vh] z-0"
        style={{ filter: "blur(14px)" }}
      >
        <WebGLFallback />
      </div>
    );
  }

  return (
    <div
      id="gradient-canvas"
      className="absolute top-0 left-0 w-full h-[150vh] z-0"
      style={{
        filter: "blur(14px)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true, // Allow background to show through before waves load
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <MeshGradient />
        </Suspense>
      </Canvas>
      {/* Show the yellow spot while loading, it will be hidden by the waves once compiled/rendered since the shader isn't transparent */}
      <div className="absolute inset-0 pointer-events-none -z-10" style={{
        background: "radial-gradient(ellipse at 30% 50%, rgb(255,115,0) 0%, rgb(255,0,0) 30%, transparent 70%)",
      }} />
    </div>
  );
}
