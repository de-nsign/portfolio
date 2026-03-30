"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import clsx from "clsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 flex items-center justify-between px-6 h-14 transition-all duration-300",
        scrolled && "backdrop-blur-md bg-black/60"
      )}
    >
      {/* Logo */}
      <a href="#" className="text-white font-display font-bold text-sm tracking-[0.2em] flex items-center">
        {/* Logo removed */}
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-nav uppercase text-white/70 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={clsx(
            "block w-5 h-px bg-white transition-transform duration-300",
            menuOpen && "rotate-45 translate-y-[4px]"
          )}
        />
        <span
          className={clsx(
            "block w-5 h-px bg-white transition-opacity duration-300",
            menuOpen && "opacity-0"
          )}
        />
        <span
          className={clsx(
            "block w-5 h-px bg-white transition-transform duration-300",
            menuOpen && "-rotate-45 -translate-y-[4px]"
          )}
        />
      </button>

      {/* Spacer for desktop layout balance */}
      <div className="hidden md:block w-8" />

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-14 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
