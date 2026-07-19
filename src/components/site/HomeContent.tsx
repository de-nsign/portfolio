import Hero from "./Hero";
import Projects from "./Projects";
import FigmaEmbed from "./FigmaEmbed";
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
      <FigmaEmbed
        title="Design System"
        src="https://embed.figma.com/design/hIEuNxuW2WPrUjve1kB7Pb/Library?node-id=0-1&embed-host=share"
      />

      <Articles />
      <Career />

      <BottomCTA />
    </main>
  );
}
