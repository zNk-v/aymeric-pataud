/**
 * Preuves d'autorité : appartenances, ouvrages, presse.
 *
 * Aymeric est membre des Toques Françaises et du Collège Culinaire de France.
 *
 * Le Collège a longtemps été présenté ici comme une reconnaissance de la
 * catégorie et non comme une appartenance personnelle. Le courrier
 * d'intégration, transmis par Aymeric le 1er septembre 2026, dit le
 * contraire : candidature validée à l'unanimité par les chefs fondateurs le
 * 19 mai 2026, adhésion à son nom, statut d'Artisan Militant de la Qualité,
 * fiche établissement dans l'annuaire du Collège, plaque émaillée, cotisation
 * annuelle.
 *
 * Les deux faits tiennent ensemble : c'est par cette adhésion que les huiles
 * essentielles culinaires entrent dans l'institution. La formulation dit donc
 * l'appartenance d'abord, la portée pour la catégorie ensuite.
 *
 * MEALK ne figure pas ici. Aymeric en est cofondateur mais n'est plus associé
 * aux sociétés qui exploitent la marque : en faire un marqueur d'autorité
 * serait inexact. Le fait reste dans ses repères biographiques, daté.
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
    role: "Membre depuis mai 2026, Artisan Militant de la Qualité",
    text: "Candidature validée à l'unanimité par les chefs fondateurs. Avec cette adhésion, les huiles essentielles culinaires entrent dans l'institution qui rassemble les artisans et les producteurs de qualité en France.",
    logo: "/images/institutions/college-culinaire-france.png",
  },
];

/**
 * Quatre ouvrages publiés, dont le premier au monde consacré aux huiles
 * essentielles en cuisine, en 2004. Ils ne sont plus commercialisés : le
 * client a demandé de les citer comme marqueur d'autorité, sans insister.
 * Pas de couverture, pas de lien d'achat.
 */
export const BOOKS = {
  count: 4,
  firstYear: 2004,
  line: "Auteur de quatre ouvrages, dont le premier au monde consacré à l'usage des huiles essentielles en cuisine, publié en 2004. Ils ne sont plus commercialisés.",
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
