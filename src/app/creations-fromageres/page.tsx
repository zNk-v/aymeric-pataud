import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, NextSteps, PageHero, ReferenceCards } from "@/components/blocks";
import { QuoteBanner, SplitBlock } from "@/components/page-blocks";
import {
  Container,
  Kicker,
  Placeholder,
  Section,
  SectionHeader,
} from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { DAIRY_LOCK, DAIRY_RANGES } from "@/content/creations";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Créations fromagères et laitières",
  description:
    "Yaourts, tommes, raclettes et beurres d'exception créés avec MEALK grâce aux huiles essentielles culinaires hydrosolubles. Aromatiser le lait directement, là où l'huile et l'eau ne se mélangent pas.",
  alternates: { canonical: "/creations-fromageres/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Fromages & produits laitiers"
        title="Aromatiser le lait, là où personne ne savait le faire."
        lede="Yaourts, tommes, raclettes, beurres. Une gamme née d'un verrou technique résolu il y a plus de dix ans, avec MEALK, dont je suis cofondateur."
        image="/images/yaourt-orange-tonka.webp"
        imageAlt="Dosage d'une huile essentielle dans un yaourt MEALK orange et fève de tonka"
      />

      {/* Le verrou technique */}
      <Section tone="deep">
        <Container size="narrow">
          <Reveal>
            <Kicker>Le problème de départ</Kicker>
            <p className="font-display mt-6 text-balance text-3xl leading-[1.12] lg:text-[2.75rem]">
              {DAIRY_LOCK.problem}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede mt-8">{DAIRY_LOCK.answer}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Les quatre gammes */}
      <Section>
        <Container>
          <SectionHeader
            kicker="Les gammes"
            title="Quatre familles, une même méthode"
            lede="Chaque référence part d'une recette juste, puis reçoit l'aromatique qui la rend reconnaissable. Jamais l'inverse."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {DAIRY_RANGES.map((r) => (
              <StaggerItem key={r.name} className="h-full">
                <div className="card flex h-full flex-col rounded-3xl p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl lg:text-3xl">
                      {r.name}
                    </h3>
                    <span className="shrink-0 text-sm text-vert">{r.count}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {r.flavours.map((f) => (
                      <li key={f} className="flex gap-3 text-encre-soft">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sauge"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {r.note ? (
                    <p className="mt-6 border-t border-line pt-4 text-sm text-encre-soft/80">
                      {r.note}
                    </p>
                  ) : null}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <Placeholder title="Photos des créations MEALK" className="mt-8">
              Les visuels des yaourts, tommes, raclettes et beurres, gamme par
              gamme. Sans eux cette page reste une liste. Avec eux, elle devient
              une démonstration. Demandés à Aymeric le 17 août 2026.
            </Placeholder>
          </Reveal>
        </Container>
      </Section>

      <QuoteBanner attribution="Mealk">
        Quand l&apos;huile et l&apos;eau refusent de se mélanger, on invente une
        troisième voie.
      </QuoteBanner>

      <SplitBlock
        kicker="Pourquoi ça marche"
        title="Une huile essentielle, pas un arôme."
        image="/images/flacons-oranges.webp"
        imageAlt="Flacons d'huiles essentielles culinaires et agrumes"
        ratio="5/4"
        reverse
      >
        <p>
          Sur une étiquette, la différence est visible du consommateur. Selon la
          matrice et le dosage, mes huiles se déclarent sous leur nom botanique
          plutôt que sous la mention générique « arôme naturel ».
        </p>
        <p>
          Dans un rayon crémerie où la lecture de l&apos;étiquette décide de
          l&apos;achat, c&apos;est un argument qu&apos;une maison d&apos;arômes
          ne peut pas sortir.
        </p>
      </SplitBlock>

      {/* Au-delà du yaourt */}
      <Section tone="deep">
        <Container>
          <SectionHeader
            kicker="Le même savoir-faire ailleurs"
            title="Sauces fromagères, boissons, bières"
            lede="Le verrou est le même partout où il faut aromatiser une base aqueuse. Les hydrosolubles le lèvent."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "La Comtoise",
                d: "Sauces et spécialités fromagères pour l'industrie et le foodservice. Une profondeur aromatique impossible à atteindre autrement.",
                img: "/images/fromage.webp",
              },
              {
                t: "Brasserie Félicité",
                d: "Une bière à la rose, aromatisée avec une vraie huile essentielle. Fini les arômes de synthèse et les molécules isolées.",
                img: "/images/boisson.webp",
              },
              {
                t: "Very Foody",
                d: "Un laboratoire d'innovation qui intègre mes huiles dans les boissons et les sauces qu'il développe pour ses clients.",
                img: "/images/goutte.webp",
              },
            ].map((c) => (
              <StaggerItem key={c.t} className="h-full">
                <div className="card flex h-full flex-col overflow-hidden rounded-3xl">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={asset(c.img)}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-xl">{c.t}</h3>
                    <p className="mt-3 text-sm text-encre-soft">{c.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <ReferenceCards
        slugs={["mealk", "la-comtoise", "brasserie-felicite"]}
        kicker="Les collaborations"
        title="Ce que ça donne chez eux"
      />

      <CtaBand
        title="Vous fabriquez des fromages, des yaourts ou des boissons ?"
        lede="Trente minutes suffisent pour savoir si l'aromatisation hydrosoluble a du sens sur votre gamme."
      />

      <NextSteps
        items={[
          {
            title: "Les hydrosolubles",
            text: "La technique derrière ces créations, matrice par matrice.",
            href: "/huiles-essentielles-hydrosolubles/",
          },
          {
            title: "Industriels agroalimentaires",
            text: "Reformulation, clean label, déclaration réglementaire.",
            href: "/industriels-agroalimentaires/",
          },
          {
            title: "Création sur-mesure",
            text: "Quand la gamme existante ne suffit pas.",
            href: "/creation-sur-mesure/",
          },
        ]}
      />
    </>
  );
}
