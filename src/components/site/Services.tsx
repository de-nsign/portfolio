"use client";

import { useState } from "react";
import { services, servicesIntro, servicesDeck } from "@/lib/site-data";

// Card + fan geometry (px)
const CARD_W = 132;
const CARD_H = 158;
const STEP_REST = 92; // wide splay by default
const STEP_HOVER = 78; // pulls into a tidier row on hover
const CTA_GAP = 22; // space between last card and the dashed CTA card

export default function Services() {
  const n = servicesDeck.length;
  const [hover, setHover] = useState(false);

  const step = hover ? STEP_HOVER : STEP_REST;
  // Left edge of the dashed CTA card, right after the settled deck
  const ctaLeft = (n - 1) * STEP_HOVER + CARD_W + CTA_GAP;

  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <h2 className="text-[40px] font-medium leading-[1.05] tracking-tight text-ink">
        I&apos;ve got your back with…
      </h2>

      <p className="mt-6 max-w-[420px] text-[18px] leading-[1.35] text-neutral-500">
        {servicesIntro}
      </p>

      {/* Wide fan: splayed + tilted by default, straightens into a neat row on
          hover and reveals a dashed CTA card at the end. */}
      <div
        className="relative mt-14 flex h-[240px] items-end"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {servicesDeck.map((src, i) => {
          const t = i / (n - 1) - 0.5; // -0.5 … 0.5
          const x = i * step;
          const rotate = hover ? 0 : t * 18; // fanned tilt at rest, flat on hover
          const y = hover ? 0 : t * t * 40; // gentle arch (ends dip), flat on hover
          return (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              src={src}
              alt=""
              className="absolute bottom-0 left-0 origin-bottom rounded-2xl border-[3px] border-white bg-neutral-100 object-cover shadow-[0_10px_26px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out"
              style={{
                width: CARD_W,
                height: CARD_H,
                transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                zIndex: i,
              }}
            />
          );
        })}

        {/* Dashed placeholder card revealed once the deck settles */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 flex items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 p-4 text-center text-[15px] font-medium leading-[1.3] text-[#e23b2e] transition-all duration-500 ease-out"
          style={{
            width: CARD_W,
            height: CARD_H,
            transform: `translateX(${hover ? ctaLeft : ctaLeft - 16}px) scale(${hover ? 1 : 0.96})`,
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
