"use client";

import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import SectionHeader from "./SectionHeader";

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ──────────────────────────────────────────────────────────
   "My Design Toolkit" — 1:1 rebuild of the reference Framer
   block. A board (bg image) holds three tilted "folders" that
   open on hover — the 3D front flap hinges down while the
   screenshots RISE out of the pocket and FAN outward on an
   arc — plus seven draggable sticker badges that spring back
   to their slot. Folder/sticker positions ride scroll
   progress continuously (spring-chased), like the original.

   Geometry, springs and drag props were extracted from the
   production Framer bundle and a frame-accurate video capture
   of the original (see .context/toolkit + keyframes).

   NOTE: every screenshot and sticker image in /public/toolkit
   is the REFERENCE AUTHOR'S OWN artwork, used here purely as a
   placeholder — replace all of it with your own work before
   shipping.
   ────────────────────────────────────────────────────────── */

const A = "/toolkit/";
const BOARD_W = 868;
const BOARD_H = 500;

/* Folder-open motion, measured from the video (≈430–460ms total, no bounce):
   the screens first rise STRAIGHT UP out of the pocket, then swing outward and
   rotate into the fan. Achieved with per-property springs — y + scale ride the
   fast spring (with the flap and chip), x + rotate ride a slower one, so every
   shot traces an arc. Per-shot stagger 40ms, rear shot first. */
const SPRING_FAST = { type: "spring", stiffness: 500, damping: 40 } as const;
const SPRING_SLOW = { type: "spring", stiffness: 200, damping: 26 } as const;
const shotTransition = (i: number) => ({
  y: { ...SPRING_FAST, delay: i * 0.04 },
  scale: { ...SPRING_FAST, delay: i * 0.04 },
  x: { ...SPRING_SLOW, delay: i * 0.04 },
  rotate: { ...SPRING_SLOW, delay: i * 0.04 },
});

// Scroll-progress spring — every scroll tick nudges the target; children chase
// it with slight lag + overshoot, so folders and stickers visibly bob while
// scrolling (and get pulled back down when scrolling back up).
const SCROLL_SPRING = { stiffness: 120, damping: 22 } as const;
// Sticker out-pose y offsets, cycled by index.
const STICKER_OUT_Y = [40, 56, 72] as const;

// Folder reference box (the back panel), against which every layer resolves.
const FW = 238;
const FH = 190;

const FLAP_SHADOW =
  "inset 0px 2px 0px 0px rgba(255,255,255,1)," +
  "0.398px 0.398px 0.563px -0.875px rgba(0,0,0,0.17)," +
  "1.207px 1.207px 1.707px -1.75px rgba(0,0,0,0.16)," +
  "3.191px 3.191px 4.513px -2.625px rgba(0,0,0,0.14)," +
  "10px 10px 14.142px -3.5px rgba(0,0,0,0.08)";
// same list, all alpha → 0, so the spring can interpolate shadow → none on open.
const FLAP_SHADOW_NONE =
  "inset 0px 2px 0px 0px rgba(255,255,255,0)," +
  "0.398px 0.398px 0.563px -0.875px rgba(0,0,0,0)," +
  "1.207px 1.207px 1.707px -1.75px rgba(0,0,0,0)," +
  "3.191px 3.191px 4.513px -2.625px rgba(0,0,0,0)," +
  "10px 10px 14.142px -3.5px rgba(0,0,0,0)";

