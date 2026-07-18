import TopNav from "@/components/site/TopNav";
import Hero from "@/components/site/Hero";
import Projects from "@/components/site/Projects";
import Articles from "@/components/site/Articles";
import Career from "@/components/site/Career";
import BottomCTA from "@/components/site/BottomCTA";
import SiteFooter from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Projects />
        <Articles />
        <Career />
        <BottomCTA />
        <SiteFooter />
      </main>
    </>
  );
}
