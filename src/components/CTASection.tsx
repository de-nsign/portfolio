"use client";

import MarqueeStrip from "./MarqueeStrip";

export default function CTASection() {
  const chatItems = Array.from({ length: 6 }).map((_, i) => (
    <span
      key={i}
      className="font-display text-display-md uppercase font-black text-white whitespace-nowrap"
    >
      LET&apos;S CHAT
      <span className="mx-4 text-white/30">&bull;</span>
    </span>
  ));

  return (
    <section
      id="connect"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgb(255, 115, 0) 0%, rgb(255, 0, 0) 50%, #000 100%)",
      }}
    >
      {/* Marquee Text */}
      <MarqueeStrip items={chatItems} speed={20} className="mb-16" />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
        <a
          href="#"
          className="px-8 py-4 border border-white text-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center min-w-[220px]"
        >
          Book Discovery Call
        </a>
        <a
          href="#"
          className="px-8 py-4 border border-white/30 text-white/80 uppercase text-sm tracking-widest hover:border-white hover:text-white transition-all duration-300 text-center min-w-[220px]"
        >
          Connect
        </a>
      </div>
    </section>
  );
}