// Inline circular monogram from the bundle (viewBox 0 0 50 50), used as the flap logo.
const MONOGRAM_PATH =
  "M 50 25 C 50 38.807 38.807 50 25 50 C 11.193 50 0 38.807 0 25 C 0 11.193 11.193 0 25 0 C 38.807 0 50 11.193 50 25 Z M 23.148 4.63 C 12.048 5.125 4.63 14.056 4.63 25 C 4.63 35.944 12.048 44.875 23.148 45.37 L 23.148 30.562 L 17.925 25 L 23.148 19.438 Z M 19.444 41.035 C 12.719 39.063 8.333 32.817 8.333 25 C 8.333 17.183 12.719 10.936 19.444 8.964 L 19.444 17.971 L 12.844 25 L 19.444 32.028 Z M 26.852 4.63 L 26.852 45.37 C 37.846 45.37 45.37 36.25 45.37 25 C 45.37 13.75 37.846 4.63 26.852 4.63 Z M 41.587 26.852 C 40.959 34.13 36.634 39.613 30.556 41.198 L 30.556 26.852 Z M 30.556 8.801 C 36.634 10.386 40.959 15.87 41.587 23.148 L 30.556 23.148 Z";

/* A shot's layout box IS its OPEN pose (folder-local px, keyframes 04/05/06).
   The closed pose is a transform: translate (dx,dy) back into the pocket,
   closed rotation, scale 0.85 — only the top 15–25px peeks above the flap
   (flap covers y 43..190). Because y rides the fast spring and x the slow one,
   opening rises straight up first, then swings outward into the fan. */
type Shot = {
  img: string;
  box: { l: number; t: number; w: number; h: number };
  openRot: number;
  closed: { dx: number; dy: number; rot: number };
};
type FolderCfg = {
  key: string;
  label: string;
  // column placement in 868×500 design space (solved from live-DOM bboxes)
  left: number;
  top: number;
  rot: number;
  // scroll out-pose offset (design px)
  from: { x: number; y: number };
  shots: Shot[];
};

/* Open poses matched to the video keyframes: Building's two big screens end
   HIGH above the folder overlapping its top-left; Crafting fans four phones
   up-right; SaaS clusters its screens above symmetrically. Shots are listed
   rear-first (DOM order = paint order; all sit behind the flap, z 1 < 2). */
const FOLDERS: FolderCfg[] = [
  {
    key: "building",
    label: "Building Design System",
    left: 42,
    top: 39,
    rot: -10,
    from: { x: -200, y: 200 },
    shots: [
      {
        img: "QREInI4cFG7Sxb83aS477kJvL0.png",
        box: { l: -62, t: -40, w: 190, h: 134 },
        openRot: -14,
        closed: { dx: 77, dy: 53, rot: -3 },
      },
      {
        img: "sUlcdg0ICNhA0HbsHln4wgEvfA.png",
        box: { l: 10, t: -98, w: 190, h: 134 },
        openRot: -4,
        closed: { dx: 23, dy: 115, rot: 2 },
      },
    ],
  },
  {
    key: "crafting",
    label: "Crafting Graceful UI",
    left: 582,
    top: 45,
    rot: 11,
    from: { x: 200, y: 200 },
    shots: [
      {
        img: "kI71JQxzBsVksptyfXRpek7BM.png",
        box: { l: -5, t: -40, w: 70.2, h: 152.6 },
        openRot: -16,
        closed: { dx: 11.1, dy: 54, rot: 3 },
      },
      {
        img: "uBVmdxzllQCI9M7Ce5A9MJJI.png",
        box: { l: 55, t: -58, w: 70.2, h: 151.5 },
        openRot: -6,
        closed: { dx: 13.3, dy: 76, rot: -14 },
      },
      {
        img: "YJ7qr86GzNLZJKBgqvXXysLCw8U.png",
        box: { l: 115, t: -58, w: 69.9, h: 152.6 },
        openRot: 4,
        closed: { dx: 2.6, dy: 76, rot: -4 },
      },
      {
        img: "V1jZaKJbabaL9m4KLEB5Ps0XjEU.png",
        box: { l: 175, t: -40, w: 69.5, h: 151.6 },
        openRot: 12,
        closed: { dx: -11.8, dy: 54, rot: -5 },
      },
    ],
  },
  {
    key: "simplifying",
    label: "Simplifying Complex SaaS",
    left: 298,
    top: 236,
    rot: 2,
    from: { x: 0, y: 200 },
    shots: [
      // side tile — lowest z; peeks out on the left when open
      {
        img: "vA5Wzc8wqRZz4as95giX6sE7E.png",
        box: { l: -15, t: 36, w: 54, h: 142 },
        openRot: -6,
        closed: { dx: 27, dy: 12, rot: 0 },
      },
      // wide shot rising top-right
      {
        img: "UKowGBCHvLU7S6yCgNhQrem07Rw.png",
        box: { l: 97.7, t: -46.4, w: 199.8, h: 111.1 },
        openRot: 14.4,
        closed: { dx: -57.6, dy: 112, rot: 0 },
      },
      // center shot — its top peeks above the flap when closed
      {
        img: "XDZzxvEmC9OlBD1Vz8zslZiFb5Q.png",
        box: { l: 33.9, t: 39.7, w: 170.3, h: 109.5 },
        openRot: 2.3,
        closed: { dx: -21.1, dy: -20, rot: 0 },
      },
      // shot rising top-left — also peeks slightly when closed
      {
        img: "10pCEtT0QjBALkwmpZdeGGupSk.jpg",
        box: { l: -49.1, t: -19.6, w: 161, h: 80.2 },
        openRot: -16.5,
        closed: { dx: 87.6, dy: 46.6, rot: 0 },
      },
    ],
  },
];

