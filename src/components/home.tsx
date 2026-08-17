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
import { SIGNATURE_VIDEO, WORKSHOPS } from "@/lib/site";
import { PROFILES } from "@/content/profiles";
import { FEATURED_REFERENCES, REFERENCE_LOGOS } from "@/content/references";
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

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {PROFILES.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <Link href={p.href} className="block h-full">
                {/* Pas d'image ici : la section Créations, juste en dessous,
                    porte déjà trois visuels. Deux rangées de cartes
                    illustrées se suivant alourdissaient la page pour rien. */}
                <Spotlight className="card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5">
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-2xl">{p.title}</h3>
                    <p className="mt-3 text-encre-soft">{p.need}</p>

                    <ul className="mt-6 flex-1 space-y-2 text-sm">
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

                    <span className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-semibold text-vert">
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

/* ============================================== CRÉATIONS PAR SPÉCIALITÉ = */
/**
 * Retour client du 17/08/2026 : les fromagers sont son plus fort potentiel,
 * et la nutrition sportive est devenue une seconde spécialité qu'il veut
 * voir mise en avant. Trois portes, trois preuves de savoir-faire.
 */
const CREATIONS = [
  {
    href: "/creations-fromageres/",
    kicker: "Fromages & produits laitiers",
    title: "Aromatiser le lait, là où personne ne savait le faire",
    text: "Yaourts, tommes, raclettes, beurres. Une gamme née d'un verrou technique résolu il y a plus de dix ans avec MEALK.",
    image: "/images/yaourt-orange-tonka.webp",
    alt: "Yaourt MEALK orange et fève de tonka, dosage à la pipette",
  },
  {
    href: "/nutrition-sportive/",
    kicker: "Nutrition sportive",
    title: "Rendre gourmand un plat lyophilisé",
    text: "Trente plats avec Marie de Livinhac, des barres 100 % réunionnaises avec Randofruits. Sans aucune huile essentielle.",
    image: "/images/endurance.webp",
    alt: "Repas d'effort et nutrition sportive",
  },
  {
    href: "/creations-reunion/",
    kicker: "Terroir de La Réunion",
    title: "Créer avec le seul terroir de l'île",
    text: "Combava, gros piment, massalé. Une contrainte d'origine transformée en signature, pour ceux qui fabriquent sur place.",
    image: "/images/bocal.webp",
    alt: "Produits de terroir réunionnais en bocal",
  },
];

export function Creations() {
  return (
    <Section>
      <Container>
        <SectionHeader
          kicker="Créations"
          title="Trois terrains, une même lecture du goût"
          lede="Ce que je développe pour mes clients, quand la gamme ne suffit pas."
          align="center"
        />
        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {CREATIONS.map((c) => (
            <StaggerItem key={c.href} className="h-full">
              <Link href={c.href} className="block h-full">
                <Spotlight className="card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={asset(c.image)}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="kicker">{c.kicker}</span>
                    <h3 className="font-display mt-3 text-xl leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-encre-soft">
                      {c.text}
                    </p>
                    <span className="link-underline mt-5 inline-flex items-center gap-2 text-sm font-semibold text-vert">
                      Voir les créations
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

/* ================================================== DEUX ATELIERS ======== */
/**
 * Double implantation demandée par le client : le siège reste Amiens, un
 * second atelier existe à La Réunion. Bande volontairement courte, sur le
 * modèle « Paris–New York ». Au retour en métropole, seul WORKSHOPS change.
 */
export function Workshops() {
  return (
    <section className="border-y border-line bg-surface">
      <Container>
        <div className="grid gap-8 py-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-14">
          <div className="lg:col-span-4">
            <Reveal>
              <Kicker>Deux ateliers</Kicker>
              <p className="font-display mt-4 text-3xl lg:text-4xl">
                Amiens <span className="text-sauge">·</span> La Réunion
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {WORKSHOPS.map((w) => (
              <StaggerItem key={w.city}>
                <p className="font-display text-lg">
                  {w.city}
                  <span className="ml-2 text-sm font-normal text-encre-soft">
                    {w.region}
                  </span>
                </p>
                <p className="mt-1 text-sm text-vert">{w.role}</p>
                <p className="mt-3 text-sm text-encre-soft">{w.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
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
              <div className="mt-7 max-w-xl space-y-4 text-lg text-encre-soft">
                <p>
                  Mes huiles sont des extraits de plante entière, sans solvant
                  ni additif. Selon la matrice et le dosage, elles se déclarent
                  sous leur nom botanique, pas sous la mention générique.
                </p>
                <p className="font-display text-2xl text-vert">
                  Un fournisseur d&apos;arômes ne peut pas écrire cette ligne.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8">
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
              <div className="mt-7 max-w-xl space-y-4 text-lg text-creme/75">
                <p>
                  Il y a plus de dix ans, un fromager m&apos;a posé un problème
                  que personne n&apos;avait résolu : aromatiser le lait
                  directement avec une huile essentielle. J&apos;ai créé des
                  huiles essentielles culinaires hydrosolubles.
                </p>
                <p>
                  Yaourts, tommes, raclettes, beurres, sauces fromagères,
                  bières artisanales. Là où le marché ne propose que des arômes
                  de synthèse ou des molécules isolées.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-4">
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
/**
 * Trois preuves fortes, puis le bandeau de logos dans la même section.
 * Auparavant c'étaient deux sections empilées : trop de scroll pour ce que
 * ça raconte.
 */
export function FeaturedReferences() {
  const logos = [...REFERENCE_LOGOS, ...REFERENCE_LOGOS];

  return (
    <Section tone="deep" className="overflow-hidden">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            kicker="Références"
            title="Ils ne cherchent plus ailleurs."
            lede="Un Meilleur Ouvrier de France, deux champions du monde, un laboratoire d'innovation, des fromagers, des brasseurs. Certains depuis quinze ans."
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

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {FEATURED_REFERENCES.map((r) => (
            <StaggerItem key={r.slug} className="h-full">
              <Link href={`/references/#${r.slug}`} className="block h-full">
                <Spotlight className="card group flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5">
                  {r.logo ? (
                    <Image
                      src={asset(r.logo)}
                      alt={r.name}
                      width={140}
                      height={52}
                      className="h-11 w-auto max-w-[8rem] object-contain"
                    />
                  ) : null}
                  <h3 className="font-display mt-5 text-xl">{r.name}</h3>
                  <p className="mt-1.5 text-sm text-vert">{r.sector}</p>
                  {r.pullQuote ? (
                    <p className="font-display mt-4 flex-1 text-lg leading-snug">
                      « {r.pullQuote} »
                    </p>
                  ) : null}
                </Spotlight>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>

      {/* Bandeau de logos, dans la même section */}
      <div className="mt-14">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-encre-soft">
          Plus de 200 clients en France et en Europe
        </p>
        <div className="marquee-mask relative mt-7">
          <div className="marquee-track flex w-max items-center gap-3">
            {logos.map((r, i) => (
              <div
                key={`${r.slug}-${i}`}
                className="flex h-20 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface p-3"
              >
                <Image
                  src={asset(r.logo!)}
                  alt={r.name}
                  width={120}
                  height={60}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
