"use client";

import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* ──────────────────────────────────────────────────────────
   "My Design Toolkit" — a scattered board of tilted cards and
   draggable sticker badges that spring back to their slot.

   Layout / rotations / interaction were measured 1:1 from the
   reference block. NOTE: the sticker artwork in /public/toolkit
   is placeholder/reference imagery — swap for your own badges
   before shipping.
   ────────────────────────────────────────────────────────── */

const A = "/toolkit/";
const BOARD_W = 868;
const BOARD_H = 500;

// [file, left, top, w, h, rotate]
type Layer = [string, number, number, number, number, number];

const cards: Layer[] = [
  ["QREInI4cFG7Sxb83aS477kJvL0.png", 60, 54, 194, 158, -4],
  ["sUlcdg0ICNhA0HbsHln4wgEvfA.png", 64, 58, 188, 148, 0],
  ["kI71JQxzBsVksptyfXRpek7BM.png", 575, 51, 105, 165, 3],
  ["uBVmdxzllQCI9M7Ce5A9MJJI.png", 650, 71, 78, 155, -14],
  ["YJ7qr86GzNLZJKBgqvXXysLCw8U.png", 693, 78, 88, 160, -4],
  ["V1jZaKJbabaL9m4KLEB5Ps0XjEU.png", 740, 83, 85, 158, -5],
  ["10pCEtT0QjBALkwmpZdeGGupSk.jpg", 322, 257, 193, 115, 6],
  ["XDZzxvEmC9OlBD1Vz8zslZiFb5Q.png", 310, 266, 174, 126, -4],
  ["vA5Wzc8wqRZz4as95giX6sE7E.png", 343, 271, 173, 100, 0],
];

const stickers: Layer[] = [
  ["wvOSVzlKII6YSogETR7NCKCZqAo.png", 284, 21, 120, 162, 8],
  ["Ow88kijPgLbHUvOTO888dkjs.png", 437, 51, 81, 76, 10],
  ["Hc4JLMsg7E5n5Unk9Lu6LIF9UM.png", 397, 128, 175, 113, -2],
  ["iZjp2e9ma3ldXL4DRyRBzmpiw.png", 549, 276, 146, 158, 12],
  ["11uTSPEyMSmvIjA5HXWrOzv3mHw.png", 656, 310, 179, 179, -19],
  ["CKx0X5X2nBOksjkOGkUnUkixNLM.png", 159, 291, 124, 128, -27],
  ["Qr0aNvXJwmxtF65J0slT0N3I92M.png", 14, 300, 172, 201, -17],
];

// [text, left, top, rotate]
const labels: [string, number, number, number][] = [
  ["Building Design System", 95, 245, -6],
  ["Simplifying Complex SaaS", 280, 395, 2],
  ["Crafting Graceful UI", 575, 235, 11],
];

/** Shared drag context: the live board scale (so pointer deltas map into
 *  board-local space), a rising z so the grabbed sticker comes to top, and a
 *  ref-counted freeze — the board holds its scale while ANY sticker is being
 *  dragged (multi-touch safe) and re-measures only when the last drag ends. */
type DragCtx = {
  scaleRef: { current: number };
  bumpZ: () => number;
  dragStart: () => void; // one sticker began dragging → freeze board scale
  dragEnd: () => void; // one sticker released → unfreeze + re-measure at count 0
};

const BASE_Z = "10"; // resting z-index for every sticker (matches the style prop)
const DRAG_THRESHOLD = 4; // px of movement before a press becomes a drag

