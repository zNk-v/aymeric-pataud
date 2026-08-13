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
      "Versions lipo- et hydrosolubles selon la matrice",
      "Reproductibilité lot à lot et stabilité dans le temps",
    ],
    image: "/images/sauce.webp",
    imageAlt: "Dosage à la pipette dans une sauce en cours de mise au point",
  },
  {
    slug: "chef",
    href: "/chefs-et-traiteurs/",
    label: "Chef ou traiteur",
    title: "Chefs & traiteurs",
    need:
      "Vous cherchez un goût que le client ne trouvera pas ailleurs, et qui tient en service sans alourdir votre mise en place.",
    proofs: [
      "Flacon 30 ml avec pipette, dosage à la goutte",
      "À chaud comme à froid, à la minute",
      "Créations exclusives extraites à l'atelier",
      "Adopté par des MOF et des champions du monde",
    ],
    image: "/images/wok.webp",
    imageAlt: "Finition d'un plat au flacon d'huile essentielle culinaire",
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
      "Création d'huiles à partir de vos propres plantes",
      "Accompagnement de la recette au produit fini",
    ],
    image: "/images/tartinables.webp",
    imageAlt: "Tartinables premium développés à partir d'une production agricole",
  },
];

export const getProfile = (slug: string) => PROFILES.find((p) => p.slug === slug);
