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
  title: "Smashed Fribourg — Smash Burgers",
  description:
    "Smashed, smash burgers au bœuf Black Angus suisse et sauce signature maison, Rue du Criblet 5 à Fribourg. Commandez en livraison ou passez au restaurant.",
  keywords: [
    "smash burger",
    "Fribourg",
    "restaurant Fribourg",
    "Smashed Fribourg",
    "Rue du Criblet",
  ],
  openGraph: {
    title: "Smashed Fribourg — Smash Burgers",
    description:
      "Bœuf Black Angus suisse smashé sur plancha, sauce signature maison. Rue du Criblet 5, Fribourg.",
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
