/**
 * Citations reprises mot pour mot du WordPress. Aucune n'a été réécrite,
 * complétée ni reformulée. Sources dans archive-wordpress/contenu/ :
 *  - nominatives : page--pourquoi-choisir-nos-produits.txt
 *  - anonymes    : page--expertise-accompagnement.txt
 *
 * Le milieu agroalimentaire est discret : beaucoup de clients refusent
 * d'apparaître. D'où les trois traitements (nominatif, anonymisé, logo seul).
 */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  logo?: string;
};

/** Citations signées, déjà publiques sur le site actuel. */
export const NAMED_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Leur expertise dans les mélanges d'huiles essentielles a été essentielle pour perfectionner mon procédé d'imprégnation. Ensemble, nous avons allié innovation et naturalité pour préserver saveurs et bienfaits, redéfinissant ainsi la conservation alimentaire.",
    author: "Jean-Marc Tachet",
    role: "Chef cuisinier, Meilleur Ouvrier de France",
    logo: "/images/logos/tachet.webp",
  },
  {
    quote:
      "Leur expertise en huiles essentielles culinaires est un véritable atout pour notre laboratoire d'innovation. Grâce à leurs solutions aromatisantes sur mesure, nous relevons les défis gustatifs les plus ambitieux pour satisfaire nos clients les plus exigeants.",
    author: "Aurélie d'Assignies",
    role: "Very Foody",
    logo: "/images/logos/very-foody.webp",
  },
  {
    quote:
      "Depuis 10 ans, ils sont un partenaire essentiel dans notre quête d'excellence. Leurs huiles essentielles sur mesure subliment nos madeleines et financiers, perpétuant notre savoir-faire avec une touche d'innovation et de raffinement.",
    author: "Benoît Martinet",
    role: "Biscuiterie Jeannette",
  },
  {
    quote:
      "Grâce à leurs huiles essentielles d'une qualité exceptionnelle, nous avons pu sublimer nos crayons d'assaisonnement et offrir une expérience sensorielle unique à nos clients. Une collaboration précieuse qui allie innovation et excellence !",
    author: "Tristan Cano",
    role: "Dirigeant d'OCNI Factory",
    logo: "/images/logos/ocni.webp",
  },
  {
    quote:
      "Depuis 10 ans, leur expertise en huiles essentielles apporte à certaines de mes créations un supplément d'âme et d'émotion. Chaque création devient une expérience sensorielle unique, sublimée par une aromatique d'une finesse exceptionnelle.",
    author: "Stéphan Perrotte",
    role: "Maison Perrotte, Champion du Monde des confitures",
    logo: "/images/logos/maison-perrotte.webp",
  },
  {
    quote:
      "Leur huile essentielle de poivre de Sichuan a donné une signature unique à notre nouvelle bière. Une collaboration qui repousse les limites du goût et sublime notre savoir-faire brassicole !",
    author: "Arnaud Daumerie",
    role: "Brasserie Bears Tavern",
  },
  {
    quote:
      "Leur expertise en huiles essentielles me permet de repousser sans cesse les limites de la créativité. À chaque demande audacieuse, ils répondent avec des solutions aromatiques sur mesure, apportant une dimension unique à mes créations chocolatées.",
    author: "Damien Vidal",
    role: "Bille en Tête",
    logo: "/images/logos/bille-en-tete.webp",
  },
];

/** Clients sous accord de confidentialité. Anonymisés à leur demande. */
export const ANONYMOUS_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Nous cherchions à remplacer un arôme synthétique sans perdre d'impact gustatif. L'approche d'Aymeric, précise, sensorielle et orientée résultat, nous a permis de créer une version clean label qui dépasse les attentes des panels consommateurs.",
    author: "Responsable R&D",
    role: "Groupe agroalimentaire français",
  },
  {
    quote:
      "Ses huiles essentielles et condiments créatifs ont redonné de la personnalité à plusieurs recettes signatures de notre carte. C'est net, naturel, juste. Mes clients sentent la différence, et reviennent pour ça.",
    author: "Chef exécutif",
    role: "Restaurant gastronomique",
  },
  {
    quote:
      "Nous avons co-développé une huile essentielle sur-mesure pour une gamme végétale. Résultat : un produit plus aromatique, plus lisible, avec un sourcing 100 % naturel. Et un argument fort pour notre équipe commerciale.",
    author: "Responsable innovation produit",
    role: "PME food bio",
  },
];
