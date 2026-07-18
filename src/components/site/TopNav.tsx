"use client";

import { useEffect, useState } from "react";

const navLinks = ["Home", "Contacts", "Rate Portfolio", "Feed"];

export default function TopNav() {
  const [time, setTime] = useState<string>("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const t = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Tbilisi",
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 text-[13px] text-ink">
        <ul className="flex items-center gap-5">
          {navLinks.map((l) => (
            <li key={l}>
              <a href="#" className="transition-opacity hover:opacity-60">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[13px]">
          ヴラド
        </div>

        <div className="flex items-center gap-3 text-[13px] text-ink">
          <span className="tabular-nums">{time || "--:--:--"}</span>
          <span className="text-neutral-300">|</span>
          <span>Tbilisi, Georgia</span>
          <span className="text-neutral-300">|</span>
          <span>24.8°C</span>
          <span className="text-neutral-300">|</span>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="grid h-6 w-6 place-items-center rounded-full transition-opacity hover:opacity-60"
          >
            {dark ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
