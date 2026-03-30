"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./ProjectCard";
import clsx from "clsx";

export default function WorksSection() {
  return (
    <section id="works" className="relative text-black">
      {/* Gradient overlay: picks up where canvas mask fades out */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(200,60,0,0.4) 25%, rgba(230,90,5,0.7) 40%, rgb(255,120,10) 55%, rgb(255,175,50) 72%, rgb(255,215,130) 84%, rgb(255,240,210) 93%, white 100%)",
        }}
      >
        {/* Spacer for transition zone */}
        <div className="h-[20vh]" />

        <div className="overflow-hidden px-6 pb-2">
          <h2
            className="font-display uppercase font-black text-white whitespace-nowrap section-title w-full"
            style={{ fontSize: "calc((100vw - 3rem) / 10)", lineHeight: "0.95", letterSpacing: "-0.02em" }}
          >
            Selected Works
          </h2>
        </div>

        {/* Space below SELECTED WORKS */}
        <div className="h-[5vh]" />
      </div>

      {/* Project Cards */}
      <div className="works-cards bg-white relative">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
