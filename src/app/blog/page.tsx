import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/blocks";
import { Arrow, Container, Section } from "@/components/ui";
import { Stagger, StaggerItem, Spotlight } from "@/components/motion-primitives";
import { ARTICLES } from "@/content/articles";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles de fond sur les huiles essentielles culinaires : usage en cuisine, aromatisation des fromages, reformulation agroalimentaire, création sur-mesure.",
  alternates: { canonical: "/blog/" },
};

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function Page() {
  const [lead, ...rest] = ARTICLES;

  return (
    <>
      <PageHero
        kicker="Blog"
        title="Le goût, expliqué en détail."
        lede="Ce que je sais des huiles essentielles culinaires, de leur usage en cuisine comme en industrie. Des articles écrits pour être utiles, pas pour remplir un calendrier éditorial."
        align="center"
      />

      <Section size="sm">
        <Container>
          {/* Article à la une */}
          <Link href={`/${lead.slug}/`} className="block">
            <Spotlight className="card group grid overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1 lg:grid-cols-2">
              {lead.image ? (
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[26rem]">
                  <Image
                    src={asset(lead.image)}
                    alt={lead.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="kicker">
                  À la une · {formatDate(lead.date)}
                </span>
                <h2 className="font-display mt-5 text-balance text-3xl leading-[1.1] lg:text-4xl">
                  {lead.title}
                </h2>
                <p className="mt-5 text-encre-soft">{lead.excerpt}</p>
                <span className="link-underline mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-vert">
                  Lire l&apos;article
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Spotlight>
          </Link>

          {/* Les autres */}
          <Stagger className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <StaggerItem key={a.slug} className="h-full">
                <Link href={`/${a.slug}/`} className="block h-full">
                  <Spotlight className="card group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1">
                    {a.image ? (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={asset(a.image)}
                          alt={a.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] bg-creme-deep" />
                    )}
                    <div className="flex flex-1 flex-col p-7">
                      <span className="text-xs uppercase tracking-[0.18em] text-encre-soft">
                        {formatDate(a.date)}
                      </span>
                      <h3 className="font-display mt-4 text-xl leading-snug lg:text-2xl">
                        {a.title}
                      </h3>
                      <p className="mt-4 flex-1 text-sm text-encre-soft">
                        {a.excerpt}
                      </p>
                      <span className="link-underline mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-vert">
                        Lire
                        <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Spotlight>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand
        title="Une question que l'article ne règle pas ?"
        lede="Décrivez votre produit et votre contrainte. Je réponds."
      />
    </>
  );
}
