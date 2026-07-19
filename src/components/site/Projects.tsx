import Image from "next/image";
import type { Project } from "@/lib/site-data";
import { latestProjects } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";
import ProjectLogo from "./ProjectLogo";

function MetaColumn({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[12px] font-normal uppercase tracking-[0.04em] text-neutral-400">
        {label}
      </span>
      <span className="text-[14px] text-ink">{value}</span>
    </div>
  );
}

export default function Projects({
  title = "Latest Projects",
  count,
  items = latestProjects,
  topPadding = "pt-24",
}: {
  title?: string;
  count?: number;
  items?: Project[];
  topPadding?: string;
}) {
  return (
    <section className={`mx-auto max-w-[1056px] px-6 ${topPadding}`}>
      <SectionHeader title={title} count={count ?? items.length} />

      <div className="mt-14 flex flex-col gap-28">
        {items.map((p) => (
          <article key={p.slug} className="group">
            {/* Text header — brand on the left, content on the right */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              {/* Left: brand */}
              <div className="flex gap-4">
                <ProjectLogo
                  logo={p.logo}
                  logoBg={p.logoBg}
                  logoText={p.logoText}
                  title={p.title}
                />
                <div>
                  <h3 className="text-[24px] font-medium leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[16px] text-neutral-500">
                    {p.role} · {p.period}
                  </p>

                  {p.badges && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-[13px] leading-none text-neutral-600"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right: description + meta columns */}
              <div className="flex flex-col gap-8">
                <p className="text-[18px] font-medium leading-[1.4] text-ink">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-x-10 gap-y-6 border-t border-neutral-100 pt-6">
                  <MetaColumn label="Year" value={p.period} />
                  <MetaColumn label="Role" value={p.role} />
                  <MetaColumn label="Focus" value={p.tags.join(", ")} />
                  <MetaColumn
                    label="View"
                    value={
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-ink"
                      >
                        See Details <span aria-hidden>↗</span>
                      </a>
                    }
                  />
                </div>

                {p.metrics && (
                  <div className="flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-neutral-200 px-3 py-1 text-[13px] leading-none text-neutral-500"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Image below the text */}
            <a
              href="#"
              className="mt-10 block overflow-hidden rounded-2xl bg-neutral-50"
            >
              <Image
                src={p.image}
                alt={p.title}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
