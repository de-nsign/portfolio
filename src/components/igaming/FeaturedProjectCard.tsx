"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { useRef, useState } from "react";

/* ──────────────────────────────────────────────────────────
   Featured-project card — the xiaoyanghu.com "Featured
   Projects" hover behaviour ported onto our "Latest Projects"
   cases. Default: a clean light panel (title + subtitle +
   chips + illustration). On hover:
     · the background fades up into a purple gradient
     · the native cursor is replaced by a "View project" pill
       that trails the pointer
     · the illustration scales up
     · corner stickers pop in, staggered, with a spring overshoot
   Sticker artwork is borrowed from the "My Design Toolkit"
   block as a placeholder — the real per-project illustrations
   land later; only the reveal behaviour is final here.
   Timing/springs measured from a 60fps capture (see
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

// Placeholder stickers pulled from /public/toolkit. left/top OR right/bottom
// pin it to a corner; w is rendered width, natural w×h keeps the aspect ratio.
type StickerCfg = {
  img: string;
  w: number;
  nat: [number, number];
  rot: number;
  className: string;
};
const STICKERS: StickerCfg[] = [
  {
    img: "Hc4JLMsg7E5n5Unk9Lu6LIF9UM.png",
    w: 148,
    nat: [1046, 654],
    rot: -9,
    className: "left-[2%] top-[26%]",
  },
  {
    img: "CKx0X5X2nBOksjkOGkUnUkixNLM.png",
    w: 92,
    nat: [1024, 1131],
    rot: -16,
    className: "left-[7%] bottom-[8%]",
  },
  {
    img: "11uTSPEyMSmvIjA5HXWrOzv3mHw.png",
    w: 116,
    nat: [1024, 1024],
    rot: 11,
    className: "right-[3%] top-[15%]",
  },
  {
    img: "iZjp2e9ma3ldXL4DRyRBzmpiw.png",
    w: 96,
    nat: [1024, 1160],
    rot: 15,
    className: "right-[6%] bottom-[11%]",
  },
];

const STICKER_SPRING = { type: "spring", stiffness: 420, damping: 22 } as const;

function Sticker({ cfg, index, on }: { cfg: StickerCfg; index: number; on: boolean }) {
  const h = Math.round((cfg.w * cfg.nat[1]) / cfg.nat[0]);
  return (
    <motion.div
      className={`pointer-events-none absolute z-10 ${cfg.className}`}
      style={{ width: cfg.w, height: h }}
      initial={false}
      animate={
        on
          ? { opacity: 1, scale: 1, y: 0, rotate: cfg.rot }
          : { opacity: 0, scale: 0.6, y: 14, rotate: cfg.rot * 0.4 }
      }
      transition={
        on
          ? { ...STICKER_SPRING, delay: 0.12 + index * 0.05 }
          : { duration: 0.18, ease: "easeIn" }
      }
    >
      <Image
        src={`/toolkit/${cfg.img}`}
        alt=""
        width={cfg.nat[0]}
        height={cfg.nat[1]}
        className="h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(80,40,120,0.18)]"
      />
    </motion.div>
  );
}

export default function FeaturedProjectCard({
  project,
  priority = false,
}: {
  project: CardProject;
  priority?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  // Pointer position, kept in motion values so the pill can follow without
  // re-rendering the whole card on every mouse move.
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set(e.clientX - rect.left);
    py.set(e.clientY - rect.top);
  }

  return (
    <Link
      ref={ref}
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-neutral-50 [--pill:0px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}
      style={{ cursor: hovered ? "none" : undefined }}
    >
      {/* Purple gradient wash — fades up from the bottom on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #a069d6 0%, #b98ce6 34%, #e7d6f6 66%, #ffffff 100%)",
        }}
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.26, ease: "easeOut" }}
      />

      {/* Stickers */}
      {STICKERS.map((s, i) => (
        <Sticker key={s.img} cfg={s} index={i} on={hovered} />
      ))}

      {/* Content */}
      <div className="relative z-[5] flex min-h-[460px] flex-col px-6 pt-14 text-center">
        <h3 className="mx-auto max-w-[640px] text-[28px] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[32px]">
          {project.title}
        </h3>
        <p className="mx-auto mt-3 max-w-[520px] text-[16px] leading-relaxed text-neutral-500">
          {project.role} · {project.period}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/15 bg-white/40 px-3.5 py-1 text-[14px] text-neutral-600 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Illustration — scales up on hover (placeholder: project cover) */}
        <motion.div
          className="mt-auto w-full origin-bottom pt-10"
          initial={false}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {project.image ? (
            <div className="mx-auto w-[78%] overflow-hidden rounded-t-2xl shadow-[0_24px_60px_-20px_rgba(40,20,70,0.35)]">
              <Image
                src={project.image}
                alt={`${project.title} — illustration`}
                width={1920}
                height={1080}
                className="h-auto w-full object-cover"
                priority={priority}
              />
            </div>
          ) : (
            <div className="mx-auto h-40 w-[78%] rounded-t-2xl bg-neutral-200" />
          )}
        </motion.div>
      </div>

      {/* Custom "View project" cursor pill */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-20"
            style={{ x: px, y: py }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <span className="absolute left-3 top-3 whitespace-nowrap rounded-full bg-neutral-900 px-5 py-3 text-[15px] font-medium text-white shadow-lg">
              View project
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
