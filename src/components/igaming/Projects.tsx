import type { Project } from "@/lib/igaming-data";
import { latestProjects } from "@/lib/igaming-data";
import SectionHeader from "./SectionHeader";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function Projects({
  title = "Latest Projects",
  count,
  items = latestProjects,
  topPadding = "pt-24",
  framed = false,
}: {
  title?: string;
  count?: number;
  items?: Project[];
  topPadding?: string;
  /** Wrap the whole block in a black outline, like a device mockup frame. */
  framed?: boolean;
}) {
  const inner = (
    <>
      <SectionHeader title={title} count={count ?? items.length} />

      <div className="mt-14 flex flex-col gap-10">
        {items.map((p, i) => (
          <FeaturedProjectCard key={p.slug} project={p} priority={i === 0} />
        ))}
      </div>
    </>
  );

  return (
    <section className={`mx-auto max-w-[900px] px-6 ${topPadding}`}>
      {framed ? (
        <div className="rounded-[32px] border-2 border-black p-6 sm:p-8">
          {inner}
        </div>
      ) : (
        inner
      )}
    </section>
  );
}
