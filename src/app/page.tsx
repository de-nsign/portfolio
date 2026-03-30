"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MARQUEE_LOGOS } from "@/lib/constants";
import { initAllAnimations } from "@/lib/animations";

const GradientCanvas = dynamic(
  () => import("@/components/GradientCanvas"),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute top-0 left-0 w-full h-[120vh] z-0 bg-black pointer-events-none"
        style={{ filter: "blur(14px)" }}
      >
        <div className="absolute inset-0 pointer-events-none -z-10" style={{
          background: "radial-gradient(ellipse at 30% 50%, rgb(255,115,0) 0%, rgb(255,0,0) 30%, transparent 70%)",
        }} />
      </div>
    ),
  }
);

const logoItems = MARQUEE_LOGOS.map((name) => (
  <span
    key={name}
    className="text-sm uppercase tracking-widest text-black/30 font-medium whitespace-nowrap"
  >
    {name}
  </span>
));

export default function Home() {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initAllAnimations();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GradientCanvas />
      <Nav />
      <main>
        <HeroSection />
        <WorksSection />
        {/* Everything after works sits above the fixed gradient canvas */}
        <div className="relative z-10" style={{ willChange: "transform" }}>
          <MarqueeStrip
            items={logoItems}
            speed={25}
            className="py-8 bg-white border-y border-divider-light"
          />
          <ServicesSection />
        </div>
        {/* CTA has its own gradient background */}
        <div className="relative z-10">
          <CTASection />
        </div>
      </main>
      <footer className="relative z-10">
        <Footer />
      </footer>
    </>
  );
}
