/**
 * Catalogue repris de /nos-huiles-essentielles-culinaires/.
 * Neuf références ajoutées le 1er septembre 2026 d'après le mail de Vorombola
 * « LISTE REF NON CITÉ SUR LE SITE » : entrées absentes du catalogue WordPress
 * d'origine. Le PDF téléchargeable du WordPress pointe vers un lien mort :
 * voir docs/A-VALIDER.md.
 */

export type OilFamily = {
  slug: string;
  name: string;
  intro: string;
  oils: string[];
};

export const OIL_FAMILIES: OilFamily[] = [
  {
    slug: "agrumes-fruits",
    name: "Agrumes & fruits",
    intro: "Attaque franche, longueur nette. La famille la plus demandée en pâtisserie et en boisson.",
    oils: [
      "Agrumes",
      "Amande amère",
      "Bergamote bio",
      "Cédrat",
      "Citron jaune",
      "Citron jaune bio",
      "Citron vert bio",
      "Combava",
      "Combava bio",
      "Fève de tonka",
      "Mandarine rouge bio",
      "Noix de coco",
      "Orange douce bio",
      "Orange sanguine bio",
      "Pamplemousse",
      "Pamplemousse bio",
      "Pistache",
      "Yuzu",
    ],
  },
  {
    slug: "herbes",
    name: "Herbes aromatiques",
    intro: "Là où l'herbe déshydratée perd son intensité en cours de fabrication, l'huile la restitue.",
    oils: [
      "Aneth bio",
      "Basilic bio",
      "Céleri",
      "Ciboulette",
      "Citronnelle bio",
      "Coriandre feuilles",
      "Estragon bio",
      "Herbes de Provence bio",
      "Laurier bio",
      "Marjolaine bio",
      "Menthe poivrée bio",
      "Menthe verte bio",
      "Origan bio",
      "Persil",
      "Romarin bio",
      "Sarriette des montagnes bio",
      "Thym bio",
      "Thym citronné",
      "Verveine bio",
      "Eucalyptus",
      "Sauge",
    ],
  },
  {
    slug: "epices",
    name: "Épices",
    intro: "Puissance et reproductibilité, sans les variations de lot d'une poudre.",
    oils: [
      "Cannelle Burmanii",
      "Cardamome",
      "Coriandre graines bio",
      "Cumin bio",
      "Curry bio",
      "Gingembre bio",
      "Girofle bio",
      "Macis (fleur de muscade)",
      "Moutarde",
      "Noix de muscade bio",
      "Pain d'épices bio",
      "Piment fort bio",
      "Poivre blanc",
      "Poivre de Sichuan",
      "Poivre noir",
      "Poivre noir bio",
      "Vanille d'Indonésie",
      "Vanille Bourbon bio",
      "Genévrier",
    ],
  },
  {
    slug: "fleurs",
    name: "Fleurs",
    intro: "Le registre le plus délicat. Un dosage de trop et le produit bascule dans le cosmétique.",
    oils: [
      "Fleur de sureau",
      "Fleur d'oranger bio",
      "Géranium rosat bio",
      "Jasmin sambac",
      "Lavande fine bio",
      "Rose de Damas",
      "Ylang ylang bio",
    ],
  },
  {
    slug: "autres",
    name: "Alliacées, bois & torréfiés",
    intro: "Les références que l'on ne trouve presque nulle part ailleurs en qualité culinaire.",
    oils: [
      "Ail",
      "Échalote",
      "Grain de café bio",
      "Houblon",
      "Oignon",
      "Pin sylvestre bio",
      "Raifort",
      "Sapin argenté bio",
    ],
  },
];

export const OIL_COUNT = OIL_FAMILIES.reduce((n, f) => n + f.oils.length, 0);

/** Exemples de créations sur-mesure cités par Aymeric. */
export const BESPOKE_EXAMPLES = [
  "Citron de Menton IGP",
  "Zaatar",
  "Poivre de Sichuan de Picardie",
  "Pin douglas d'Alsace",
  "Poivre Patience de Côte d'Ivoire",
];
