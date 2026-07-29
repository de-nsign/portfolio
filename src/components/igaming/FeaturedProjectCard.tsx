"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { useRef, useState } from "react";

/* ──────────────────────────────────────────────────────────
   Featured-project card — the xiaoyanghu.com "Featured
   Projects" hover behaviour ported onto our "Latest Projects"
   cases. Default: a clean bordered panel (title + chips +
   illustration). On hover:
     · the background fades up into a brand gradient wash
     · the native cursor is replaced by a "View project" pill
       that trails the pointer
     · the illustration scales up
   Timing/easing measured from a 60fps capture (see
   .context/attachments/oZ845Y keyframes).
   ────────────────────────────────────────────────────────── */

type CardProject = {
  slug: string;
  title: string;
  role: string;
  period: string;
  tags: string[];
  description: string;
  image?: string;
};

// Hover gradient wash. Default is the reference purple; VTB reads blue to match
// its brand, Stroika reads construction-orange. Keyed by slug so more
// per-project accents can be added later.
const PURPLE_WASH =
  "linear-gradient(to top, #a069d6 0%, #b98ce6 34%, #e7d6f6 66%, #ffffff 100%)";
const BLUE_WASH =
  "linear-gradient(to top, #2f62d6 0%, #7fa2ea 34%, #d8e2f7 66%, #ffffff 100%)";
const ORANGE_WASH =
  "linear-gradient(to top, #e2571e 0%, #f0885a 34%, #fbddcd 66%, #ffffff 100%)";
const WASH_BY_SLUG: Record<string, string> = {
  vtb: BLUE_WASH,
  "vtb-design": BLUE_WASH,
  stroika: ORANGE_WASH,
};

// Per-slug crop for the illustration. Defaults to object-top; Stroika's hero is
// a wide fleet shot, so centre the crop to keep the machines in frame.
const IMAGE_POS_BY_SLUG: Record<string, string> = {
  stroika: "object-center",
};

// Decorative "stickers" that pop in around the illustration on hover. Cut-out
// PNGs, positioned + rotated so they peek past the illustration's edges; each
// flies in from a small offset and staggers by index. Keyed by slug.
type Sticker = {
  src: string;
  /** Position + size (absolute, relative to the card). */
  className: string;
  /** Resting rotation, degrees. */
  rotate: number;
  /** Entry offset in px before settling to 0,0. */
  from: { x: number; y: number };
};
const STICKERS_BY_SLUG: Record<string, Sticker[]> = {
  stroika: [
    {
      src: "/images/projects/stroika/stickers/crane-truck.png",
      className: "left-[-3%] top-[26%] w-[25%]",
      rotate: -8,
      from: { x: 18, y: -6 },
    },
    {
      src: "/images/projects/stroika/stickers/excavator-large.png",
      className: "right-[-4%] top-[42%] w-[25%]",
      rotate: 7,
      from: { x: -18, y: 8 },
    },
    {
      src: "/images/projects/stroika/stickers/excavator-mini.png",
      className: "bottom-[7%] left-[3%] w-[20%]",
      rotate: -6,
      from: { x: 10, y: 12 },
    },
  ],
};

export default function FeaturedProjectCard({
  project,
  priority = false,
  disableLink = false,
}: {
  project: CardProject;
  priority?: boolean;
  /** Side projects have no case page — render a static card, no link/pill. */
  disableLink?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const stickers = STICKERS_BY_SLUG[project.slug];
  const imagePos = IMAGE_POS_BY_SLUG[project.slug] ?? "object-top";
  const ref = useRef<HTMLAnchorElement>(null);
  // Pointer position, kept in motion values so the pill can follow without
  // re-rendering the whole card on every mouse move.
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  function onMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(e.clientX - rect.left);
    py.set(e.clientY - rect.top);
  }

  // Seed the pointer position on enter so the "View project" pill grows from the
  // cursor, not from the card's top-left corner (px/py default to 0,0).
  function onEnter(e: React.MouseEvent) {
    onMove(e);
    setHovered(true);
  }

  const wrapperClassName =
    "group relative block overflow-hidden rounded-3xl border border-[rgba(12,19,27,0.1)] bg-neutral-50";

  // Link when the project has a case page; a plain div for linkless side projects.
  const Wrapper = (disableLink ? "div" : Link) as React.ElementType;
  const wrapperProps: Record<string, unknown> = {
    onMouseEnter: onEnter,
    onMouseLeave: () => setHovered(false),
    onMouseMove: onMove,
  };
  if (!disableLink) {
    wrapperProps.href = `/projects/${project.slug}`;
    wrapperProps.style = { cursor: hovered ? "none" : undefined };
  }

  return (
    <Wrapper ref={ref} className={wrapperClassName} {...wrapperProps}>
      {/* Gradient wash — fades up from the bottom on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: WASH_BY_SLUG[project.slug] ?? PURPLE_WASH }}
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.26, ease: "easeOut" }}
      />

      {/* Content — fixed height so every case card is the same size */}
      <div className="relative z-[5] flex h-[560px] flex-col px-6 pt-14 text-center">
        <h3 className="mx-auto max-w-[640px] text-[28px] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[32px]">
          {project.title}
        </h3>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/15 bg-white/40 px-3.5 py-1 text-[14px] text-neutral-600 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Illustration — fills the remaining height (cropped) so cards match,
            scales up on hover. */}
        <motion.div
          className="mt-auto flex min-h-0 w-full flex-1 origin-bottom items-end pt-10"
          initial={false}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {project.image ? (
            <div className="mx-auto flex h-full w-[82%] items-center justify-center overflow-hidden rounded-[24px] border-[7px] border-black bg-black shadow-[0_24px_60px_-20px_rgba(40,20,70,0.35)]">
              <Image
                src={project.image}
                alt={`${project.title} — illustration`}
                width={1920}
                height={1080}
                className="h-full w-full rounded-[16px] object-contain"
                priority={priority}
              />
            </div>
          ) : (
            <div className="mx-auto h-full w-[82%] rounded-[24px] border-[7px] border-black bg-neutral-200" />
          )}
        </motion.div>
      </div>

      {/* Decorative machinery stickers — pop in around the illustration on hover */}
      {stickers && (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-[9]">
          {stickers.map((s, i) => (
            <motion.img
              key={s.src}
              src={s.src}
              alt=""
              className={`absolute drop-shadow-[0_16px_28px_rgba(40,20,10,0.28)] ${s.className}`}
              initial={false}
              animate={
                hovered
                  ? { opacity: 1, scale: 1, x: 0, y: 0, rotate: s.rotate }
                  : {
                      opacity: 0,
                      scale: 0.72,
                      x: s.from.x,
                      y: s.from.y,
                      rotate: s.rotate * 0.4,
                    }
              }
              transition={{
                duration: hovered ? 0.34 : 0.2,
                ease: [0.22, 1, 0.36, 1],
                delay: hovered ? i * 0.05 : 0,
              }}
            />
          ))}
        </div>
      )}

      {/* Custom "View project" cursor pill */}
      <AnimatePresence>
        {hovered && !disableLink && (
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-20"
            style={{ x: px, y: py }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-neutral-900 px-5 py-3 text-[15px] font-medium text-white shadow-lg">
              View project
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
