import type { Metadata } from "next";
import { CtaBand, NextSteps, PageHero } from "@/components/blocks";
import { QuoteBanner, SplitBlock } from "@/components/page-blocks";
import { Container, Kicker, Section, SectionHeader } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { CONFIDENTIALITY, SPREAD_CREATIONS } from "@/content/creations";

export const metadata: Metadata = {
  title: "Tartinables, sauces et condiments",
  description:
    "Ketchup à moitié moins sucré, sauce burger sans œufs ni additifs, caviar d'aubergines qui survit à la pasteurisation. Huit recettes développées sous cahier des charges, du concept au produit stable en rayon.",
  alternates: { canonical: "/creations-tartinables/" },
};

/**
 * Cette page existe pour une raison : montrer qu'Aymeric n'est ni le type du
 * fromage ni celui du sport. Elle est donc construite autour des contraintes,
 * pas des produits. Une contrainte se transpose d'un secteur à l'autre, un
 * produit non.
 */
export default function Page() {
  return (
    <>
      <PageHero
        kicker="Tartinables, sauces & condiments"
        title="Derrière chaque recette, un cahier des charges et un mur."
        lede="Diviser le sucre par deux sans perdre en gourmandise. Retirer les œufs d'une sauce qui doit tenir à température ambiante. Voici huit murs, et comment je suis passé de l'autre côté."
        image="/images/tartinables.webp"
        imageAlt="Gamme de tartinables et condiments premium"
      />

      {/* Les huit recettes, contrainte par contrainte */}
      <Section>
        <Container>
          <SectionHeader
            kicker={`${SPREAD_CREATIONS.length} développements`}
            title="Le produit n'est jamais le sujet. La contrainte, si."
            lede="Une gamme complète de tartinables et de condiments, développée de A à Z pour un agriculteur transformateur, à partir des légumes de sa propre exploitation."
          />

          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {SPREAD_CREATIONS.map((c, i) => (
              <StaggerItem key={c.name} className="h-full">
                <div className="card flex h-full flex-col rounded-3xl p-8">
                  <span className="font-display text-sm text-vert/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-5 text-2xl leading-snug">
                    {c.name}
                  </h3>
                  <p className="mt-4 flex-1 text-encre-soft">{c.brief}</p>
                  {c.twist ? (
                    <p className="font-display mt-6 border-t border-line pt-5 text-lg text-vert">
                      {c.twist}
                    </p>
                  ) : null}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <QuoteBanner>
        Quand le champ devient la recette.
      </QuoteBanner>

      <SplitBlock
        kicker="Ce que ça demande"
        title="La pasteurisation ne pardonne rien."
        image="/images/tomates-basilic.webp"
        imageAlt="Travail des légumes et des aromatiques"
        ratio="5/4"
        reverse
      >
        <p>
          Un tartinable juste en cuisine ne l&apos;est plus après traitement
          thermique. Les notes fraîches tombent, l&apos;amertume monte, les
          épices s&apos;affaissent. Il faut donc construire un goût qui vise
          l&apos;après, pas l&apos;instant de la dégustation en labo.
        </p>
        <p>
          Retirer du sucre ou des additifs pose le même problème dans
          l&apos;autre sens : on enlève des béquilles qui tenaient la structure.
          Ce qui reste doit tenir seul.
        </p>
      </SplitBlock>

      {/* Confidentialité */}
      <Section tone="deep" size="sm">
        <Container size="narrow" className="text-center">
          <Reveal>
            <Kicker>Et tout le reste</Kicker>
            <p className="lede mx-auto mt-6 max-w-2xl">{CONFIDENTIALITY}</p>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Votre produit bloque quelque part ?"
        lede="Trop sucré, trop plat, trop court, impossible à stabiliser. Décrivez la contrainte, je vous dis si je sais la lever."
      />

      <NextSteps
        items={[
          {
            title: "L'expertise du goût",
            text: "La méthode qui vaut pour tous ces produits.",
            href: "/expertise-du-gout/",
          },
          {
            title: "Industriels agroalimentaires",
            text: "Reformulation, clean label, reproductibilité.",
            href: "/industriels-agroalimentaires/",
          },
          {
            title: "Artisans & producteurs",
            text: "Transformer une production en gamme premium.",
            href: "/artisans-et-producteurs/",
          },
        ]}
      />
    </>
  );
}
