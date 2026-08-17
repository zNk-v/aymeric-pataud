/**
 * Preuves d'autorité : appartenances, ouvrages, presse.
 *
 * Deux choses à ne pas confondre, le client a insisté :
 *  - Aymeric est MEMBRE des Toques Françaises ;
 *  - les huiles essentielles culinaires viennent d'ENTRER au Collège Culinaire
 *    de France, ce qui est une première mondiale. Ce n'est pas une
 *    appartenance personnelle, c'est une reconnaissance de la catégorie.
 *
 * La date et la source de cette entrée manquent encore : tant qu'elles ne
 * sont pas fournies, la mention reste au conditionnel factuel, sans date.
 */

export const MEMBERSHIPS = [
  {
    name: "Les Toques Françaises",
    role: "Membre",
    text: "Aymeric est chef, et il le reste. Porter la toque, c'est ce qui fonde sa lecture du goût avant toute considération technique.",
    logo: "/images/institutions/toques-francaises.svg",
  },
  {
    name: "Collège Culinaire de France",
    role: "Les huiles essentielles culinaires y sont entrées",
    text: "Une première mondiale : la catégorie est désormais reconnue par l'institution qui rassemble les artisans et les producteurs de qualité en France.",
    logo: "/images/institutions/college-culinaire-france.png",
    pendingSource: true,
  },
];

/**
 * Quatre ouvrages publiés, dont le premier au monde consacré aux huiles
 * essentielles en cuisine, en 2003. Ils ne sont plus commercialisés : le
 * client a demandé de les citer comme marqueur d'autorité, sans insister.
 * Pas de couverture, pas de lien d'achat.
 */
export const BOOKS = {
  count: 4,
  firstYear: 2003,
  line: "Auteur de quatre ouvrages, dont le premier au monde consacré à l'usage des huiles essentielles en cuisine, publié en 2003. Ils ne sont plus commercialisés.",
};

/**
 * Mentions presse.
 *
 * Le client a fourni les scans et les captures, pas les métadonnées. Les
 * articles restent la propriété des journaux : on cite le média et on renvoie
 * vers la publication, on ne republie pas les pages.
 *
 * `date` et `url` restent nuls tant qu'Aymeric ne les a pas confirmés. Le
 * composant n'affiche que ce qui est renseigné.
 */
export type PressItem = {
  outlet: string;
  subject: string;
  date: string | null;
  url: string | null;
};

export const PRESS: PressItem[] = [
  {
    outlet: "Le Journal d'Amiens Métropole",
    subject: "L'atelier et l'éco-extracteur",
    date: null,
    url: null,
  },
  {
    outlet: "Vital Food",
    subject: "Les huiles essentielles en cuisine",
    date: null,
    url: null,
  },
  {
    outlet: "CB13",
    subject: "Dossier huiles essentielles culinaires",
    date: null,
    url: null,
  },
  {
    outlet: "Dicila",
    subject: "Portrait et savoir-faire aromatique",
    date: null,
    url: null,
  },
  {
    outlet: "La Gazette de Picardie",
    subject: "Le chef qui twiste les recettes",
    date: null,
    url: null,
  },
];

/** Les journalistes le sollicitent comme référence sur le sujet. */
export const PRESS_FREQUENCY = "trois à quatre fois par an";
