import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE } from "@/lib/site";

/**
 * Sur Mac et iOS, la pile de polices commence par -apple-system : le visiteur
 * lit du SF Pro, sans téléchargement. Inter ne sert que de repli sur les
 * autres plateformes. Voir globals.css.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Chef de formation et expert du goût. Je crée, reformule et signe des recettes pour les industriels de l'agroalimentaire, les chefs et les artisans. Les huiles essentielles culinaires comme outil de précision.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Je crée, reformule et signe des recettes. Pour les industriels de l'agroalimentaire, les chefs et les artisans du goût.",
    images: [
      {
        url: "/images/portrait-signature.webp",
        width: 1600,
        height: 2400,
        alt: `${SITE.name}, ${SITE.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Chef de formation et expert du goût. Création, reformulation et signatures gustatives.",
    images: ["/images/portrait-signature.webp"],
  },
  // La build GitHub Pages sert d'aperçu client : elle ne doit jamais être
  // indexée, sinon elle entre en duplicate content avec le site de production.
  robots:
    process.env.PAGES === "true"
      ? { index: false, follow: false }
      : { index: true, follow: true },
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
};

/** Données structurées globales : Person + Organization. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      jobTitle: "Chef consultant, expert du goût",
      url: SITE.url,
      image: `${SITE.url}/images/portrait-signature.webp`,
      description:
        "Chef de formation, expert du goût. Création de signatures gustatives et d'huiles essentielles culinaires pour l'agroalimentaire, les chefs et les artisans.",
      telephone: SITE.phone,
      email: SITE.email,
      sameAs: [
        SITE.social.linkedin,
        SITE.social.instagram,
        SITE.social.facebook,
      ],
      knowsAbout: [
        "Huiles essentielles culinaires",
        "Signature gustative",
        "Reformulation agroalimentaire",
        "Clean label",
        "Aromatisation naturelle",
        "Innovation culinaire",
      ],
      worksFor: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/images/logo-aymeric.png`,
      email: SITE.email,
      telephone: SITE.phone,
      founder: { "@id": `${SITE.url}/#person` },
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        postalCode: SITE.address.postalCode,
        addressLocality: SITE.address.city,
        addressCountry: SITE.address.country,
      },
      sameAs: [SITE.social.linkedin, SITE.social.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <SmoothScroll />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
