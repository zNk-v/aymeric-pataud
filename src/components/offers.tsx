"use client";

import Link from "next/link";
import { Stagger, StaggerItem, Spotlight } from "./motion-primitives";
import { Arrow, Button, Container, Kicker, Section, SectionHeader } from "./ui";
import {
  FREE_OFFER,
  OFFERS,
  offerContactHref,
  type Offer,
} from "@/content/offers";

/* ================================================= Offres payantes ====== */
function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article
      id={offer.slug}
      className="card flex h-full scroll-mt-32 flex-col rounded-3xl p-8"
    >
      <Kicker>{offer.audience}</Kicker>
      <h3 className="font-display mt-4 text-2xl">{offer.title}</h3>
      <p className="mt-2 text-vert">{offer.tagline}</p>
      <p className="mt-5 text-encre-soft">{offer.text}</p>

      <dl className="mt-8 divide-y divide-line border-y border-line">
        {offer.specs.map((spec) => (
          <div key={spec.label} className="flex flex-wrap gap-x-6 gap-y-1 py-3.5">
            <dt className="w-full shrink-0 text-sm uppercase tracking-[0.14em] text-vert xl:w-24">
              {spec.label}
            </dt>
            <dd className="flex-1 text-sm text-encre-soft">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto pt-7">
        <p className="font-display text-3xl">{offer.price}</p>
        {offer.priceNote ? (
          <p className="mt-1 text-sm text-encre-soft">{offer.priceNote}</p>
        ) : null}
        <Button href={offerContactHref(offer.slug)} className="mt-6 w-full">
          {offer.cta}
        </Button>
      </div>
    </article>
  );
}

export function OfferGrid() {
  return (
    <Section id="formats">
      <Container>
        <SectionHeader
          kicker="Les offres"
          title="Une offre par besoin"
          lede="Des points de départ, pas des cadres figés. La durée, le nombre de participants et le contenu s'ajustent à votre contexte."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <StaggerItem key={offer.slug} className="h-full">
              <OfferCard offer={offer} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

/* ================================================ Offre gratuite ======== */
export function FreeOffer() {
  return (
    <Section tone="deep" id={FREE_OFFER.slug} className="scroll-mt-20">
      <Container>
        <div className="rounded-3xl border-2 border-dashed border-vert/40 p-8 lg:p-12">
          <div className="flex flex-wrap items-center gap-4">
            <Kicker>{FREE_OFFER.tagline}</Kicker>
            <span className="rounded-full bg-vert px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-creme">
              Gratuit
            </span>
          </div>
          <h2 className="font-display mt-5 text-balance text-4xl lg:text-5xl">
            {FREE_OFFER.title}
          </h2>
          <p className="lede mt-5 max-w-2xl">{FREE_OFFER.text}</p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {FREE_OFFER.cases.map((c) => (
              <div key={c.title} className="card rounded-3xl p-7">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-3 text-sm text-encre-soft">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button href={offerContactHref(FREE_OFFER.slug)}>
              {FREE_OFFER.cta}
            </Button>
            <p className="text-sm text-encre-soft">
              Aucun devis, aucune facture de conseil.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ========================================= Sélection par public ========= */
/**
 * Sur les pages par public : les offres qui concernent ce public, en cartes
 * courtes, chacune vers sa fiche complète sur /consulting/. L'accompagnement
 * gratuit ferme la liste, étiqueté comme tel.
 */
export function OfferPicks({
  slugs,
  title = "Les offres qui vous concernent",
}: {
  slugs: string[];
  title?: string;
}) {
  const picks = slugs
    .map((s) => OFFERS.find((o) => o.slug === s))
    .filter((o): o is Offer => Boolean(o));
  // Classes écrites en entier pour que Tailwind les détecte.
  const cols = ["", "", "lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4"][
    Math.min(picks.length + 1, 4)
  ];

  return (
    <Section>
      <Container>
        <SectionHeader kicker="Travailler ensemble" title={title} />
        <Stagger className={`mt-12 grid gap-4 md:grid-cols-2 ${cols}`}>
          {picks.map((o) => (
            <StaggerItem key={o.slug} className="h-full">
              <Link href={`/consulting/#${o.slug}`} className="block h-full">
                <Spotlight className="card group flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1">
                  <p className="font-display text-2xl">{o.title}</p>
                  <p className="mt-3 text-sm text-encre-soft">{o.tagline}</p>
                  <p className="mt-auto pt-6 font-display text-xl">{o.price}</p>
                  <span className="link-underline mt-4 inline-flex items-center gap-2 text-sm font-semibold text-vert">
                    Voir l&apos;offre
                    <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Spotlight>
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem className="h-full">
            <Link href={`/consulting/#${FREE_OFFER.slug}`} className="block h-full">
              <div className="group flex h-full flex-col rounded-3xl border-2 border-dashed border-vert/40 p-7 transition-all duration-500 hover:-translate-y-1">
                <span className="self-start rounded-full bg-vert px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-creme">
                  Gratuit
                </span>
                <p className="font-display mt-4 text-2xl">{FREE_OFFER.title}</p>
                <p className="mt-3 text-sm text-encre-soft">
                  Conseil sur les huiles, échantillons, achat direct.
                </p>
                <span className="link-underline mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-vert">
                  Voir l&apos;offre
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        </Stagger>
      </Container>
    </Section>
  );
}
