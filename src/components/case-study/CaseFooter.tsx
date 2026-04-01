"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function CaseFooter() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display font-bold text-sm tracking-[0.2em]"
        >
          DENOL
        </Link>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-label uppercase text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="text-label text-white/30">
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
