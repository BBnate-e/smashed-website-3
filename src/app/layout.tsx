import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smashed Fribourg — Smash Burgers d'exception",
  description:
    "Smashed Fribourg façonne des smash burgers premium à base de bœuf suisse, croûte caramélisée et produits locaux. Réservez votre table en plein cœur de Fribourg.",
  keywords: [
    "smash burger",
    "Fribourg",
    "restaurant Fribourg",
    "burger premium",
    "Smashed Fribourg",
  ],
  openGraph: {
    title: "Smashed Fribourg — Smash Burgers d'exception",
    description:
      "Bœuf suisse, croûte caramélisée, produits locaux. Découvrez Smashed Fribourg.",
    locale: "fr_CH",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}
