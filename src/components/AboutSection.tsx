"use client";

import { ABOUT_TABS, ABOUT_CONTENT, FEATURED_IN } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-24 md:py-32">
      {/* Section Title */}
      <div className="overflow-hidden px-6 mb-16">
        <h2 className="font-display text-display-lg uppercase font-black whitespace-nowrap section-title">
          About Denol
        </h2>
      </div>

      {/* Tab Labels */}
      <div className="grid grid-cols-5 border-t border-b border-divider-dark mb-16 overflow-x-auto">
        {ABOUT_TABS.map((tab) => (
          <div
            key={tab}
            className="py-4 text-label uppercase tracking-widest text-white/30 text-center border-r border-divider-dark last:border-r-0 whitespace-nowrap"
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Text Blocks */}
        <div className="space-y-16">
          {ABOUT_CONTENT.map((block) => (
            <div key={block.label}>
              <span className="text-label uppercase tracking-widest text-white/30 block mb-3">
                {block.label}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {block.heading}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-lg">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Portrait Placeholder */}
        <div className="relative">
          <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm overflow-hidden sticky top-24">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-label uppercase tracking-widest text-white/20">
                Portrait
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured In */}
      <div className="px-6 mt-24 pt-12 border-t border-divider-dark">
        <span className="text-label uppercase tracking-widest text-white/30 block mb-6">
          FEATURED IN
        </span>
        <div className="flex flex-wrap gap-8">
          {FEATURED_IN.map((name) => (
            <span
              key={name}
              className="text-sm text-white/40 uppercase tracking-wider"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
