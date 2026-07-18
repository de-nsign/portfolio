import { career } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";
import ProjectLogo from "./ProjectLogo";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 py-1">
      <span className="w-28 shrink-0 text-[16px] text-neutral-400">{label}</span>
      <span className="text-[16px] text-ink">{children}</span>
    </div>
  );
}

export default function Career() {
  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <SectionHeader title="Career Path" count={5} />

      <div className="mt-6 divide-y divide-neutral-100">
        {career.map((c) => (
          <div
            key={c.company}
            className="flex items-start justify-between gap-6 py-8"
          >
            <div>
              <Row label="Company">
                <span className="font-semibold">{c.company}</span>
              </Row>
              <Row label="Role">{c.role}</Row>
              <Row label="Period">{c.period}</Row>
              {c.projects && (
                <Row label="Projects">
                  <span className="text-neutral-500">
                    {c.projects.join("  |  ")}
                  </span>
                </Row>
              )}
            </div>
            <ProjectLogo
              logo={c.logo}
              title={c.company}
              size={70}
              radius={10}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
