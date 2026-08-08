"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { career } from "@/lib/igaming-data";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

/* ── Pixel climber sprite ───────────────────────────────── */
const PALETTE: Record<string, string> = {
  G: "#2f6b4f", // cap
  S: "#e7bd93", // head
  H: "#e7bd93", // hands
  C: "#1f1d1c", // coat
  P: "#3f8a63", // backpack accent
  B: "#2a2724", // boots
};

const TOP = [
  "..GGGG..",
  ".GGGGGG.",
  "..SSSS..",
  "..SSSS..",
  "HCCCCCCH",
  "HCCPPCCH",
  ".CCPPCC.",
  ".CCCCCC.",
];

const FRAME_A = [...TOP, "..CCCC..", ".CC.CC..", ".B....B."];
const FRAME_B = [...TOP, "..CCCC..", "..CCCC..", "..B.B..."];

function Sprite({
  grid,
  className,
}: {
  grid: string[];
  className?: string;
}) {
  const rects: JSX.Element[] = [];
  grid.forEach((row, y) => {
    row.split("").forEach((ch, x) => {
      const fill = PALETTE[ch];
      if (!fill) return;
      rects.push(
        <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} />
      );
    });
  });
  return (
    <svg
      viewBox="0 0 8 11"
      width={26}
      height={36}
      className={className}
      aria-hidden="true"
    >
      {rects}
    </svg>
  );
}

/* ── Career ladder ──────────────────────────────────────── */
export default function Career() {
  const ladderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const climberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let stopTimer: ReturnType<typeof setTimeout>;

      gsap.fromTo(
        trackRef.current,
        { top: "0%", yPercent: 0 },
        {
          top: "100%",
          yPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: ladderRef.current,
            start: "top 80%",
            end: "bottom 55%",
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const el = climberRef.current;
              if (!el || Math.abs(self.getVelocity()) < 1) return;
              el.classList.add("is-climbing");
              clearTimeout(stopTimer);
              stopTimer = setTimeout(
                () => el.classList.remove("is-climbing"),
                140
              );
            },
          },
        }
      );

      // rows fade up as they enter
      gsap.utils.toArray<HTMLElement>(".career-row").forEach((row) => {
        gsap.from(row, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 88%" },
        });
      });

      // Recompute positions once async images above/below settle,
      // so the far-down trigger doesn't use stale scroll offsets.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const t = setTimeout(refresh, 400);
      return () => {
        window.removeEventListener("load", refresh);
        clearTimeout(t);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mx-auto max-w-[900px] px-6 pt-32">
      <SectionHeader title="Career Ladder" count={career.length} />

      <div className="mt-10 flex gap-6 sm:gap-10">
        {/* Ladder + climber */}
        <div ref={ladderRef} className="relative w-9 shrink-0">
          <div className="ladder-rail absolute inset-0" />
          <div
            ref={trackRef}
            className="absolute inset-x-0 top-0 flex justify-center"
          >
            <div ref={climberRef} className="climber relative">
              <Sprite grid={FRAME_A} className="frame-a block" />
              <Sprite
                grid={FRAME_B}
                className="frame-b absolute inset-0 block"
              />
            </div>
          </div>
        </div>

        {/* Entries */}
        <ol className="flex-1 space-y-14 sm:space-y-[72px]">
          {career.map((entry) => (
            <li key={entry.company} className="career-row">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <h3 className="text-[18px] font-semibold leading-snug text-ink">
                  {entry.role}{" "}
                  <span className="font-normal text-neutral-400">@</span>{" "}
                  {entry.company}
                </h3>
                <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-[13px] leading-none text-neutral-500">
                  {entry.period}
                </span>
              </div>
              {entry.blurb && (
                <p className="mt-2.5 max-w-[580px] text-[15px] leading-relaxed text-neutral-500">
                  {entry.blurb}
                </p>
              )}
              {entry.projects && (
                <p className="mt-2 text-[13px] uppercase tracking-wide text-neutral-400">
                  {entry.projects.join("  ·  ")}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
