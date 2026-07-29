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
// its brand. Keyed by slug so more per-project accents can be added later.
const PURPLE_WASH =
  "linear-gradient(to top, #a069d6 0%, #b98ce6 34%, #e7d6f6 66%, #ffffff 100%)";
const WASH_BY_SLUG: Record<string, string> = {
  vtb: "linear-gradient(to top, #2f62d6 0%, #7fa2ea 34%, #d8e2f7 66%, #ffffff 100%)",
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

  const wrapperClassName =
    "group relative block overflow-hidden rounded-3xl border border-[rgba(12,19,27,0.1)] bg-neutral-50";

  // Link when the project has a case page; a plain div for linkless side projects.
  const Wrapper = (disableLink ? "div" : Link) as React.ElementType;
  const wrapperProps: Record<string, unknown> = {
    onMouseEnter: () => setHovered(true),
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

      {/* Content */}
      <div className="relative z-[5] flex min-h-[460px] flex-col px-6 pt-14 text-center">
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
        {hovered && !disableLink && (
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
    </Wrapper>
  );
}
