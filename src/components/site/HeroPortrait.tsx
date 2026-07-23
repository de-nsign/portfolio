"use client";

import { useEffect, useRef } from "react";

/* Hero portrait — a looping, muted, 1.5×-sped clip of the illustrated portrait
   (speed baked into /videos/hero-portrait.mp4). It sits on the white page with a
   very soft radial feather so every edge — hair, shoulders, the tee — dissolves
   into the background instead of ending on a hard rectangle. */

// Opaque through the whole subject, feathering out only across the outer
// margin (the video is padded with background so hair/shoulders never reach the
// fade). Centre nudged up because the face sits in the upper half of frame.
const FEATHER =
  "radial-gradient(closest-side at 50% 46%, #000 68%, rgba(0,0,0,0.5) 86%, transparent 100%)";

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
      className="h-[320px] w-[320px] object-cover"
      style={{
        maskImage: FEATHER,
        WebkitMaskImage: FEATHER,
      }}
    />
  );
}
