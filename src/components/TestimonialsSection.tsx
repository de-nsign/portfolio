"use client";

import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-black text-white py-24 md:py-32">
      {/* Section Labels */}
      <div className="px-6 mb-16 text-center">
        <p className="text-label uppercase tracking-widest text-white/30 mb-4">
          don&apos;t just take my word for it
        </p>
        <h2 className="font-display text-display-md uppercase font-black">
          Kind Words
        </h2>
        <p className="text-label uppercase tracking-widest text-white/30 mt-4">
          happy customers
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="space-y-24 md:space-y-32 max-w-2xl mx-auto px-6">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card flex flex-col items-center text-center"
          >
            {/* Polaroid Photo */}
            <div className="bg-white p-2 mb-6 shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-[10px] text-gray-500 uppercase">
                  Photo
                </span>
              </div>
            </div>

            {/* Name & Title */}
            <p className="text-label uppercase tracking-widest text-white/60 mb-1">
              {testimonial.name}
            </p>
            <p className="text-label uppercase tracking-widest text-white/30 mb-6">
              {testimonial.title}, {testimonial.company}
            </p>

            {/* Quote */}
            <blockquote className="font-serif italic text-lg md:text-xl leading-relaxed text-white/80 max-w-md">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>

      {/* Bottom gradient transition to CTA */}
      <div className="h-[30vh] mt-16 bg-gradient-to-b from-transparent via-accent-red/20 to-accent-orange/30" />
    </section>
  );
}
