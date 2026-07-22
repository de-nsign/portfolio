"use client";

import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import SectionHeader from "./SectionHeader";

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ──────────────────────────────────────────────────────────
   "My Design Toolkit" — 1:1 rebuild of the reference Framer
   block. A board (bg image) holds three tilted "folders" that
   open on hover — a 3D front flap hinges down and the project
   screenshots fan out — plus seven draggable sticker badges
   that spring back to their slot.

   Structure, geometry, springs and drag props were extracted
   from the production Framer bundle (see .context/toolkit).

   NOTE: every screenshot and sticker image in /public/toolkit
   is the REFERENCE AUTHOR'S OWN artwork, used here purely as a
   placeholder — replace all of it with your own work before
   shipping.
   ────────────────────────────────────────────────────────── */

const A = "/toolkit/";
const BOARD_W = 868;
const BOARD_H = 500;

// The one default Framer variant spring — flap, screenshots and chip all ride it.
const SPRING = { type: "spring", stiffness: 500, damping: 50, restDelta: 1 } as const;
// Entrance tween family lifted from the bundle's appear transitions.
const APPEAR_EASE = [0.44, 0, 0.56, 1] as const;

// Folder reference box (the back panel), against which every layer % resolves.
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

type Pose = { l: number; t: number; w: number; h: number };
type Shot = { img: string; closed: Pose; open: Pose };
type FolderCfg = {
  key: string;
  label: string;
  // container placement in 868×500 design space (top-left, pre-rotation).
  // Solved from the live-DOM rotated bboxes in LIVE-GEOMETRY.md: unrotated
  // column = 238 × 245 (190 folder + 26 gap + ~29 caption), bbox center =
  // column center, left/top = center − half-size.
  left: number;
  top: number;
  rot: number;
  // entrance slide-in offset (design px)
  from: { x: number; y: number };
  shots: Shot[];
};

/* Per-folder screenshot poses — closed (tucked behind the flap) → open (fanned).
   Values are derived from each folder scope's variant CSS in the Framer bundle:
   framer-bSwSo (Building), framer-h0afr (Crafting), framer-GH8u2 (Simplifying).
   Crafting's bundle template exposes 2 image slots but ships 6 screenshots, so
   its fan is spread by hand across those 6 files to match the reference visual. */
