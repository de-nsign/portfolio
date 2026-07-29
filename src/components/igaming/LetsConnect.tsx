import MagneticLink from "./MagneticLink";

/* Let's get acquainted — ported from the "Давайте знакомиться" CTA card on
   samulenkov.com: a large rounded panel with a soft glow, a waving hand, a
   line of copy, and the three ways to reach me. */

const links = [
  {
    label: "CV",
    href: "https://drive.google.com/file/d/1FoMLH8uK4HLy3WyisldGcYLAs_FRg97P/view?usp=sharing",
  },
  { label: "Telegram", href: "https://t.me/de_nsign" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/denys-artemenko/" },
];

function ArrowUpRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="opacity-60"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function LetsConnect() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pt-32">
      <div className="relative overflow-hidden rounded-[36px] border border-black/5 bg-[#fbfaf6] px-6 py-20 text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        {/* soft radial glow, echoing the reference card */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 0%, rgba(75,107,251,0.10), transparent 70%)",
          }}
        />

        <div className="relative">
          <span className="block text-[40px] leading-none" aria-hidden>
            👋
          </span>

          <h2 className="mt-6 text-[40px] font-semibold leading-[1.1] tracking-tight text-ink">
            Let&apos;s get acquainted
          </h2>

          <p className="mx-auto mt-4 max-w-[420px] text-[17px] leading-[1.6] text-neutral-500">
            Interesting ideas and new connections start with a simple
            &ldquo;hello&rdquo;.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {links.map((l) => (
              <MagneticLink
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[16px] text-ink shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:bg-neutral-100"
              >
                {l.label}
                <ArrowUpRight />
              </MagneticLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
