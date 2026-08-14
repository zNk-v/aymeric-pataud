import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, LogoWall, PageHero, Testimonials } from "@/components/blocks";
import { QuoteBanner } from "@/components/page-blocks";
import { Container, Section, TextLink } from "@/components/ui";
import { Reveal } from "@/components/motion-primitives";
import { REFERENCES } from "@/content/references";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Références",
  description:
    "Quatorze collaborations documentées : un MOF, deux champions du monde, un laboratoire d'innovation, des fromagers, des brasseurs, des industriels. Plus de 200 clients en France et en Europe.",
  alternates: { canonical: "/references/" },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Références"
        title="Ils en parlent mieux que moi."
        lede="Plus de 200 clients en France et en Europe : artisans, chefs, groupes agroalimentaires, laboratoires d'innovation, marques premium. La plupart de ces collaborations sont couvertes par des accords de confidentialité. Voici celles qui ont accepté de lever le voile."
        align="center"
      />

      <LogoWall title="Quatorze maisons qui ont accepté d'être citées" tone="deep" />

      <QuoteBanner>
        Je ne suis pas un fournisseur d&apos;ingrédients. Je ne livre pas des
        huiles essentielles dans un carton avec une facture. Certains
        partenaires travaillent avec moi depuis quinze ans.
      </QuoteBanner>

      {/* Les cas, un par un */}
      <Section>
        <Container>
          <div className="space-y-20 lg:space-y-28">
            {REFERENCES.map((r, i) => (
              <article
                key={r.slug}
                id={r.slug}
                className="scroll-mt-32 border-t border-line pt-12 lg:pt-16"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                  {/* Colonne identité */}
                  <div className="lg:col-span-4">
                    <Reveal>
                      <span className="font-display text-sm text-vert/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {r.logo ? (
                        <div className="mt-6 flex h-24 w-40 items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface p-4">
                          <Image
                            src={asset(r.logo)}
                            alt={r.name}
                            width={140}
                            height={70}
                            className="h-full w-auto max-w-full object-contain"
                          />
                        </div>
                      ) : null}

                      <h2 className="font-display mt-6 text-3xl lg:text-4xl">
                        {r.name}
                      </h2>
                      <p className="mt-3 text-sm text-vert">{r.sector}</p>

                      {r.website ? (
                        <p className="mt-6">
                          <TextLink href={r.website} external>
                            Voir leur site
                          </TextLink>
                        </p>
                      ) : null}
                    </Reveal>
                  </div>

                  {/* Colonne récit */}
                  <div className="lg:col-span-8">
                    <Reveal delay={0.1}>
                      <dl className="space-y-8">
                        <div>
                          <dt className="kicker">Le défi</dt>
                          <dd className="mt-3 text-lg text-encre-soft">
                            {r.challenge}
                          </dd>
                        </div>
                        <div>
                          <dt className="kicker">Ce que j&apos;ai fait</dt>
                          <dd className="mt-3 text-lg text-encre-soft">
                            {r.work}
                          </dd>
                        </div>
                        <div>
                          <dt className="kicker">Le résultat</dt>
                          <dd className="mt-3 text-lg text-encre-soft">
                            {r.result}
                          </dd>
                        </div>
                      </dl>

                      {r.pullQuote ? (
                        <p className="font-display mt-10 border-l-2 border-sauge pl-6 text-2xl text-vert lg:text-3xl">
                          « {r.pullQuote} »
                        </p>
                      ) : null}
                    </Reveal>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Testimonials variant="both" title="Ce qu'ils en disent, en leurs mots" />

      <CtaBand
        title="Ces collaborations ont toutes commencé par une conversation."
        lede="La vôtre aussi peut commencer ici."
      />
    </>
  );
}
