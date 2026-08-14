/**
 * Constantes du site. Point d'entrée unique pour les coordonnées, la
 * navigation et les URLs canoniques.
 *
 * À VALIDER CLIENT : l'adresse et le téléphone sont repris du WordPress.
 * Aymeric est à La Réunion jusqu'en août 2027, l'adresse affichée est celle
 * d'Amiens. Voir docs/A-VALIDER.md.
 */

export const SITE = {
  name: "Aymeric Pataud",
  role: "Expert du goût",
  url: "https://www.aymericpataud.fr",
  locale: "fr_FR",
  // Seule adresse e-mail documentée publiquement (mentions légales WordPress).
  email: "ap@aymericpataud.fr",
  phone: "06 71 80 31 93",
  phoneHref: "+33671803193",
  address: {
    street: "213 rue Jules Barni",
    postalCode: "80000",
    city: "Amiens",
    country: "FR",
  },
  legal: {
    company: "CRDAP",
    form: "SASU",
    siret: "941 526 105 00015",
    vat: "FR19941526105",
    publisher: "Aymeric Pataud",
    host: "OVH SAS, 2 rue Kellermann, 59100 Roubaix, France",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/aymeric-pataud",
    instagram: "https://www.instagram.com/aymericpataud.fr/",
    facebook: "https://www.facebook.com/AymericPataudTwisteur/",
  },
  tedx: {
    videoId: "1lvunYpGKrI",
    title:
      "Émotions culinaires : la goutte qui fait la différence",
    event: "TEDxAmiens",
  },
  brand: "Délices & Sens",
} as const;

/** Chemin de la vidéo signature Poire et Cactus. Voir docs/A-VALIDER.md. */
export const SIGNATURE_VIDEO: { src: string | null; poster: string } = {
  src: null,
  poster: "/images/hero-poster.webp",
};

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href?: string; links: NavLink[] };

export const NAV: NavGroup[] = [
  {
    label: "Expertise",
    href: "/expertise-du-gout/",
    links: [
      {
        label: "L'expertise du goût",
        href: "/expertise-du-gout/",
        description: "Lire une recette avant de la corriger",
      },
      {
        label: "Consulting",
        href: "/consulting/",
        description: "Chefs, R&D, industriels",
      },
      {
        label: "Création sur-mesure",
        href: "/creation-sur-mesure/",
        description: "L'atelier et l'éco-extracteur breveté",
      },
    ],
  },
  {
    label: "Huiles essentielles",
    href: "/huiles-essentielles-culinaires/",
    links: [
      {
        label: "La gamme culinaire",
        href: "/huiles-essentielles-culinaires/",
        description: "Plus de 70 références professionnelles",
      },
      {
        label: "Les hydrosolubles",
        href: "/huiles-essentielles-hydrosolubles/",
        description: "Fromages, boissons, matrices aqueuses",
      },
    ],
  },
  {
    label: "Pour qui",
    links: [
      {
        label: "Industriels agroalimentaires",
        href: "/industriels-agroalimentaires/",
        description: "R&D, reformulation, clean label",
      },
      {
        label: "Chefs & traiteurs",
        href: "/chefs-et-traiteurs/",
        description: "Signer une carte, twister un plat",
      },
      {
        label: "Artisans & producteurs",
        href: "/artisans-et-producteurs/",
        description: "Valoriser une production en gamme premium",
      },
    ],
  },
  { label: "Références", href: "/references/", links: [] },
  { label: "Le chef", href: "/aymeric-pataud/", links: [] },
  { label: "Blog", href: "/blog/", links: [] },
];

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: "Expertise",
    links: [
      { label: "L'expertise du goût", href: "/expertise-du-gout/" },
      { label: "Consulting", href: "/consulting/" },
      { label: "Création sur-mesure", href: "/creation-sur-mesure/" },
    ],
  },
  {
    title: "Produits",
    links: [
      { label: "Huiles essentielles culinaires", href: "/huiles-essentielles-culinaires/" },
      { label: "Huiles hydrosolubles", href: "/huiles-essentielles-hydrosolubles/" },
      { label: "Produits de La Réunion", href: "/produits-reunion/" },
    ],
  },
  {
    title: "Pour qui",
    links: [
      { label: "Industriels agroalimentaires", href: "/industriels-agroalimentaires/" },
      { label: "Chefs & traiteurs", href: "/chefs-et-traiteurs/" },
      { label: "Artisans & producteurs", href: "/artisans-et-producteurs/" },
    ],
  },
  {
    title: "En savoir plus",
    links: [
      { label: "Références", href: "/references/" },
      { label: "Le chef", href: "/aymeric-pataud/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales/" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite/" },
  { label: "Plan du site", href: "/plan-du-site/" },
];
