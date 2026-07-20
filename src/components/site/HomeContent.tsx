import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import BehindThePixels from "./BehindThePixels";
import Articles from "./Articles";
import Career from "./Career";
import Testimonials from "./Testimonials";
import { latestProjects } from "@/lib/site-data";

export default function HomeContent() {
  return (
    <main>
      <Hero />

      <Projects title="Latest Projects" items={latestProjects} />
      <Services />
      <BehindThePixels />
      <Articles />
      <Career />
      <Testimonials />
    </main>
  );
}
