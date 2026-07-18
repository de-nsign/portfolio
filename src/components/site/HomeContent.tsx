"use client";

import { useState } from "react";
import Hero, { type HeroTab } from "./Hero";
import Projects from "./Projects";
import Gallery from "./Gallery";
import AboutMe from "./AboutMe";
import Articles from "./Articles";
import Career from "./Career";
import BottomCTA from "./BottomCTA";
import { latestProjects, sideActivity } from "@/lib/site-data";

export default function HomeContent() {
  const [tab, setTab] = useState<HeroTab>("Info");

  return (
    <main>
      <Hero active={tab} onTab={setTab} />

      {tab === "Info" && (
        <>
          <Projects title="Latest Projects" count={5} items={latestProjects} />
          <Projects
            title="Side Activity"
            count={3}
            items={sideActivity}
            topPadding="pt-32"
          />
          <Articles />
          <Career />
        </>
      )}

      {tab === "Images" && <Gallery />}

      {tab === "About" && <AboutMe />}

      <BottomCTA />
    </main>
  );
}
