import type { CaseStudy } from "./types";

export const stroika: CaseStudy = {
  slug: "stroika",
  title: "Stroika",
  subtitle: "Precision Equipment for Cyprus Construction",
  client: "Stroika",
  role: "Design & Development",
  industry: "Construction / B2B",
  year: "2025",
  liveUrl: "https://stroika-one.vercel.app",
  heroImage: "/images/projects/stroika/hero.jpg",
  tags: ["UI/UX Design", "Next.js Development", "Lead Generation", "Responsive Design"],
  overview:
    "Stroika is a heavy equipment rental company operating across Cyprus — from Limassol to Nicosia. They needed a modern corporate website that would establish trust with construction professionals and drive qualified leads through an integrated quote request system.",
  sections: [
    {
      type: "text",
      label: "Challenge",
      heading: "Building Trust in a Traditional Industry",
      body: "The construction equipment rental market in Cyprus operates largely through word-of-mouth and phone calls. Stroika needed a digital presence that would match the reliability and professionalism of their on-site operations — a website that speaks the language of construction professionals while converting visitors into qualified leads.",
    },
    {
      type: "image",
      src: "/images/projects/stroika/hero-full.jpg",
      alt: "Stroika website hero section showing heavy equipment",
    },
    {
      type: "process",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Analyzed the Cyprus construction market, competitor presence, and user behavior patterns for B2B equipment rental services.",
        },
        {
          number: "02",
          title: "Strategy",
          description:
            "Defined a conversion-first architecture: equipment catalog with clear categorization, trust signals, and a frictionless quote request flow.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Created a clean, professional visual language — dark tones, bold typography, and high-quality equipment imagery that conveys reliability.",
        },
        {
          number: "04",
          title: "Development",
          description:
            "Built with Next.js and deployed on Vercel for peak performance. Optimized for mobile-first experience with WebP images and preload hints.",
        },
      ],
    },
    {
      type: "text",
      label: "Solution",
      heading: "Conversion-First Architecture",
      body: "Every section of the site funnels toward one action: getting a quote. The equipment catalog is organized into three clear tiers — Light, Medium, and Heavy — so visitors can quickly identify what they need. The \"Partners, Not Vendors\" positioning differentiates Stroika from competitors by emphasizing their integrated approach: fleet, certified operators, and logistics management as one package.",
    },
    {
      type: "image",
      src: "/images/projects/stroika/equipment.jpg",
      alt: "Equipment categories — Light, Medium, and Heavy tiers",
    },
    {
      type: "features",
      heading: "Key Features",
      items: [
        {
          title: "Equipment Catalog",
          description: "Three-tier classification (Light, Medium, Heavy) with 30+ machines across brands like Caterpillar, JCB, and Liebherr.",
        },
        {
          title: "15 Solution Areas",
          description: "From excavation and crane operations to swimming pool construction and beach cleaning — covering the full spectrum of site needs.",
        },
        {
          title: "Quote Request System",
          description: "Streamlined form with equipment type selection, project location, and direct contact options including WhatsApp integration.",
        },
        {
          title: "Social Proof",
          description: "Client testimonials strategically placed to build trust before the conversion point.",
        },
        {
          title: "20+ Service Offerings",
          description: "Certified operator hire, attachment rental, on-site fueling, permit logistics — presented as a comprehensive service ecosystem.",
        },
        {
          title: "Mobile-First Design",
          description: "Responsive across all devices, optimized for construction professionals browsing on-site from their phones.",
        },
      ],
    },
    {
      type: "device-mockup",
      desktop: "/images/projects/stroika/desktop.jpg",
      mobile: "/images/projects/stroika/mobile.jpg",
      alt: "Stroika responsive design on desktop and mobile",
    },
    {
      type: "text",
      label: "Design",
      heading: "Professional & Direct",
      body: "The visual language mirrors the industry: strong, reliable, no-nonsense. A restrained dark palette with strategic use of accent colors draws attention to CTAs and key information. Typography hierarchy guides the eye through equipment categories, service descriptions, and trust signals — ultimately toward the quote form.",
    },
    {
      type: "image-pair",
      images: [
        { src: "/images/projects/stroika/solutions.jpg", alt: "Solutions section" },
        { src: "/images/projects/stroika/services.jpg", alt: "Services section" },
      ],
    },
    {
      type: "tech-stack",
      technologies: [
        { name: "Next.js", category: "Framework" },
        { name: "React", category: "Framework" },
        { name: "TypeScript", category: "Language" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Vercel", category: "Hosting" },
        { name: "Turbopack", category: "Build" },
      ],
    },
    {
      type: "metrics",
      items: [
        { value: "15+", label: "Solution Areas" },
        { value: "30+", label: "Equipment Units" },
        { value: "< 2s", label: "Load Time" },
        { value: "95+", label: "Performance Score" },
      ],
    },
    {
      type: "image",
      src: "/images/projects/stroika/footer.jpg",
      alt: "Stroika contact section and footer",
      caption: "Contact section with map, working hours, and multiple communication channels.",
    },
  ],
  nextProject: {
    slug: "gam",
    name: "GAM",
    image: "/images/projects/project-01.jpg",
  },
};
