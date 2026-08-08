import type { Metadata } from "next";
import { Inter, Pirata_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const blackletter = Pirata_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-blackletter",
});

export const metadata: Metadata = {
  title: "Denis Artemenko — Design System Designer",
  description:
    "Design System Designer with 7 years of experience — multi-brand component libraries and token architecture for iGaming and complex digital platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${blackletter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
