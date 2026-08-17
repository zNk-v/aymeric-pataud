import type { Metadata } from "next";
import { CtaBand, NextSteps, PageHero, ReferenceCards } from "@/components/blocks";
import { FeatureGrid, QuoteBanner, SplitBlock } from "@/components/page-blocks";
import { Container, Placeholder, Section, SectionHeader } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { SPORT_CONSTRAINTS, SPORT_PROJECTS } from "@/content/creations";

export const metadata: Metadata = {
  title: "Nutrition sportive et produits lyophilisés",
  description:
    "Plats lyophilisés, barres énergétiques et repas d'effort conçus par un chef qui court. Une seconde spécialité, sans huiles essentielles : rendre gourmand un produit déshydraté.",
  alternates: { canonical: "/nutrition-sportive/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Nutrition sportive & lyophilisé"
        title="Peu de poids. De l'eau chaude. La sensation d'un plat maison."
        lede="Une seconde spécialité, née d'une contrainte plutôt que d'une méthode : rendre gourmand un produit déshydraté ou lyophilisé. Ici, pas d'huiles essentielles. Juste la construction du goût."
        image="/images/endurance.webp"
        imageAlt="Repas d'effort et nutrition sportive"
      />

      {/* Pourquoi lui */}
      <Section tone="deep">
        <Container size="narrow">
          <Reveal>
            <p className="font-display text-balance text-3xl leading-[1.12] lg:text-[2.75rem]">
              Quand le corps fatigue, le goût devient un soutien mental.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="lede mt-8 space-y-5">
              <p>
                Je pratique l&apos;ultra-trail. Je mange ce que je conçois,
                à l&apos;endroit et au moment où ces produits sont vraiment
                consommés : loin, tard, fatigué.
              </p>
              <p>
                C&apos;est la seule façon de savoir si un plat d&apos;effort
                tient sa promesse. Un panel de dégustation en salle ne dira
                jamais ce que dit la sixième heure.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Les deux projets */}
      <Section>
        <Container>
          <SectionHeader
            kicker="Les projets en cours"
            title="Deux gammes, deux contraintes opposées"
          />
          <Stagger className="mt-12 grid gap-4 lg:grid-cols-2">
            {SPORT_PROJECTS.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <div className="card flex h-full flex-col rounded-3xl p-8 lg:p-10">
                  <h3 className="font-display text-2xl lg:text-3xl">
                    {p.partner}
                  </h3>
                  <p className="mt-2 text-sm text-vert">{p.brands}</p>
                  <p className="mt-6 text-encre-soft">{p.text}</p>
                  <p className="mt-5 flex-1 text-encre-soft">{p.result}</p>
                  <p className="font-display mt-8 border-t border-line pt-6 text-xl leading-snug">
                    « {p.quote} »
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <Placeholder title="Visuels Trek & Adventure" className="mt-8">
              Photos de packaging des trente plats lyophilisés et date exacte du
              lancement. Le nom et le visage d&apos;Aymeric seront associés à la
              marque : cette page devra le dire explicitement une fois le
              lancement confirmé. Demandés le 17 août 2026.
            </Placeholder>
          </Reveal>
        </Container>
      </Section>

      <FeatureGrid
        kicker="L'exigence technique"
        title="Quatre contraintes qui ne pardonnent pas"
        lede="Le défi n'est pas d'en faire plus. Il est de rester juste là où le goût a tendance à disparaître."
        items={SPORT_CONSTRAINTS.map((c) => ({ title: c.title, text: c.text }))}
        columns={2}
        tone="deep"
      />

      <SplitBlock
        kicker="Sans huiles essentielles"
        title="La preuve que la méthode passe avant l'outil."
        image="/images/gourmand-carottes.webp"
        imageAlt="Travail de cuisson et d'assaisonnement"
        ratio="5/4"
        reverse
      >
        <p>
          Sur ces gammes, je travaille la matière sèche, les épices, les fruits
          et les plantes déshydratés. L&apos;aromatique de précision n&apos;a
          pas sa place dans un produit qui sera réhydraté à l&apos;eau chaude
          dans un refuge.
        </p>
        <p>
          C&apos;est ce qui rend cette spécialité utile au-delà
          d&apos;elle-même : elle montre que mon métier n&apos;est pas de vendre
          des flacons, mais de comprendre pourquoi une recette sonne juste.
        </p>
      </SplitBlock>

      <QuoteBanner attribution="Randofruits">
        Quand la limite devient l&apos;identité.
      </QuoteBanner>

      <ReferenceCards
        slugs={["marie-de-livinhac", "randofruits"]}
        kicker="Les collaborations"
        title="Le détail de ces deux projets"
        tone="deep"
      />

      <CtaBand
        title="Vous développez une gamme d'effort ou un produit déshydraté ?"
        lede="Barres, plats lyophilisés, boissons de récupération. Le goût est souvent ce qui manque en dernier."
      />

      <NextSteps
        items={[
          {
            title: "Terroir de La Réunion",
            text: "Créer à partir d'ingrédients locaux, avec Randofruits.",
            href: "/creations-reunion/",
          },
          {
            title: "L'expertise du goût",
            text: "La méthode, avant tout choix d'ingrédient.",
            href: "/expertise-du-gout/",
          },
          {
            title: "Industriels agroalimentaires",
            text: "Reproductibilité, volumes, contraintes de ligne.",
            href: "/industriels-agroalimentaires/",
          },
        ]}
      />
    </>
  );
}
