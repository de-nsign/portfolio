import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#000000",
        "bg-light": "#FFFFFF",
        "accent-orange": "rgb(255, 115, 0)",
        "accent-red": "rgb(255, 0, 0)",
        "divider-dark": "rgba(255, 255, 255, 0.15)",
        "divider-light": "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(4rem, 15vw, 20rem)",
          { lineHeight: "0.9", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(3rem, 10vw, 12rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(2rem, 6vw, 6rem)",
          { lineHeight: "1", letterSpacing: "-0.01em" },
        ],
        label: [
          "0.6875rem",
          { lineHeight: "1.4", letterSpacing: "0.1em" },
        ],
        nav: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.15em" },
        ],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
