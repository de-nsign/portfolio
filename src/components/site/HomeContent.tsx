import Hero from "./Hero";
import Projects from "./Projects";
import Articles from "./Articles";
import Career from "./Career";
import BottomCTA from "./BottomCTA";
import { latestProjects, sideActivity } from "@/lib/site-data";

export default function HomeContent() {
  return (
    <main>
      <Hero />

      <Projects title="Latest Projects" count={5} items={latestProjects} />
      <Projects
        title="Side Activity"
        count={3}
        items={sideActivity}
        topPadding="pt-32"
      />
      <Articles />
      <Career />

      <BottomCTA />
    </main>
  );
}
