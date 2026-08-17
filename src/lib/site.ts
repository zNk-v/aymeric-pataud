/**
 * Constantes du site. Point d'entrée unique pour les coordonnées, la
 * navigation et les URLs canoniques.
 *
 * Double implantation, demandée par le client : le siège reste Amiens,
 * l'atelier du goût existe des deux côtés. Le modèle est « Amiens–La Réunion ».
 * Quand Aymeric rentrera en métropole en août 2027, seul WORKSHOPS change.
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
  /** Siège social et adresse des mentions légales. */
  address: {
    street: "213 rue Jules Barni",
    postalCode: "80000",
    city: "Amiens",
    country: "FR",
  },
  /** Formule courte de la double implantation, utilisée un peu partout. */
  footprint: "Amiens · La Réunion",
  legal: {
    company: "CRDAP",
    form: "SASU",
    siret: "941 526 105 00015",
    vat: "FR19941526105",
    publisher: "Aymeric Pataud",
    host: "OVH SAS, 2 rue Kellermann, 59100 Roubaix, France",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/aymeric-pataud/",
    instagram: "https://www.instagram.com/aymericpataud.fr/",
    facebook: "https://www.facebook.com/AymericPataudTwisteur/",
  },
  tedx: {
    videoId: "1lvunYpGKrI",
    title:
      "Émotions culinaires : la goutte qui fait la différence",
    event: "TEDxAmiens",
  },
  // Orthographe du logo officiel : DÉLICE & SENS, au singulier, esperluette.
  brand: "Délice & Sens",
  brandTagline: "l'aromatisation végétale",
} as const;

/** Chemin de la vidéo signature Poire et Cactus. Voir docs/A-VALIDER.md. */
export const SIGNATURE_VIDEO: { src: string | null; poster: string } = {
  src: null,
  poster: "/images/hero-poster.webp",
};

/**
 * Les deux ateliers. Le siège ne bouge pas ; c'est la pondération entre les
 * deux qui basculera au retour en métropole, en changeant `lead`.
 */
export const WORKSHOPS = [
  {
    city: "Amiens",
    region: "Hauts-de-France",
    role: "Siège et atelier historique",
    text: "Le laboratoire de recherche et d'innovation culinaire, et l'éco-extracteur breveté. C'est d'ici que partent les développements pour la France et l'Europe.",
    image: "/images/atelier-amiens-1.webp",
    lead: true,
  },
  {
    city: "La Saline-les-Hauts",
    region: "La Réunion",
    role: "Atelier du goût",
    text: "Un second atelier au cœur de l'océan Indien, hébergé par Randofruits. Les plantes et les fruits y sont travaillés à pleine maturité, à quelques kilomètres de la récolte.",
    image: "/images/atelier-extracteur.webp",
    lead: false,
  },
] as const;

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
        label: "Consulting & masterclass",
        href: "/consulting/",
        description: "Chefs, R&D, industriels, formation",
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
        description: "Plus de 60 références professionnelles",
      },
      {
        label: "Les hydrosolubles",
        href: "/huiles-essentielles-hydrosolubles/",
        description: "Fromages, boissons, matrices aqueuses",
      },
    ],
  },
  {
    label: "Créations",
    links: [
      {
        label: "Fromages & produits laitiers",
        href: "/creations-fromageres/",
        description: "Yaourts, tommes, raclettes, beurres",
      },
      {
        label: "Nutrition sportive",
        href: "/nutrition-sportive/",
        description: "Lyophilisé, barres, plats d'effort",
      },
      {
        label: "Terroir de La Réunion",
        href: "/creations-reunion/",
        description: "Créer à partir d'ingrédients locaux",
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
    title: "Huiles essentielles",
    links: [
      { label: "La gamme culinaire", href: "/huiles-essentielles-culinaires/" },
      { label: "Les hydrosolubles", href: "/huiles-essentielles-hydrosolubles/" },
    ],
  },
  {
    title: "Créations",
    links: [
      { label: "Fromages & produits laitiers", href: "/creations-fromageres/" },
      { label: "Nutrition sportive", href: "/nutrition-sportive/" },
      { label: "Terroir de La Réunion", href: "/creations-reunion/" },
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
