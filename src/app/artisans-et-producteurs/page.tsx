import type { Metadata } from "next";
import {
  CtaBand,
  NextSteps,
  PageHero,
  ReferenceCards,
} from "@/components/blocks";
import {
  FeatureGrid,
  ListBlock,
  QuoteBanner,
  SplitBlock,
  Steps,
} from "@/components/page-blocks";

export const metadata: Metadata = {
  title: "Artisans & producteurs",
  description:
    "Transformer une production agricole ou artisanale en gamme premium à forte identité gustative. Sans additif, sans arôme artificiel, avec une signature par référence.",
  alternates: { canonical: "/artisans-et-producteurs/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Pour les artisans & producteurs"
        title="Votre production a déjà une histoire. Il lui manque une signature."
        lede="Vous cultivez, vous élevez, vous transformez. Le produit est bon, l'origine est irréprochable, mais en rayon il ressemble encore à celui du voisin. C'est un problème de goût, pas de packaging."
        image="/images/tartinables.webp"
        imageAlt="Gamme de tartinables premium issue d'une production agricole"
      />

      <ListBlock
        kicker="Le point de départ"
        title="La contrainte devient l'argument"
        intro="« Uniquement nos produits » sonne comme une limite. C'est en réalité ce qui rend la gamme impossible à copier."
        items={[
          "Traçabilité totale, du champ au bocal",
          "Naturalité revendiquée, sans additif ni arôme artificiel",
          "Une signature aromatique propre à chaque référence",
          "Un goût juste, qui tient sans surdose de sucre ni de sel",
        ]}
      />

      <SplitBlock
        kicker="Un exemple complet"
        title="Une gamme de condiments née d'une exploitation agricole."
        image="/images/bocal.webp"
        imageAlt="Conserves et bocaux issus d'une production locale"
        tone="deep"
        ratio="5/4"
      >
        <p>
          Ketchup haut de gamme au vrai goût de tomate, avec beaucoup moins de
          sucre. Sauce barbecue 100 % naturelle. Houmous à la betterave.
          Tartinable artichaut et parmesan. Tartinable légumes de saison et
          truffe.
        </p>
        <p>
          Chaque recette conçue puis sublimée par une épice, un aromatique ou
          une huile essentielle spécifique, pour la rendre immédiatement
          identifiable.
        </p>
      </SplitBlock>

      <Steps
        kicker="Comment on travaille"
        title="Du produit brut à la gamme en rayon"
        steps={[
          {
            title: "On goûte",
            text: "Votre matière première, vos essais, ce que vous vendez déjà. Ce que ça dit et ce que ça ne dit pas encore.",
          },
          {
            title: "On construit",
            text: "La recette avant l'arôme. Un goût mal construit ne se rattrape pas avec une huile essentielle.",
          },
          {
            title: "On signe",
            text: "Une note aromatique par référence, choisie pour rendre le produit reconnaissable dès la première bouchée.",
          },
          {
            title: "On tient",
            text: "Dosage, conservation, régularité d'un lot à l'autre. Une gamme artisanale doit être aussi fiable qu'une gamme industrielle.",
          },
        ]}
      />

      <FeatureGrid
        kicker="Ce que vous y gagnez"
        title="Trois effets concrets"
        tone="deep"
        items={[
          {
            title: "Une étiquette plus courte",
            text: "Moins d'additifs, moins d'arômes complexes, moins de stabilisants. Une étiquette que le client lit sans se méfier.",
          },
          {
            title: "Un prix qui se défend",
            text: "Un goût identifiable justifie un positionnement premium. La différence se sent en bouche, et dans l'acte d'achat.",
          },
          {
            title: "Une gamme cohérente",
            text: "Des références qui se répondent au lieu de se juxtaposer. C'est ce qui transforme des produits en marque.",
          },
        ]}
      />

      <QuoteBanner attribution="SNC Pré Grandin, agriculteur et transformateur">
        Quand le champ devient la recette.
      </QuoteBanner>

      <SplitBlock
        kicker="Votre plante, votre huile"
        title="Extraire l'arôme de ce que vous cultivez déjà."
        image="/images/atelier-extracteur-2.webp"
        imageAlt="Extraction d'une huile essentielle en micro-série"
        reverse
      >
        <p>
          L&apos;éco-extracteur breveté permet de produire une huile essentielle
          fraîche en micro-série, à partir d&apos;une plante cueillie à pleine
          maturité sur votre propre exploitation.
        </p>
        <p>
          Le résultat est un arôme qui n&apos;existe dans aucun catalogue, et
          qu&apos;aucun concurrent ne peut commander.
        </p>
      </SplitBlock>

      <ReferenceCards
        slugs={[
          "pre-grandin",
          "randofruits",
          "brasserie-felicite",
          "bille-en-tete",
          "mealk",
          "maison-perrotte",
        ]}
        kicker="Preuves"
        title="Des producteurs devenus des marques"
        lede="Un agriculteur transformateur, un fabricant de barres 100 % terroir, une brasserie, un chocolatier, un fromager."
      />

      <CtaBand
        title="Une production à transformer en gamme ?"
        lede="Parlez-moi de ce que vous cultivez et de ce que vous vendez aujourd'hui."
      />

      <NextSteps
        items={[
          {
            title: "Création sur-mesure",
            text: "Extraire une huile de votre propre plante, en micro-série.",
            href: "/creation-sur-mesure/",
          },
          {
            title: "La gamme culinaire",
            text: "Plus de 60 références déjà disponibles.",
            href: "/huiles-essentielles-culinaires/",
          },
          {
            title: "Consulting",
            text: "Développement complet, du concept au produit fini.",
            href: "/consulting/",
          },
        ]}
      />
    </>
  );
}
