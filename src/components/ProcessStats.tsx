"use client";

import { PROCESS_STEPS, STATS } from "@/lib/constants";

export default function ProcessStats() {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      {/* Process Steps */}
      <div className="px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="process-step">
              <span className="text-label text-white/30 block mb-3">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 border-t border-divider-dark pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item text-center md:text-left">
              <span className="font-display text-display-md font-black block stat-number">
                {stat.value}
              </span>
              <span className="text-label uppercase tracking-widest text-white/40 mt-2 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
