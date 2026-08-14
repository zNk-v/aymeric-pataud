import type { Metadata } from "next";
import {
  CtaBand,
  NextSteps,
  PageHero,
  ReferenceCards,
  Testimonials,
} from "@/components/blocks";
import {
  FeatureGrid,
  ListBlock,
  QuoteBanner,
  SplitBlock,
  Steps,
} from "@/components/page-blocks";
import { LabelArgument } from "@/components/home";

export const metadata: Metadata = {
  title: "Industriels agroalimentaires",
  description:
    "Reformulation, clean label, remplacement d'arôme et signature gustative pour les entreprises agroalimentaires premium. Déclaration en huile essentielle, dosage sous 0,1 g/kg, reproductibilité lot à lot.",
  alternates: { canonical: "/industriels-agroalimentaires/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Pour les industriels agroalimentaires"
        title="Un arôme à remplacer, une étiquette à raccourcir, un goût à tenir sur toute la série."
        lede="Je travaille avec des entreprises positionnées à la fois haut de gamme et volume. Direction R&D, direction générale. Là où la contrainte industrielle et l'exigence gustative doivent tenir ensemble."
        image="/images/sauce.webp"
        imageAlt="Ajustement aromatique sur une base sauce"
      />

      <ListBlock
        kicker="Les briefs que je reçois"
        title="Quatre demandes qui reviennent"
        intro="Toutes ont un point commun : elles ne se règlent pas en changeant de fournisseur d'arômes."
        items={[
          "Un panel consommateur trouve le produit fade après une reformulation",
          "Le service marketing veut sortir la mention « arôme » de l'étiquette",
          "Une gamme premium a besoin d'une signature que la concurrence ne peut pas copier",
          "Un profil aromatique doit tenir après lyophilisation, pasteurisation ou affinage",
        ]}
      />

      <LabelArgument />

      <FeatureGrid
        kicker="Les contraintes que je respecte"
        title="Ce qu'un service R&D vérifie avant de valider"
        tone="deep"
        columns={2}
        items={[
          {
            title: "Reproductibilité lot à lot",
            text: "Forte concentration, grande stabilité, constance dans le temps. Le millième lot doit goûter comme le premier, sans réajustement.",
          },
          {
            title: "Dosage compatible process",
            text: "Jusqu'à 0,05 g/kg. Aucun impact sur les textures délicates : ganache, biscuit, crème, sauce fine, boisson claire.",
          },
          {
            title: "Toutes les matrices",
            text: "Version liposoluble pour les matières grasses, hydrosoluble pour les bases aqueuses. Une seule logique aromatique, deux formulations.",
          },
          {
            title: "Tenue après transformation",
            text: "Lyophilisation, déshydratation, affinage, pasteurisation. Le profil doit survivre au process, pas seulement au laboratoire.",
          },
        ]}
      />

      <QuoteBanner>
        Une huile brillante en laboratoire mais instable en production ne sert à
        personne. La reproductibilité fait partie du cahier des charges, pas des
        bonnes surprises.
      </QuoteBanner>

      <SplitBlock
        kicker="Moins de matière, plus de perception"
        title="Ce que ça change sur le coût matière."
        image="/images/tartinables.webp"
        imageAlt="Gamme de tartinables premium développée pour un transformateur"
        ratio="5/4"
      >
        <p>
          Une huile essentielle culinaire concentre l&apos;ingrédient. À
          intensité perçue égale, les volumes dosés baissent, et le nombre de
          références à stocker aussi.
        </p>
        <p>
          Certaines huiles remplacent à elles seules plusieurs arômes ou
          extraits. La formulation devient plus directe, l&apos;étiquette plus
          courte, le sourcing plus simple à défendre.
        </p>
      </SplitBlock>

      <Steps
        kicker="Comment on avance"
        title="De la première dégustation au dossier de validation"
        steps={[
          {
            title: "Diagnostic",
            text: "Trente minutes sur le produit existant. Je dis ce que j'entends en bouche et où se situe le défaut de construction.",
          },
          {
            title: "Piste aromatique",
            text: "Une ou deux propositions ciblées, avec la logique derrière. Pas un catalogue de références à tester au hasard.",
          },
          {
            title: "Essais",
            text: "Mise au point avec vos équipes, sur votre matrice, avec vos contraintes de process et de réglementation.",
          },
          {
            title: "Industrialisation",
            text: "Validation du dosage, de la stabilité, de la déclaration et de la reproductibilité en volume.",
          },
        ]}
        tone="deep"
      />

      <ReferenceCards
        slugs={[
          "jean-marc-tachet",
          "marie-de-livinhac",
          "la-comtoise",
          "very-foody",
          "ocni-factory",
          "randofruits",
        ]}
        kicker="Preuves"
        title="Des industriels qui ne sont pas repartis"
        lede="Un MOF depuis quinze ans, un laboratoire d'innovation qui prescrit, un fabricant de sauces fromagères, un lyophilisateur premium."
      />

      <Testimonials
        variant="anonymous"
        title="Ce que disent ceux qui ne peuvent pas être cités"
        lede="Le milieu agroalimentaire est discret. La majorité des collaborations sont couvertes par des accords de confidentialité."
      />

      <CtaBand
        title="Un produit à reformuler, une étiquette à défendre ?"
        lede="Envoyez-moi le produit et la contrainte. Je vous dis en trente minutes si je peux la lever."
        primaryLabel="Demander un échange R&D"
      />

      <NextSteps
        items={[
          {
            title: "Les hydrosolubles",
            text: "Fromages, laitages, boissons et toutes les bases aqueuses.",
            href: "/huiles-essentielles-hydrosolubles/",
          },
          {
            title: "Consulting",
            text: "Accompagnement R&D, création et formation d'équipe.",
            href: "/consulting/",
          },
          {
            title: "Création sur-mesure",
            text: "Une huile exclusive, extraite pour votre gamme.",
            href: "/creation-sur-mesure/",
          },
        ]}
      />
    </>
  );
}
