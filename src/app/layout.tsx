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
  title: "Denis Artemenko — Senior Product Designer",
  description:
    "Senior Product Designer with expertise in digital products across B2C, B2B, Fintech and Web3.",
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
