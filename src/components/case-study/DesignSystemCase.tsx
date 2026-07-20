"use client";

import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Content — adapted from the essay                                    */
/*  "How I Built a Design System for Seven Brands Out of Chaos"         */
/* ------------------------------------------------------------------ */

const hero = {
  monogram: "C",
  tags: ["iGaming • design system", "web • seven brands", "2025 — Now"],
  title: "a design system for seven brands, built out of chaos",
  subtitle:
    "From a disguised single template with no structure — to a token-driven system with 28 themes, a two-file architecture and one language for designers and engineers.",
};

const problems = [
  {
    n: "01",
    title: "Seven brands, one template",
    body: "From the outside every brand looked distinct. Underneath sat a single template with no structure — everything built on groups and frames, components barely used.",
  },
  {
    n: "02",
    title: "A new button every task",
    body: "For every screen, in every file, someone drew a fresh button. Nothing was reusable — not within a brand, not across the seven.",
  },
  {
    n: "03",
    title: "Design became error-spotting",
    body: "The lead caught wrong fonts, colors and radii by eye, one at a time. The system gave nothing to lean on, so a mistake was easier to make than to avoid.",
  },
  {
    n: "04",
    title: "Every flow, seven times",
    body: "Draw KYC once, then six more by hand — almost from scratch each time. That hand-replication is where the time burned.",
  },
];

const doingMetrics = [
  { value: "7 brands", label: "on one system" },
  { value: "28 themes", label: "from two axes" },
  { value: "300k+ layers", label: "migrated" },
];

const steps = [
  {
    n: "01",
    body: "Proved the need with one demo — a Figma Variables prototype where a single toggle reskinned a whole page in a second.",
  },
  {
    n: "02",
    body: "Laid the foundation — one 4 / 8 spacing scale, a minimal set of type roles, mobile-first breakpoints (360 / 1024 / 1400+).",
  },
  {
    n: "03",
    body: "Named color by role, not shade — a semantic token grammar: property · tone · surface · step · state (bg.brand.base.500.default).",
  },
  {
    n: "04",
    body: "Broke Figma's mode limit with Token Studio — themes as an intersection of axes, tokens living in JSON under version control.",
  },
  {
    n: "05",
    body: "Migrated ~300k layers with Apply Tokens, then split into a two-file architecture — a shared, brand-free Library and isolated brand files.",
  },
];

const showcases = [
  {
    label: "01 — color & themes",
    title: "tokens, three levels",
    body: "Primitives → semantic → component. The palette can be named anything; the token names a role, not a shade.",
    image: "/images/home/vtb/ds-colors.webp",
    alt: "Color token scales across multiple brand themes",
  },
  {
    label: "02 — base / inverted",
    title: "contrast belongs to the surface",
    body: "A component doesn't know its brand or background — only whether it sits on a base or an inverted surface. The tokens resolve the real color.",
    image: "/images/home/vtb/ds-dark.webp",
    alt: "Dark-surface components using the base / inverted pair",
  },
  {
    label: "03 — states",
    title: "every component, every state",
    body: "Default, hover, focus, pressed, disabled — set once by the system, so picking the wrong one becomes impossible.",
    image: "/images/home/vtb/ds-states.webp",
    alt: "Component states: default, hover, active, disabled",
  },
  {
    label: "04 — atoms → blocks",
    title: "form in the library, color in the brand",
    body: "Shared components carry structure and states in bare hex; each brand file substitutes its own tokens on top.",
    image: "/images/home/vtb/ds-atoms-blocks.webp",
    alt: "Atoms and blocks organised in the shared library",
  },
];

const forEngineers = [
  "One correct variant of every component.",
  "Tokens exported as variables — fewer questions about colors and sizes.",
  "Docs explain behavior — fewer fixes after handoff.",
];

const forDesigners = [
  "New screens are assembled from ready blocks, not drawn from scratch.",
  "Dark is handled by base / inverted automatically — no separate component set.",
  "Onboarding a new designer dropped from weeks to days.",
];

const resultMetrics = [
  { value: "−1 week", label: "manual work per major feature" },
  { value: "weeks → days", label: "designer onboarding" },
  { value: "1 source", label: "design + code, in JSON" },
];

/* ------------------------------------------------------------------ */
/*  Building blocks                                                     */
/* ------------------------------------------------------------------ */

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-[220px_1fr] md:gap-x-12">
      <p className="text-[20px] font-medium text-neutral-400">{label}</p>
      <div>{children}</div>
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[28px] font-medium leading-tight tracking-tight text-ink sm:text-[32px]">
      {children}
    </h2>
  );
}

