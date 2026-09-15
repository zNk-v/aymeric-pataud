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
 * essentielles culinaires entrent dans l'institution.
 *
 * Ordre arbitré par Aymeric le 2 septembre 2026, contre ma première version.
 * Son argument : « je fais partie de très nombreuses personnes rentrées au
 * collège culinaire, par contre les huiles essentielles culinaires, c'est une
 * première mondiale ». Il a raison sur ce qui différencie. La catégorie passe
 * donc en titre, l'adhésion reste juste en dessous : elle est ce qui rend la
 * première vérifiable, et il y a été admis comme expert de ces huiles.
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
    url: null,
    urlLabel: null,
  },
  {
    name: "Collège Culinaire de France",
    role: "Les huiles essentielles culinaires y entrent en mai 2026",
    text: "Aymeric y a été admis comme expert des huiles essentielles culinaires, à l'unanimité des chefs fondateurs. Des centaines d'artisans rejoignent le collectif ; la catégorie, elle, y entre pour la première fois.",
    logo: "/images/institutions/college-culinaire-france.png",
    // Fiche d'adhérent transmise par Aymeric le 15 septembre 2026.
    url: "https://college-culinaire-de-france.fr/adherent/38280-aymeric-pataud",
    urlLabel: "Voir sa fiche au Collège",
  },
];

/**
 * Distinctions et réseaux professionnels, transmis par Aymeric le
 * 15 septembre 2026 : il s'est aperçu en rendez-vous que le site n'affichait
 * que les médailles du Mondial du Fromage.
 *
 * Deux usages : une ligne courte chacun dans la bande preuve de l'accueil
 * (Food Creativ et INNOV'A seulement), et le bloc « Reconnaissances » de
 * /expertise-du-gout/, où le texte est le sien, repris tel quel.
 */
export const DISTINCTIONS = {
  text: "En 2024, mon sirop aux huiles essentielles de citron noir et de poivre de Sichuan de Picardie a été récompensé par le concours Food Creativ, qui distingue chaque année les produits agroalimentaires les plus innovants des Hauts-de-France. Un an plus tard, en octobre 2025, INNOV'A m'a sélectionné et incubé au titre d'entreprise innovante, un accompagnement soutenu par Amiens Métropole, la CCI Amiens Picardie et la Région Hauts-de-France. Je suis par ailleurs adhérent d'Agro-Sphères et d'ADRIANOR depuis 2021, deux réseaux qui réunissent industriels et centres techniques de l'agroalimentaire des Hauts-de-France.",
  items: [
    {
      name: "Food Creativ",
      year: "2024",
      role: "Lauréat, sirop citron noir et poivre de Sichuan de Picardie",
      url: "https://foodcreativ.fr/#edition",
    },
    {
      name: "INNOV'A",
      year: "2025",
      role: "Incubé au titre d'entreprise innovante, Amiens",
      url: "https://www.innov-a.com/",
    },
    {
      name: "Agro-Sphères",
      year: "2021",
      role: "Adhérent",
      url: "https://agrospheres.eu/",
    },
    {
      name: "ADRIANOR",
      year: "2021",
      role: "Adhérent",
      url: "https://www.adrianor.com/",
    },
  ],
};

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
