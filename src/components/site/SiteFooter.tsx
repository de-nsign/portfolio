import MagneticLink from "./MagneticLink";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const leftLinks: FooterLink[] = [
  { label: "CV", href: "https://drive.google.com/file/d/1iBGz-mkw7Ws-YhkJ4aESE29iOreENcyk/view?usp=sharing", external: true },
  { label: "Telegram", href: "https://t.me/de_nsign", external: true },
];

const rightLinks: FooterLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/denys-artemenko/", external: true },
  { label: "Email", href: "mailto:denis.artemmenko@gmail.com", external: true },
];

// Subtle scattered "starfield" behind the pill, echoing colin.cv.
const stars = [
  { top: "12%", left: "6%", size: 3, o: 0.35 },
  { top: "26%", left: "17%", size: 2, o: 0.5 },
  { top: "8%", left: "28%", size: 2, o: 0.25 },
  { top: "62%", left: "9%", size: 2, o: 0.3 },
  { top: "18%", left: "40%", size: 3, o: 0.45 },
  { top: "72%", left: "34%", size: 2, o: 0.35 },
  { top: "14%", left: "54%", size: 2, o: 0.3 },
  { top: "30%", left: "62%", size: 3, o: 0.5 },
  { top: "70%", left: "58%", size: 2, o: 0.25 },
  { top: "10%", left: "72%", size: 2, o: 0.4 },
  { top: "40%", left: "80%", size: 3, o: 0.45 },
  { top: "66%", left: "86%", size: 2, o: 0.3 },
  { top: "20%", left: "92%", size: 2, o: 0.5 },
  { top: "78%", left: "76%", size: 2, o: 0.25 },
];

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
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

function FooterLinkItem({ link }: { link: FooterLink }) {
  return (
    <MagneticLink
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      strength={0.2}
      className="inline-flex items-center gap-1.5 text-[16px] text-neutral-600 hover:text-ink"
    >
      {link.label}
      {link.external && <ArrowUpRight />}
    </MagneticLink>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden px-6 pb-16 pt-20">
      {/* Starfield */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#4b6bfb]"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              opacity: s.o,
            }}
          />
        ))}
      </div>

      {/* Pill */}
      <div className="relative mx-auto flex max-w-[900px] flex-wrap items-center justify-between gap-x-8 gap-y-4 rounded-[36px] border border-black/5 bg-[#fbfaf6] px-8 py-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] md:px-10 md:py-7">
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {leftLinks.map((link) => (
            <FooterLinkItem key={link.label} link={link} />
          ))}
        </nav>

        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <span className="text-[16px] text-neutral-500">Tbilisi, Georgia</span>
          {rightLinks.map((link) => (
            <FooterLinkItem key={link.label} link={link} />
          ))}
        </nav>
      </div>
    </footer>
  );
}
