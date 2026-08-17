/**
 * Les trois chemins par profil. Même expertise, preuves différentes :
 * un chef veut être inspiré, un directeur R&D veut être rassuré sur la
 * réglementation et la reproductibilité.
 */

export type Profile = {
  slug: string;
  href: string;
  /** Libellé court, utilisé dans la nav et le sélecteur de formulaire. */
  label: string;
  /** Titre de la carte sur l'accueil. */
  title: string;
  /** Ce que cette cible cherche, en une phrase. */
  need: string;
  /** Les preuves qui comptent pour elle. */
  proofs: string[];
  image: string;
  imageAlt: string;
};

export const PROFILES: Profile[] = [
  {
    slug: "industriel",
    href: "/industriels-agroalimentaires/",
    label: "Industriel agroalimentaire",
    title: "Industriels agroalimentaires",
    need:
      "Vous devez remplacer un arôme, tenir une étiquette lisible et prouver que le goût reste identique du premier lot au millième.",
    proofs: [
      "Déclaration en « huile essentielle de », pas en « arôme naturel »",
      "Dosages de 0,05 à 0,1 g/kg, sans impact sur les textures",
      "Reproductibilité lot à lot, y compris après transformation",
    ],
    image: "/images/sauce.webp",
    imageAlt: "Dosage à la pipette dans une sauce en cours de mise au point",
  },
  {
    slug: "chef",
    href: "/chefs-et-traiteurs/",
    label: "Chef ou traiteur",
    title: "Chefs & traiteurs",
    // Retour client du 17/08/2026 : sur cette carte, mettre en avant le
    // consulting et les masterclass plutôt que la vente de flacons.
    need:
      "Vous cherchez quelqu'un qui vienne débloquer une recette, signer une carte, ou former votre brigade à lire un goût.",
    proofs: [
      "Consulting à la journée, en cuisine ou en laboratoire",
      "Masterclass pour brigades et équipes",
      "Créations exclusives extraites à l'atelier",
    ],
    image: "/images/gourmand-asperges.webp",
    imageAlt: "Assiette dressée, finition à l'huile essentielle culinaire",
  },
  {
    slug: "artisan",
    href: "/artisans-et-producteurs/",
    label: "Artisan ou producteur",
    title: "Artisans & producteurs",
    need:
      "Vous transformez votre propre production et vous voulez en faire une gamme premium, reconnaissable en rayon.",
    proofs: [
      "Une signature aromatique par référence",
      "Étiquette courte, sans additif ni arôme artificiel",
      "Des huiles créées à partir de vos propres plantes",
    ],
    image: "/images/tartinables.webp",
    imageAlt: "Tartinables premium développés à partir d'une production agricole",
  },
];

export const getProfile = (slug: string) => PROFILES.find((p) => p.slug === slug);
