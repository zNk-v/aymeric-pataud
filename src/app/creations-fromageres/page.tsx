import type { Metadata } from "next";
import { CtaBand, NextSteps, PageHero } from "@/components/blocks";
import { QuoteBanner, SplitBlock } from "@/components/page-blocks";
import {
  Button,
  Container,
  Kicker,
  Placeholder,
  Section,
  SectionHeader,
} from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import {
  DAIRY_COUNT,
  DAIRY_LOCK,
  DAIRY_RANGES,
  DAIRY_ROLE,
} from "@/content/creations";

export const metadata: Metadata = {
  title: "Créations fromagères et laitières",
  description: `Yaourts, beurres, raclettes, fondues, cheesecakes et miels : ${DAIRY_COUNT} recettes créées grâce aux huiles essentielles culinaires hydrosolubles. Aromatiser le lait directement, là où l'huile et l'eau ne se mélangent pas.`,
  alternates: { canonical: "/creations-fromageres/" },
};

/**
 * MEALK est nommé librement : Aymeric en est cofondateur et il a créé la
 * plupart des recettes. Le bloc « Qui fait quoi » qui détaillait son statut a
 * été retiré à sa demande le 19 août : « ça n'intéresse personne, et à aucun
 * moment je ne dis que j'exploite la marque ». Le détail reste dans sa
 * biographie, en une phrase.
 */
export default function Page() {
  return (
    <>
      <PageHero
        kicker="Fromages & produits laitiers"
        title="Aromatiser le lait, là où personne ne savait le faire."
        lede={`Yaourts, beurres, raclettes, fondues, cheesecakes, miels : ${DAIRY_COUNT} recettes créées pour ${DAIRY_ROLE.brand}, dont je suis cofondateur. Toutes nées d'un verrou technique levé il y a plus de dix ans.`}
        image="/images/yaourt-orange-tonka.webp"
        imageAlt="Dosage d'une huile essentielle dans un yaourt orange et fève de tonka"
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

      {/* Les gammes, parfum par parfum */}
      <Section>
        <Container>
          <SectionHeader
            kicker={`${DAIRY_RANGES.length} gammes · ${DAIRY_COUNT} recettes`}
            title="Ce que ça donne, parfum par parfum"
            lede="Chaque recette part d'un équilibre juste, puis reçoit l'aromatique qui la rend reconnaissable. Jamais l'inverse."
          />

          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {DAIRY_RANGES.map((r) => (
              <StaggerItem key={r.name} className="h-full">
                <div className="card flex h-full flex-col rounded-3xl p-7">
                  <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                    <h3 className="font-display text-xl">{r.name}</h3>
                    <span className="shrink-0 text-sm text-vert">
                      {r.flavours.length}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {r.flavours.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 text-sm leading-snug text-encre-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-sauge"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <Placeholder title="Photos des gammes" className="mt-8">
              Les visuels des yaourts, beurres, raclettes, fondues, cheesecakes
              et miels. Sans eux, cette page reste une liste de noms. Aymeric
              transmet ce que la société de distribution lui a fourni.
            </Placeholder>
          </Reveal>
        </Container>
      </Section>

      <QuoteBanner>
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
          Sur une étiquette, la différence se voit du consommateur. Selon la
          matrice et le dosage, mes huiles se déclarent sous leur nom botanique
          plutôt que sous la mention générique « arôme naturel ».
        </p>
        <p>
          Dans un rayon crémerie où la lecture de l&apos;étiquette décide de
          l&apos;achat, c&apos;est un argument qu&apos;une maison d&apos;arômes
          ne peut pas sortir.
        </p>
      </SplitBlock>

      {/* Périmètre : cette page traite le lait et les produits laitiers.
          Les autres matrices aqueuses vivent sur la page hydrosolubles. */}
      <Section tone="deep">
        <Container size="narrow" className="text-center">
          <Reveal>
            <Kicker>Au-delà du lait</Kicker>
            <p className="font-display mt-6 text-balance text-3xl leading-[1.12] lg:text-4xl">
              Le même verrou existe dans une bière, un sirop ou une sauce.
            </p>
            <p className="lede mx-auto mt-7 max-w-2xl">
              Partout où il faut aromatiser une base aqueuse, l&apos;huile et
              l&apos;eau posent le même problème. La technique qui le résout,
              et les matrices qu&apos;elle couvre, sont détaillées sur la page
              dédiée.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href="/huiles-essentielles-hydrosolubles/"
                variant="outline"
              >
                Comment fonctionnent les hydrosolubles
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Vous fabriquez des yaourts, des fromages ou des beurres ?"
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
