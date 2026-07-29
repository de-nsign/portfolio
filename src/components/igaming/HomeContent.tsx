import Hero from "./Hero";
import Projects from "./Projects";
import SideProjects from "./SideProjects";
import Toolkit from "./Toolkit";
import Career from "./Career";
import AboutMe from "./AboutMe";
import Testimonials from "./Testimonials";
import LetsConnect from "./LetsConnect";
import SiteFooter from "./SiteFooter";
import { latestProjects } from "@/lib/igaming-data";

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
      <LetsConnect />
      <SiteFooter />
    </main>
  );
}
