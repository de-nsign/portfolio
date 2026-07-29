import Hero from "./Hero";
import Projects from "./Projects";
import SideProjects from "./SideProjects";
import Toolkit from "./Toolkit";
import Career from "./Career";
import AboutMe from "./AboutMe";
import Testimonials from "./Testimonials";
import SiteFooter from "./SiteFooter";
import { latestProjects } from "@/lib/site-data";

export default function HomeContent() {
  return (
    <main>
      <Hero />

      <Projects title="Latest Projects" items={latestProjects} />
      <SideProjects />
      <Toolkit />
      <Career />
      <AboutMe />
      <Testimonials />
      <SiteFooter />
    </main>
  );
}
