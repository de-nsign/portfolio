export const NAV_LINKS = [
  { label: "WORK", href: "#works" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CONNECT", href: "#connect" },
] as const;

export type Project = {
  id: string;
  slug: string;
  number: string;
  name: string;
  description: string;
  image: string;
  industry: string;
  published: string;
  deliverables: string[];
  liveUrl: string;
  hasCaseStudy?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "vtb",
    slug: "vtb",
    number: "01",
    name: "VTB BANK",
    description:
      "Digital banking platform for one of Russia's largest banks — 3D visuals, product pages, and design direction.",
    image: "/images/projects/vtb/hero.jpg",
    industry: "Banking / Finance",
    published: "2026",
    deliverables: ["3D Graphics", "Web Design", "Design Direction", "Page Assembly"],
    liveUrl: "https://www.vtb.ru/",
    hasCaseStudy: true,
  },
  {
    id: "domsvech",
    slug: "domsvech",
    number: "02",
    name: "DOM SVECH",
    description:
      "High-converting landing page for an online candle-making academy with tiered pricing and payment integration.",
    image: "/images/projects/domsvech/hero.jpg",
    industry: "Education / E-commerce",
    published: "2024",
    deliverables: ["UI/UX Design", "Web Design", "Webflow Development", "Conversion Optimization"],
    liveUrl: "https://domm-svech.webflow.io/",
    hasCaseStudy: true,
  },
  {
    id: "constantine-rytvin",
    slug: "constantine-rytvin",
    number: "03",
    name: "CONSTANTINE RYTVIN",
    description:
      "Personal portfolio for a game designer showcasing AAA and indie projects with cinematic dark aesthetic.",
    image: "/images/projects/constantine-rytvin/hero.jpg",
    industry: "Gaming / Portfolio",
    published: "2024",
    deliverables: ["UI/UX Design", "Web Design", "Webflow Development"],
    liveUrl: "https://constantine-rytvin.webflow.io/",
    hasCaseStudy: true,
  },
  {
    id: "valsydev",
    slug: "valsydev",
    number: "04",
    name: "VALSYDEV",
    description:
      "Developer portfolio showcasing technical projects with modern dark aesthetic.",
    image: "/images/projects/valsydev/hero.jpg",
    industry: "Development / Portfolio",
    published: "2025",
    deliverables: ["UI/UX Design", "Next.js Development", "Portfolio", "Dark Theme"],
    liveUrl: "https://www.valsydev.com/",
    hasCaseStudy: true,
  },
  {
    id: "stroika",
    slug: "stroika",
    number: "05",
    name: "STROIKA",
    description:
      "Corporate website for a heavy equipment rental company in Cyprus with focus on lead generation.",
    image: "/images/projects/stroika/hero.jpg",
    industry: "Construction / B2B",
    published: "2025",
    deliverables: ["UI/UX Design", "Web Design", "Development"],
    liveUrl: "https://stroika-one.vercel.app",
    hasCaseStudy: true,
  },
  {
    id: "gam",
    slug: "gam",
    number: "06",
    name: "GAM",
    description:
      "A comprehensive brand and web redesign for a leading SaaS analytics platform.",
    image: "/images/projects/project-01.jpg",
    industry: "SaaS / Analytics",
    published: "2024",
    deliverables: ["Brand Identity", "Web Design", "Development"],
    liveUrl: "#",
  },
  {
    id: "thesystemsboss",
    slug: "thesystemsboss",
    number: "07",
    name: "THE SYSTEMS BOSS",
    description:
      "Strategic brand identity and website for an AI-powered business automation platform.",
    image: "/images/projects/project-02.jpg",
    industry: "AI / Automation",
    published: "2024",
    deliverables: ["Strategy", "Brand Identity", "Web Design"],
    liveUrl: "#",
  },
  {
    id: "pharsalus",
    slug: "pharsalus",
    number: "08",
    name: "PHARSALUS",
    description:
      "End-to-end design system and marketing site for a fintech startup.",
    image: "/images/projects/project-03.jpg",
    industry: "Fintech",
    published: "2023",
    deliverables: ["Web Design", "Design System", "Development"],
    liveUrl: "#",
  },
  {
    id: "expert-insights",
    slug: "expert-insights",
    number: "09",
    name: "EXPERT INSIGHTS",
    description:
      "A content-driven platform redesign for B2B technology research and analysis.",
    image: "/images/projects/project-04.jpg",
    industry: "B2B / Technology",
    published: "2023",
    deliverables: ["Strategy", "Web Design", "Web App"],
    liveUrl: "#",
  },
];

export type Service = {
  number: string;
  name: string;
  description: string;
  category: string;
};

export const SERVICES: Service[] = [
  {
    number: "01",
    name: "Brand Strategy",
    description:
      "Defining your brand positioning, messaging, and visual direction to stand out in crowded markets.",
    category: "STRATEGY",
  },
  {
    number: "02",
    name: "Visual Identity",
    description:
      "Crafting distinctive logos, color palettes, and typography systems that communicate your brand essence.",
    category: "BRAND IDENTITY",
  },
  {
    number: "03",
    name: "Brand Guidelines",
    description:
      "Comprehensive documentation ensuring consistent brand application across all touchpoints.",
    category: "BRAND IDENTITY",
  },
  {
    number: "04",
    name: "UI/UX Design",
    description:
      "User-centered interface design that balances aesthetics with intuitive functionality.",
    category: "WEB DESIGN",
  },
  {
    number: "05",
    name: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive user action.",
    category: "WEB DESIGN",
  },
  {
    number: "06",
    name: "Frontend Development",
    description:
      "Pixel-perfect implementation using modern frameworks and performance-first architecture.",
    category: "WEB DEVELOPMENT",
  },
  {
    number: "07",
    name: "CMS Integration",
    description:
      "Seamless content management setup so your team can update and scale without developer help.",
    category: "WEB DEVELOPMENT",
  },
  {
    number: "08",
    name: "Web Applications",
    description:
      "Full-featured web applications with complex interactions, dashboards, and data visualization.",
    category: "WEB APPS",
  },
];

