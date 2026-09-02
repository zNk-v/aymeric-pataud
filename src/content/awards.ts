/**
 * Médailles remportées au Mondial du Fromage de Tours par des produits
 * qu'Aymeric a aromatisés ou co-créés.
 *
 * ATTENTION À LA FORMULATION. Ces médailles appartiennent aux fabricants,
 * AFFINORD, MEALK et Les P'tits Fromagers, qui inscrivent leurs produits au
 * concours. Aymeric a créé les aromatisations. On écrit donc « des produits
 * qu'il a aromatisés ont été primés », jamais « ses médailles » : les
 * fabricants sont ses clients, et la nuance est vérifiable par n'importe qui.
 *
 * SOURCE : palmares_mondial_fromage_2015_2025.xlsx, transmis par Aymeric le
 * 1er septembre 2026.
 *
 * ÉCART ASSUMÉ ENTRE LE FICHIER ET CE QU'ON AFFICHE. La feuille de synthèse
 * annonce 22 médailles, la feuille détaillée n'en nomme que 15, et ses propres
 * notes disent « à confirmer par archive officielle », « couleurs à retrouver »
 * et « à recouper ». On ne publie que les 15 médailles nommées, produit par
 * produit. Tant qu'Aymeric n'a pas complété les sept manquantes, annoncer 22
 * serait invérifiable sur un site qui vend de la rigueur.
 *
 * Le concours a lieu les années impaires. 2015 et 2019 ne figurent pas au
 * fichier : aucune médaille identifiée, ce n'est pas un oubli.
 */

export type Medal = "Or" | "Argent" | "Bronze";

export type Award = {
  year: number;
  product: string;
  /** Le fabricant qui a inscrit le produit au concours. */
  maker: string;
  medal: Medal;
};

export const AWARDS: Award[] = [
  { year: 2017, product: "Beurre Ail des Ours", maker: "Les P'tits Fromagers / AFFINORD", medal: "Argent" },
  { year: 2017, product: "Yaourt Vanille de Papouasie & Coco", maker: "Les P'tits Fromagers / AFFINORD", medal: "Argent" },
  { year: 2017, product: "Beurre Tomates, Ail & Basilic", maker: "Les P'tits Fromagers / AFFINORD", medal: "Bronze" },
  { year: 2017, product: "Yaourt Banane & Citron vert", maker: "Les P'tits Fromagers / AFFINORD", medal: "Bronze" },

  { year: 2021, product: "Fondue suisse au poivre fumé", maker: "AFFINORD", medal: "Argent" },
  { year: 2021, product: "Beurre à l'Ail des Ours", maker: "AFFINORD", medal: "Argent" },

  { year: 2023, product: "Beurre à la Truffe MEALK 100 g", maker: "MEALK / AFFINORD", medal: "Or" },
  { year: 2023, product: "Tomme à la Salicorne de la Baie de Somme", maker: "AFFINORD", medal: "Or" },
  { year: 2023, product: "Tomme de Brebis au Poivre Fumé MEALK", maker: "MEALK / AFFINORD", medal: "Or" },
  { year: 2023, product: "Beurre Tomate Basilic 125 g", maker: "AFFINORD", medal: "Argent" },

  { year: 2025, product: "Raclette aux Cèpes MEALK", maker: "MEALK / AFFINORD", medal: "Argent" },
  { year: 2025, product: "Beurre à la Truffe MEALK", maker: "MEALK / AFFINORD", medal: "Argent" },
  { year: 2025, product: "Beurre Ail des Ours MEALK", maker: "MEALK / AFFINORD", medal: "Bronze" },
  { year: 2025, product: "Beurre Algues & Citron MEALK", maker: "MEALK / AFFINORD", medal: "Bronze" },
  { year: 2025, product: "Beurre Tomate Basilic MEALK", maker: "MEALK / AFFINORD", medal: "Bronze" },
];

export const AWARDS_COUNT = AWARDS.length;
export const AWARDS_FIRST_YEAR = Math.min(...AWARDS.map((a) => a.year));
export const AWARDS_LAST_YEAR = Math.max(...AWARDS.map((a) => a.year));

/** Décompte par métal, pour la ligne de synthèse. */
export const AWARDS_BY_MEDAL: Record<Medal, number> = AWARDS.reduce(
  (acc, a) => ({ ...acc, [a.medal]: acc[a.medal] + 1 }),
  { Or: 0, Argent: 0, Bronze: 0 } as Record<Medal, number>
);

/** Groupées par année, la plus récente d'abord. */
export const AWARDS_BY_YEAR: { year: number; awards: Award[] }[] = [
  ...new Set(AWARDS.map((a) => a.year)),
]
  .sort((a, b) => b - a)
  .map((year) => ({ year, awards: AWARDS.filter((a) => a.year === year) }));
