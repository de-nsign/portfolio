import Hero from "./Hero";
import Projects from "./Projects";
import Toolkit from "./Toolkit";
import Career from "./Career";
import Testimonials from "./Testimonials";
import { latestProjects } from "@/lib/igaming-data";

export default function HomeContent() {
  return (
    <main>
      <Hero />

      <Projects title="Latest Projects" items={latestProjects} />
      <Toolkit />
      <Career />
      <Testimonials />
    </main>
  );
}
