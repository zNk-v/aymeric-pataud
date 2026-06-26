import type { Metadata } from "next";
import { Schibsted_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aymericpataud.fr"),
  title: "Aymeric Pataud — Expert du goût",
  description:
    "Chef de formation et expert du goût. J'accompagne chefs, artisans et marques agroalimentaires dans la création de signatures gustatives naturelles. Sublimez le goût. Signez la différence.",
  keywords: [
    "expert du goût",
    "chef consultant",
    "signatures gustatives",
    "huiles essentielles culinaires",
    "reformulation agroalimentaire",
    "Aymeric Pataud",
  ],
  openGraph: {
    title: "Aymeric Pataud — Expert du goût",
    description:
      "Sublimez le goût. Signez la différence. Création, reformulation et signatures gustatives naturelles pour chefs, artisans et marques.",
    type: "website",
    locale: "fr_FR",
    images: ["/images/hero-portrait.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${grotesk.variable} ${inter.variable}`}>
      <body className="grain">
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
