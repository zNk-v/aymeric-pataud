/**
 * Preuves d'autorité : appartenances, ouvrages, presse.
 *
 * Deux choses à ne pas confondre, le client a insisté :
 *  - Aymeric est MEMBRE des Toques Françaises ;
 *  - les huiles essentielles culinaires viennent d'ENTRER au Collège Culinaire
 *    de France, ce qui est une première mondiale. Ce n'est pas une
 *    appartenance personnelle, c'est une reconnaissance de la catégorie.
 *
 * Date de l'entrée au Collège Culinaire : mai 2026, confirmée par Aymeric
 * le 17 août 2026.
 */

export const MEMBERSHIPS = [
  {
    name: "MEALK",
    role: "Cofondateur",
    text: "Chef et cofondateur d'une marque de fromagerie. C'est de cette double casquette que sont nées les huiles essentielles hydrosolubles, puis les gammes de yaourts, tommes, raclettes et beurres.",
    logo: "/images/logos/mealk.webp",
  },
  {
    name: "Les Toques Françaises",
    role: "Membre",
    text: "Aymeric est chef, et il le reste. Porter la toque, c'est ce qui fonde sa lecture du goût avant toute considération technique.",
    logo: "/images/institutions/toques-francaises.svg",
  },
  {
    name: "Collège Culinaire de France",
    role: "Les huiles essentielles culinaires y sont entrées en mai 2026",
    text: "Une première mondiale : la catégorie est désormais reconnue par l'institution qui rassemble les artisans et les producteurs de qualité en France.",
    logo: "/images/institutions/college-culinaire-france.png",
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
 * Aymeric les juge secondaires : ces articles visent le grand public, pas les
 * industriels qu'il cherche. Le bloc reste donc court, il prouve la présence
 * médiatique sans occuper la page.
 *
 * Les articles restent la propriété des journaux : on cite le média, on ne
 * republie pas les pages. `date` et `url` restent nuls tant qu'Aymeric ne les
 * a pas confirmés, le composant n'affiche que ce qui est renseigné.
 */
export type PressItem = {
  outlet: string;
  subject: string;
  date: string | null;
  url: string | null;
};

export const PRESS: PressItem[] = [
  { outlet: "Vital Food", subject: "Les huiles essentielles passent à table", date: null, url: null },
  { outlet: "Le Journal d'Amiens Métropole", subject: "L'atelier et l'éco-extracteur", date: null, url: null },
  { outlet: "CB13", subject: "Dossier huiles essentielles culinaires", date: null, url: null },
  { outlet: "La Gazette de Picardie", subject: "Le chef qui twiste les recettes", date: null, url: null },
  { outlet: "Dicila", subject: "Portrait et savoir-faire aromatique", date: null, url: null },
];

/** Les journalistes le sollicitent comme référence sur le sujet. */
export const PRESS_FREQUENCY = "trois à quatre fois par an";
