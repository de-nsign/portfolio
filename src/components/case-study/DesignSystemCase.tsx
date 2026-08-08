"use client";

import Link from "next/link";
import type { DesignCaseData } from "@/lib/design-cases";
import FigmaEmbed from "@/components/site/FigmaEmbed";

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
      {/* Sticky left label — pins near the top while its section scrolls past,
          then releases as the next section arrives. */}
      <p className="text-[20px] font-medium text-neutral-400 md:sticky md:top-28 md:self-start">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

/** Card that lightens and follows the cursor with a soft radial spotlight. */
function SpotlightCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={handleMove}
      className={`group relative overflow-hidden rounded-2xl bg-neutral-100 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.9), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
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
    <SpotlightCard>
      <div className="p-6">
        <p className="text-[22px] font-semibold text-ink">{value}</p>
        <p className="mt-1 text-[15px] text-neutral-500">{label}</p>
      </div>
    </SpotlightCard>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DesignSystemCase({ data }: { data: DesignCaseData }) {
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
              {data.logo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={data.logo}
                  alt={`${data.brand} logo`}
                  className="h-9 w-9 rounded-lg"
                />
              ) : (
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[18px] font-semibold text-white"
                  style={{ backgroundColor: data.monogramBg }}
                >
                  {data.monogram}
                </span>
              )}
              <span className="text-[22px] font-semibold tracking-tight text-ink">
                {data.brand}
              </span>
            </div>
            <div className="mt-5 space-y-1 text-[15px] text-neutral-400">
              {data.tags.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>

          <div>
            <h1 className="max-w-[720px] text-[40px] font-medium leading-[1.08] tracking-tight text-ink sm:text-[52px]">
              {data.title}
            </h1>
            <p className="mt-6 max-w-[560px] text-[18px] leading-[1.5] text-neutral-500">
              {data.subtitle}
            </p>
          </div>
        </header>

        {/* Hero cover — a live Figma embed when set, otherwise the cover image */}
        {data.coverFigma ? (
          <div className="mt-14 md:mt-20">
            <FigmaEmbed src={data.coverFigma} title={`${data.brand} — Figma`} />
          </div>
        ) : (
          data.coverImage && (
            <div className="mt-14 overflow-hidden rounded-3xl md:mt-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.coverImage}
                alt={data.coverAlt ?? ""}
                className="w-full"
              />
            </div>
          )
        )}

        {/* Problem */}
        <section className="mt-32">
          <Row label={data.problemLabel}>
            <Heading>{data.problemHeading}</Heading>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {data.problems.map((p) => (
                <SpotlightCard key={p.n}>
                  <div className="p-6">
                    <p className="text-[15px] text-neutral-400">{p.n}</p>
                    <h3 className="mt-3 text-[19px] font-medium text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.5] text-neutral-600">
                      {p.body}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </Row>
        </section>

        {/* What I did */}
        <section className="mt-32">
          <Row label={data.doingLabel}>
            <Heading>{data.doingHeading}</Heading>
            <p className="mt-5 max-w-[620px] text-[17px] leading-[1.5] text-neutral-500">
              {data.doingDesc}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {data.doingMetrics.map((m) => (
                <MetricCard key={m.label} value={m.value} label={m.label} />
              ))}
            </div>

            <div className="mt-12">
              <NumberedList items={data.steps} />
            </div>
          </Row>
        </section>

        {/* Foundation — the spacing scale (optional) */}
        {data.foundation && (
          <section className="mt-28">
            <Row label={data.foundation.label}>
              <h3 className="text-[24px] font-medium tracking-tight text-ink">
                {data.foundation.heading}
              </h3>
              <p className="mt-3 max-w-[620px] text-[16px] leading-[1.5] text-neutral-500">
                {data.foundation.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {data.foundation.chips.map((n) => (
                  <span
                    key={n}
                    className="rounded-xl bg-neutral-100 px-4 py-2 text-[15px] font-medium tabular-nums text-ink"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </Row>
          </section>
        )}

        {/* Showcases */}
        {data.showcases.map((s) => (
          <section key={s.label} className="mt-28">
            <Row label={s.label}>
              <h3 className="text-[24px] font-medium tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[620px] text-[16px] leading-[1.5] text-neutral-500">
                {s.body}
              </p>
              {!s.image ? (
                <div className="mt-8 flex h-[280px] items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 text-[14px] text-neutral-400">
                  add image
                </div>
              ) : s.bleed ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={s.image}
                  alt={s.alt}
                  className="mt-8 w-full rounded-2xl"
                  loading="lazy"
                />
              ) : (
                <div className="mt-8 flex items-center justify-center overflow-hidden rounded-2xl bg-[#e7e8ea] p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="max-h-[420px] w-auto max-w-full"
                    loading="lazy"
                  />
                </div>
              )}
            </Row>
          </section>
        ))}

        {/* Result */}
        <section className="mt-32">
          <Row label={data.resultLabel}>
            <Heading>{data.resultHeading}</Heading>
            <p className="mt-5 max-w-[620px] text-[17px] leading-[1.5] text-neutral-500">
              {data.resultLead}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
              <div>
                <p className="text-[15px] font-medium uppercase tracking-wider text-neutral-400">
                  for engineers
                </p>
                <NumberedList
                  items={data.forEngineers.map((body, i) => ({
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
                  items={data.forDesigners.map((body, i) => ({
                    n: String(i + 1).padStart(2, "0"),
                    body,
                  }))}
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {data.resultMetrics.map((m) => (
                <MetricCard key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </Row>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1160px] px-6 py-10">
          <div className="flex items-center justify-between">
            {data.prev ? (
              <Link
                href={data.prev.href}
                className="flex items-center gap-3 text-neutral-500 transition-colors hover:text-ink"
              >
                <span aria-hidden>←</span>
                <span className="text-[15px]">{data.prev.label}</span>
              </Link>
            ) : (
              <span />
            )}
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