const Sticker = memo(function Sticker({ layer, ctx }: { layer: Layer; ctx: DragCtx }) {
  const [file, left, top, w, h, rot] = layer;
  const ref = useRef<HTMLDivElement>(null);

  // All drag state and the window-level handlers live in one persistent ref.
  // Move/up/cancel are bound to WINDOW (not the element) so a release or a
  // pointer that leaves the sticker is always caught — otherwise a mouse that
  // lets go off-element would strand the sticker "stuck" to the cursor.
  const api = useRef<{
    s: {
      down: boolean; dragging: boolean; pid: number;
      px0: number; py0: number; // page-space press origin (drag anchor)
      cx0: number; cy0: number; // viewport-space press origin (threshold check)
      cx: number; cy: number; // last viewport-space pointer (for scroll re-map)
      sx: number; sy: number; dx: number; dy: number; scale: number; raf: number; k0: number;
    };
    onDown: (e: React.PointerEvent) => void;
    detach: () => void;
  } | null>(null);

  if (!api.current) {
    // Drag position is tracked in PAGE space (pageX/Y) so scrolling the page
    // mid-drag keeps the sticker under the cursor; the drag-start THRESHOLD is
    // measured in viewport space so a wheel-scroll (which moves pageY but not
    // the cursor) can't trip it. k0 = board scale frozen at drag start.
    const s = {
      down: false, dragging: false, pid: -1,
      px0: 0, py0: 0, cx0: 0, cy0: 0, cx: 0, cy: 0,
      sx: 0, sy: 0, dx: 0, dy: 0, scale: 1, raf: 0, k0: 1,
    };

    const render = () => {
      if (ref.current)
        ref.current.style.transform = `translate(${s.dx}px, ${s.dy}px) rotate(${rot}deg) scale(${s.scale})`;
    };

    const beginDrag = () => {
      s.dragging = true;
      ctx.dragStart(); // freeze board scale for the duration (ref-counted)
      s.k0 = ctx.scaleRef.current || 1;
      // anchor to the original press point so movement made before the
      // threshold was crossed is not lost
      s.sx = s.px0 / s.k0 - s.dx;
      s.sy = s.py0 / s.k0 - s.dy;
      s.scale = 1.08;
      if (ref.current) ref.current.style.zIndex = String(ctx.bumpZ());
      try {
        ref.current?.setPointerCapture(s.pid);
      } catch {
        /* pointer already gone — window listeners still track it */
      }
      render();
    };

    const settleHome = () => {
      if (prefersReducedMotion()) {
        s.dx = s.dy = 0;
        s.scale = 1;
        render();
        if (ref.current) ref.current.style.zIndex = BASE_Z;
        return;
      }
      // underdamped spring back to origin — a slight overshoot mirroring
      // Framer Motion's bouncy dragSnapToOrigin feel.
      const fx = s.dx, fy = s.dy, fs = s.scale;
      const stiffness = 350, damping = 22, mass = 1;
      let x = 0, vx = 0;
      let lastT = performance.now();
      const step = (now: number) => {
        const dt = Math.min((now - lastT) / 1000, 0.032);
        lastT = now;
        const acc = (-stiffness * (x - 1) - damping * vx) / mass;
        vx += acc * dt;
        x += vx * dt;
        s.dx = fx * (1 - x);
        s.dy = fy * (1 - x);
        s.scale = fs + (1 - fs) * x;
        render();
        if (Math.abs(1 - x) > 0.001 || Math.abs(vx) > 0.001) {
          s.raf = requestAnimationFrame(step);
        } else {
          s.dx = s.dy = 0;
          s.scale = 1;
          render();
          if (ref.current) ref.current.style.zIndex = BASE_Z; // restore resting layer
        }
      };
      s.raf = requestAnimationFrame(step);
    };

    const winMove = (e: PointerEvent) => {
      if (!s.down || e.pointerId !== s.pid) return;
      // mouse button released outside the window (over the OS bar, another
      // monitor, devtools) so we never saw pointerup — end the drag now instead
      // of letting the sticker trail a button-less cursor. Scoped to mouse:
      // some touch pointers legitimately report buttons === 0 while in contact.
      if (e.pointerType === "mouse" && e.buttons === 0) { endPress(); return; }
      s.cx = e.clientX;
      s.cy = e.clientY;
      if (!s.dragging) {
        if (Math.hypot(e.clientX - s.cx0, e.clientY - s.cy0) < DRAG_THRESHOLD) return;
        beginDrag();
      }
      s.dx = e.pageX / s.k0 - s.sx;
      s.dy = e.pageY / s.k0 - s.sy;
      render();
    };

    // wheel/keyboard scroll while dragging emits no pointermove — re-map the
    // last known pointer into page space so the sticker keeps up with it.
    const winScroll = () => {
      if (!s.dragging) return;
      s.dx = (s.cx + window.scrollX) / s.k0 - s.sx;
      s.dy = (s.cy + window.scrollY) / s.k0 - s.sy;
      render();
    };

    const endPress = () => {
      detach();
      if (!s.down) return;
      s.down = false;
      const wasDragging = s.dragging;
      s.dragging = false;
      if (wasDragging) ctx.dragEnd(); // release the freeze; re-measure at count 0
      // settle home whenever displaced — covers a real drag AND a tap that
      // interrupted an in-flight spring (which would otherwise freeze it).
      if (s.dx !== 0 || s.dy !== 0 || s.scale !== 1) settleHome();
      else if (ref.current) ref.current.style.zIndex = BASE_Z;
    };

    const winUp = (e: PointerEvent) => {
      if (e.pointerId === s.pid) endPress();
    };
    // window losing focus (Alt+Tab, tab switch) also means we won't get pointerup
    const onBlur = () => endPress();

    const detach = () => {
      window.removeEventListener("pointermove", winMove);
      window.removeEventListener("pointerup", winUp);
      window.removeEventListener("pointercancel", winUp);
      window.removeEventListener("scroll", winScroll);
      window.removeEventListener("blur", onBlur);
    };

    const onDown = (e: React.PointerEvent) => {
      if (!e.isPrimary || e.button !== 0) return; // primary button/touch only
      if (s.down) return; // ignore a second finger on the same sticker
      cancelAnimationFrame(s.raf); // interrupt any running spring (may freeze it)
      s.down = true;
      s.dragging = false;
      s.pid = e.pointerId;
      s.px0 = e.pageX;
      s.py0 = e.pageY;
      s.cx0 = e.clientX;
      s.cy0 = e.clientY;
      s.cx = e.clientX;
      s.cy = e.clientY;
      window.addEventListener("pointermove", winMove);
      window.addEventListener("pointerup", winUp);
      window.addEventListener("pointercancel", winUp);
      window.addEventListener("scroll", winScroll, { passive: true });
      window.addEventListener("blur", onBlur);
    };

    api.current = { s, onDown, detach };
  }

  // cancel any spring and drop window listeners if we unmount mid-interaction
  useEffect(() => {
    const a = api.current!;
    return () => {
      cancelAnimationFrame(a.s.raf);
      a.detach();
    };
  }, []);

  return (
    <div
      ref={ref}
      onPointerDown={api.current.onDown}
      className="absolute cursor-grab touch-pan-y select-none active:cursor-grabbing"
      style={{ left, top, width: w, height: h, transform: `rotate(${rot}deg)`, zIndex: 10 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={A + file}
        alt=""
        draggable={false}
        width={w}
        height={h}
        className="pointer-events-none block h-full w-full"
      />
    </div>
  );
});

export default function Toolkit() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [ready, setReady] = useState(false);
  const scaleRef = useRef(1);
  const zRef = useRef(100);
  const dragCountRef = useRef(0); // how many stickers are being dragged right now

  // Measure and scale the board to fill the column (up or down), matching the
  // reference block. The stage reserves height via CSS aspect-ratio, so this
  // never causes layout shift; the board only becomes visible once measured.
  // While ANY sticker is being dragged the scale is frozen so the board can't
  // rescale out from under the pointer.
  const measure = useRef(() => {
    const el = stageRef.current;
    if (!el || dragCountRef.current > 0) return;
    const k = el.clientWidth / BOARD_W;
    scaleRef.current = k;
    setScale(k);
    setReady(true);
  }).current;

  // stable across re-renders so memoized Stickers never re-render on resize
  const ctx = useMemo<DragCtx>(
    () => ({
      scaleRef,
      bumpZ: () => ++zRef.current,
      dragStart: () => {
        dragCountRef.current += 1;
      },
      dragEnd: () => {
        dragCountRef.current = Math.max(0, dragCountRef.current - 1);
        if (dragCountRef.current === 0) measure(); // apply any deferred resize
      },
    }),
    [measure],
  );

  useIsoLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <section className="mx-auto max-w-[1056px] overflow-x-clip px-6 pt-32">
      <SectionHeader title="My Design Toolkit" />

      {/* aspect-ratio reserves the correct responsive height on the server and
          the client alike — no CLS when the measured scale lands. */}
      <div
        ref={stageRef}
        className="relative mt-10 w-full"
        style={{ aspectRatio: `${BOARD_W} / ${BOARD_H}` }}
      >
        <div
          className="absolute left-0 top-0 select-none rounded-3xl transition-opacity duration-150 [-webkit-touch-callout:none]"
          style={{
            width: BOARD_W,
            height: BOARD_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            opacity: ready ? 1 : 0,
            background:
              "radial-gradient(120% 90% at 50% -10%, #ffffff 0%, #f1f1f4 55%, #e9e9ee 100%)",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.04)",
          }}
        >
          {/* background art — rounded on the image itself so the board can keep
              overflow visible; stickers can be dragged up/out over the board
              edge (the section only clips the horizontal axis). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={A + "iCKG6aQoTYwjsfslKildDzDXjWQ.png"}
            alt=""
            width={BOARD_W}
            height={BOARD_H}
            className="pointer-events-none absolute left-0 top-0 rounded-3xl"
            style={{ width: BOARD_W, height: BOARD_H }}
          />

          {/* static tilted cards */}
          {cards.map(([file, left, top, w, h, rot]) => (
            <div
              key={file}
              className="absolute overflow-hidden rounded-[10px]"
              style={{
                left,
                top,
                width: w,
                height: h,
                transform: `rotate(${rot}deg)`,
                border: "3px solid #fff",
                boxShadow: "rgba(120,120,120,.25) 0 -1px 2px 0",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={A + file}
                alt=""
                draggable={false}
                width={w}
                height={h}
                className="pointer-events-none block h-full w-full"
              />
            </div>
          ))}

          {/* caption labels */}
          {labels.map(([text, left, top, rot]) => (
            <div
              key={text}
              className="absolute whitespace-nowrap text-[18px] font-medium"
              style={{ left, top, transform: `rotate(${rot}deg)`, color: "rgba(12,19,27,.6)" }}
            >
              {text}
            </div>
          ))}

          {/* draggable stickers */}
          {stickers.map((s) => (
            <Sticker key={s[0]} layer={s} ctx={ctx} />
          ))}
        </div>
      </div>
    </section>
  );
}
