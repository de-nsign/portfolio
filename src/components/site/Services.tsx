"use client";

import { useState } from "react";
import { services, servicesIntro, servicesDeck } from "@/lib/site-data";

// Card + row geometry (px) — measured off the hellodani reference recording
const CARD_W = 96;
const CARD_H = 114;
const TILT = 13; // uniform tilt on every card, same in both states
const STEP_REST = 62; // spread apart by default
const STEP_HOVER = 42; // slide closer together on hover
const CTA_GAP = 14; // space between last card and the dashed CTA card

export default function Services() {
  const n = servicesDeck.length;
  const [hover, setHover] = useState(false);

  const step = hover ? STEP_HOVER : STEP_REST;
  // Left edge of the dashed CTA card, right after the tightened row
  const ctaLeft = (n - 1) * STEP_HOVER + CARD_W + CTA_GAP;

  return (
    <section className="mx-auto max-w-[900px] px-6 pt-32">
      <h2 className="text-[40px] font-medium leading-[1.05] tracking-tight text-ink">
        I&apos;ve got your back with…
      </h2>

      <p className="mt-6 max-w-[420px] text-[18px] leading-[1.35] text-neutral-500">
        {servicesIntro}
      </p>

      {/* Uniform slanted row: every card tilted the same angle, sitting on one
          baseline; on hover the cards just slide closer together and a dashed
          CTA card fades in at the end. */}
      <div
        className="relative mt-14 flex h-[190px] items-end overflow-visible"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {servicesDeck.map((src, i) => {
          const x = i * step;
          return (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              src={src}
              alt=""
              className="absolute bottom-0 left-0 origin-bottom rounded-2xl border-4 border-white bg-neutral-100 object-cover shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out"
              style={{
                width: CARD_W,
                height: CARD_H,
                transform: `translateX(${x}px) rotate(${TILT}deg)`,
                zIndex: i,
              }}
            />
          );
        })}

        {/* Dashed placeholder card revealed once the deck settles */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 flex items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 p-3 text-center text-[13px] font-medium leading-[1.3] text-[#e23b2e] transition-all duration-300 ease-out"
          style={{
            width: CARD_W,
            height: CARD_H,
            transform: `translateX(${hover ? ctaLeft : ctaLeft - 10}px) scale(${hover ? 1 : 0.97})`,
            opacity: hover ? 1 : 0,
            zIndex: n,
          }}
        >
          Let&apos;s make it resonate.
        </div>
      </div>

      {/* Column-major services list with dashed underlines */}
      <ul className="mt-16 grid grid-flow-col grid-cols-1 grid-rows-3 gap-x-16 sm:grid-cols-3">
        {services.map((service) => (
          <li
            key={service}
            className="border-b border-dashed border-neutral-300 py-4 text-[16px] text-ink"
          >
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}
