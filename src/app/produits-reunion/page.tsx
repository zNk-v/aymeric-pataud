import type { Metadata } from "next";
import { CtaBand, NextSteps, PageHero } from "@/components/blocks";
import { QuoteBanner, SplitBlock } from "@/components/page-blocks";
import { Container, Placeholder, Section, SectionHeader } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";

export const metadata: Metadata = {
  title: "Produits de La Réunion",
  description:
    "Préparation pour gâteau patate et pâte de tomates séchées 100 % Réunion, au combava, gros piment et massalé. Une gamme conçue pour la distribution, pas pour la vente à l'unité.",
  alternates: { canonical: "/produits-reunion/" },
};

const PRODUITS = [
  {
    name: "Préparation pour gâteau patate",
    text: "Le dessert réunionnais le plus identitaire, transposé en préparation prête à cuire, sans perdre la texture ni le goût du fait maison.",
  },
  {
    name: "Pâte de tomates séchées 100 % Réunion",
    text: "Combava, gros piment, massalé. Une base de condiment qui raconte l'île en une cuillère, à partir de matières premières locales uniquement.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Produits de La Réunion"
        title="Une île dans un bocal, faite pour la distribution."
        lede="Une gamme courte, développée dans mon atelier de La Saline-les-Hauts à partir de produits réunionnais. Je cherche des distributeurs et des revendeurs, pas des commandes à l'unité."
        image="/images/bocal.webp"
        imageAlt="Produits de terroir en bocal"
      />

      {/* Les produits */}
      <Section>
        <Container>
          <SectionHeader
            kicker="La gamme"
            title="Deux références, deux signatures"
            lede="Chacune construite selon la même logique que mes autres développements : la recette d'abord, l'aromatique ensuite."
          />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
            {PRODUITS.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div className="card h-full rounded-3xl p-8">
                  <h3 className="font-display text-2xl lg:text-3xl">{p.name}</h3>
                  <p className="mt-5 text-encre-soft">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <Placeholder title="Fiches produit, visuels et conditionnements" className="mt-8">
              Photos des produits, poids, DLUO, conditionnements par carton,
              tarifs revendeur et fiches techniques. À fournir par Aymeric avant
              toute prise de contact commerciale sur cette gamme.
            </Placeholder>
          </Reveal>
        </Container>
      </Section>

      <SplitBlock
        kicker="D'où ça vient"
        title="L'atelier de La Saline-les-Hauts."
        image="/images/atelier-extracteur.webp"
        imageAlt="L'atelier et son éco-extracteur"
        tone="deep"
        reverse
      >
        <p>
          Le même atelier qui abrite l&apos;éco-extracteur breveté. Les plantes
          et les fruits sont travaillés à pleine maturité, à quelques kilomètres
          du lieu de récolte.
        </p>
        <p>
          C&apos;est ce qui permet de tenir la promesse « 100 % Réunion » sans
          la transformer en argument marketing creux.
        </p>
      </SplitBlock>

      <QuoteBanner>
        La contrainte «&nbsp;uniquement des produits d&apos;ici&nbsp;» ne limite
        pas la gamme. Elle la rend impossible à copier ailleurs.
      </QuoteBanner>

      <CtaBand
        title="Vous distribuez des produits de terroir ?"
        lede="Épiceries fines, grossistes, plateformes spécialisées. Contactez-moi pour recevoir les conditions revendeur."
        primaryLabel="Devenir distributeur"
      />

      <NextSteps
        items={[
          {
            title: "Création sur-mesure",
            text: "L'atelier, l'éco-extracteur et les plantes locales.",
            href: "/creation-sur-mesure/",
          },
          {
            title: "Artisans & producteurs",
            text: "Transformer une production locale en gamme premium.",
            href: "/artisans-et-producteurs/",
          },
          {
            title: "Le chef",
            text: "Le parcours, de La Réunion au laboratoire d'innovation.",
            href: "/aymeric-pataud/",
          },
        ]}
      />
    </>
  );
}
