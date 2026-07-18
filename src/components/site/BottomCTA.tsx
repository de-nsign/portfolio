"use client";

export default function BottomCTA() {
  return (
    <div className="flex items-center justify-center gap-3 pt-32">
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-[14px] text-white transition-opacity hover:opacity-90"
      >
        Rate Portfolio
        <span aria-hidden>☆</span>
      </a>
      <button
        onClick={() =>
          typeof window !== "undefined" &&
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-[14px] text-ink transition-colors hover:bg-neutral-50"
      >
        Back to Top
        <span aria-hidden>↑</span>
      </button>
    </div>
  );
}
