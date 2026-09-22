/**
 * Les offres, présentées séparément avec chacune son bouton de contact.
 *
 * Historique :
 *
 * - 8 septembre 2026 : « Catalogue_offres_Aymeric_Pataud.pdf » chiffre trois
 *   formats (team building, coaching en cuisine, coaching R&D). La
 *   masterclass du goût sort du catalogue, le team building passe à quinze
 *   personnes en atelier direct, le coaching R&D se facture à la journée.
 *
 * - 21 septembre 2026 : mail « Offres du site, à séparer clairement ».
 *   Chaque client rencontré demande une journée d'essais de recettes avec
 *   lui, et cette offre n'existait pas. Aymeric veut cinq offres distinctes :
 *   Tests R&D (nouvelle, 2 000 € la journée), Création de recettes (sur
 *   devis), Coaching R&D, Team building, et un accompagnement succinct
 *   gratuit, identifié comme tel pour qu'on ne le confonde pas avec le
 *   payant. Les anciens formats « Accompagnement R&D » et « Création de
 *   recette », non chiffrés, faisaient doublon : ils disparaissent au profit
 *   de Tests R&D et Création de recettes.
 *
 *   Le coaching en cuisine (restaurants et palaces) ne figure pas dans sa
 *   liste. Il reste en ligne tant qu'Aymeric ne demande pas son retrait :
 *   c'est l'offre que la page Chefs & traiteurs met en avant.
 *
 * Le site parle à la première personne du singulier. Les prix restent des
 * points de départ, affichés publiquement par choix du client.
 */

export type Offer = {
  /** Ancre sur /consulting/ et valeur du paramètre ?offre= du formulaire. */
  slug: string;
  /** Cible commerciale, sert de sur-titre à la carte. */
  audience: string;
  title: string;
  tagline: string;
  text: string;
  specs: { label: string; value: string }[];
  price: string;
  /** Mention des frais qui s'ajoutent au prix affiché. */
  priceNote?: string;
  /** Libellé du bouton de contact propre à l'offre. */
  cta: string;
};

