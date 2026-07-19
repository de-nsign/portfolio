import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import BehindThePixels from "./BehindThePixels";
import Articles from "./Articles";
import Career from "./Career";
import Testimonials from "./Testimonials";
import BottomCTA from "./BottomCTA";
import { latestProjects, sideActivity } from "@/lib/site-data";

export default function HomeContent() {
  return (
    <main>
      <Hero />

      <Projects title="Latest Projects" count={6} items={latestProjects} />
      <Projects
        title="Side Activity"
        count={3}
        items={sideActivity}
        topPadding="pt-32"
      />
      <Services />
      <BehindThePixels />
      <Articles />
      <Career />
      <Testimonials />

      <BottomCTA />
    </main>
  );
}
