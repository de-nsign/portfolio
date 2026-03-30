"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-6 pb-8 z-10"
    >
      {/* Tagline */}
      <p className="hero-tagline text-base md:text-lg mb-6 max-w-md text-white/90">
        Crafting Digital{" "}
        <em className="font-serif italic not-italic text-white">Designs</em>{" "}
        that Elevate SaaS &amp; AI Innovators
      </p>

      {/* Main Name */}
      <h1 className="hero-name font-display text-display-xl uppercase text-white font-black leading-[0.85] -tracking-wider">
        DENIS<br />ARTEMENKO
      </h1>

      {/* Bottom Row removed */}
    </section>
  );
}
