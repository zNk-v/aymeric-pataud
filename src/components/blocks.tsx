"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem, Spotlight } from "./motion-primitives";
import { Arrow, Button, Container, Kicker, Section } from "./ui";
import LiteYouTube from "./LiteYouTube";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/site";
import { REFERENCES, LOGO_BAND } from "@/content/references";
import {
  AWARDS_BY_YEAR,
  AWARDS_BY_MEDAL,
  AWARDS_COUNT,
  AWARDS_FIRST_YEAR,
} from "@/content/awards";
import {
  ANONYMOUS_TESTIMONIALS,
  NAMED_TESTIMONIALS,
  type Testimonial,
} from "@/content/testimonials";

/* ==================================================== En-tête de page ==== */
export function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt,
  align = "split",
}: {
  kicker: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  align?: "split" | "center";
}) {
  if (align === "center" || !image) {
    return (
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-52 lg:pb-28">
        <span className="halo left-1/2 top-0 h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] -translate-x-1/2" />
        <Container className="text-center">
          <Reveal>
            <Kicker>{kicker}</Kicker>
            <h1 className="font-display display-xl mx-auto mt-6 max-w-4xl text-balance text-5xl sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="lede mx-auto mt-8 max-w-2xl">{lede}</p>
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
      <span className="halo left-[-8%] top-[10%] h-[38vw] w-[38vw] max-h-[480px] max-w-[480px]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Kicker>{kicker}</Kicker>
              <h1 className="font-display display-xl mt-6 text-balance text-5xl sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="lede mt-8 max-w-xl">{lede}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
                <Image
                  src={asset(image)}
                  alt={imageAlt ?? ""}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ======================================================= Mur de logos ==== */
export function LogoWall({
  title = "Ils me font confiance",
  tone = "creme",
}: {
  title?: string;
  tone?: "creme" | "deep";
}) {
  const row = [...LOGO_BAND, ...LOGO_BAND];
  return (
    <section
      className={`overflow-hidden py-16 lg:py-20 ${tone === "deep" ? "bg-creme-deep" : ""}`}
    >
      <p className="text-center text-xs uppercase tracking-[0.24em] text-encre-soft">
        {title}
      </p>
      <div className="marquee-mask relative mt-10">
        <div className="marquee-track flex w-max items-center gap-4">
          {row.map((r, i) => (
            <div
              key={`${r.slug}-${i}`}
              className="flex h-24 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface p-4"
            >
              <Image
                src={asset(r.logo!)}
                alt={r.name}
                width={140}
                height={70}
                className="h-full w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-encre-soft">
        Plus de 200 clients en France et en Europe.{" "}
        <Link href="/references/" className="text-vert underline underline-offset-4">
          Voir les collaborations
        </Link>
      </p>
    </section>
  );
}

/* ========================================================= Témoignages ==== */
function QuoteCard({ t }: { t: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col rounded-3xl p-8">
      <blockquote className="flex-1 text-encre">
        <p className="text-[1.0625rem] leading-relaxed">« {t.quote} »</p>
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
        {t.logo ? (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-creme">
            <Image
              src={asset(t.logo)}
              alt=""
              width={48}
              height={48}
              className="h-full w-full object-contain p-1"
            />
          </span>
        ) : null}
        <span>
          <span className="block font-semibold">{t.author}</span>
          <span className="block text-sm text-encre-soft">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials({
  variant = "named",
  title,
  lede,
  limit,
}: {
  variant?: "named" | "anonymous" | "both";
  title?: string;
  lede?: string;
  limit?: number;
}) {
  let list: Testimonial[] =
    variant === "anonymous"
      ? ANONYMOUS_TESTIMONIALS
      : variant === "both"
        ? [...NAMED_TESTIMONIALS, ...ANONYMOUS_TESTIMONIALS]
        : NAMED_TESTIMONIALS;
  if (limit) list = list.slice(0, limit);

  return (
    <Section tone="deep">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Kicker>Ce qu&apos;ils en disent</Kicker>
            <h2 className="font-display mt-5 text-balance text-4xl lg:text-5xl">
              {title ?? "Ils en parlent mieux que moi"}
            </h2>
            {lede ? <p className="lede mt-6">{lede}</p> : null}
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <StaggerItem key={t.author + t.role} className="h-full">
              <QuoteCard t={t} />
            </StaggerItem>
          ))}
        </Stagger>

        {variant !== "anonymous" ? (
          <Reveal delay={0.15}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-encre-soft">
              La majorité des collaborations sont couvertes par des accords de
              confidentialité, une réalité courante en agroalimentaire premium.
              Ceux qui figurent ici ont accepté de lever le voile.
            </p>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}

/* =============================================================== TEDx ==== */
export function TedxBlock({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="tedx" size={compact ? "sm" : "md"}>
      <Container size="narrow">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>Conférence {SITE.tedx.event}</Kicker>
              <h2 className="font-display mt-5 text-balance text-3xl lg:text-5xl">
                {SITE.tedx.title}
              </h2>
              <p className="lede mt-6">
                Derrière chaque plat, il y a une histoire, une sensation, un
                souvenir. Dix-huit minutes pour montrer comment une simple
                goutte change tout.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <LiteYouTube
                id={SITE.tedx.videoId}
                title={`${SITE.tedx.title} | ${SITE.name} | ${SITE.tedx.event}`}
                thumb={asset("/images/tedx-poster.webp")}
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ========================================================== CTA final ==== */
export function CtaBand({
  title = "Vous avez une recette à créer, ajuster ou différencier ?",
  lede = "Trente minutes suffisent pour poser un diagnostic. Sur-mesure uniquement, le goût d'abord.",
  primaryLabel = "Parler de votre projet",
}: {
  title?: string;
  lede?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      <span className="halo left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[720px] max-w-[720px] -translate-x-1/2 -translate-y-1/2" />
      <span className="halo halo-soft left-[6%] top-[12%] h-[26vw] w-[26vw] max-h-[320px] max-w-[320px]" />
      <Container className="text-center">
        <Reveal>
          <h2 className="font-display display-xl mx-auto max-w-4xl text-balance text-4xl sm:text-5xl lg:text-7xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede mx-auto mt-8 max-w-xl">{lede}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact/">{primaryLabel}</Button>
            <Button href={`tel:${SITE.phoneHref}`} variant="outline" external>
              {SITE.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* =============================================== Références filtrées ===== */
export function ReferenceCards({
  slugs,
  kicker = "Preuves",
  title,
  lede,
  tone = "creme",
}: {
  slugs: string[];
  kicker?: string;
  title: string;
  lede?: string;
  tone?: "creme" | "deep";
}) {
  const list = REFERENCES.filter((r) => slugs.includes(r.slug));
  return (
    <Section tone={tone}>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Kicker>{kicker}</Kicker>
            <h2 className="font-display mt-5 text-balance text-4xl lg:text-5xl">
              {title}
            </h2>
            {lede ? <p className="lede mt-6">{lede}</p> : null}
          </div>
          <Link
            href="/references/"
            className="link-underline inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-vert"
          >
            Toutes les collaborations
            <Arrow />
          </Link>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <StaggerItem key={r.slug} className="h-full">
              <Link href={`/references/#${r.slug}`} className="block h-full">
                <Spotlight className="card group flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1">
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
                  <p className="mt-2 text-sm text-vert">{r.sector}</p>
                  <p className="mt-5 flex-1 text-sm text-encre-soft">
                    {r.result}
                  </p>
                </Spotlight>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

/* ================================================== Cartes de rebond ===== */
export function NextSteps({
  items,
}: {
  items: { title: string; text: string; href: string }[];
}) {
  return (
    <Section tone="deep" size="sm">
      <Container>
        <Stagger className="grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <StaggerItem key={it.href} className="h-full">
              <Link href={it.href} className="block h-full">
                <Spotlight className="card group h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1">
                  <p className="font-display text-2xl">{it.title}</p>
                  <p className="mt-3 text-sm text-encre-soft">{it.text}</p>
                  <span className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-semibold text-vert">
                    Découvrir
                    <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Spotlight>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}


/* ======================================================= Médailles ======= */
/**
 * Les médailles appartiennent aux fabricants, pas à Aymeric. Le texte le dit
 * franchement : c'est ce qui rend la preuve crédible, et ses clients restent
 * nommés à côté de leurs produits. Voir le commentaire de content/awards.ts.
 */
const MEDAL_STYLES: Record<string, string> = {
  Or: "bg-[#c9a227]/15 text-[#8a6d0b] ring-[#c9a227]/40",
  Argent: "bg-[#8c8c8c]/15 text-[#5c5c5c] ring-[#8c8c8c]/40",
  Bronze: "bg-[#a2703f]/15 text-[#7a4f24] ring-[#a2703f]/40",
};

export function Awards({ tone = "creme" }: { tone?: "creme" | "deep" }) {
  return (
    <Section tone={tone === "deep" ? "deep" : undefined}>
      <Container>
        <Reveal>
          <Kicker>Distinctions</Kicker>
          <h2 className="font-display mt-5 max-w-3xl text-balance text-4xl lg:text-6xl">
            {AWARDS_COUNT} médailles au Mondial du Fromage.
          </h2>
          <p className="lede mt-6 max-w-3xl">
            Depuis {AWARDS_FIRST_YEAR}, des produits que j&apos;ai aromatisés
            sont primés à Tours, devant un jury international. Les médailles
            reviennent aux maisons qui les fabriquent et qui les inscrivent au
            concours. L&apos;aromatisation, elle, sort de mon atelier.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-encre-soft">
            <span>
              <strong className="text-encre">{AWARDS_BY_MEDAL.Or}</strong> médailles d&apos;or
            </span>
            <span>
              <strong className="text-encre">{AWARDS_BY_MEDAL.Argent}</strong> d&apos;argent
            </span>
            <span>
              <strong className="text-encre">{AWARDS_BY_MEDAL.Bronze}</strong> de bronze
            </span>
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {AWARDS_BY_YEAR.map(({ year, awards }) => (
            <Reveal key={year}>
              <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
                <p className="font-display text-3xl text-vert lg:col-span-2 lg:text-4xl">
                  {year}
                </p>
                <ul className="divide-y divide-line border-t border-line lg:col-span-10">
                  {awards.map((a) => (
                    <li
                      key={`${a.year}-${a.product}`}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
                    >
                      <span className="font-medium">{a.product}</span>
                      <span className="flex items-center gap-4">
                        <span className="text-sm text-encre-soft">{a.maker}</span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ${MEDAL_STYLES[a.medal]}`}
                        >
                          {a.medal}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