/* Sticker placement solved from the live-DOM rotated bboxes (LIVE-GEOMETRY.md):
   height = w × imgH/imgW from the real image files, then left/top = bbox center
   − half of unrotated size. Each rotatedAABB(w,h,rot) reproduces the measured
   bbox to <1px. */
type StickerCfg = { img: string; left: number; top: number; w: number; rot: number };
const STICKERS: StickerCfg[] = [
  { img: "Hc4JLMsg7E5n5Unk9Lu6LIF9UM.png", left: 399, top: 137, w: 171, rot: -2 },
  { img: "Ow88kijPgLbHUvOTO888dkjs.png", left: 442, top: 65, w: 71, rot: 10 },
  { img: "wvOSVzlKII6YSogETR7NCKCZqAo.png", left: 294, top: 39, w: 100, rot: 8 },
  { img: "iZjp2e9ma3ldXL4DRyRBzmpiw.png", left: 562, top: 297, w: 120, rot: 14 },
  { img: "11uTSPEyMSmvIjA5HXWrOzv3mHw.png", left: 679, top: 341, w: 141, rot: -19 },
  { img: "CKx0X5X2nBOksjkOGkUnUkixNLM.png", left: 176, top: 314, w: 89, rot: -27 },
  { img: "Qr0aNvXJwmxtF65J0slT0N3I92M.png", left: 36, top: 320, w: 127, rot: -17 },
];

