import type { CaseStudy } from "./types";

export const constantineRytvin: CaseStudy = {
  slug: "constantine-rytvin",
  title: "Constantine Rytvin",
  subtitle: "Game Designer Portfolio",
  client: "Constantine Rytvin",
  role: "Design & Development",
  industry: "Gaming / Portfolio",
  year: "2024",
  liveUrl: "https://constantine-rytvin.webflow.io/",
  heroImage: "/images/projects/constantine-rytvin/hero.jpg",
  tags: [
    "UI/UX Design",
    "Webflow Development",
    "Portfolio",
    "Motion Design",
    "Dark Theme",
  ],
  overview:
    "Constantine Rytvin is a game designer with experience at Ubisoft and BrainRocket, transitioning from QA/QC to game design. He needed a personal portfolio website that would showcase commercial AAA titles alongside indie projects — positioning him as a creative professional with both technical depth and design vision.",
  sections: [
    {
      type: "text",
      label: "Challenge",
      heading: "Presenting a Game Designer to the Industry",
      body: "The gaming industry evaluates designers through their shipped titles and creative thinking. Constantine needed a portfolio that would stand apart from typical resume-style pages — one that communicates his design philosophy, highlights his trajectory from QA to game design, and presents six diverse projects (from Ubisoft AAA to solo indie demos) in a cohesive, visually compelling narrative.",
    },
    {
      type: "image",
      src: "/images/projects/constantine-rytvin/hero-full.jpg",
      alt: "Constantine Rytvin portfolio hero section with minimalist dark design and introduction text",
    },
    {
      type: "process",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Researched game industry portfolio standards, analyzed competitor designer portfolios, and defined the content architecture around Constantine's unique QA-to-designer career arc.",
        },
        {
          number: "02",
          title: "Strategy",
          description:
            "Structured the site around a narrative flow: introduction → skills & expertise → project showcase with embedded trailers → direct contact. Prioritized commercial AAA titles while giving indie work equal visual weight.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Developed a dark, cinematic aesthetic using Inter and IBM Plex Mono typography. Grayscale imagery with selective reveals creates a game-industry atmosphere while keeping focus on content.",
        },
        {
          number: "04",
          title: "Development",
          description:
            "Built in Webflow with custom interactions: cursor tracking, staggered scroll animations, embedded YouTube trailers, and responsive breakpoints for all devices.",
        },
      ],
    },
    {
      type: "text",
      label: "Solution",
      heading: "Cinematic Portfolio Experience",
      body: "The portfolio leads with Constantine's design philosophy, then builds credibility through a structured skills section covering design expertise, technical proficiencies, and professional skills. The project gallery is the centerpiece — six projects presented with embedded video trailers, role descriptions, and external links to live titles. Commercial Ubisoft projects (Beyond Good and Evil 2, Riders Republic, Hyper Scape, Child of Light) anchor the portfolio, while indie projects (Rebirth, Pigeon Blob) demonstrate creative independence.",
    },
    {
      type: "image",
      src: "/images/projects/constantine-rytvin/projects.jpg",
      alt: "Projects gallery section showing Ubisoft titles with grayscale imagery and project details",
    },
    {
      type: "features",
      heading: "Key Features",
      items: [
        {
          title: "Cinematic Project Gallery",
          description:
            "Six projects presented with embedded YouTube trailers, role descriptions, and external links — covering AAA titles and indie demos.",
        },
        {
          title: "Structured Skills Showcase",
          description:
            "Three-column layout covering Design Expertise (UX/UI, gameplay systems), Technical Proficiencies, and Professional Skills with clear categorization.",
        },
        {
          title: "Custom Cursor Interactions",
          description:
            "Interactive cursor tracking system that responds to hover states across project cards and navigation elements.",
        },
        {
          title: "Staggered Scroll Animations",
          description:
            "Content reveals through opacity and translate transforms, creating a cinematic browsing experience as visitors scroll.",
        },
        {
          title: "Education & Languages Section",
          description:
            "Dedicated sections for certifications, education background, and multilingual capabilities (English, Russian, Hebrew).",
        },
        {
          title: "Direct Contact Integration",
          description:
            "Email, phone, LinkedIn, and X/Twitter links in the contact section for immediate professional outreach.",
        },
      ],
    },
    {
      type: "device-mockup",
      desktop: "/images/projects/constantine-rytvin/desktop.jpg",
      mobile: "/images/projects/constantine-rytvin/mobile.jpg",
      alt: "Constantine Rytvin portfolio responsive design on desktop and mobile devices",
    },
    {
      type: "text",
      label: "Design",
      heading: "Dark & Cinematic",
      body: "The visual language draws from the gaming industry's aesthetic DNA — dark backgrounds, high-contrast white typography, and grayscale imagery that evokes the atmosphere of game trailers and studio reels. Inter provides clean readability for body text while IBM Plex Mono adds a technical edge to labels and metadata. Generous negative space and minimal color palette keep the focus on project content, with smooth animations adding polish without distraction.",
    },
    {
      type: "image-pair",
      images: [
        {
          src: "/images/projects/constantine-rytvin/skills.jpg",
          alt: "Skills section with three-column layout showing design, technical, and professional expertise",
        },
        {
          src: "/images/projects/constantine-rytvin/about.jpg",
          alt: "About section with career background and transition from QA to game design",
        },
      ],
    },
    {
      type: "tech-stack",
      technologies: [
        { name: "Webflow", category: "Platform" },
        { name: "Google Fonts", category: "Typography" },
        { name: "Google Analytics", category: "Analytics" },
        { name: "YouTube Embeds", category: "Media" },
        { name: "Custom JS", category: "Interactions" },
        { name: "Figma", category: "Design" },
      ],
    },
    {
      type: "metrics",
      items: [
        { value: "6", label: "Projects Showcased" },
        { value: "5", label: "Page Sections" },
        { value: "< 3s", label: "Load Time" },
        { value: "90+", label: "Performance Score" },
      ],
    },
    {
      type: "image",
      src: "/images/projects/constantine-rytvin/footer.jpg",
      alt: "Contact section with email, phone, LinkedIn and X social links",
      caption:
        "Contact section with direct email, phone number, and social media links for professional outreach.",
    },
  ],
  nextProject: {
    slug: "valsydev",
    name: "VALSYDEV",
    image: "/images/projects/valsydev/hero.jpg",
  },
};
