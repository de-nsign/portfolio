import { sideProjects } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";
import FeaturedProjectCard from "./FeaturedProjectCard";

/* Side Projects — same featured-card layout as Latest Projects. These are
   concept explorations with no case page, so the cards don't link out. */
export default function SideProjects() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pt-32">
      <SectionHeader title="Side Projects" count={sideProjects.length} />

      <div className="mt-14 flex flex-col gap-10">
        {sideProjects.map((p) => (
          <FeaturedProjectCard key={p.slug} project={p} disableLink />
        ))}
      </div>
    </section>
  );
}
