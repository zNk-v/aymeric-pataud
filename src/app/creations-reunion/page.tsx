import type { Metadata } from "next";
import { WORKSHOPS } from "@/lib/site";
import { CtaBand, NextSteps, PageHero } from "@/components/blocks";
import { QuoteBanner, SplitBlock } from "@/components/page-blocks";
import Image from "next/image";
import { Button, Container, Section, SectionHeader } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { asset } from "@/lib/asset";
import { AGRORUN, AGRORUN_FAMILIES, REUNION_CREATIONS } from "@/content/creations";

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

      {/* Offre matière première AGRORUN, ajoutée le 15 septembre 2026.
          La page Huiles essentielles pointe sur cette ancre. */}
      <Section id="matieres-premieres" tone="surface">
        <Container>
          {/* Bandeau d'ambiance, image fournie par Aymeric le 16 septembre
              2026. Elle est générée, donc elle ouvre la section sans jamais
              illustrer une famille de produits : la légende le dit, et le
              texte alternatif ne prétend rien montrer de réel. */}
          <Reveal>
            <figure className="mb-14">
              <div className="relative aspect-[2055/765] w-full overflow-hidden rounded-3xl">
                <Image
                  src={asset("/images/agrorun-reunion.jpg")}
                  alt="Paysage de La Réunion, fruits et épices séchés"
                  fill
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <figcaption className="mt-3 text-sm text-encre-soft">
                Illustration
              </figcaption>
            </figure>
          </Reveal>

          <SectionHeader
            kicker="Matière première réunionnaise"
            title="Une matière première locale, pensée pour vos créations"
            lede={AGRORUN.intro}
          />
          <p className="mt-6 max-w-3xl text-encre-soft">{AGRORUN.bridge}</p>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {AGRORUN_FAMILIES.map((f) => (
              <StaggerItem key={f.name} className="h-full">
                <div className="card h-full rounded-3xl p-8">
                  <h3 className="font-display text-2xl lg:text-3xl">{f.name}</h3>
                  <p className="mt-5 text-encre">{f.list}</p>
                  <p className="mt-3 text-encre-soft">{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="lede max-w-2xl">{AGRORUN.outro}</p>
            <Button href="/contact/" className="shrink-0">
              Parler de votre projet
            </Button>
          </div>
        </Container>
      </Section>

      <SplitBlock
        kicker="L'atelier du goût"
        title="La Saline-les-Hauts, hébergé par AGRORUN."
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
          100 % réunionnaises développées avec AGRORUN.
        </p>
        {/* Adresse donnée par Aymeric le 10 septembre 2026. */}
        <address className="not-italic text-sm text-encre-soft">
          {WORKSHOPS[1].address.street}
          <br />
          {WORKSHOPS[1].address.locality}
          <br />
          {WORKSHOPS[1].address.postalCode} {WORKSHOPS[1].address.city}
        </address>
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
            text: "Les gammes d'effort développées avec AGRORUN.",
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
