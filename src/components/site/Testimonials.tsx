"use client";

import { testimonials, testimonialsHeading } from "@/lib/site-data";

/* Fanned tilt + vertical offset per card, cycled across the row so the
   marquee reads as a scattered deck of quotes just like the reference. */
const TILT = [-4, 3, -2.5, 4, -3, 2.5, -4, 3];
const LIFT = [10, 44, 0, 38, 6, 40, 12, 34];

function QuoteMark() {
  return (
    <svg
      width="48"
      height="38"
      viewBox="0 0 48 38"
      fill="none"
      aria-hidden="true"
      className="mx-auto text-white/90"
    >
      <path
        d="M0 38V22.8C0 15.6 1.6 9.9 4.9 5.9 8.2 1.9 13.1-.1 19.6 0l1.8 6.2c-3.7.4-6.5 1.7-8.4 3.9-1.9 2.2-2.8 5.1-2.6 8.7H21V38H0Zm26.6 0V22.8c0-7.2 1.6-12.9 4.9-16.9C34.8 1.9 39.7-.1 46.2 0L48 6.2c-3.7.4-6.5 1.7-8.4 3.9-1.9 2.2-2.8 5.1-2.6 8.7h10.6V38H26.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Testimonials() {
  // Two copies for a seamless loop.
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="pt-32">
      <h2 className="whitespace-pre-line text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-ink">
        {testimonialsHeading}
      </h2>

      <div className="testimonials-marquee group relative mt-14 overflow-hidden">
        <div className="testimonials-track flex w-max items-center gap-5 px-5">
          {loop.map((t, i) => {
            const tilt = TILT[i % TILT.length];
            const lift = LIFT[i % LIFT.length];
            return (
              <figure
                key={`${t.name}-${i}`}
                className="flex w-[300px] shrink-0 flex-col items-center rounded-[26px] bg-neutral-900 px-8 py-10 text-center shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)]"
                style={{
                  transform: `translateY(${lift}px) rotate(${tilt}deg)`,
                }}
              >
                <QuoteMark />
                <blockquote className="mt-6 text-[14px] leading-relaxed text-neutral-200">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <div className="text-[15px] font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="mt-1 text-[13px] leading-snug text-neutral-500">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
