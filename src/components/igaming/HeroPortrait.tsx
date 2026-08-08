"use client";

import { useEffect, useRef } from "react";

/* Hero portrait — a muted, 1.5×-sped clip of the illustrated portrait
   (speed baked into /videos/hero-portrait.mp4). It sits on the white page with a
   very soft radial feather so every edge — hair, shoulders, the tee — dissolves
   into the background instead of ending on a hard rectangle.

   Playback ping-pongs (boomerang): forward to the end, then reversed back to the
   start, then forward again — so it never hard-cuts / "loops". Native <video> has
   no reverse, so the reverse leg is driven by rAF scrubbing currentTime. */

// Two intersected mask layers:
//  1) a radial feather that softens the hair, sides and top into the page, and
//  2) a dedicated vertical fade for the BOTTOM — the tee is cut off by a straight
//     camera-frame edge that reaches ~86% down, far past where the symmetric
//     radial fades, so without this the cut shows as a hard horizontal line.
// Intersecting (min of both) means the tee dissolves well before its edge.
const FEATHER = [
  "radial-gradient(closest-side at 50% 46%, #000 82%, transparent 100%)",
  "linear-gradient(to bottom, #000 72%, transparent 94%)",
].join(", ");

export default function HeroPortrait() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React can drop the muted attribute, which blocks autoplay — force it.
    v.muted = true;
    v.loop = false;
    v.play().catch(() => {});

    let raf = 0;
    let last = 0;

    // Reverse leg: scrub currentTime backwards at 1× until we reach the start,
    // then hand back to normal forward playback.
    const reverseStep = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const next = v.currentTime - dt;
      if (next <= 0) {
        v.currentTime = 0;
        v.play().catch(() => {});
        return;
      }
      v.currentTime = next;
      raf = requestAnimationFrame(reverseStep);
    };

    // Forward leg finished → kick off the reverse leg.
    const onEnded = () => {
      v.pause();
      last = performance.now();
      raf = requestAnimationFrame(reverseStep);
    };

    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("ended", onEnded);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <video
      ref={ref}
      src="/videos/hero-portrait.mp4"
      autoPlay
      muted
      playsInline
      aria-label="Denis"
      className="h-[340px] w-[340px] object-cover"
      style={{
        maskImage: FEATHER,
        WebkitMaskImage: FEATHER,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