export const OFFERS: Offer[] = [
  {
    slug: "tests-rd",
    audience: "Services R&D",
    title: "Tests R&D",
    tagline: "Une journée d'essais de recettes, dans votre laboratoire",
    text: "Je viens passer une journée avec votre service R&D. On fait des essais sur vos recettes, et vos équipes apprennent à utiliser les huiles essentielles culinaires, hydrosolubles et liposolubles, sur leurs propres matrices. Vous repartez avec des résultats testés, pas avec une présentation.",
    specs: [
      { label: "Pour qui", value: "Services R&D des entreprises agroalimentaires" },
      { label: "Où", value: "Dans vos locaux" },
      { label: "Durée", value: "Une journée" },
      { label: "Contenu", value: "Essais sur vos recettes, initiation aux huiles hydrosolubles et liposolubles" },
    ],
    price: "2 000 € / jour",
    priceNote: "Chez le client. Frais de déplacement en sus",
    cta: "Réserver une journée de tests",
  },
  {
    slug: "creation-recettes",
    audience: "Marques, chefs & artisans",
    title: "Création de recettes",
    tagline: "Votre idée, ma recette, livrée en fiche technique",
    text: "Vous m'apportez une idée de produit. Je crée la recette de A à Z selon votre cahier des charges, et je vous livre la fiche technique prête à produire.",
    specs: [
      { label: "Pour qui", value: "Marques agroalimentaires, chefs, traiteurs, artisans" },
      { label: "Départ", value: "Votre idée et votre cahier des charges" },
      { label: "Livrable", value: "La fiche technique de la recette" },
    ],
    price: "Sur devis",
    priceNote: "Selon la technicité de la recette et le cahier des charges",
    cta: "Proposer une recette",
  },
  {
    slug: "coaching-rd",
    audience: "Industriels de l'agroalimentaire",
    title: "Coaching R&D",
    tagline: "Débloquer la créativité aromatique de vos équipes",
    text: "Un accompagnement concret, sur site, pour apprendre à vos équipes R&D à raisonner le goût de vos produits et à repérer où les huiles essentielles culinaires servent vraiment vos recettes et vos process.",
    specs: [
      { label: "Pour qui", value: "Services R&D des entreprises agroalimentaires" },
      { label: "Où", value: "Dans vos locaux" },
      { label: "Format", value: "Dix personnes maximum" },
      { label: "Durée", value: "Une journée" },
      { label: "Matériel", value: "Sur place, ou fourni si nécessaire" },
    ],
    price: "2 000 € / jour",
    priceNote: "Ingrédients et frais de déplacement en sus",
    cta: "Organiser un coaching R&D",
  },
  {
    slug: "coaching-cuisine",
    audience: "Restaurants & palaces",
    title: "Coaching en cuisine",
    tagline: "Révéler le potentiel inexploité de votre carte",
    text: "Une intervention dans votre cuisine, avec votre brigade et votre matériel. Je donne à votre équipe les clés pour affiner son sens du goût, les huiles essentielles culinaires n'étant qu'un outil de précision parmi d'autres.",
    specs: [
      { label: "Pour qui", value: "Restaurants et palaces" },
      { label: "Où", value: "Dans votre établissement" },
      { label: "Format", value: "Dix personnes maximum" },
      { label: "Durée", value: "Une journée" },
      { label: "Matériel", value: "Votre cuisine, votre matériel" },
    ],
    price: "2 000 € / jour",
    priceNote: "Ingrédients et frais de déplacement en sus",
    cta: "Organiser un coaching en cuisine",
  },
  {
    slug: "team-building",
    audience: "Entreprises",
    title: "Team building du goût",
    tagline: "L'expérience qui rassemble vos équipes autrement",
    text: "Un atelier de cuisine découverte que j'anime moi-même, où les huiles essentielles culinaires servent d'outil de précision. Vos collaborateurs repartent avec une expérience sensorielle marquante.",
    specs: [
      { label: "Pour qui", value: "Entreprises qui cherchent un événement d'équipe dont on reparle" },
      { label: "Où", value: "Dans vos locaux ou dans un hôtel partenaire" },
      { label: "Format", value: "Jusqu'à quinze personnes en atelier direct. Au-delà, on en parle ensemble" },
      { label: "Durée", value: "Une journée" },
      { label: "Matériel", value: "Entièrement fourni" },
    ],
    price: "2 000 € / jour",
    priceNote: "Ingrédients et frais de déplacement en sus",
    cta: "Organiser un team building",
  },
];

/** L'accompagnement gratuit, présenté à part pour ne pas le confondre avec le payant. */
export const FREE_OFFER = {
  slug: "accompagnement-gratuit",
  title: "Accompagnement succinct",
  tagline: "Gratuit, sans engagement",
  text: "Tout le monde n'a pas besoin d'une journée de travail. Selon votre besoin, je vous oriente sans frais.",
  cases: [
    {
      title: "Vous savez ce qu'il vous faut",
      text: "Vous connaissez les huiles essentielles que vous voulez utiliser. Je vous les vends, directement.",
    },
    {
      title: "Vous hésitez entre plusieurs huiles",
      text: "Je vous aiguille sur les références adaptées à votre produit, sans frais.",
    },
    {
      title: "Vous voulez tester vous-même",
      text: "Je vous envoie des échantillons et vous faites vos essais de votre côté.",
    },
  ],
  cta: "Demander un conseil gratuit",
};

/** Libellé du sujet de formulaire pour chaque slug d'offre. */
export const OFFER_SUBJECTS: Record<string, string> = {
  ...Object.fromEntries(OFFERS.map((o) => [o.slug, o.title])),
  [FREE_OFFER.slug]: "Accompagnement gratuit : conseil, échantillons, achat d'huiles",
};

export const offerContactHref = (slug: string) => `/contact/?offre=${slug}#formulaire`;
