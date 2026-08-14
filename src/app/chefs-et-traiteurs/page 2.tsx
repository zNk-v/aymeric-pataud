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
} from "@/components/page-blocks";
import { Container, Section, SectionHeader } from "@/components/ui";
import { Stagger, StaggerItem } from "@/components/motion-primitives";
import { BESPOKE_EXAMPLES } from "@/content/oils";

export const metadata: Metadata = {
  title: "Chefs & traiteurs",
  description:
    "Huiles essentielles culinaires en flacon 30 ml avec pipette, dosage à la goutte, à chaud comme à froid. Et des créations exclusives extraites à l'atelier pour signer une carte.",
  alternates: { canonical: "/chefs-et-traiteurs/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Pour les chefs & traiteurs"
        title="Un goût que votre client ne trouvera nulle part ailleurs."
        lede="Pensé par un chef, pour des chefs. Un geste de plus en mise en place, pas dix. Une signature en bouche que la table d'à côté ne peut pas servir."
        image="/images/wok.webp"
        imageAlt="Finition d'un plat à l'huile essentielle culinaire"
      />

      <ListBlock
        kicker="Quand on m'appelle"
        title="Quatre moments"
        items={[
          "Une recette signature qui plafonne et qu'on n'arrive pas à finir",
          "Une carte qui a besoin d'une identité gustative reconnaissable",
          "Un plat traiteur à équilibrer, avec plus de longueur en bouche",
          "Une gamme éphémère à signer avec un arôme exclusif",
        ]}
      />

      <SplitBlock
        kicker="Le format chef"
        title="Flacon 30 ml, pipette, dosage à la goutte."
        image="/images/goutte.webp"
        imageAlt="Dosage à la goutte en cuisine"
        tone="deep"
        ratio="1/1"
      >
        <p>
          Des extraits puissants, purs et 100 % naturels, certifiés pour un
          usage alimentaire. À chaud comme à froid, à la minute, sans perte.
        </p>
        <p>
          Beurres, sauces, ganaches, sirops, vinaigrettes, marinades. Les
          références les plus utilisées en restauration : basilic, amande
          amère, citron jaune, pistache, poivre noir, fève de tonka, verveine.
        </p>
        <p>
          Dosage simple, recette stable, résultat immédiat. Rien à changer à
          votre organisation.
        </p>
      </SplitBlock>

      <FeatureGrid
        kicker="Au-delà des huiles"
        title="La collection Twisteur de recettes"
        lede="Crèmes de vinaigre, huiles de finition, sirops aromatiques. Des produits prêts à l'emploi qui apportent une signature en un seul geste, développés avec une dizaine de chefs : cuisiniers, pâtissiers, chocolatiers, glaciers, poissonniers."
        items={[
          {
            title: "Dosage simple",
            text: "Aucune technique à apprendre, aucune balance de précision à sortir en plein service.",
          },
          {
            title: "Recette stable",
            text: "Le résultat ne bouge pas entre le premier et le dernier couvert du service.",
          },
          {
            title: "Résultat immédiat",
            text: "L'effet se voit dans l'assiette et se sent en bouche dès le premier essai.",
          },
        ]}
      />

      <QuoteBanner attribution="Mathieu Blandin, Champion du Monde de Pâtisserie">
        Le meilleur ambassadeur est celui que vous n&apos;avez pas eu besoin de
        convaincre.
      </QuoteBanner>

      {/* Sur-mesure pour chefs */}
      <Section tone="deep">
        <Container>
          <SectionHeader
            kicker="Aller plus loin"
            title="Une huile essentielle qui n'existe que dans votre cuisine"
            lede="Grâce à l'éco-extracteur breveté, je produis des huiles en très petites séries, à partir d'une plante précise. Parfois celle du potager du restaurant."
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
        </Container>
      </Section>

      <ReferenceCards
        slugs={["mathieu-blandin", "maison-perrotte", "toque-dazur", "la-petrie", "bille-en-tete"]}
        kicker="Ils l'utilisent"
        title="Des MOF, des champions du monde, des maisons primées"
        lede="Sans contrat, sans obligation. Ce sont mes premiers ambassadeurs parce qu'ils partagent la même idée d'un goût juste."
      />

      <Testimonials limit={4} />

      <CtaBand
        title="Une recette à twister, une carte à signer ?"
        lede="Décrivez le plat et ce qui vous manque en bouche."
        primaryLabel="Demander le catalogue"
      />

      <NextSteps
        items={[
          {
            title: "La gamme culinaire",
            text: "Plus de 70 références, avec le détail par famille aromatique.",
            href: "/huiles-essentielles-culinaires/",
          },
          {
            title: "Création sur-mesure",
            text: "L'atelier, l'éco-extracteur et les huiles exclusives.",
            href: "/creation-sur-mesure/",
          },
          {
            title: "Consulting",
            text: "Formation de brigade et accompagnement sur une carte.",
            href: "/consulting/",
          },
        ]}
      />
    </>
  );
}
