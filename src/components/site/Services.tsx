"use client";

import { useState } from "react";
import { services, servicesIntro, servicesDeck } from "@/lib/site-data";

export default function Services() {
  const n = servicesDeck.length;
  const [hover, setHover] = useState(false);

  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <h2 className="text-[40px] font-medium leading-[1.05] tracking-tight text-ink">
        I&apos;ve got your back with…
      </h2>

      <p className="mt-6 max-w-[420px] text-[18px] leading-[1.35] text-neutral-500">
        {servicesIntro}
      </p>

      {/* Left-aligned deck: fanned by default, collapses on hover */}
      <div
        className="relative mt-14 flex h-[190px] items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {servicesDeck.map((src, i) => {
          const t = i / (n - 1) - 0.5; // -0.5 … 0.5
          // fanned (default) vs collapsed (hover)
          const step = hover ? 26 : 62; // px between card centers
          const x = i * step;
          const rotate = hover ? 0 : t * 16; // deg
          const y = hover ? 0 : Math.abs(t) * 20; // arc dip
          return (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              src={src}
              alt=""
              className="absolute left-0 h-[150px] w-[116px] rounded-xl border-[3px] border-white object-cover shadow-[0_10px_26px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                zIndex: i,
              }}
            />
          );
        })}

        {/* CTA revealed when the deck collapses */}
        <span
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[15px] font-medium text-[#e23b2e] transition-opacity duration-500"
          style={{
            left: `${(n - 1) * 26 + 150}px`,
            opacity: hover ? 1 : 0,
          }}
        >
          Let&apos;s make it resonate.
        </span>
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