export const SERVICE_CATEGORIES = [
  "STRATEGY",
  "BRAND IDENTITY",
  "WEB DESIGN",
  "WEB DEVELOPMENT",
  "WEB APPS",
] as const;

export type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "CEO",
    company: "TechFlow",
    quote:
      "Denol transformed our entire digital presence. The attention to detail and strategic thinking behind every design decision was remarkable.",
    image: "/images/testimonials/testimonial-01.jpg",
  },
  {
    id: 2,
    name: "James Crawford",
    title: "Founder",
    company: "NeuralPath AI",
    quote:
      "Working with Denol was a game-changer. He understood our complex AI product and translated it into a brand that resonates with enterprise buyers.",
    image: "/images/testimonials/testimonial-02.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Head of Marketing",
    company: "ScaleUp",
    quote:
      "The website Denol designed for us increased our conversion rate by over 300%. His understanding of SaaS user journeys is unparalleled.",
    image: "/images/testimonials/testimonial-03.jpg",
  },
  {
    id: 4,
    name: "David Chen",
    title: "CTO",
    company: "DataVault",
    quote:
      "Denol delivered a design system that our entire engineering team loves. Clean, consistent, and incredibly well-documented.",
    image: "/images/testimonials/testimonial-04.jpg",
  },
  {
    id: 5,
    name: "Olivia Parker",
    title: "Product Lead",
    company: "Metric",
    quote:
      "From strategy through to final delivery, Denol brought clarity to every stage. Our brand finally feels like it matches our ambition.",
    image: "/images/testimonials/testimonial-05.jpg",
  },
  {
    id: 6,
    name: "Michael Torres",
    title: "Co-Founder",
    company: "CloudSync",
    quote:
      "Denol has a rare ability to balance creative vision with commercial objectives. Our rebrand led directly to a successful Series A.",
    image: "/images/testimonials/testimonial-06.jpg",
  },
  {
    id: 7,
    name: "Lisa Wang",
    title: "VP Design",
    company: "Beacon",
    quote:
      "Every pixel has purpose. Denol's work elevated our product from a good tool to a premium brand experience.",
    image: "/images/testimonials/testimonial-07.jpg",
  },
  {
    id: 8,
    name: "Robert Kim",
    title: "Director",
    company: "Apex Analytics",
    quote:
      "The speed and quality of Denol's work is extraordinary. He delivered a complete rebrand in weeks, not months.",
    image: "/images/testimonials/testimonial-08.jpg",
  },
  {
    id: 9,
    name: "Anna Johansson",
    title: "Founder",
    company: "Nordic SaaS",
    quote:
      "Denol understood our Scandinavian design sensibility and blended it with bold modern aesthetics. The result exceeded all expectations.",
    image: "/images/testimonials/testimonial-09.jpg",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your brand, audience, and goals. Understanding the full picture before designing a single pixel.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Translating strategy into visual concepts. Iterative design rounds ensure every detail serves your objectives.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Pixel-perfect development and launch. Ongoing support to ensure everything performs flawlessly.",
  },
];

export const STATS = [
  { value: "$73M+", label: "Revenue Generated" },
  { value: "10x", label: "Average ROI" },
  { value: "784%", label: "Conversion Increase" },
];

export const ABOUT_TABS = [
  "FATHER",
  "COACH",
  "HIKER",
  "DESIGNER",
  "NOMAD",
] as const;

export const ABOUT_CONTENT = [
  {
    label: "APPROACH",
    heading: "Designing for Impact and Clarity",
    body: "Every project begins with a deep understanding of business objectives and user needs. I believe great design is invisible — it guides users effortlessly toward their goals while building trust and credibility for your brand.",
  },
  {
    label: "BACKGROUND",
    heading: "From Marketing to Design Freedom",
    body: "After years in marketing and brand management, I transitioned to design to have a more direct impact on how brands communicate. This marketing background gives me a unique edge — I design not just for aesthetics, but for results.",
  },
  {
    label: "BEYOND DESIGN",
    heading: "How Travel & Nature Shape My Perspective",
    body: "When I'm not designing, you'll find me hiking through national parks or exploring new cities. Travel and nature keep my perspective fresh and my creativity sharp — every new environment brings new inspiration.",
  },
];

export const FEATURED_IN = [
  "Awwwards",
  "CSS Design Awards",
  "Muzli",
  "Behance",
  "Dribbble",
];

export const FOOTER_LINKS = [
  { label: "WORK", href: "#works" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CONNECT", href: "#connect" },
  { label: "COACHING", href: "#" },
  { label: "PRIVACY", href: "#" },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export const MARQUEE_LOGOS = [
  "Awwwards",
  "CSS Design Awards",
  "Product Hunt",
  "TechCrunch",
  "Forbes",
  "Muzli",
  "Behance",
  "Dribbble",
  "Medium",
];
