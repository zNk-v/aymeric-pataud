import type { Metadata } from "next";
import {
  Awards,
  CtaBand,
  LogoWall,
  PageHero,
  Testimonials,
} from "@/components/blocks";
import ReferenceExplorer from "@/components/ReferenceExplorer";
import { Container, Placeholder, Section } from "@/components/ui";
import { REFERENCES } from "@/content/references";

export const metadata: Metadata = {
  title: "Références",
  description:
    "Quinze médailles au Mondial du Fromage, et quatorze collaborations documentées : un MOF, deux champions du monde, un laboratoire d'innovation, des fromagers, des brasseurs, des industriels. Plus de 200 clients en France et en Europe.",
  alternates: { canonical: "/references/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker={`${REFERENCES.length} collaborations documentées`}
        title="Ils en parlent mieux que moi."
        lede="Plus de 200 clients en France et en Europe. La plupart de ces collaborations sont couvertes par des accords de confidentialité, une réalité courante en agroalimentaire premium. Voici celles qui ont accepté de lever le voile."
        align="center"
      />

      <LogoWall title="Ils me font confiance" tone="deep" />

      <Awards />

      <ReferenceExplorer />

      <Testimonials variant="both" title="Ce qu'ils en disent, en leurs mots" />

      <Section size="sm">
        <Container size="narrow">
          <Placeholder title="Les nouveaux clients à ajouter">
            Aymeric a signé plusieurs clients depuis la dernière mise à jour du
            site. Il faut leur demander leur accord écrit avant d&apos;afficher
            leur logo, puis fournir le logo et une ligne de contexte pour
            chacun.
          </Placeholder>
        </Container>
      </Section>

      <CtaBand
        title="Ces collaborations ont toutes commencé par une conversation."
        lede="La vôtre aussi peut commencer ici."
      />
    </>
  );
}
