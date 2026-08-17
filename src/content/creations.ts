/**
 * Les créations d'Aymeric, par spécialité.
 *
 * Trois axes :
 *  - les fromages et produits laitiers, son plus fort potentiel ;
 *  - la nutrition sportive, une seconde expertise sans huiles essentielles ;
 *  - le terroir réunionnais, où il développe pour ses clients sans vendre.
 *
 * Rien n'est inventé. Les gammes, les parfums et les partenaires viennent de
 * ses propres mots ou de son site.
 */

/* ================================================ FROMAGES & LAITIERS ==== */

/**
 * ATTENTION, cadrage donné par Aymeric le 18 août 2026 :
 * il est cofondateur de MEALK mais n'est plus associé aux sociétés qui
 * exploitent la marque. Il en reste le créateur des recettes et le
 * fournisseur des ingrédients aromatiques.
 *
 * Conséquence pour le site : ces gammes sont SON travail, pas SA marque.
 * MEALK est nommé comme le distributeur, sobrement, et « cofondateur »
 * n'apparaît qu'une fois, dans les repères biographiques. Ne pas remettre
 * MEALK partout.
 *
 * Les parfums viennent de sa liste, recopiés sans ajout. Seul « Banane et
 * citron ver » a été complété en « citron vert », coquille évidente.
 */

export const DAIRY_ROLE = {
  what: "Créateur des recettes et fournisseur des ingrédients aromatiques",
  brand: "MEALK",
  brandUrl: "https://www.mealk.fr/",
};

export type Range = {
  name: string;
  flavours: string[];
};

export const DAIRY_RANGES: Range[] = [
  {
    name: "Yaourts",
    flavours: [
      "Cassis et fleur de sureau",
      "Fraise et verveine citronnée",
      "Framboise et combava",
      "Yuzu et citron",
      "Abricot et pistache",
      "Rhubarbe et gingembre",
      "Orange et fève de tonka",
      "Litchi et géranium",
      "Noix de coco et vanille de Papouasie",
      "Banane et citron vert",
    ],
  },
  {
    name: "Beurres",
    flavours: [
      "Safran de la Baie de Somme",
      "Cèpe",
      "Tomate, ail et basilic",
      "Citron jaune et verveine",
      "Ail des ours",
      "Truffe noire",
      "Orange et fève de tonka",
      "Citron et algues",
    ],
  },
  {
    name: "Miels",
    flavours: [
      "Yuzu et citron jaune",
      "Fraise et verveine",
      "Framboise et combava",
      "Banane et citron vert",
      "Orange et fève de tonka",
      "Abricot et pistache",
      "Cassis et fleur de sureau",
    ],
  },
  {
    name: "Raclettes",
    flavours: [
      "Ail des ours",
      "Cèpes",
      "Truffe noire du Périgord",
      "Tomate et basilic",
      "Poivre fumé",
      "Oignon rôti",
    ],
  },
  {
    name: "Fondues",
    flavours: [
      "Poivre fumé",
      "Cèpes et morilles",
      "Oignon rôti",
      "Ail des ours bio",
      "Truffes",
    ],
  },
  {
    name: "Cheesecakes",
    flavours: [
      "Citron jaune et yuzu",
      "Orange et fève de tonka",
      "Coco et vanille d'Indonésie",
      "Fraise et verveine",
    ],
  },
  {
    name: "Tommes de brebis",
    flavours: ["Poivre fumé"],
  },
  {
    name: "Burrata",
    flavours: ["Poivre fumé"],
  },
  {
    name: "Crémeux",
    flavours: ["Safran"],
  },
];

export const DAIRY_COUNT = DAIRY_RANGES.reduce(
  (n, r) => n + r.flavours.length,
  0
);

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
