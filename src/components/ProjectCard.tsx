"use client";

import Link from "next/link";
import type { Project } from "@/lib/constants";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-divider-light group">
      {/* Left: Project Image */}
      <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <span className="text-gray-400 text-label uppercase tracking-widest">
            {project.name}
          </span>
        </div>
      </div>

      {/* Right: Project Metadata */}
      <div className="flex flex-col justify-between p-6 md:p-8 md:border-l border-divider-light">
        <div>
          {/* Header Row */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-display font-bold uppercase group-hover:text-accent-orange transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-black/60 mt-2 max-w-sm">
                {project.description}
              </p>
            </div>
            <span className="text-label text-black/40 shrink-0 ml-4">
              ({project.number})
            </span>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-6 pt-4 border-t border-divider-light">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-label uppercase text-black/50">
            <span>{project.industry}</span>
            <span>{project.published}</span>
            <span>{project.deliverables.join(" / ")}</span>
          </div>
          <span className="inline-block mt-4 text-sm font-medium uppercase tracking-widest text-black group-hover:text-accent-orange transition-colors">
            {project.hasCaseStudy ? "VIEW CASE STUDY" : "VIEW PROJECT"} &rarr;
          </span>
        </div>
      </div>
    </div>
  );

  if (project.hasCaseStudy) {
    return (
      <Link href={`/projects/${project.slug}`} className="block">
        {cardContent}
      </Link>
    );
  }

  return (
    <a href={project.liveUrl} className="block">
      {cardContent}
    </a>
  );
}
