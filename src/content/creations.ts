/**
 * Les créations d'Aymeric, par spécialité.
 *
 * Trois axes, tous fournis par le client lors du retour du 17 août 2026 :
 *  - les fromages et produits laitiers, son plus fort potentiel de
 *    développement, réalisés avec MEALK dont il est cofondateur ;
 *  - la nutrition sportive, une seconde expertise qui se passe d'huiles
 *    essentielles ;
 *  - le terroir réunionnais, où il développe pour ses clients sans vendre.
 *
 * Rien n'est inventé ici. Les gammes, les parfums et les partenaires viennent
 * de ses propres mots ou de son site. Les fourchettes (« huit à neuf yaourts »)
 * sont écrites telles qu'il les a données : il n'a pas donné de compte exact.
 */

export type Range = {
  name: string;
  count: string;
  flavours: string[];
  note?: string;
};

/* ================================================ FROMAGES & LAITIERS ==== */

export const DAIRY_RANGES: Range[] = [
  {
    name: "Yaourts",
    count: "8 à 9 références",
    flavours: [
      "Orange & fève de tonka",
      "Fraise & verveine",
      "Citron yuzu",
    ],
    note: "Les trois parfums documentés à ce jour. La gamme en compte davantage.",
  },
  {
    name: "Raclettes",
    count: "5 à 6 références",
    flavours: ["Oignon rôti, à l'huile essentielle d'oignon rendue hydrosoluble"],
  },
  {
    name: "Tommes",
    count: "Vache et brebis",
    flavours: ["Tomme au poivre fumé, à l'huile essentielle de poivre de Madagascar"],
  },
  {
    name: "Beurres d'exception",
    count: "5 à 6 références",
    flavours: [
      "Tomates & basilic",
      "Algues & citron",
      "Ail des ours, sublimé à l'huile essentielle d'ail",
    ],
  },
];

/** Le verrou technique résolu il y a plus de dix ans. */
export const DAIRY_LOCK = {
  problem:
    "Comment aromatiser du lait directement avec une huile essentielle, alors que l'huile et l'eau ne se mélangent pas ?",
  answer:
    "Des huiles essentielles culinaires rendues solubles dans le lait. Une solution que personne n'avait développée avant, et qui a ouvert un champ de création inédit.",
};

/* ================================================= NUTRITION SPORTIVE ==== */

export const SPORT_PROJECTS = [
  {
    partner: "Marie de Livinhac",
    brands: "Trek & Adventure et Croq et Craq",
    text: "Trente plats lyophilisés lancés à la rentrée, pour ceux qui voyagent léger et refusent de manger sans plaisir. Entrées, plats, desserts, boissons. Un seul geste : ajouter de l'eau chaude.",
    result:
      "Des profils aromatiques capables de résister à la lyophilisation, de conserver leur complexité après réhydratation, et de recréer la sensation d'un plat cuisiné plutôt que d'une ration technique.",
    quote: "L'un des plus grands défis de ma vie. Et clairement le plus excitant.",
    slug: "marie-de-livinhac",
  },
  {
    partner: "Randofruits",
    brands: "Barres énergétiques et nutrition sportive, 100 % terroir réunionnais",
    text: "Une contrainte non négociable : uniquement des ingrédients issus du terroir de La Réunion. Fruits, épices, plantes locales. Pas de compromis sur l'origine, pas de compromis sur le goût.",
    result:
      "Des produits qui racontent un territoire autant qu'ils nourrissent un athlète. La contrainte est devenue la signature.",
    quote: "Quand la limite devient l'identité.",
    slug: "randofruits",
  },
];

export const SPORT_CONSTRAINTS = [
  {
    title: "Le goût doit tenir dans le temps",
    text: "La lyophilisation et la déshydratation cassent les édifices aromatiques. Ce qui est juste en cuisine ne l'est plus après transformation.",
  },
  {
    title: "Il doit rester lisible sous fatigue",
    text: "Après plusieurs heures d'effort, la perception s'émousse. Un goût correct devient fade, un goût marqué devient écœurant.",
  },
  {
    title: "Il doit résister à la répétition",
    text: "Sur plusieurs jours, le même plat revient. Ce qui plaît la première fois doit encore passer la sixième.",
  },
  {
    title: "Il doit être reproductible",
    text: "En production, lot après lot, sans dérive. Un profil qui bouge est un profil inexploitable.",
  },
];

/* ===================================================== TERROIR RÉUNION === */

export const REUNION_CREATIONS = [
  {
    name: "Préparation pour gâteau patate",
    text: "Le dessert réunionnais le plus identitaire, transposé en préparation prête à cuire, sans perdre la texture ni le goût du fait maison.",
  },
  {
    name: "Pâte de tomates séchées 100 % Réunion",
    text: "Combava, gros piment, massalé. Une base de condiment qui raconte l'île en une cuillère, à partir de matières premières locales uniquement.",
  },
];
