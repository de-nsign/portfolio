import type { CaseStudy } from "./types";

export const vtb: CaseStudy = {
  slug: "vtb",
  title: "VTB Bank",
  subtitle: "Digital Banking Experience for Russia's Financial Giant",
  client: "VTB (ВТБ)",
  role: "Design Lead & 3D",
  industry: "Banking / Finance",
  year: "2026",
  liveUrl: "https://www.vtb.ru/",
  heroImage: "/images/projects/vtb/hero.jpg",
  tags: ["3D Graphics", "Web Design", "Design Direction", "Business Communication", "Enterprise"],
  overview:
    "VTB is one of Russia's largest state-owned banks serving millions of individuals and businesses. As part of the design team, I created 3D visuals, assembled product pages, led design directions, and collaborated directly with business stakeholders — shaping the digital experience across personal banking, SMB, corporate, and premium segments.",
  sections: [
    {
      type: "text",
      label: "Challenge",
      heading: "Scaling Design Across a Banking Ecosystem",
      body: "VTB's digital platform serves multiple audiences — from everyday banking customers to large corporations and premium clients. The challenge was maintaining a cohesive visual language across hundreds of product pages, promotional campaigns, and audience-specific sections, all while coordinating with business teams who had competing priorities and tight deadlines.",
    },
    {
      type: "image",
      src: "/images/projects/vtb/hero-full.jpg",
      alt: "VTB Bank homepage with card promotions and product navigation",
    },
    {
      type: "process",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Immersed in the banking product ecosystem — understanding audience segments, regulatory constraints, and the existing design system built on the internal 'foundation-kit' component library.",
        },
        {
          number: "02",
          title: "Strategy",
          description:
            "Defined visual direction for key product verticals: cards, mortgage, deposits, and SMB services — aligning design decisions with business KPIs and conversion goals.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Created 3D visuals for product cards and promotional campaigns, assembled product landing pages, and led design direction across multiple workstreams with cross-functional teams.",
        },
        {
          number: "04",
          title: "Development",
          description:
            "Collaborated with frontend engineers on a React-based platform using styled-components and the internal design system, ensuring pixel-perfect implementation of complex layouts.",
        },
      ],
    },
    {
      type: "text",
      label: "Solution",
      heading: "Unified Visual System at Enterprise Scale",
      body: "The approach combined a systematic design framework with distinctive 3D visuals that set VTB apart from competitors. Product pages were built as composable blocks — hero sections, feature cards, calculators, and CTAs — that business teams could mix and match across campaigns. 3D graphics added depth and premium feel to card product presentations, while clear information hierarchy guided users through complex banking products to conversion points.",
    },
    {
      type: "image",
      src: "/images/projects/vtb/products.jpg",
      alt: "VTB product cards section showing debit and credit card offerings with 3D visuals",
    },
    {
      type: "features",
      heading: "Key Features",
      items: [
        {
          title: "3D Product Visuals",
          description:
            "Custom 3D renders for banking cards and product promotions, adding depth and premium feel to the digital experience.",
        },
        {
          title: "Multi-Audience Architecture",
          description:
            "Segment-specific navigation and content: personal banking, SMB, corporate, premium (Privilege), and self-employed — each with tailored product flows.",
        },
        {
          title: "Promotional Campaign Pages",
          description:
            "Modular page builder approach for seasonal promotions, cashback offers, and product launches across all banking segments.",
        },
        {
          title: "Dark Theme Support",
          description:
            "Full dark mode implementation across the platform, respecting brand blue palette while ensuring WCAG contrast compliance.",
        },
        {
          title: "Design System Integration",
          description:
            "Work within VTB's internal 'foundation-kit' design system — maintaining consistency across 100+ pages while pushing visual boundaries.",
        },
        {
          title: "Business Stakeholder Alignment",
          description:
            "Direct collaboration with product owners and business leads to translate banking requirements into effective visual solutions.",
        },
      ],
    },
    {
      type: "device-mockup",
      desktop: "/images/projects/vtb/desktop.jpg",
      mobile: "/images/projects/vtb/mobile.jpg",
      alt: "VTB Bank responsive design — desktop mega-menu navigation and mobile product page",
    },
    {
      type: "text",
      label: "Design",
      heading: "Corporate Blue with Dimensional Depth",
      body: "VTB's visual identity centers on a bold blue palette (#0056FF) with the proprietary 'VTB Group UI' typeface — clean, modern, and unmistakably corporate. The 3D elements I created broke through the flat design conventions of banking websites, adding tactile quality to card product presentations. Tight negative letter-spacing on headings and generous whitespace between content blocks created a reading rhythm that guided users through complex financial information without fatigue.",
    },
    {
      type: "image-pair",
      images: [
        {
          src: "/images/projects/vtb/mortgage.jpg",
          alt: "Mortgage section with calculator and promotional offers",
        },
        {
          src: "/images/projects/vtb/smb.jpg",
          alt: "Small business section with RKO accounts and business tools",
        },
      ],
    },
    {
      type: "tech-stack",
      technologies: [
        { name: "React", category: "Framework" },
        { name: "styled-components", category: "Styling" },
        { name: "TypeScript", category: "Language" },
        { name: "Cinema 4D", category: "3D" },
        { name: "Figma", category: "Design" },
        { name: "Dynatrace", category: "Monitoring" },
      ],
    },
    {
      type: "metrics",
      items: [
        { value: "100+", label: "Product Pages" },
        { value: "5", label: "Audience Segments" },
        { value: "19K+", label: "ATM Network" },
        { value: "24/7", label: "Digital Platform" },
      ],
    },
    {
      type: "image",
      src: "/images/projects/vtb/footer.jpg",
      alt: "VTB Bank footer with app download links, chatbot integrations, and legal information",
      caption:
        "Footer with VTB Online app distribution across Russian app stores, AI assistant integrations, and regulatory information.",
    },
  ],
  nextProject: {
    slug: "domsvech",
    name: "DOM SVECH",
    image: "/images/projects/domsvech/hero.jpg",
  },
};
