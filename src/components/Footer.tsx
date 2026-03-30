"use client";

import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Name */}
        <div>
          <h2 className="font-display text-4xl md:text-6xl uppercase font-black leading-tight">
            Denol
          </h2>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col md:items-end gap-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-label uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-16 pt-8 border-t border-divider-dark flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <a
          href="mailto:hello@denol.com"
          className="text-sm text-white/40 hover:text-white transition-colors"
        >
          hello@denol.com
        </a>

        <div className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-label uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="text-label text-white/20">&copy;CO 2025</span>
      </div>
    </footer>
  );
}