function NumberedList({ items }: { items: { n: string; body: string }[] }) {
  return (
    <div>
      {items.map((s) => (
        <div
          key={s.n}
          className="flex gap-6 border-t border-neutral-200 py-5 first:border-t-0"
        >
          <span className="shrink-0 text-[15px] font-semibold text-neutral-400">
            {s.n}
          </span>
          <p className="text-[16px] leading-[1.5] text-neutral-600">{s.body}</p>
        </div>
      ))}
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
      <p className="text-[22px] font-semibold text-ink">{value}</p>
      <p className="mt-1 text-[15px] text-neutral-500">{label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DesignSystemCase() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* Nav */}
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-8 text-[16px]">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-medium text-ink">
            Denis Artemenko
          </Link>
          <Link
            href="/"
            className="text-neutral-500 transition-colors hover:text-ink"
          >
            projects
          </Link>
        </div>
        <a
          href="https://t.me/de_nsign"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 transition-colors hover:text-ink"
        >
          contact
        </a>
      </nav>

      <main className="mx-auto max-w-[1160px] px-6 pb-32">
        {/* Hero */}
        <header className="grid grid-cols-1 gap-y-8 pt-14 md:grid-cols-[220px_1fr] md:gap-x-12 md:pt-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f0f10] text-[18px] font-semibold text-white">
                {hero.monogram}
              </span>
              <span className="text-[22px] font-semibold tracking-tight text-ink">
                Casino Library
              </span>
            </div>
            <div className="mt-5 space-y-1 text-[15px] text-neutral-400">
              {hero.tags.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>

          <div>
            <h1 className="max-w-[720px] text-[40px] font-medium leading-[1.08] tracking-tight text-ink sm:text-[52px]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-[560px] text-[18px] leading-[1.5] text-neutral-500">
              {hero.subtitle}
            </p>
          </div>
        </header>

        {/* Problem */}
        <section className="mt-32">
          <Row label="problem">
            <Heading>the product grew, the system didn&apos;t scale</Heading>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {problems.map((p) => (
                <div
                  key={p.n}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <p className="text-[15px] text-neutral-400">{p.n}</p>
                  <h3 className="mt-3 text-[19px] font-medium text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-neutral-600">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Row>
        </section>

        {/* What I did */}
        <section className="mt-32">
          <Row label="what i did">
            <Heading>from a UI-kit to a living system</Heading>
            <p className="mt-5 max-w-[620px] text-[17px] leading-[1.5] text-neutral-500">
              Built bottom-up: a foundation of spacing, type and tokens first,
              then a semantic layer, then components — and a migration the whole
              team could adopt.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {doingMetrics.map((m) => (
                <MetricCard key={m.value} value={m.value} label={m.label} />
              ))}
            </div>

            <div className="mt-12">
              <NumberedList items={steps} />
            </div>
          </Row>
        </section>

        {/* Showcases */}
        {showcases.map((s) => (
          <section key={s.label} className="mt-28">
            <Row label={s.label}>
              <h3 className="text-[24px] font-medium tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[620px] text-[16px] leading-[1.5] text-neutral-500">
                {s.body}
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.alt}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
            </Row>
          </section>
        ))}

        {/* Result */}
        <section className="mt-32">
          <Row label="result">
            <Heading>seven brands on one system</Heading>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
              <div>
                <p className="text-[15px] font-medium uppercase tracking-wider text-neutral-400">
                  for engineers
                </p>
                <NumberedList
                  items={forEngineers.map((body, i) => ({
                    n: String(i + 1).padStart(2, "0"),
                    body,
                  }))}
                />
              </div>
              <div>
                <p className="text-[15px] font-medium uppercase tracking-wider text-neutral-400">
                  for designers
                </p>
                <NumberedList
                  items={forDesigners.map((body, i) => ({
                    n: String(i + 1).padStart(2, "0"),
                    body,
                  }))}
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {resultMetrics.map((m) => (
                <MetricCard key={m.value} value={m.value} label={m.label} />
              ))}
            </div>
          </Row>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1160px] px-6 py-10">
          <div className="flex items-center justify-between">
            <Link
              href="/projects/vtb"
              className="flex items-center gap-3 text-neutral-500 transition-colors hover:text-ink"
            >
              <span aria-hidden>←</span>
              <span className="text-[15px]">previous case · VTB</span>
            </Link>
            <Link
              href="/"
              className="text-[15px] text-neutral-500 transition-colors hover:text-ink"
            >
              all projects
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-[14px] text-neutral-400">
            <div className="flex gap-6">
              <a
                href="https://t.me/de_nsign"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                telegram
              </a>
              <a
                href="mailto:denis.artemmenko@gmail.com"
                className="transition-colors hover:text-ink"
              >
                e-mail
              </a>
              <a
                href="https://www.linkedin.com/in/denys-artemenko/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                linkedin
              </a>
            </div>
            <p>2026 © Denis Artemenko</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