const FOLDERS: FolderCfg[] = [
  {
    key: "building",
    label: "Building Design System",
    left: 42,
    top: 39,
    rot: -10,
    from: { x: -200, y: 200 },
    shots: [
      // framer-1buykyd  &  framer-mupmqd open poses. Closed: tucked behind the
      // flap (flap covers y 43..190) with only the top edge peeking above it.
      {
        img: "QREInI4cFG7Sxb83aS477kJvL0.png",
        closed: { l: 68, t: 30, w: 70, h: 152 },
        open: { l: -20, t: 79.8, w: 80, h: 172 },
      },
      {
        img: "sUlcdg0ICNhA0HbsHln4wgEvfA.png",
        closed: { l: 152, t: 36, w: 70, h: 152 },
        open: { l: 190, t: 40, w: 85, h: 185 },
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
      { img: "uBVmdxzllQCI9M7Ce5A9MJJI.png", closed: { l: 26, t: 40, w: 96, h: 150 }, open: { l: -46, t: -18, w: 96, h: 150 } },
      { img: "kI71JQxzBsVksptyfXRpek7BM.png", closed: { l: 44, t: 36, w: 96, h: 150 }, open: { l: 2, t: -46, w: 96, h: 150 } },
      { img: "YJ7qr86GzNLZJKBgqvXXysLCw8U.png", closed: { l: 62, t: 33, w: 96, h: 150 }, open: { l: 52, t: -62, w: 96, h: 150 } },
      { img: "V1jZaKJbabaL9m4KLEB5Ps0XjEU.png", closed: { l: 80, t: 33, w: 96, h: 150 }, open: { l: 100, t: -60, w: 96, h: 150 } },
      { img: "2rB3G2nB3JGkyF9qyinDvcOgM.png", closed: { l: 98, t: 36, w: 96, h: 150 }, open: { l: 146, t: -44, w: 96, h: 150 } },
      { img: "zqaP11LIfaovJlvfquJktGRvjQ.png", closed: { l: 116, t: 40, w: 96, h: 150 }, open: { l: 192, t: -16, w: 96, h: 150 } },
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
      // framer-jcgsr0 "Image 1" — fully behind the flap when closed
      { img: "UKowGBCHvLU7S6yCgNhQrem07Rw.png", closed: { l: 55, t: 80, w: 170, h: 110 }, open: { l: 197.5, t: 9.5, w: 200, h: 128 } },
      // framer-1yyq18z "Image 2" — top peeks above the flap
      { img: "XDZzxvEmC9OlBD1Vz8zslZiFb5Q.png", closed: { l: 13, t: 33, w: 170, h: 120 }, open: { l: 119, t: 40, w: 156, h: 110 } },
      // framer-1ek70wv "Image 3" — fully behind the flap when closed
      { img: "10pCEtT0QjBALkwmpZdeGGupSk.jpg", closed: { l: 28, t: 78, w: 182, h: 110 }, open: { l: -49, t: 20.9, w: 120, h: 80 } },
      // framer-xazy22 side tile
      { img: "vA5Wzc8wqRZz4as95giX6sE7E.png", closed: { l: 12, t: 36, w: 54, h: 142 }, open: { l: 240, t: 28.75, w: 54, h: 142 } },
    ],
  },
];

/* Sticker placement solved from the live-DOM rotated bboxes (LIVE-GEOMETRY.md):
   height = w × imgH/imgW from the real image files, then left/top = bbox center
   − half of unrotated size. Each rotatedAABB(w,h,rot) reproduces the measured
   bbox to <1px (widths for wvOSVzl/iZjp2e9/11uTSPEy/Qr0aNvX were solved from
   the bboxes too — the CSS-table widths did not match the live render). */
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
const Folder = memo(function Folder({ cfg, entered }: { cfg: FolderCfg; entered: boolean }) {
  const [open, setOpen] = useState(false);
  const state = open ? "open" : "closed";

  return (
    <motion.div
      className="absolute"
      style={{
        left: cfg.left,
        top: cfg.top,
        width: FW,
        rotate: cfg.rot,
        pointerEvents: "auto",
      }}
      initial={{ x: cfg.from.x, y: cfg.from.y, opacity: 0.001 }}
      animate={entered ? { x: 0, y: 0, opacity: 1 } : { x: cfg.from.x, y: cfg.from.y, opacity: 0.001 }}
      transition={{ duration: 1.5, ease: APPEAR_EASE }}
    >
      <div
        className="flex flex-col items-center"
        style={{ gap: 26 }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* folder art — back panel + fanning screenshots + 3D flap */}
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

          {/* screenshots — closed tucked behind flap → open fanned out */}
          {cfg.shots.map((s, i) => (
            <motion.div
              key={cfg.key + i}
              className="absolute overflow-hidden rounded-[6px]"
              style={{
                zIndex: 1,
                boxShadow: "0 4px 10px rgba(0,0,0,.12)",
              }}
              initial={false}
              animate={state}
              variants={{
                closed: { left: s.closed.l, top: s.closed.t, width: s.closed.w, height: s.closed.h },
                open: { left: s.open.l, top: s.open.t, width: s.open.w, height: s.open.h },
              }}
              transition={SPRING}
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
            transition={SPRING}
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
              transition={SPRING}
            />
            {/* grain / noise overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: `url(${A}rR6HYXBrMmX4cRpXfXUOvpvpB0.png)`,
                backgroundSize: "128px",
                backgroundRepeat: "repeat",
                opacity: 0.06,
              }}
            />
            {/* monogram logo */}
            <svg
              viewBox="0 0 50 50"
              className="absolute left-1/2 top-1/2"
              style={{ width: 50, height: 50, transform: "translate(-50%,-50%)" }}
              aria-hidden="true"
            >
              <path d={MONOGRAM_PATH} fill="#D3D4D6" />
            </svg>
          </motion.div>
        </div>

        {/* caption — transparent text → white on a #0080FF chip, grows from center */}
        <motion.div
          className="whitespace-nowrap text-[18px] font-medium leading-none"
          style={{ borderRadius: 4, padding: 4 }}
          initial={false}
          animate={state}
          variants={{
            closed: { backgroundColor: "rgba(0,128,255,0)", color: "rgba(12,19,27,0.6)" },
            open: { backgroundColor: "rgba(0,128,255,1)", color: "rgba(255,255,255,1)" },
          }}
          transition={SPRING}
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
  scale,
  entered,
}: {
  cfg: StickerCfg;
  scale: number;
  entered: boolean;
}) {
  const reduce = useReducedMotion();
  // Positioned in an UNSCALED overlay (so Framer Motion's drag maps 1:1 to the
  // cursor); design-space coords are pre-multiplied by the board scale here.
  return (
    <motion.div
      style={{
        position: "absolute",
        left: cfg.left * scale,
        top: cfg.top * scale,
        width: cfg.w * scale,
        pointerEvents: "auto",
        rotate: cfg.rot,
        cursor: "grab",
      }}
      initial={{ opacity: 0.001, y: 20 }}
      animate={entered ? { opacity: 1, y: 0 } : { opacity: 0.001, y: 20 }}
      transition={{ duration: 0.4, delay: 0.2, ease: APPEAR_EASE }}
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
  );
});

export default function Toolkit() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [ready, setReady] = useState(false);
  // One entrance trigger for the whole board — per-child whileInView would fire
  // late/never for children whose initial +200y offset starts them off-screen.
  const entered = useInView(stageRef, { once: true, amount: 0.3 });

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
            STICKERS.map((s) => (
              <Sticker key={s.img} cfg={s} scale={scale} entered={entered} />
            ))}
        </div>

        {/* folders — scaled to design space, painted over the stickers. The
            clipping wrapper matches the board silhouette so pre-entrance
            offsets never paint outside the board (reference clips too). */}
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
              <Folder key={f.key} cfg={f} entered={entered} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
