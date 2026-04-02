import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ProgressiveBlur from "@/components/ProgressiveBlur";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const displayFont = localFont({
  src: "./fonts/Sk-Modernist-Regular.otf",
  variable: "--font-display",
  weight: "400",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: "italic",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Denol | Brand & Web Designer – Framer, UX/UI & Strategy",
  description:
    "Empowering SaaS and AI businesses with strategic design, beautiful brands, seamless websites, and products to drive growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${displayFont.variable} ${serifFont.variable} font-sans`}
      >
        {children}
        <ProgressiveBlur />
      </body>
    </html>
  );
}
