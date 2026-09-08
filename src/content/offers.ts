/**
 * Formations et interventions : les quatre formats commerciaux.
 *
 * Source : « Catalogue_offres_Aymeric_Pataud.pdf », transmis par Aymeric le
 * 8 septembre 2026 avec la consigne de publier directement, sans nouveau
 * cadrage. Ce PDF ferme le dernier emplacement réservé de la page Consulting,
 * ouvert depuis le 17 août : durée, nombre de participants, lieu, matériel et
 * prix étaient les cinq lignes manquantes.
 *
 * Deux écarts assumés par rapport au PDF, signalés à Aymeric par mail :
 *
 * 1. La voix. Le catalogue est écrit au « nous » (« Nos formations »). Le site
 *    entier parle à la première personne du singulier. Les textes sont donc
 *    repris au « je », sans rien changer aux faits ni aux chiffres.
 *
 * 2. Le tarif du coaching R&D. Le PDF affiche « 2 000 € » sans unité là où les
 *    trois autres lignes portent « / jour », pour une durée d'une journée.
 *    Aligné sur « 2 000 € / jour » : à corriger si l'intention était un
 *    forfait.
 *
 * Les prix sont affichés publiquement, ce qui est un choix du client. Ils
 * restent des points de départ : le PDF le dit, la page le répète.
 */

export type Offer = {
  /** Cible commerciale, sert de sur-titre à la carte. */
  audience: string;
  title: string;
  /** Promesse, telle qu'elle figure au catalogue. */
  tagline: string;
  text: string;
  specs: { label: string; value: string }[];
  price: string;
  /** Mention des frais qui s'ajoutent au prix affiché. */
  priceNote?: string;
};

export const OFFERS: Offer[] = [
  {
    audience: "Entreprises",
    title: "Team building du goût",
    tagline: "L'expérience qui rassemble vos équipes autrement",
    text: "Un atelier de cuisine découverte que j'anime moi-même, où les huiles essentielles culinaires servent d'outil de précision. Vos collaborateurs repartent avec une expérience sensorielle marquante, pas avec un bon souvenir de plus.",
    specs: [
      { label: "Pour qui", value: "Entreprises qui cherchent un événement d'équipe dont on reparle" },
      { label: "Où", value: "Dans vos locaux ou dans un hôtel partenaire" },
      { label: "Format", value: "Jusqu'à 12 personnes en atelier direct. Au-delà, les participants travaillent en équipes de trois, jusqu'à trente" },
      { label: "Durée", value: "Une journée" },
      { label: "Matériel", value: "Entièrement fourni" },
    ],
    price: "2 000 € / jour",
    priceNote: "Ingrédients et frais de déplacement en sus",
  },
  {
    audience: "Chefs & professionnels",
    title: "Masterclass du goût",
    tagline: "Un savoir-faire rare, transmis en petit comité",
    text: "Un format volontairement resserré. Je transmets ma manière de travailler les huiles essentielles culinaires au service de vos propres créations, jamais comme une fin en soi. Six participants au maximum, pour que chacun reparte avec une compréhension réelle plutôt qu'une démonstration vue de loin.",
    specs: [
      { label: "Pour qui", value: "Chefs et professionnels de la cuisine" },
      { label: "Où", value: "Dans la cuisine professionnelle d'un chef partenaire" },
      { label: "Format", value: "Six personnes maximum" },
      { label: "Durée", value: "Une demi-journée, déjeuner inclus" },
      { label: "Matériel", value: "Entièrement fourni" },
    ],
    price: "300 € / personne",
  },
  {
    audience: "Restaurants & palaces",
    title: "Coaching culinaire en cuisine",
    tagline: "Révéler le potentiel inexploité de votre carte",
    text: "Une intervention sur place, dans votre cuisine, avec votre équipe et votre matériel. L'objectif est de donner à votre brigade les clés pour affiner son sens du goût, les huiles essentielles culinaires n'étant qu'un outil de précision parmi d'autres. Je ne plaque pas une recette toute faite.",
    specs: [
      { label: "Pour qui", value: "Restaurants et palaces" },
      { label: "Où", value: "Dans votre établissement" },
      { label: "Format", value: "Dix personnes maximum" },
      { label: "Durée", value: "Une journée" },
      { label: "Matériel", value: "Votre cuisine, votre matériel" },
    ],
    price: "2 000 € / jour",
    priceNote: "Ingrédients et frais de déplacement en sus",
  },
  {
    audience: "Industriels de l'agroalimentaire",
    title: "Coaching culinaire R&D",
    tagline: "Débloquer la créativité aromatique de vos équipes",
    text: "La même approche, transposée aux équipes R&D. Un accompagnement concret, sur site, pour apprendre à raisonner le goût de vos produits et repérer où les huiles essentielles culinaires servent vraiment vos recettes et vos process.",
    specs: [
      { label: "Pour qui", value: "Services R&D des entreprises agroalimentaires" },
      { label: "Où", value: "Dans vos locaux" },
      { label: "Format", value: "Dix personnes maximum" },
      { label: "Durée", value: "Une journée" },
      { label: "Matériel", value: "Sur place, ou fourni si nécessaire" },
    ],
    price: "2 000 € / jour",
    priceNote: "Ingrédients et frais de déplacement en sus",
  },
];

/**
 * Le long cours reste hors catalogue : le PDF renvoie lui-même vers une offre
 * « Accompagnement R&D dédiée » qu'Aymeric n'a pas chiffrée. Ces deux formats
 * restent donc sur devis, ce qui est cohérent avec le sur-mesure revendiqué
 * partout ailleurs sur le site.
 */
export const PROJECT_FORMATS = [
  {
    title: "Accompagnement R&D",
    text: "Un projet de développement produit sur plusieurs semaines ou plusieurs mois. Je travaille avec vos équipes sur une reformulation, un remplacement d'arôme ou la création d'un profil signature, de la première dégustation au dossier de validation.",
  },
  {
    title: "Création de recette",
    text: "Développement complet, du concept au produit fini. Ce que le produit doit dire, ce que le marché attend, ce que la bouche perçoit réellement.",
  },
];
