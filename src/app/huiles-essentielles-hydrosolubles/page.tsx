import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, NextSteps, PageHero } from "@/components/blocks";
import { FeatureGrid, QuoteBanner, SplitBlock } from "@/components/page-blocks";
import { Container, Section, SectionHeader, TextLink } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { REFERENCES } from "@/content/references";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Huiles essentielles hydrosolubles",
  description:
    "Des huiles essentielles culinaires solubles dans le lait, l'eau et les bases aqueuses. Développées il y a plus de dix ans pour les fromagers et les fabricants de boissons.",
  alternates: { canonical: "/huiles-essentielles-hydrosolubles/" },
};

const APPLICATIONS = [
  {
    title: "Fromages & laitages",
    text: "Aromatisation du lait avant caillage : le goût est intégré à la matière, pas déposé dessus. Yaourts, tommes, raclettes, beurres, sauces fromagères.",
    image: "/images/fromage.webp",
    alt: "Fromage aromatisé à l'huile essentielle hydrosoluble",
  },
  {
    title: "Boissons",
    text: "Bières artisanales, sodas, sirops, boissons sans alcool. Une aromatisation 100 % végétale, traçable, revendiquable sur l'étiquette.",
    image: "/images/boisson.webp",
    alt: "Mise au point d'une boisson aromatisée",
  },
  {
    title: "Sauces & bases aqueuses",
    text: "Partout où la matière grasse est absente ou marginale, et où une huile essentielle classique se sépare au lieu de se diffuser.",
    image: "/images/sauce.webp",
    alt: "Sauce en cours d'ajustement aromatique",
  },
];

/**
 * Périmètre de cette page : la technique, et les matrices aqueuses autres que
 * le lait. Les créations laitières ont leur propre page, /creations-fromageres/,
 * et Mealk n'apparaît donc plus ici en preuve : il y serait redondant.
 */
const CAS_SLUGS = ["la-comtoise", "brasserie-felicite", "very-foody"];

export default function Page() {
  const cas = REFERENCES.filter((r) => CAS_SLUGS.includes(r.slug));

  return (
    <>
      <PageHero
        kicker="Le segment que je suis seul à couvrir"
        title="L'huile et l'eau ne se mélangent pas. J'ai inventé la troisième voie."
        lede="Il y a plus de dix ans, un fromager m'a posé un problème que personne n'avait résolu : aromatiser le lait directement avec une huile essentielle. La réponse a ouvert un champ de création qui n'existait pas."
        image="/images/yaourt.webp"
        imageAlt="Aromatisation directe d'un produit laitier"
      />

      <SplitBlock
        kicker="Le verrou technique"
        title="Ce que les fromagers et les brasseurs faisaient avant."
        image="/images/citron.webp"
        imageAlt="Extraction et dosage d'un agrume"
        tone="deep"
      >
        <p>
          L&apos;aromatisation reposait sur des herbes, des épices ou des
          aromates déshydratés. Deux limites : une perte d&apos;intensité en
          cours de fabrication, et un goût final souvent décevant.
        </p>
        <p>
          Faute de mieux, beaucoup basculaient sur des arômes de synthèse ou des
          molécules isolées. Pratique, mais incompatible avec la naturalité
          revendiquée par une maison artisanale ou une marque premium.
        </p>
      </SplitBlock>

      <FeatureGrid
        kicker="Ce que ça change"
        title="Une intégration parfaite dès la fabrication"
        columns={2}
        items={[
          {
            title: "Le goût entre dans la matière",
            text: "L'huile se dissout dans le lait ou la base aqueuse. Elle est portée par le produit au lieu d'être posée dessus.",
          },
          {
            title: "Une intensité qui tient",
            text: "Puissante et naturelle, elle résiste à la fabrication et à l'affinage, là où l'aromate déshydraté s'efface.",
          },
          {
            title: "Une déclaration défendable",
            text: "Une vraie huile essentielle, pas un arôme. Une naturalité que la marque peut revendiquer en face du consommateur.",
          },
          {
            title: "Des goûts inaccessibles autrement",
            text: "Poivre fumé, oignon rôti, ail des ours, rose de Damas. Des profils qu'aucune poudre ne restitue à ce niveau.",
          },
        ]}
      />

      {/* Applications */}
      <Section>
        <Container>
          <SectionHeader
            kicker="Applications"
            title="Trois familles de matrices"
            align="center"
          />
          <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
            {APPLICATIONS.map((a) => (
              <StaggerItem key={a.title} className="h-full">
                <div className="card flex h-full flex-col overflow-hidden rounded-3xl">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={asset(a.image)}
                      alt={a.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl">{a.title}</h3>
                    <p className="mt-4 text-encre-soft">{a.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <QuoteBanner attribution="Mealk, fromager et affineur">
        Quand l&apos;huile et l&apos;eau refusent de se mélanger, on invente une
        troisième voie.
      </QuoteBanner>

      {/* Renvoi unique vers la page qui montre ce que la technique donne. */}
      <SplitBlock
        kicker="Ce que ça donne"
        title="Le lait a sa propre page."
        image="/images/yaourt-orange-tonka.webp"
        imageAlt="Yaourt orange et fève de tonka, dosage à la pipette"
        ratio="5/4"
        reverse
      >
        <p>
          Cette page explique comment la technique fonctionne. Les créations
          qu&apos;elle a rendues possibles sont ailleurs : quarante-trois
          recettes de yaourts, beurres, raclettes, fondues, cheesecakes et
          miels.
        </p>
        <p>
          <TextLink href="/creations-fromageres/">
            Voir les créations fromagères et laitières
          </TextLink>
        </p>
      </SplitBlock>

      {/* Preuves */}
      <Section tone="deep">
        <Container>
          <SectionHeader
            kicker="Trois preuves"
            title="Une industrie fromagère, une brasserie, un laboratoire"
          />
          <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
            {cas.map((r) => (
              <StaggerItem key={r.slug} className="h-full">
                <Link href={`/references/#${r.slug}`} className="block h-full">
                  <div className="card group flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1">
                    {r.logo ? (
                      <Image
                        src={asset(r.logo)}
                        alt={r.name}
                        width={140}
                        height={56}
                        className="h-12 w-auto max-w-[8rem] object-contain"
                      />
                    ) : null}
                    <h3 className="font-display mt-6 text-2xl">{r.name}</h3>
                    <p className="mt-4 flex-1 text-sm text-encre-soft">
                      {r.result}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand
        title="Une matrice aqueuse à aromatiser ?"
        lede="Lait, bière, sirop, sauce. Décrivez le produit, je vous dis si l'hydrosoluble est la bonne réponse."
      />

      <NextSteps
        items={[
          {
            title: "La gamme complète",
            text: "Toutes les références, en lipo comme en hydrosoluble.",
            href: "/huiles-essentielles-culinaires/",
          },
          {
            title: "Industriels agroalimentaires",
            text: "Reproductibilité, réglementation, étiquetage.",
            href: "/industriels-agroalimentaires/",
          },
          {
            title: "Création sur-mesure",
            text: "Une plante précise, rendue soluble pour votre matrice.",
            href: "/creation-sur-mesure/",
          },
        ]}
      />
    </>
  );
}
