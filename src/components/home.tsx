"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Reveal,
  Stagger,
  StaggerItem,
  WordReveal,
  Spotlight,
} from "./motion-primitives";
import { Arrow, Button, Container, Kicker, Section, SectionHeader } from "./ui";
import { asset } from "@/lib/asset";
import { SIGNATURE_VIDEO, SITE } from "@/lib/site";
import { PROFILES } from "@/content/profiles";
import { FEATURED_REFERENCES } from "@/content/references";
import { OIL_COUNT } from "@/content/oils";

/* =============================================================== HERO ==== */

/**
 * Bloc média du hero. Aujourd'hui : la photo signature.
 * Quand la vidéo Poire et Cactus arrive, on renseigne SIGNATURE_VIDEO.src
 * dans lib/site.ts et ce bloc bascule sans toucher à la mise en page.
 */
function SignatureMedia() {
  if (SIGNATURE_VIDEO.src) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={asset(SIGNATURE_VIDEO.poster)}
        className="h-full w-full object-cover"
      >
        <source src={asset(SIGNATURE_VIDEO.src)} type="video/mp4" />
      </video>
    );
  }
  return (
    <Image
      src={asset(SIGNATURE_VIDEO.poster)}
      alt="Aymeric Pataud, chef et expert du goût"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 42vw"
      className="object-cover"
    />
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-32 pb-16 lg:min-h-[100svh] lg:pt-40 lg:pb-24"
    >
      <span className="halo left-[-12%] top-[6%] h-[44vw] w-[44vw] max-h-[600px] max-w-[600px]" />
      <span className="halo halo-soft right-[2%] bottom-[4%] h-[34vw] w-[34vw] max-h-[440px] max-w-[440px]" />

      <Container className="lg:flex lg:min-h-[calc(100svh-10rem)] lg:items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Kicker>Chef de formation · Expert du goût</Kicker>
            </motion.div>

            {/* Temps 1 : l'accroche sensorielle */}
            <h1 className="font-display display-xl mt-7 text-balance text-[3.1rem] leading-[0.98] sm:text-6xl lg:text-[5.5rem]">
              <WordReveal text="Le goût est un langage." delay={0.2} immediate />{" "}
              <span className="text-vert">
                <WordReveal text="Je le traduis." delay={0.5} immediate />
              </span>
            </h1>

            {/* Temps 2 : la méthode, sans qu'elle devienne l'identité */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="lede mt-8 max-w-xl"
            >
              Vingt ans à créer, corriger et signer des recettes. Ma méthode
              privilégiée pour sublimer un goût : les huiles essentielles
              culinaires. Un outil de précision, jamais une rustine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact/">Parler de votre projet</Button>
              <Button href="/expertise-du-gout/" variant="outline">
                Découvrir la méthode
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              style={{ y: mediaY }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-creme-deep shadow-[0_50px_100px_-60px_rgba(22,26,24,0.6)]"
            >
              <SignatureMedia />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ========================================================= BANDE PREUVE == */
const PROOFS = [
  { value: "TEDxAmiens", label: "Conférence sur l'émotion gustative", href: "#tedx" },
  { value: "4 ouvrages", label: "Dont le premier au monde sur le sujet, en 2003", href: "/aymeric-pataud/" },
  { value: "200+", label: "Clients accompagnés en France et en Europe", href: "/references/" },
  { value: `${OIL_COUNT} huiles`, label: "Références culinaires, lipo et hydrosolubles", href: "/huiles-essentielles-culinaires/" },
];

export function ProofBar() {
  return (
    <section className="border-y border-line bg-surface">
      <Container>
        <Stagger className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {PROOFS.map((p, i) => (
            <StaggerItem key={p.value}>
              <Link
                href={p.href}
                className={`group flex h-full flex-col justify-center px-1 py-8 lg:px-6 lg:py-12 ${
                  i > 0 ? "lg:border-l lg:border-line" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-line lg:border-l" : ""}`}
              >
                <span className="font-display text-3xl text-vert lg:text-4xl">
                  {p.value}
                </span>
                <span className="mt-2 flex items-start gap-2 text-sm text-encre-soft">
                  {p.label}
                  <Arrow className="mt-0.5 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-60" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* ============================================================ POSTURE ==== */
export function Posture() {
  return (
    <Section size="lg">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <Kicker>Ma posture</Kicker>
              <p className="font-display mt-6 text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[3.4rem]">
                <WordReveal text="Un goût perçu comme faible est presque toujours un goût mal construit." />
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 max-w-xl space-y-5 text-lg text-encre-soft">
                <p>
                  Trop de recettes sont aromatisées sans être comprises. On
                  ajoute une note, on la plaque, on espère que ça tienne. En
                  bouche, le message reste confus.
                </p>
                <p>
                  Mon rôle n&apos;est pas d&apos;ajouter. C&apos;est
                  d&apos;écouter, de démonter, de rééquilibrer, puis de traduire
                  une intention en sensation.
                </p>
                <p className="font-display text-2xl text-vert">
                  Le goût d&apos;abord. Toujours.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
                <Image
                  src={asset("/images/epices.webp")}
                  alt="Ajustement d'un assaisonnement en cours de mise au point"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ====================================================== FOURCHE PROFILS == */
export function ProfileFork() {
  return (
    <Section id="pour-qui" tone="deep">
      <Container>
        <SectionHeader
          kicker="Pour qui"
          title="Une même expertise, trois façons de s'en servir"
          lede="Un chef cherche à être inspiré. Un directeur R&D cherche à être rassuré. Choisissez votre entrée."
          align="center"
        />

        <Stagger className="mt-16 grid gap-5 lg:grid-cols-3">
          {PROFILES.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <Link href={p.href} className="block h-full">
                <Spotlight className="card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={asset(p.image)}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-2xl lg:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-encre-soft">{p.need}</p>

                    <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                      {p.proofs.map((proof) => (
                        <li key={proof} className="flex gap-3 text-encre-soft">
                          <span
                            aria-hidden="true"
                            className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-sauge"
                          />
                          {proof}
                        </li>
                      ))}
                    </ul>

                    <span className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-semibold text-vert">
                      Voir ce parcours
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
  );
}

/* ================================================= ARGUMENT ÉTIQUETAGE === */
function LabelCard({
  variant,
  title,
  lines,
}: {
  variant: "before" | "after";
  title: string;
  lines: string[];
}) {
  const after = variant === "after";
  return (
    <div
      className={`rounded-2xl border p-6 ${
        after ? "border-vert bg-surface" : "border-line bg-creme-deep"
      }`}
    >
      <p
        className={`text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${
          after ? "text-vert" : "text-encre-soft"
        }`}
      >
        {title}
      </p>
      <ul className="mt-5 space-y-2 font-mono text-[0.8rem] leading-relaxed text-encre">
        {lines.map((l) => (
          <li
            key={l}
            className={
              l.startsWith("arôme") || l.startsWith("Arôme")
                ? "text-encre-soft line-through decoration-encre-soft/40"
                : ""
            }
          >
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LabelArgument() {
  return (
    <Section size="lg">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <Kicker>L&apos;argument que vos concurrents n&apos;ont pas</Kicker>
              <h2 className="font-display mt-6 text-balance text-4xl leading-[1.08] lg:text-6xl">
                Sur l&apos;étiquette, «&nbsp;huile essentielle de citron&nbsp;».
                Pas «&nbsp;arôme&nbsp;».
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 max-w-xl space-y-5 text-lg text-encre-soft">
                <p>
                  Le mot «&nbsp;arôme&nbsp;» est devenu un repoussoir en rayon.
                  Le consommateur le lit comme un aveu, même quand il est
                  parfaitement légal.
                </p>
                <p>
                  Mes huiles sont des extraits de plante entière, sans solvant,
                  sans additif, sans support de dilution. Selon la matrice et le
                  dosage, elles se déclarent sous leur nom botanique, pas sous
                  la mention générique.
                </p>
                <p className="font-display text-2xl text-vert">
                  Un fournisseur d&apos;arômes ne peut pas écrire cette ligne.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10">
                <Button href="/industriels-agroalimentaires/">
                  Ce que ça change pour un service R&amp;D
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                <LabelCard
                  variant="before"
                  title="Formulation classique"
                  lines={[
                    "Sucre",
                    "Eau",
                    "Jus concentré",
                    "arôme naturel de citron",
                    "arôme",
                    "Acidifiant : E330",
                    "Conservateur : E202",
                  ]}
                />
                <LabelCard
                  variant="after"
                  title="Avec mes huiles"
                  lines={[
                    "Sucre",
                    "Eau",
                    "Jus concentré",
                    "Huile essentielle de citron",
                    "Acidifiant : E330",
                  ]}
                />
              </div>
              <p className="mt-5 text-sm text-encre-soft">
                Exemple de lecture d&apos;étiquette. La déclaration exacte
                dépend de la matrice, du dosage et de la réglementation
                applicable à votre catégorie de produit.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ======================================================= HYDROSOLUBLES === */
export function Hydrosolubles() {
  return (
    <Section tone="dark" size="lg" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={asset("/images/fromage.webp")}
                    alt="Aromatisation d'un fromage à l'huile essentielle hydrosoluble"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={asset("/images/boisson.webp")}
                    alt="Mise au point d'une boisson aromatisée"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <Reveal>
              <span className="kicker !text-sauge">
                Le segment que je suis seul à couvrir
              </span>
              <h2 className="font-display mt-6 text-balance text-4xl leading-[1.08] lg:text-6xl">
                L&apos;huile et l&apos;eau ne se mélangent pas. J&apos;ai
                inventé la troisième voie.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 max-w-xl space-y-5 text-lg text-creme/75">
                <p>
                  Il y a plus de dix ans, un fromager m&apos;a posé un problème
                  que personne n&apos;avait résolu : aromatiser le lait
                  directement avec une huile essentielle. J&apos;ai créé des
                  huiles essentielles culinaires hydrosolubles.
                </p>
                <p>
                  Depuis, elles entrent dans des yaourts, des tommes, des
                  raclettes, des beurres, des sauces fromagères et des bières
                  artisanales. Là où le marché ne propose que des arômes de
                  synthèse ou des molécules isolées.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/huiles-essentielles-hydrosolubles/"
                  className="inline-flex items-center gap-2 rounded-full bg-creme px-7 py-3.5 text-sm font-semibold text-vert-fonce transition-transform duration-300 hover:scale-[1.02]"
                >
                  Fromagers et boissons
                  <Arrow />
                </Link>
                <Link
                  href="/references/"
                  className="inline-flex items-center gap-2 rounded-full border border-creme/25 px-7 py-3.5 text-sm font-medium text-creme transition-colors duration-300 hover:border-creme"
                >
                  Les cas concrets
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ========================================================= RÉFÉRENCES ==== */
export function FeaturedReferences() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            kicker="Références"
            title="Quinze ans avec un MOF. Dix ans avec un fromager."
            className="!max-w-2xl"
          />
          <Reveal delay={0.15}>
            <Link
              href="/references/"
              className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-vert"
            >
              Les 14 collaborations
              <Arrow />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {FEATURED_REFERENCES.map((r) => (
            <StaggerItem key={r.slug} className="h-full">
              <Link href={`/references/#${r.slug}`} className="block h-full">
                <Spotlight className="card group flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5">
                  {r.logo ? (
                    <span className="flex h-16 w-full items-start">
                      <Image
                        src={asset(r.logo)}
                        alt={r.name}
                        width={150}
                        height={64}
                        className="h-14 w-auto max-w-[9rem] object-contain"
                      />
                    </span>
                  ) : null}
                  <h3 className="font-display mt-6 text-2xl">{r.name}</h3>
                  <p className="mt-2 text-sm text-vert">{r.sector}</p>
                  <p className="mt-5 flex-1 text-encre-soft">{r.result}</p>
                  {r.pullQuote ? (
                    <p className="font-display mt-6 border-t border-line pt-6 text-lg">
                      « {r.pullQuote} »
                    </p>
                  ) : null}
                </Spotlight>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

/* ============================================================ ATELIER ==== */
export function Atelier() {
  return (
    <Section tone="deep" size="lg">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line">
                <Image
                  src={asset("/images/atelier-extracteur.webp")}
                  alt="L'éco-extracteur par micro-ondes breveté de l'atelier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <Kicker>L&apos;atelier</Kicker>
              <h2 className="font-display mt-6 text-balance text-4xl leading-[1.08] lg:text-6xl">
                Une machine brevetée, et des huiles qui n&apos;existent nulle
                part ailleurs.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 max-w-xl space-y-5 text-lg text-encre-soft">
                <p>
                  Un éco-extracteur par micro-ondes, sans eau, sans énergie
                  fossile, capable de produire une huile essentielle fraîche en
                  quelques minutes. En micro-séries, à partir d&apos;une plante
                  cueillie le matin même.
                </p>
                <p>
                  C&apos;est ce qui permet de créer un poivre de Sichuan de
                  Picardie, un pin douglas d&apos;Alsace ou une première
                  mondiale comme le poivre Patience de Côte d&apos;Ivoire.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10">
                <Button href="/creation-sur-mesure/">
                  Voir la création sur-mesure
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================================== CONSULTING == */
export function ConsultingTeaser() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <Kicker>Consulting</Kicker>
              <h2 className="font-display mt-6 text-balance text-4xl leading-[1.08] lg:text-6xl">
                Je ne vends pas des flacons. Je règle un problème.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 max-w-xl space-y-5 text-lg text-encre-soft">
                <p>
                  Un panel qui trouve le produit fade. Une reformulation qui
                  perd l&apos;impact d&apos;origine. Une gamme qui ne se
                  distingue plus en rayon. Une carte qui a besoin d&apos;une
                  signature.
                </p>
                <p>
                  J&apos;interviens en accompagnement R&amp;D, en création de
                  recette, en formation d&apos;équipe et en démonstration.
                  Trente minutes suffisent souvent à identifier ce qui bloque.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/consulting/">Découvrir le consulting</Button>
                <Button href="/expertise-du-gout/" variant="outline">
                  La méthode
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
                <Image
                  src={asset("/images/atelier-cuisine.webp")}
                  alt={`${SITE.name} en cuisine d'innovation`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
