import type { Project } from "@/lib/igaming-data";
import { latestProjects } from "@/lib/igaming-data";
import SectionHeader from "./SectionHeader";
import FeaturedProjectCard from "./FeaturedProjectCard";

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
    <section className={`mx-auto max-w-[900px] px-6 ${topPadding}`}>
      <SectionHeader title={title} count={count ?? items.length} />

      <div className="mt-14 flex flex-col gap-10">
        {items.map((p, i) => (
          <FeaturedProjectCard key={p.slug} project={p} priority={i === 0} />
        ))}
      </div>
    </section>
  );
}