/* ── Folder ─────────────────────────────────────────────── */
const Folder = memo(function Folder({
  cfg,
  progress,
}: {
  cfg: FolderCfg;
  progress: MotionValue<number>;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const state = open ? "open" : "closed";

  // Continuous scroll-linked slide-in (spring-chased progress).
  const x = useTransform(progress, [0, 1], [cfg.from.x, 0]);
  const y = useTransform(progress, [0, 1], [cfg.from.y, 0]);
  const opacity = useTransform(progress, [0, 0.4], [0.001, 1]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: cfg.left,
        top: cfg.top,
        width: FW,
        rotate: cfg.rot,
        pointerEvents: "auto",
        // prefers-reduced-motion: pin the scroll-driven transforms to rest
        ...(reduce ? {} : { x, y, opacity }),
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{ gap: 26 }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* folder art — back silhouette + rising screenshots + 3D flap */}
        <div
          className="relative"
          style={{
            width: FW,
            height: FH,
            overflow: "visible",
            transformStyle: "preserve-3d",
            perspective: "2500px",
          }}
        >
          {/* back panel — the full 238×190 folder silhouette (tab notch at the
              top-left, fill #E1E3E4). This IS the folder shape, not a watermark. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={A + "u6NHrizsQWk4u5sqIM2DGhO2EI.svg"}
            alt=""
            draggable={false}
            width={FW}
            height={FH}
            className="pointer-events-none absolute inset-0 block h-full w-full"
          />

          {/* screenshots — laid out at their OPEN pose; the closed variant
              translates them down into the pocket at scale 0.85. y/scale ride
              the fast spring, x/rotate the slow one → rise, then fan. */}
          {cfg.shots.map((s, i) => (
            <motion.div
              key={cfg.key + i}
              className="absolute overflow-hidden rounded-[10px]"
              style={{
                left: s.box.l,
                top: s.box.t,
                width: s.box.w,
                height: s.box.h,
                zIndex: 1,
                border: "4px solid #fff",
                boxShadow: "0 1px 3px rgba(90,90,90,0.3), 0 4px 10px rgba(0,0,0,0.10)",
              }}
              initial={false}
              animate={state}
              variants={{
                closed: { x: s.closed.dx, y: s.closed.dy, rotate: s.closed.rot, scale: 0.85 },
                open: { x: 0, y: 0, rotate: s.openRot, scale: 1 },
              }}
              transition={shotTransition(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={A + s.img}
                alt=""
                draggable={false}
                className="pointer-events-none block h-full w-full object-cover"
              />
            </motion.div>
          ))}

          {/* front flap — hinges down on its bottom edge when open */}
          <motion.div
            className="absolute overflow-hidden"
            style={{
              left: 0,
              bottom: 0,
              width: FW,
              height: 147,
              zIndex: 2,
              borderRadius: 12,
              originY: 1,
              transformPerspective: 2500,
              transformStyle: "preserve-3d",
              willChange: "transform",
              background:
                "linear-gradient(0deg, rgb(255,255,255) 0%, rgb(250,250,250) 53.94320101351351%, rgb(229,229,231) 100%)",
            }}
            initial={false}
            animate={state}
            variants={{
              closed: { rotateX: 0, boxShadow: FLAP_SHADOW },
              open: { rotateX: -65, boxShadow: FLAP_SHADOW_NONE },
            }}
            transition={SPRING_FAST}
          >
            {/* light streak that sweeps across the flap on open */}
            <motion.div
              className="absolute"
              style={{
                left: 0,
                top: -27,
                width: 54,
                height: 172,
                backgroundColor: "#fff",
                filter: "blur(5px)",
                rotate: 15,
                opacity: 0.6,
              }}
              initial={false}
              animate={state}
              variants={{ closed: { x: -73 }, open: { x: 258 } }}
              transition={SPRING_FAST}
            />
            {/* grain / noise overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: `url(${A}rR6HYXBrMmX4cRpXfXUOvpvpB0.png)`,
                backgroundSize: "128px",
                backgroundRepeat: "repeat",
                opacity: 0.04,
              }}
            />
            {/* monogram logo */}
            <svg
              viewBox="0 0 50 50"
              className="absolute left-1/2 top-1/2"
              style={{ width: 50, height: 50, transform: "translate(-50%,-50%)" }}
              aria-hidden="true"
            >
              <path d={MONOGRAM_PATH} fill="#E0E1E3" />
            </svg>
          </motion.div>
        </div>

        {/* caption — transparent text → white on a #0080FF chip, grows from center */}
        <motion.div
          className="whitespace-nowrap text-[18px] font-medium leading-none"
          style={{ borderRadius: 4, padding: "4px 10px" }}
          initial={false}
          animate={state}
          variants={{
            closed: { backgroundColor: "rgba(0,128,255,0)", color: "rgba(12,19,27,0.6)" },
            open: { backgroundColor: "rgba(0,128,255,1)", color: "rgba(255,255,255,1)" },
          }}
          transition={SPRING_FAST}
        >
          {cfg.label}
        </motion.div>
      </div>
    </motion.div>
  );
});

/* ── Sticker ────────────────────────────────────────────── */
const Sticker = memo(function Sticker({
  cfg,
  index,
  scale,
  progress,
}: {
  cfg: StickerCfg;
  index: number;
  scale: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  // Scroll-linked bob lives on a WRAPPER — motion drag and scroll-bound
  // transforms must not share one element.
  const outY = STICKER_OUT_Y[index % STICKER_OUT_Y.length];
  const y = useTransform(progress, [0, 1], [outY, 0]);
  const opacity = useTransform(progress, [0, 0.35], [0.001, 1]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: cfg.left * scale,
        top: cfg.top * scale,
        width: cfg.w * scale,
        pointerEvents: "auto",
        ...(reduce ? {} : { y, opacity }),
      }}
    >
      {/* draggable layer — pointer maps 1:1 (this overlay is unscaled) */}
      <motion.div
        style={{ rotate: cfg.rot, cursor: "grab" }}
        drag={!reduce}
        dragMomentum={false}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }}
        whileTap={{ cursor: "grabbing" }}
        onMouseDown={(e) => e.preventDefault()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={A + cfg.img}
          alt=""
          draggable={false}
          className="pointer-events-none block w-full select-none [-webkit-touch-callout:none] [-webkit-user-drag:none]"
        />
      </motion.div>
    </motion.div>
  );
});

