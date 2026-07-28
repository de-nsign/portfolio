import MagneticLink from "./MagneticLink";
import HeroPortrait from "./HeroPortrait";

const links = [
  { label: "CV", href: "https://drive.google.com/file/d/1FoMLH8uK4HLy3WyisldGcYLAs_FRg97P/view?usp=sharing" },
  { label: "Telegram", href: "https://t.me/de_nsign" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/denys-artemenko/" },
];

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="opacity-70"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pt-24 text-center">
      <HeroPortrait />

      <p className="mt-1 text-[17px] text-neutral-500">Hi, I&apos;m Denis!</p>

      <h1 className="hero-heading mt-3 max-w-[460px] py-1 text-[40px] font-semibold leading-[1.2] tracking-[-0.04em]">
        Product Designer
      </h1>

      <p className="mt-5 max-w-[460px] text-[17px] leading-[1.6] text-neutral-500">
        Seven years designing for iGaming, FinTech and complex digital
        platforms — casino UX across multiple brands, multi-brand design systems,
        CMS tooling and conversion flows that move the numbers. I turn tangled,
        multi-team product work into systems that scale, then ship them
        shoulder-to-shoulder with engineering.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {links.map((l) => (
          <MagneticLink
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-[17px] text-ink hover:bg-neutral-200"
          >
            {l.label}
            <ArrowUpRight />
          </MagneticLink>
        ))}
      </div>
    </section>
  );
}
