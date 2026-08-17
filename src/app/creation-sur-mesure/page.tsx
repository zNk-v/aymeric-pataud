import type { Metadata } from "next";
import { CtaBand, NextSteps, PageHero } from "@/components/blocks";
import {
  FeatureGrid,
  ListBlock,
  QuoteBanner,
  SplitBlock,
} from "@/components/page-blocks";
import { Container, Placeholder, Section, SectionHeader } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { BESPOKE_EXAMPLES } from "@/content/oils";

export const metadata: Metadata = {
  title: "Création sur-mesure",
  description:
    "Un éco-extracteur par micro-ondes breveté, sans eau ni énergie fossile, capable de produire une huile essentielle culinaire fraîche en quelques minutes. Micro-séries et plantes locales.",
  alternates: { canonical: "/creation-sur-mesure/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Création sur-mesure"
        title="Traduire un goût unique ne se fait jamais sur catalogue."
        lede="Aucune recette ne ressemble à une autre, aucune ne mérite une réponse standard. Le sur-mesure commence toujours par le produit, jamais par un ingrédient ni par une tendance."
        image="/images/atelier-verrerie.webp"
        imageAlt="Verrerie de l'éco-extracteur en fonctionnement"
      />

      <ListBlock
        kicker="Du concept au produit"
        title="Quatre niveaux d'intervention"
        intro="Chaque projet suit la même logique : moins de matière, plus de perception."
        items={[
          "Création complète de recette",
          "Reformulation ou optimisation gustative",
          "Ajustement aromatique fin",
          "Construction d'une signature gustative",
        ]}
      />

      <SplitBlock
        kicker="L'atelier"
        title="Un éco-extracteur par micro-ondes, breveté."
        image="/images/atelier-extracteur.webp"
        imageAlt="L'éco-extracteur par micro-ondes de l'atelier"
        tone="deep"
      >
        <p>
          Une technologie propre : sans eau, sans énergie fossile, capable de
          produire une huile essentielle culinaire fraîche en quelques minutes,
          à partir d&apos;une plante cueillie à pleine maturité.
        </p>
        <p>
          C&apos;est ce qui permet de travailler des plantes locales, de sortir
          des micro-séries et d&apos;explorer des arômes jamais exploités sur le
          marché. Le passage de l&apos;assemblage à la source
          d&apos;innovation.
        </p>
      </SplitBlock>

      {/* Exemples de créations */}
      <Section>
        <Container>
          <SectionHeader
            kicker="Des huiles qui n'existent nulle part ailleurs"
            title="Un twist rare, exclusif, à l'image de votre produit"
            lede="Quelques créations sorties de l'atelier. Aucune n'est référencée chez un fournisseur d'arômes."
            align="center"
          />
          <Stagger className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
            {BESPOKE_EXAMPLES.map((e) => (
              <StaggerItem key={e}>
                <span className="inline-block rounded-full border border-line bg-surface px-5 py-2.5 text-sm">
                  {e}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-encre-soft">
              Le poivre Patience de Côte d&apos;Ivoire est une première
              mondiale : aucune huile essentielle culinaire n&apos;avait été
              extraite de cette plante avant celle-ci.
            </p>
          </Reveal>
        </Container>
      </Section>

      <FeatureGrid
        kicker="Résultats observés"
        title="Ce que le sur-mesure change"
        tone="deep"
        columns={2}
        items={[
          {
            title: "Un goût perçu plus intense",
            text: "L'huile fraîche, extraite d'une plante récoltée à maturité, porte des notes que les huiles de stock ont perdues.",
          },
          {
            title: "Une meilleure lisibilité aromatique",
            text: "Le message gustatif est plus net. Le consommateur identifie l'ingrédient sans hésiter.",
          },
          {
            title: "Une réduction des dosages",
            text: "Plus la matière est juste, moins il en faut. Le coût matière suit.",
          },
          {
            title: "Une différenciation réelle",
            text: "Un concurrent ne peut pas copier un arôme qui n'existe pas au catalogue. Ce n'est jamais automatique, mais quand c'est pertinent, c'est un avantage durable.",
          },
        ]}
      />

      <QuoteBanner>
        Quand l&apos;aromatique est pertinente, elle intervient comme une
        ponctuation. Une respiration, une tension, une signature. Jamais comme
        un camouflage.
      </QuoteBanner>

      <SplitBlock
        kicker="Ce qui est respecté"
        title="Une contrainte industrielle reste une contrainte."
        image="/images/atelier-extracteur-2.webp"
        imageAlt="Détail de l'extraction en micro-série"
        reverse
      >
        <p>
          Les solutions mises en place respectent la structure de la recette,
          les contraintes techniques, la reproductibilité et la cohérence du
          goût.
        </p>
        <p>
          Le message doit rester lisible en volume et dans le temps. Une huile
          brillante en laboratoire mais instable en production ne sert à
          personne.
        </p>
      </SplitBlock>

      <Section size="sm">
        <Container size="narrow">
          <Placeholder title="Photos et vidéo de l'atelier de La Saline-les-Hauts">
            Les visuels actuels viennent des shootings studio. Le client doit
            fournir des photos de l&apos;atelier réunionnais et de la machine en
            fonctionnement, ainsi que le numéro et l&apos;intitulé exact du
            brevet.
          </Placeholder>
        </Container>
      </Section>

      <CtaBand
        title="Une plante, une idée, une signature à créer ?"
        lede="Décrivez le produit et la matière que vous voulez travailler."
      />

      <NextSteps
        items={[
          {
            title: "La gamme culinaire",
            text: "Plus de 60 références disponibles, sans passer par le sur-mesure.",
            href: "/huiles-essentielles-culinaires/",
          },
          {
            title: "Les hydrosolubles",
            text: "Pour les fromages, les boissons et toutes les matrices aqueuses.",
            href: "/huiles-essentielles-hydrosolubles/",
          },
          {
            title: "Références",
            text: "Les collaborations nées d'une création exclusive.",
            href: "/references/",
          },
        ]}
      />
    </>
  );
}
