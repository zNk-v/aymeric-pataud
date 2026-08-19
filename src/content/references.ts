/**
 * Les 12 collaborations publiées par Aymeric sur son WordPress
 * (/ils-nous-font-confiance/). Contenu repris de sa propre page, resserré
 * dans la structure défi / intervention / résultat. Rien d'inventé :
 * l'archive brute est dans archive-wordpress/contenu/.
 */

export type Reference = {
  slug: string;
  name: string;
  sector: string;
  /** Profil de rattachement, sert au filtrage par cible. */
  audience: ("industriel" | "chef" | "artisan")[];
  /** Mis en avant sur la page d'accueil. */
  featured?: boolean;
  logo: string | null;
  website?: string;
  challenge: string;
  work: string;
  result: string;
  pullQuote?: string;
};

export const REFERENCES: Reference[] = [
  {
    slug: "jean-marc-tachet",
    name: "Jean-Marc Tachet",
    sector: "Meilleur Ouvrier de France Cuisine, inventeur de l'imprégnation sous vide",
    audience: ["industriel", "chef"],
    featured: true,
    logo: "/images/logos/tachet.webp",
    website: "https://www.jeanmarctachet.com/",
    challenge:
      "Son brevet d'imprégnation sous vide conserve viandes et poissons frais pendant des semaines à température, en les imprégnant d'huiles et d'aromatiques. Pour que la technologie révèle son potentiel, il fallait des aromatiques à sa hauteur.",
    work:
      "Création de mélanges d'huiles essentielles culinaires sur-mesure conçus pour deux usages simultanés : apporter une signature aromatique précise et profonde au produit imprégné, et exploiter les propriétés antioxydantes des huiles pour prévenir l'oxydation.",
    result:
      "Quinze ans de collaboration. Consultant pour de grands groupes agroalimentaires dans le monde entier, il intègre ces huiles dans les recettes qu'il développe pour ses clients.",
    pullQuote: "Deux brevets, une même obsession : la perfection du goût.",
  },
  {
    slug: "mealk",
    name: "Mealk",
    sector: "Fromager, affineur et distributeur premium, avec Julien Planchon",
    audience: ["industriel", "artisan"],
    featured: true,
    logo: "/images/logos/mealk.webp",
    website: "https://www.mealk.fr/",
    challenge:
      "Comment aromatiser le lait directement avec des huiles essentielles, alors que l'huile et l'eau ne se mélangent pas ? Un verrou technique que personne n'avait levé.",
    work:
      "Création, il y a plus de dix ans, d'huiles essentielles hydrodispersables : des huiles culinaires rendues solubles dans le lait, capables d'aromatiser directement la matière première fromagère.",
    result:
      "Une gamme impossible à reproduire sans ce savoir-faire. Yaourts orange et fève de tonka, fraise et verveine, citron yuzu. Tomme au poivre fumé, raclette à l'oignon rôti. Beurres tomates et basilic, algues et citron, ail des ours.",
    pullQuote:
      "Quand l'huile et l'eau refusent de se mélanger, on invente une troisième voie.",
  },
  {
    slug: "biscuiterie-jeannette",
    name: "Biscuiterie Jeannette",
    sector: "Madeleines, financiers et cakes, depuis 2013",
    audience: ["industriel", "artisan"],
    logo: "/images/logos/biscuiterie-jeannette.webp",
    challenge:
      "Tenir une identité gustative forte et cohérente sur une gamme emblématique, tout en innovant régulièrement, sans trahir l'ADN de la marque.",
    work:
      "Accompagnement aromatique sur mesure depuis plus de dix ans. Développement des solutions aromatisantes haut de gamme pour les madeleines, les financiers et les cakes, et fourniture exclusive d'huiles essentielles culinaires Délice & Sens sur la gamme madeleines. Présence à chaque réflexion produit, de la conception au lancement des nouveautés.",
    result:
      "Une signature aromatique reconnaissable, cohérente sur toute la gamme. Treize ans de collaboration, ce qui dit tout.",
  },
  {
    slug: "mathieu-blandin",
    name: "Mathieu Blandin",
    sector: "Champion du Monde de Pâtisserie, consultant et formateur international",
    audience: ["chef"],
    featured: true,
    logo: "/images/mathieu-blandin.webp",
    website: "https://www.atelier-malice.com/formateurs/mathieu-blandin/",
    challenge:
      "Il forme les meilleurs pâtissiers de France et du monde. À ce niveau, aucun compromis n'est possible sur les ingrédients.",
    work:
      "Après avoir testé ce qui existe sur le marché, il a jugé les aromatisations végétales Délice & Sens au-dessus de tout ce qu'il avait trouvé ailleurs.",
    result:
      "Il les utilise pour ses propres créations pâtissières et les recommande à ses clients.",
    pullQuote:
      "Le meilleur ambassadeur est celui que vous n'avez pas eu besoin de convaincre.",
  },
  {
    slug: "very-foody",
    name: "Very Foody",
    sector: "Laboratoire d'innovation culinaire, développement de produits agroalimentaires",
    audience: ["industriel"],
    logo: "/images/logos/very-foody.webp",
    website: "https://www.veryfoody.com/",
    challenge:
      "Un laboratoire d'innovation ne peut pas travailler avec des ingrédients moyens : la crédibilité de chaque projet en dépend.",
    work:
      "Intégration des huiles essentielles culinaires premium dans leurs créations : boissons, sauces, recettes sur-mesure pour leurs propres clients.",
    result:
      "Quand un laboratoire d'innovation fait de vous son fournisseur de référence en aromatisation, c'est qu'il ne prescrit que ce qu'il croit.",
    pullQuote:
      "La confiance d'un expert vaut mieux que n'importe quel argument commercial.",
  },
  {
    slug: "la-comtoise",
    name: "La Comtoise",
    sector: "Sauces et spécialités fromagères pour l'industrie et le foodservice",
    audience: ["industriel"],
    logo: "/images/logos/la-comtoise.webp",
    website: "https://www.comtoisefromagere.fr/",
    challenge:
      "Donner aux sauces fromagères une dimension aromatique impossible à atteindre avec les solutions du marché.",
    work:
      "Découverte du savoir-faire via Very Foody, leur laboratoire d'innovation partenaire, puis adoption directe du système d'aromatisation végétale dans certaines créations.",
    result:
      "De nouveaux goûts, de nouvelles signatures, et une gamme dont certaines recettes se distinguent par une profondeur aromatique hors du commun.",
    pullQuote: "Parfois, la meilleure recommandation vient d'un autre expert.",
  },
  {
    slug: "brasserie-felicite",
    name: "Brasserie Félicité",
    sector: "Brasserie artisanale créative, Hauts-de-France",
    audience: ["artisan", "industriel"],
    logo: "/images/logos/brasserie-felicite.webp",
    website: "https://brasserie-felicite.fr/",
    challenge:
      "Aromatiser une bière pose le même problème que le fromage : l'huile et l'eau ne se mélangent pas. Les arômes de synthèse et les molécules isolées restaient la solution par défaut, loin de la naturalité revendiquée par une brasserie artisanale.",
    work:
      "Aromatisation directe de certaines bières avec de vraies huiles essentielles culinaires, grâce aux versions hydrodispersables. Comme la bière à la rose, au profil floral et délicat.",
    result:
      "Fini les arômes de synthèse et les molécules isolées. Une aromatisation 100 % végétale, précise et traçable, qui donne à chaque bière une identité revendiquable.",
    pullQuote: "Quand la rose entre dans la bière pour de vrai.",
  },
  {
    slug: "maison-perrotte",
    name: "Maison Perrotte",
    sector: "Confitures artisanales d'exception, Stéphan Perrotte, Champion du Monde",
    audience: ["artisan", "chef"],
    logo: "/images/logos/maison-perrotte.webp",
    website: "https://maisonperrotte.fr/",
    challenge:
      "Ses confitures sont déjà abouties. Il cherche parfois à les faire voyager plus loin : une touche inattendue, une profondeur supplémentaire.",
    work:
      "Depuis plus de dix ans, quelques-unes de ses créations sont twistées avec les huiles essentielles culinaires premium. Pas systématiquement, seulement quand l'idée le demande.",
    result:
      "Le Champion du Monde des confitures sait où appeler quand il veut aller plus loin.",
    pullQuote:
      "Quand le meilleur confiturier du monde veut twister une recette, il appelle.",
  },
  {
    slug: "bille-en-tete",
    name: "Bille en Tête",
    sector: "Chocolatier, billes soufflées enrobées de chocolat",
    audience: ["artisan", "chef"],
    logo: "/images/logos/bille-en-tete.webp",
    website: "https://billeentete.net/",
    challenge:
      "Sortir des arômes chocolat classiques et proposer des associations inattendues, capables de surprendre sans dénaturer, en restant premium et artisanal.",
    work:
      "Développement de solutions aromatiques à base d'huiles essentielles culinaires, dont le yuzu. Puis création d'huiles essentielles sur-mesure extraites à l'atelier, jamais explorées dans l'univers du chocolat.",
    result:
      "Des billes chocolatées qui ne ressemblent à rien d'autre sur le marché, parce que leur arôme n'existe nulle part ailleurs.",
    pullQuote: "Quand l'inédit devient une recette.",
  },
  {
    slug: "ocni-factory",
    name: "OCNI Factory",
    sector: "Crayons d'assaisonnement, sublimation des plats",
    audience: ["industriel", "chef"],
    logo: "/images/logos/ocni.webp",
    website: "https://ocni-factory.com/",
    challenge:
      "Pour qu'un crayon d'assaisonnement tienne sa promesse, l'arôme doit être irréprochable : naturel, précis, intense.",
    work:
      "Fourniture de solutions aromatisantes à base d'huiles essentielles culinaires pour l'ensemble de leurs créations : basilic, cumin, coriandre graine, coriandre feuille.",
    result:
      "Une rencontre sur un salon, un essai, et une collaboration qui dure. Une intensité et une naturalité qu'aucun arôme de synthèse ne reproduit.",
    pullQuote: "Parfois, un seul essai suffit.",
  },
  {
    slug: "toque-dazur",
    name: "Toque d'Azur",
    sector: "Solutions aromatiques pour la restauration commerciale et la RHF",
    audience: ["chef", "industriel"],
    logo: "/images/logos/toque-dazur.webp",
    website: "https://www.toquedazur.fr/",
    challenge:
      "Offrir aux restaurateurs des produits de finition identitaires, loin des condiments standardisés, pour créer une signature visuelle et gustative.",
    work:
      "Création d'une gamme complète de crèmes de vinaigre haut de gamme : balsamique orange et fève de tonka, framboise et combava, soja et duo de gingembre.",
    result:
      "Une dizaine de références nées du croisement entre le savoir-faire aromatique et celui des chefs du centre d'innovation culinaire Toque d'Azur.",
  },
  {
    slug: "marie-de-livinhac",
    name: "Marie de Livinhac",
    sector: "Plats lyophilisés premium, marques Trek & Adventure et Croq et Craq",
    audience: ["industriel"],
    logo: "/images/logos/marie-de-livinhac.webp",
    website: "https://mariedelivinhac.com/",
    challenge:
      "Créer des plats lyophilisés avec un vrai goût de cuisine maison, pour ceux qui voyagent léger et refusent de manger sans plaisir. Un seul geste : ajouter de l'eau chaude.",
    work:
      "Conception et optimisation d'une gamme premium, sur des profils aromatiques capables de résister à la lyophilisation, de conserver leur complexité après réhydratation et de recréer la sensation d'un plat cuisiné.",
    result:
      "Une gamme qui prouve qu'on peut allier praticité extrême et plaisir gustatif.",
    pullQuote: "L'un des plus grands défis de ma vie. Et clairement le plus excitant.",
  },
  {
    slug: "pre-grandin",
    name: "SNC Pré Grandin",
    sector: "Agriculteur et transformateur, condiments et tartinables premium",
    audience: ["artisan", "industriel"],
    logo: "/images/logos/pre-grandin.webp",
    website: "https://www.pre-grandin.com/",
    challenge:
      "Valoriser une production agricole locale en produits premium à forte identité, sans additifs, sans arômes artificiels, avec moins de sucre.",
    work:
      "Développement de A à Z d'une gamme de condiments et tartinables 100 % naturels à base des légumes de leur exploitation : ketchup, sauce barbecue, houmous à la betterave, tartinable artichaut et parmesan, tartinable légumes de saison et truffe. Chaque recette sublimée par une épice ou une huile essentielle spécifique.",
    result:
      "La contrainte « uniquement nos produits » devient un argument de vente : traçabilité totale, naturalité revendiquée, goût juste.",
    pullQuote: "Quand le champ devient la recette.",
  },
  {
    slug: "randofruits",
    name: "Randofruits",
    sector: "Barres énergétiques et nutrition sportive, 100 % terroir réunionnais",
    audience: ["industriel", "artisan"],
    logo: "/images/logos/randofruits.webp",
    website: "https://www.randofruits.re/",
    challenge:
      "Créer des barres énergétiques pour randonneurs, trailers et runners avec une contrainte non négociable : uniquement des ingrédients du terroir de La Réunion.",
    work:
      "Développement complet de la gamme aromatique en travaillant exclusivement les fruits, épices et plantes locales. Chaque recette devait être performante pour l'effort et ancrée dans l'identité de l'île.",
    result:
      "Des produits qui racontent un territoire autant qu'ils nourrissent un athlète. Sortie prévue en 2026.",
    pullQuote: "Quand la limite devient l'identité.",
  },
  {
    slug: "la-petrie",
    name: "La Pétrie & LB Factory",
    sector: "Boulangerie-pâtisserie premium, Amiens, et distribution professionnelle",
    audience: ["artisan", "chef"],
    logo: "/images/logos/la-petrie.webp",
    website: "https://www.lapetrie.fr/",
    challenge:
      "Une maison régulièrement primée en région et au niveau national, qui sait que la différence se joue dans les détails aromatiques.",
    work:
      "Accompagnement sur l'usage des huiles essentielles culinaires pour sublimer certaines créations pâtissières : fève de tonka, citron, et d'autres signatures.",
    result:
      "Via LB Factory, ce savoir-faire se diffuse au-delà des boutiques, vers d'autres professionnels de la boulangerie et de la pâtisserie.",
  },
];

export const FEATURED_REFERENCES = REFERENCES.filter((r) => r.featured);

/** Bandeau de logos. Ceux qui n'ont pas de logo exploitable en sont exclus. */
export const REFERENCE_LOGOS = REFERENCES.filter(
  (r) => r.logo && r.slug !== "mathieu-blandin"
);
