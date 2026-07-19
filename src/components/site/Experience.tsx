import { experience } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <SectionHeader title="Опыт и проекты" count={experience.length} />

      <div className="mt-14 flex flex-col gap-28">
        {experience.map((e) => (
          <article key={e.slug} className="group">
            {/* Placeholder image */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100" />

            <div className="mt-6 flex flex-col gap-6 md:flex-row md:justify-between">
              {/* Left: title + meta */}
              <div className="max-w-[560px]">
                <h3 className="text-[22px] font-semibold leading-snug text-ink">
                  {e.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-neutral-500">
                  <span className="text-ink">{e.role}</span>
                  <span className="text-neutral-300">·</span>
                  <span>{e.period}</span>
                  <span className="text-neutral-300">·</span>
                  <span>{e.platforms.join(", ")}</span>
                </div>

                {e.badges && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.badges.map((b) => (
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

              {/* Right: achievements + metrics */}
              <div className="max-w-[440px] md:text-left">
                {e.achievements && (
                  <ul className="space-y-2.5">
                    {e.achievements.map((a, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-[15px] leading-relaxed text-neutral-500 before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-neutral-300"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                )}

                {e.metrics && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-neutral-200 px-3 py-1 text-[13px] leading-none text-neutral-500"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                {e.link && (
                  <a
                    href={`https://${e.link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-[15px] text-neutral-500 transition-colors hover:text-ink"
                  >
                    посмотреть →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