export default function Toolkit() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [ready, setReady] = useState(false);

  // Continuous scroll binding: progress 0 when the section top hits the
  // viewport bottom, 1 when the section center reaches the viewport center.
  // Above 1 everything rests at 0; scrolling back up pulls children back
  // toward their out poses. Spring-smoothed → slight lag + overshoot.
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "center center"],
  });
  const progress = useSpring(scrollYProgress, SCROLL_SPRING);

  useIsoLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      const k = el.clientWidth / BOARD_W;
      setScale(k);
      setReady(true);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-[1056px] overflow-x-clip px-6 pt-32">
      <SectionHeader title="My Design Toolkit" />

      {/* aspect-ratio reserves the responsive height with no layout shift */}
      <div
        ref={stageRef}
        className="relative mt-10 w-full"
        style={{ aspectRatio: `${BOARD_W} / ${BOARD_H}` }}
      >
        {/* board background image — full-bleed, no gradient */}
        <div
          className="absolute inset-0 overflow-clip rounded-[24px] transition-opacity duration-150"
          style={{
            border: "1px solid rgba(12,19,27,.1)",
            opacity: ready ? 1 : 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={A + "iCKG6aQoTYwjsfslKildDzDXjWQ.png"}
            alt=""
            draggable={false}
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-fill object-top"
          />
        </div>

        {/* stickers sit BELOW the folders (folders z-20 > stickers z-10). Unscaled
            overlay so drag distance maps 1:1 to the pointer on a scaled board. */}
        <div className="absolute inset-0 overflow-clip rounded-[24px]" style={{ zIndex: 10, pointerEvents: "none" }}>
          {ready &&
            STICKERS.map((s, i) => (
              <Sticker key={s.img} cfg={s} index={i} scale={scale} progress={progress} />
            ))}
        </div>

        {/* folders — scaled to design space, painted over the stickers. The
            clipping wrapper matches the board silhouette so out-pose offsets
            never paint outside the board (reference clips too). */}
        <div
          className="absolute inset-0 overflow-clip rounded-[24px]"
          style={{ zIndex: 20, pointerEvents: "none" }}
        >
          <div
            className="absolute left-0 top-0"
            style={{
              width: BOARD_W,
              height: BOARD_H,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              pointerEvents: "none",
              opacity: ready ? 1 : 0,
            }}
          >
            {FOLDERS.map((f) => (
              <Folder key={f.key} cfg={f} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
