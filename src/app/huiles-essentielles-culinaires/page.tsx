import type { Metadata } from "next";
import { CtaBand, NextSteps, PageHero, Testimonials } from "@/components/blocks";
import { FeatureGrid, QuoteBanner, SplitBlock } from "@/components/page-blocks";
import { Container, Placeholder, Section, SectionHeader } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { OIL_COUNT, OIL_FAMILIES } from "@/content/oils";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Huiles essentielles culinaires",
  description:
    "Plus de 60 huiles essentielles culinaires professionnelles, 100 % issues de plantes, sans solvant ni additif. Versions liposolubles et hydrosolubles, dosage jusqu'à 0,05 g/kg.",
  alternates: { canonical: "/huiles-essentielles-culinaires/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker={`${SITE.brand} · ${OIL_COUNT} références`}
        title="Des outils de précision au service du goût."
        lede="Les huiles essentielles culinaires ne sont pas là pour parfumer. Elles travaillent le goût : elles précisent le message d'une recette juste, renforcent sa lisibilité et affinent une signature sans l'alourdir."
        image="/images/goutte.webp"
        imageAlt="Dosage à la goutte d'une huile essentielle culinaire"
      />

      <FeatureGrid
        kicker="Une approche culinaire, pas aromatique"
        title="Ce qu'elles sont, ce qu'elles ne sont pas"
        items={[
          {
            title: "Un outil culinaire",
            text: "Pensées comme un levier de précision et un révélateur d'ingrédient. Elles ne remplacent pas une recette, elles la clarifient.",
          },
          {
            title: "Pas un arôme de compensation",
            text: "Aucun goût plaqué, aucune note de substitution. Une huile ne sauve pas une mauvaise recette, elle sublime une recette juste.",
          },
          {
            title: "Certifiées usage alimentaire",
            text: "100 % issues de plantes, sans solvant, sans additif, conformes aux exigences d'un usage alimentaire professionnel.",
          },
        ]}
      />

      <SplitBlock
        kicker="Puissance & maîtrise"
        title="Forte concentration, grande stabilité, constance dans le temps."
        image="/images/truffes.webp"
        imageAlt="Flacon d'huile essentielle culinaire et matière première"
        tone="deep"
        ratio="5/4"
      >
        <p>
          Ces caractéristiques permettent des dosages très faibles, une
          excellente reproductibilité et aucun impact sur les textures, même
          dans des matrices délicates : crèmes, biscuits, ganaches, boissons.
        </p>
        <p>
          Le dosage descend jusqu&apos;à 0,05 g/kg. Moins de matière, plus de
          perception.
        </p>
      </SplitBlock>

      <FeatureGrid
        kicker="Ce qui les différencie"
        title="Cinq caractéristiques que le marché ne réunit pas"
        columns={2}
        items={[
          {
            title: "100 % issues de la plante",
            text: "Sans solvant, sans additif, sans résidu. L'étiquette est plus courte et le goût authentique.",
          },
          {
            title: "Dosage ultra précis",
            text: "Jusqu'à 0,05 g/kg, sans impact sur la texture d'un biscuit, d'une ganache ou d'une sauce fine.",
          },
          {
            title: "Lipo et hydrosolubles",
            text: "Version liposoluble pour les matières grasses, hydrosoluble pour les bases aqueuses et les boissons. Toutes les matrices sont couvertes.",
          },
          {
            title: "Conservation longue",
            text: "Pas de perte d'intensité au fil des mois. Le millième lot goûte comme le premier.",
          },
        ]}
      />

      <QuoteBanner>
        Une règle reste intangible : elles ne sauvent pas une mauvaise recette.
        Elles subliment une recette juste.
      </QuoteBanner>

      {/* Catalogue */}
      <Section id="catalogue">
        <Container>
          <SectionHeader
            kicker="Le catalogue"
            title={`${OIL_COUNT} huiles essentielles culinaires`}
            lede="Certaines références sont rares, voire introuvables ailleurs en qualité alimentaire professionnelle. Les créations sur-mesure ne figurent pas dans cette liste."
          />

          <div className="mt-14 space-y-14">
            {OIL_FAMILIES.map((f) => (
              <Reveal key={f.slug}>
                <div className="grid gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-3xl">{f.name}</h3>
                    <p className="mt-3 text-sm text-encre-soft">{f.intro}</p>
                    <p className="mt-4 text-sm font-semibold text-vert">
                      {f.oils.length} références
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <Stagger
                      className="flex flex-wrap gap-2.5"
                      gap={0.02}
                    >
                      {f.oils.map((o) => (
                        <StaggerItem key={o}>
                          <span className="inline-block rounded-full border border-line bg-surface px-4 py-2 text-sm">
                            {o}
                          </span>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <Placeholder title="Catalogue PDF et tarifs" className="mt-14">
              Le lien de téléchargement du WordPress ne répond plus. Le client
              doit fournir le PDF à jour de la gamme liposoluble et
              hydrosoluble, ainsi que la position à tenir sur les prix
              publics.
            </Placeholder>
          </Reveal>
        </Container>
      </Section>

      <SplitBlock
        kicker="Format chef"
        title="Flacon 30 ml, pipette, dosage à la goutte."
        image="/images/wok.webp"
        imageAlt="Utilisation d'une huile essentielle culinaire en finition"
        tone="deep"
        reverse
        ratio="5/4"
      >
        <p>
          À chaud comme à froid, à la minute. Pour des beurres, des sauces, des
          ganaches, des sirops, des vinaigrettes, des marinades.
        </p>
        <p>
          Les références les plus utilisées en restauration : basilic, amande
          amère, citron jaune, pistache, poivre noir, fève de tonka, verveine.
        </p>
      </SplitBlock>

      <Testimonials limit={6} />

      <CtaBand
        title="Quelle huile peut faire la différence dans votre formulation ?"
        lede="Décrivez votre matrice et votre contrainte. Je vous oriente vers la bonne référence, ou vers une création."
        primaryLabel="Demander le catalogue"
      />

      <NextSteps
        items={[
          {
            title: "Les hydrosolubles",
            text: "Le segment que je suis seul à couvrir : fromages, laitages, boissons.",
            href: "/huiles-essentielles-hydrosolubles/",
          },
          {
            title: "Création sur-mesure",
            text: "Quand le catalogue ne suffit pas, l'atelier prend le relais.",
            href: "/creation-sur-mesure/",
          },
          {
            title: "Chefs & traiteurs",
            text: "Le format 30 ml et l'usage en service.",
            href: "/chefs-et-traiteurs/",
          },
        ]}
      />
    </>
  );
}
