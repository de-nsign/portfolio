import type { CaseStudy } from "./types";

export const valsydev: CaseStudy = {
  slug: "valsydev",
  title: "ValsyDev",
  subtitle: "AI Platforms Development Company",
  client: "ValsyDev",
  role: "Design & Development",
  industry: "Development / Portfolio",
  year: "2025",
  liveUrl: "https://www.valsydev.com/",
  heroImage: "/images/projects/valsydev/hero.jpg",
  tags: ["UI/UX Design", "Next.js Development", "Portfolio", "Dark Theme"],
  overview:
    "ValsyDev is a software development company specializing in AI platform creation, custom MVPs, and digital transformation. They needed a modern portfolio website that would communicate technical expertise, showcase real case studies, and convert B2B visitors into booked consultations — all wrapped in a premium, tech-forward aesthetic.",
  sections: [
    {
      type: "text",
      label: "Challenge",
      heading: "Standing Out in a Crowded Dev Market",
      body: "The custom software development space is saturated with generic agencies. ValsyDev needed a website that would immediately differentiate them as AI-first specialists — not just another dev shop. The site had to balance technical credibility with approachable design, showcase a diverse portfolio spanning healthcare to fintech, and funnel decision-makers toward booking a consultation with the right team member.",
    },
    {
      type: "image",
      src: "/images/projects/valsydev/hero-full.jpg",
      alt: "ValsyDev hero section with AI platforms development headline and purple accent lighting",
    },
    {
      type: "process",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Analyzed the B2B software development market, competitor positioning, and buyer decision patterns for technical services targeting startups and enterprises.",
        },
        {
          number: "02",
          title: "Strategy",
          description:
            "Defined an AI-first narrative: leading with platform development expertise, backed by real case studies and trust signals like Clutch and Upwork ratings.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Developed a premium dark aesthetic with purple accent tones, card-based layouts, and interactive service carousels that convey technical sophistication.",
        },
        {
          number: "04",
          title: "Development",
          description:
            "Built with Next.js and Tailwind CSS for performance and flexibility. Integrated dynamic booking system, smooth animations, and analytics tracking.",
        },
      ],
    },
    {
      type: "text",
      label: "Solution",
      heading: "AI-First Positioning with Proof",
      body: "The website leads with ValsyDev's core strength — AI platforms development — then methodically builds trust through real project case studies (Fuse AI, SUMO, Profi CRM, BOATYN), verified third-party ratings (Clutch 4.9/5, Upwork 100% job success), and an interactive service breakdown covering six key capabilities from discovery to deployment. Every section funnels toward the integrated booking system.",
    },
    {
      type: "image",
      src: "/images/projects/valsydev/services.jpg",
      alt: "Interactive services carousel showing Discovery Phase, UX/UI Design, and MVP Development cards",
    },
    {
      type: "features",
      heading: "Key Features",
      items: [
        {
          title: "Interactive Service Carousel",
          description:
            "Six service areas presented through an animated slider — from Discovery and UX/UI to AI Integrations and Outstaffing — with smooth transitions.",
        },
        {
          title: "Industry Showcase",
          description:
            "Dedicated sections for AI, Healthcare, Fintech, E-commerce, Travel, and CRM verticals demonstrating domain expertise across sectors.",
        },
        {
          title: "Case Studies Portfolio",
          description:
            "Real project showcases with measurable outcomes — Fuse AI, SUMO, Profi CRM, and BOATYN — building credibility through proven results.",
        },
        {
          title: "Team Booking System",
          description:
            "Dynamic consultation booking with team member selection, allowing prospects to connect directly with the right specialist.",
        },
        {
          title: "Trust Signals Integration",
          description:
            "Clutch 4.9/5 rating and Upwork 100% job success score prominently displayed to establish instant credibility with B2B buyers.",
        },
        {
          title: "Responsive Dark Theme",
          description:
            "Premium dark aesthetic with purple accent colors optimized across all devices, reinforcing the tech-forward brand positioning.",
        },
      ],
    },
    {
      type: "device-mockup",
      desktop: "/images/projects/valsydev/desktop.jpg",
      mobile: "/images/projects/valsydev/mobile.jpg",
      alt: "ValsyDev responsive design — desktop and mobile views of the portfolio website",
    },
    {
      type: "text",
      label: "Design",
      heading: "Premium & Tech-Forward",
      body: "The visual language is built on a dark foundation with strategic purple (#7845FA) accents — a palette that immediately signals technical sophistication. Red Hat Display and Red Hat Text typography provide a contemporary, professional feel. Card-based layouts with generous whitespace create breathing room between dense service information, while smooth animations and interactive elements keep engagement high without sacrificing clarity.",
    },
    {
      type: "image-pair",
      images: [
        {
          src: "/images/projects/valsydev/industries.jpg",
          alt: "Industries section showing AI, Healthcare, Fintech, and E-commerce verticals",
        },
        {
          src: "/images/projects/valsydev/case-studies.jpg",
          alt: "Case studies section featuring Fuse AI and SUMO project cards",
        },
      ],
    },
    {
      type: "tech-stack",
      technologies: [
        { name: "Next.js", category: "Framework" },
        { name: "React", category: "Framework" },
        { name: "TypeScript", category: "Language" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Figma", category: "Design" },
        { name: "Vercel", category: "Hosting" },
      ],
    },
    {
      type: "metrics",
      items: [
        { value: "6+", label: "Industry Verticals" },
        { value: "4.9/5", label: "Clutch Rating" },
        { value: "< 2s", label: "Load Time" },
        { value: "95+", label: "Performance Score" },
      ],
    },
    {
      type: "image",
      src: "/images/projects/valsydev/footer.jpg",
      alt: "ValsyDev contact section with booking integration and trust badges",
      caption:
        "Contact section with team booking system, Clutch and Upwork trust badges, and multiple communication channels.",
    },
  ],
  nextProject: {
    slug: "stroika",
    name: "STROIKA",
    image: "/images/projects/stroika/hero.jpg",
  },
};
