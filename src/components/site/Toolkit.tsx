"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

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

let zTop = 100;

function Sticker({ layer }: { layer: Layer }) {
  const [file, left, top, w, h, rot] = layer;
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ dragging: false, sx: 0, sy: 0, dx: 0, dy: 0, scale: 1, raf: 0 });

  const render = () => {
    const s = state.current;
    if (ref.current)
      ref.current.style.transform = `translate(${s.dx}px, ${s.dy}px) rotate(${rot}deg) scale(${s.scale})`;
  };

  const onDown = (e: React.PointerEvent) => {
    const s = state.current;
    cancelAnimationFrame(s.raf);
    s.dragging = true;
    s.sx = e.clientX - s.dx;
    s.sy = e.clientY - s.dy;
    s.scale = 1.08;
    if (ref.current) ref.current.style.zIndex = String(++zTop);
    ref.current?.setPointerCapture(e.pointerId);
    render();
  };

  const onMove = (e: React.PointerEvent) => {
    const s = state.current;
    if (!s.dragging) return;
    s.dx = e.clientX - s.sx;
    s.dy = e.clientY - s.sy;
    render();
  };

  const onUp = () => {
    const s = state.current;
    if (!s.dragging) return;
    s.dragging = false;
    // critically-damped spring back to origin (dragSnapToOrigin feel)
    const fx = s.dx, fy = s.dy, fs = s.scale;
    const stiffness = 350, damping = 22, mass = 1;
    let x = 0, vx = 0;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.032);
      last = now;
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
      }
    };
    s.raf = requestAnimationFrame(step);
  };

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      className="absolute cursor-grab touch-none select-none active:cursor-grabbing"
      style={{ left, top, width: w, height: h, transform: `rotate(${rot}deg)`, zIndex: 10 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={A + file} alt="" draggable={false} className="pointer-events-none block h-full w-full" />
    </div>
  );
}

export default function Toolkit() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setScale(Math.min(1, el.clientWidth / BOARD_W));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <SectionHeader title="My Design Toolkit" />

      <div ref={stageRef} className="mt-10" style={{ height: BOARD_H * scale }}>
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            width: BOARD_W,
            height: BOARD_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            background:
              "radial-gradient(120% 90% at 50% -10%, #ffffff 0%, #f1f1f4 55%, #e9e9ee 100%)",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.05), 0 1px 2px rgba(0,0,0,.04)",
          }}
        >
          {/* background art */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={A + "iCKG6aQoTYwjsfslKildDzDXjWQ.png"}
            alt=""
            className="pointer-events-none absolute left-0 top-0"
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
              <img src={A + file} alt="" className="block h-full w-full" />
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
            <Sticker key={s[0]} layer={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
