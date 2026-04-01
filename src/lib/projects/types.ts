export type CaseStudySection =
  | { type: "text"; label: string; heading: string; body: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "image-pair"; images: { src: string; alt: string }[] }
  | { type: "features"; heading: string; items: { title: string; description: string }[] }
  | { type: "process"; steps: { number: string; title: string; description: string }[] }
  | { type: "tech-stack"; technologies: { name: string; category: string }[] }
  | { type: "metrics"; items: { value: string; label: string }[] }
  | { type: "device-mockup"; desktop: string; mobile: string; alt: string };

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  industry: string;
  year: string;
  liveUrl: string;
  heroImage: string;
  tags: string[];
  overview: string;
  sections: CaseStudySection[];
  nextProject?: { slug: string; name: string; image: string };
};
