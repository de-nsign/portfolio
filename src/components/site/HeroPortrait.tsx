"use client";

import { useEffect, useRef } from "react";

/* Hero portrait — a looping, muted, 1.5×-sped clip of the illustrated portrait
   (speed baked into /videos/hero-portrait.mp4). It sits on the white page with a
   very soft radial feather so every edge — hair, shoulders, the tee — dissolves
   into the background instead of ending on a hard rectangle. */

// Opaque through the centre (the face), feathering out toward every edge. The
// centre is nudged up to 44% because the face sits in the upper half of frame.
const FEATHER =
  "radial-gradient(closest-side at 50% 44%, #000 58%, rgba(0,0,0,0.55) 78%, transparent 100%)";

export default function HeroPortrait() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React can drop the muted attribute, which blocks autoplay — force it.
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src="/videos/hero-portrait.mp4"
      autoPlay
      loop
      muted
      playsInline
      aria-label="Denis"
      className="h-[280px] w-[280px] object-cover"
      style={{
        maskImage: FEATHER,
        WebkitMaskImage: FEATHER,
      }}
    />
  );
}
