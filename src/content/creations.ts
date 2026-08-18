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
 * Cadrage MEALK, précisé par Aymeric le 19 août 2026.
 *
 * Il FAUT parler de MEALK : il en est cofondateur et il a créé la plupart des
 * recettes. Ce qu'il refuse, c'est qu'un lecteur en conclue que MEALK, c'est
 * lui. Il n'exploite pas la marque et ne la commercialise pas : son ancien
 * associé, cofondateur lui aussi, s'en charge.
 *
 * Ce n'est donc pas un problème de dosage mais d'attribution. Une phrase
 * explicite vaut mieux que des mentions retirées : voir DAIRY_ROLE, qui doit
 * apparaître partout où la marque est nommée longuement.
 *
 * Les parfums viennent de sa liste, recopiés sans ajout. Seul « Banane et
 * citron ver » a été complété en « citron vert », coquille évidente.
 */

export const DAIRY_ROLE = {
  brand: "MEALK",
  brandUrl: "https://www.mealk.fr/",
  /** Ce qu'il est. */
  role: "Cofondateur",
  /** Ce qu'il fait aujourd'hui. */
  does: "J'en ai créé la plupart des recettes et je fournis les ingrédients aromatiques.",
  /** Ce qu'il ne fait pas. Cette phrase ne doit pas disparaître. */
  doesNot:
    "Je n'exploite pas la marque et je ne la commercialise pas : mon ancien associé, cofondateur lui aussi, s'en charge.",
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

/* ============================================== TARTINABLES & CONDIMENTS == */

/**
 * Retour d'Aymeric du 19 août 2026 : avec seulement le fromage et le sport, le
 * site donne l'impression qu'il ne fait que ça. Il accompagne n'importe quelle
 * société dans n'importe quel domaine, et c'est ce qu'il faut montrer.
 *
 * Ces huit recettes viennent de sa liste. Chacune porte sa contrainte, parce
 * que c'est la contrainte qui prouve le métier, pas le produit fini.
 *
 * ATTENTION : il demande de ne pas nommer le client sur cette page. Le même
 * client est pourtant nommé sur /references/, où ses produits sont déjà
 * détaillés, et il l'était déjà sur l'ancien WordPress. Incohérence signalée,
 * en attente de son arbitrage.
 */
export const SPREAD_CREATIONS = [
  {
    name: "Ketchup à la tomate cœur de bœuf",
    brief:
      "Diviser le taux de sucre par deux, tout en le rendant plus gourmand que l'original.",
    twist: "Validé par mes enfants. Ce sont eux les vrais clients.",
  },
  {
    name: "Sauce barbecue",
    brief:
      "Même cahier des charges que le ketchup, avec une contrainte de plus : enlever tous les additifs.",
  },
  {
    name: "Caviar de cornichons aux épices",
    brief: "Rendre le cornichon tartinable, ce pour quoi il n'est pas fait.",
  },
  {
    name: "Houmous rose",
    brief:
      "À base des betteraves cultivées par le client, avec une texture soyeuse.",
  },
  {
    name: "Caviar d'aubergines aux épices",
    brief:
      "Construire un goût qui survit à la pasteurisation, là où les épices s'affaissent.",
  },
  {
    name: "Tartinable artichaut et parmesan",
    brief:
      "Le plus gourmand possible, et pasteurisable. Les deux exigences se contredisent.",
  },
  {
    name: "Crème de butternut à la truffe",
    brief:
      "Garder le goût de truffe sans écraser celui du butternut. La truffe couvre tout ce qu'elle touche.",
  },
  {
    name: "Sauce burger sans œufs",
    brief:
      "Hyper gourmande, sans œufs, sans additifs, et stable à température ambiante.",
    twist: "Le challenge le plus dur que j'aie eu à relever.",
  },
];

/** Ce qu'il ne peut pas montrer. */
export const CONFIDENTIALITY =
  "J'ai accompagné des dizaines d'autres entreprises dans la création de recettes. Les accords de confidentialité, courants en agroalimentaire, m'interdisent d'en dire plus.";
