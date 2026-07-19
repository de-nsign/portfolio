import Image from "next/image";
import type { Project } from "@/lib/site-data";
import { latestProjects } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";
import ProjectLogo from "./ProjectLogo";

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
            <a href="#" className="block overflow-hidden rounded-2xl bg-neutral-50">
              <Image
                src={p.image}
                alt={p.title}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </a>

            <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row">
              <div className="flex gap-4">
                <ProjectLogo
                  logo={p.logo}
                  logoBg={p.logoBg}
                  logoText={p.logoText}
                  title={p.title}
                />
                <div>
                  <h3 className="text-[16px] font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-[16px] text-neutral-500">
                    {p.role} · {p.period}
                  </p>
                  <p className="mt-1 text-[16px] text-neutral-400">
                    {p.tags.join(" · ")}
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

              <div className="max-w-[496px] md:text-right">
                <p className="text-[18px] font-medium leading-[1.4] text-ink">
                  {p.description}
                </p>

                {p.metrics && (
                  <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
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

            <a
              href="#"
              className="mt-4 inline-block text-[16px] text-neutral-500 transition-colors hover:text-ink"
            >
              See Details
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
