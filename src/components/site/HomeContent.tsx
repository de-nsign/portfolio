import Hero from "./Hero";
import Projects from "./Projects";
import Career from "./Career";
import Testimonials from "./Testimonials";
import { latestProjects } from "@/lib/site-data";

export default function HomeContent() {
  return (
    <main>
      <Hero />

      <Projects title="Latest Projects" items={latestProjects} />
      <Career />
      <Testimonials />
    </main>
  );
}
