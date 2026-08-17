import type { Metadata } from "next";
import { CtaBand, NextSteps, PageHero } from "@/components/blocks";
import { QuoteBanner, SplitBlock } from "@/components/page-blocks";
import { Container, Section, SectionHeader } from "@/components/ui";
import { Stagger, StaggerItem } from "@/components/motion-primitives";
import { REUNION_CREATIONS } from "@/content/creations";

export const metadata: Metadata = {
  title: "Créations à partir du terroir réunionnais",
  description:
    "Développement de produits à partir d'ingrédients de La Réunion : combava, gros piment, massalé, fruits et plantes locales. Un atelier du goût à La Saline-les-Hauts.",
  alternates: { canonical: "/creations-reunion/" },
};

/**
 * Cette page ne vend rien. Aymeric développe ces produits pour ses clients,
 * ce sont eux qui les commercialisent. Le cadrage précédent, en catalogue
 * avec tarifs revendeur, était faux : corrigé sur son retour du 17 août 2026.
 */
export default function Page() {
  return (
    <>
      <PageHero
        kicker="Terroir de La Réunion"
        title="Une contrainte d'origine, transformée en signature."
        lede="Dans mon atelier de La Saline-les-Hauts, je développe des produits à partir du seul terroir réunionnais. Je ne les vends pas : je les conçois pour ceux qui les fabriquent."
        image="/images/bocal.webp"
        imageAlt="Produits de terroir en bocal"
      />

      {/* Le cadrage, sans ambiguïté */}
      <Section tone="deep">
        <Container size="narrow">
          <p className="font-display text-balance text-3xl leading-[1.12] lg:text-[2.75rem]">
            Je développe, je ne distribue pas.
          </p>
          <p className="lede mt-8">
            Ces recettes appartiennent aux entreprises pour lesquelles je les
            crée. Si vous cherchez à les acheter, ce sont elles qu&apos;il faut
            contacter. Si vous cherchez quelqu&apos;un pour concevoir la vôtre,
            vous êtes au bon endroit.
          </p>
        </Container>
      </Section>

      {/* Les développements */}
      <Section>
        <Container>
          <SectionHeader
            kicker="Ce que je développe ici"
            title="Le terroir comme matière première exclusive"
            lede="Combava, gros piment, massalé, fruits et plantes de l'île. Travaillés à pleine maturité, à quelques kilomètres du lieu de récolte."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {REUNION_CREATIONS.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div className="card h-full rounded-3xl p-8">
                  <h3 className="font-display text-2xl lg:text-3xl">{p.name}</h3>
                  <p className="mt-5 text-encre-soft">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <SplitBlock
        kicker="L'atelier du goût"
        title="La Saline-les-Hauts, hébergé par Randofruits."
        image="/images/atelier-extracteur.webp"
        imageAlt="L'atelier de La Saline et son éco-extracteur"
        tone="deep"
        reverse
      >
        <p>
          Mon second atelier, à quelques milliers de kilomètres d&apos;Amiens.
          Le même éco-extracteur breveté, la même méthode, mais une matière
          première qu&apos;on ne trouve nulle part ailleurs.
        </p>
        <p>
          C&apos;est aussi de là que sortent les gammes de nutrition sportive
          100 % réunionnaises développées avec Randofruits.
        </p>
      </SplitBlock>

      <QuoteBanner attribution="SNC Pré Grandin">
        Quand le champ devient la recette.
      </QuoteBanner>

      <CtaBand
        title="Vous transformez votre propre production ?"
        lede="Agriculteur, coopérative, artisan. Une matière première locale mérite mieux qu'une recette générique."
      />

      <NextSteps
        items={[
          {
            title: "Nutrition sportive",
            text: "Les gammes d'effort développées avec Randofruits.",
            href: "/nutrition-sportive/",
          },
          {
            title: "Artisans & producteurs",
            text: "Transformer une production locale en gamme premium.",
            href: "/artisans-et-producteurs/",
          },
          {
            title: "Création sur-mesure",
            text: "L'éco-extracteur et les plantes locales.",
            href: "/creation-sur-mesure/",
          },
        ]}
      />
    </>
  );
}
