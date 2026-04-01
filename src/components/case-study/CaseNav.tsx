"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function CaseNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 flex items-center justify-between px-6 h-14 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-white/80 border-b border-divider-light"
          : "bg-white"
      )}
    >
      <Link
        href="/"
        className="text-black font-display font-bold text-sm tracking-[0.2em]"
      >
        DENOL
      </Link>

      <Link
        href="/#works"
        className="text-nav uppercase text-black/50 hover:text-black transition-colors"
      >
        All Projects
      </Link>
    </nav>
  );
}
