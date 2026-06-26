"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem, WordReveal, Spotlight } from "./motion-primitives";
import LiteYouTube from "./LiteYouTube";
import { Decor } from "./Decor";

/* ============================================================== MANIFESTE === */
export function Manifeste() {
  return (
    <section id="manifeste" className="relative overflow-hidden py-32 lg:py-44">
      <span className="halo left-1/2 top-1/2 h-[60vw] w-[60vw] max-h-[680px] max-w-[680px] -translate-x-1/2 -translate-y-1/2" />
      <Decor variant="leaf" className="left-[-6%] top-[6%] h-64 w-64 rotate-[-18deg] opacity-[0.12] lg:h-80 lg:w-80" />
      <Decor variant="drop" className="right-[-4%] bottom-[6%] h-52 w-52 rotate-[12deg] opacity-[0.1] lg:h-64 lg:w-64" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="kicker">Le goût est un langage</span>
        </Reveal>
        <p className="font-display mt-10 text-3xl leading-snug text-ivoire sm:text-4xl lg:text-5xl">
          <WordReveal text="Je crée, ajuste et traduis des recettes pour qu'elles soient comprises en bouche." />
        </p>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-lg text-ivoire-dim">
            Chef de formation, expert du goût, j'accompagne chefs, artisans et
            marques agroalimentaires dans la création de signatures gustatives
            naturelles.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================== ESSENTIEL === */
const ESSENTIEL = [
  { t: "Chef & expert du goût", d: "Une oreille, un palais, une méthode.", span: "lg:col-span-2", k: "01" },
  { t: "20+ ans", d: "Cuisine & R&D au service du goût juste.", span: "", k: "02" },
  { t: "Signatures gustatives", d: "Création, reformulation, identité reconnaissable.", span: "", k: "03" },
  { t: "Huiles essentielles culinaires", d: "Comme outil de précision — jamais comme rustine.", span: "lg:col-span-2", k: "04" },
  { t: "Restauration & agroalimentaire", d: "Du laboratoire à l'assiette.", span: "", k: "05" },
  { t: "Sur-mesure uniquement", d: "Une réponse construite, pas un produit standard.", span: "lg:col-span-2", k: "06" },
];

export function Essentiel() {
  return (
    <section id="essentiel" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="kicker">L'essentiel</span>
            <h2 className="font-display mt-4 text-4xl text-ivoire lg:text-6xl">
              Ce qui me définit
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-ivoire-dim">
              Six repères pour comprendre ma façon de travailler le goût.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ESSENTIEL.map((c) => (
            <StaggerItem key={c.k} className={c.span}>
              <Spotlight className="group h-full rounded-2xl border border-line card-soft p-7 transition-all duration-500 hover:border-sauge-deep/50 hover:-translate-y-1">
                <div className="flex h-full flex-col">
                  <span className="font-display text-sm text-or/70">{c.k}</span>
                  <h3 className="font-display mt-6 text-2xl text-ivoire lg:text-3xl">
                    {c.t}
                  </h3>
                  <p className="mt-3 text-ivoire-dim">{c.d}</p>
                </div>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ====================================================== POSTURE + CE QUE === */
const FAIRE = [
  "créé",
  "clarifié",
  "renforcé sans alourdir",
  "reformulé sans perdre son impact",
  "signé pour devenir reconnaissable",
];

export function PostureFaire() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Decor variant="drop" className="right-[-5%] top-[10%] h-72 w-72 rotate-[-10deg] opacity-[0.09] lg:h-96 lg:w-96" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        {/* Ma posture */}
        <div>
          <Reveal>
            <span className="kicker">Ma posture</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display mt-6 text-3xl leading-snug text-ivoire lg:text-4xl">
              Une recette parle. Encore faut-il qu'elle soit juste.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-lg text-ivoire-dim">
              <p>Trop de goûts sont aromatisés sans être compris.</p>
              <p>
                Mon rôle n'est pas d'ajouter, mais d'écouter, d'équilibrer et de
                traduire une intention en sensation.
              </p>
              <p className="text-or">Le goût d'abord. Toujours.</p>
            </div>
          </Reveal>
        </div>

        {/* Ce que je fais */}
        <div>
          <Reveal>
            <span className="kicker">Ce que je fais</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-ivoire-dim">
              J'interviens quand un goût doit être :
            </p>
          </Reveal>
          <Stagger className="mt-8 space-y-px" gap={0.1}>
            {FAIRE.map((f, i) => (
              <StaggerItem key={f}>
                <div className="group flex items-baseline gap-5 border-b border-line py-5 transition-colors duration-300 hover:border-or/40">
                  <span className="font-display text-sm text-or/60">
                    0{i + 1}
                  </span>
                  <span className="font-display text-2xl text-ivoire transition-colors duration-300 group-hover:text-or lg:text-3xl">
                    {f}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <p className="mt-8 text-ivoire-dim">
              En restauration comme en agroalimentaire.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =============================================================== APPROCHE === */
const TEMPS = ["attaque", "équilibre", "longueur", "intention"];

export function Approche() {
  return (
    <section id="approche" className="relative overflow-hidden py-24 lg:py-32">
      <Decor variant="leaf" className="right-[-7%] top-[4%] h-72 w-72 rotate-[20deg] opacity-[0.1] lg:h-[26rem] lg:w-[26rem]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/portrait-2.webp"
                alt="Aymeric Pataud au travail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charbon/60 to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <span className="kicker">Mon approche</span>
            <p className="font-display mt-6 text-3xl leading-snug text-ivoire lg:text-4xl">
              Je travaille une recette comme un langage.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line">
            {TEMPS.map((t, i) => (
              <StaggerItem key={t}>
                <div className="bg-charbon-card p-6">
                  <span className="font-display text-sm text-or/60">
                    0{i + 1}
                  </span>
                  <p className="font-display mt-3 text-2xl capitalize text-ivoire">
                    {t}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <p className="mt-10 text-lg text-or">
              Avant d'être formulé, un goût doit être compris.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ HUILES === */
export function Huiles() {
  return (
    <section id="huiles" className="relative overflow-hidden py-28 lg:py-40">
      <span className="halo left-[12%] top-[10%] h-[36vw] w-[36vw] max-h-[480px] max-w-[480px]" />
      <span className="halo halo-soft right-[8%] bottom-[8%] h-[40vw] w-[40vw] max-h-[520px] max-w-[520px]" />
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="kicker">Huiles essentielles · Un outil, pas une solution</span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display mt-8 text-4xl text-ivoire lg:text-6xl">
            Puissance, précision, <span className="text-or">naturalité.</span>
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-ivoire-dim">
            Utilisées quand elles font sens, avec mes huiles essentielles
            culinaires Délices &amp; Sens ou en création sur-mesure.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-line card-soft p-8">
            <p className="text-lg text-ivoire-dim">
              Une règle reste intangible : elles ne sauvent pas une mauvaise
              recette.
            </p>
            <p className="font-display mt-4 text-2xl text-or">
              Elles subliment une recette juste.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================= ENDURANCE === */
export function Endurance() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Decor variant="leaf" className="left-[-6%] bottom-[2%] h-64 w-64 rotate-[-24deg] opacity-[0.09] lg:h-80 lg:w-80" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <Reveal>
            <span className="kicker">Goût &amp; endurance</span>
            <p className="font-display mt-6 text-3xl leading-snug text-ivoire lg:text-4xl">
              Produits déshydratés ou lyophilisés, barres énergétiques, plats
              d'effort.
            </p>
          </Reveal>
          <Stagger className="mt-8 space-y-3 text-lg text-ivoire-dim">
            {["Peu de poids.", "De l'eau chaude.", "Mais la sensation d'un plat maison."].map(
              (l) => (
                <StaggerItem key={l}>
                  <p>{l}</p>
                </StaggerItem>
              )
            )}
          </Stagger>
          <Reveal delay={0.2}>
            <p className="font-display mt-8 text-2xl text-or">
              Quand le corps fatigue, le goût devient un soutien mental.
            </p>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/ambiance.webp"
                alt="Plat d'effort et nutrition sportive"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ========================================================= SOCIAL PROOF === */
const CLIENTS = [
  { src: "/images/client-randofruits.webp", alt: "Randofruits" },
  { src: "/images/client-pregrandin.webp", alt: "SNC Pré Grandin" },
  { src: "/images/client-bille-en-tete.webp", alt: "Bille en Tête" },
  { src: "/images/client-la-comtoise.webp", alt: "La Comtoise" },
];

export function SocialProof() {
  return (
    <section id="preuve" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-12 text-center">
          <Reveal>
            <span className="kicker">Preuve sociale</span>
            <h2 className="font-display mt-4 text-4xl text-ivoire lg:text-6xl">
              Ils en parlent mieux que moi.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-ivoire-dim">
              Plus de 200 collaborations en France et en Europe. Certains ont
              accepté de lever le voile.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <LiteYouTube
            id="1lvunYpGKrI"
            title="Aymeric Pataud — Ils me font confiance"
            thumb="/images/video-thumb.jpg"
          />
        </Reveal>

        {/* Logos de confiance */}
        <Reveal delay={0.2}>
          <p className="mt-16 text-center text-sm uppercase tracking-[0.25em] text-ivoire-dim/70">
            Ils me font confiance
          </p>
        </Reveal>
        <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {CLIENTS.map((c) => (
            <StaggerItem key={c.alt}>
              <Image
                src={c.src}
                alt={c.alt}
                width={130}
                height={70}
                className="h-14 w-auto object-contain opacity-50 grayscale transition-all duration-500 hover:opacity-90 hover:grayscale-0"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* =============================================================== POUR QUI === */
const POURQUI = [
  { t: "Chefs", d: "Signer une assiette avec un goût qu'on ne trouve nulle part ailleurs." },
  { t: "Artisans du goût", d: "Transformer une production en produits premium à forte identité." },
  { t: "Marques agroalimentaires", d: "Créer, reformuler et différencier sans perdre le naturel." },
];

export function PourQui() {
  return (
    <section id="pour-qui" className="relative overflow-hidden py-24 lg:py-32">
      <Decor variant="drop" className="left-[-5%] top-[12%] h-60 w-60 rotate-[14deg] opacity-[0.08] lg:h-80 lg:w-80" />
      <Decor variant="leaf" className="right-[-6%] bottom-[8%] h-64 w-64 rotate-[28deg] opacity-[0.09] lg:h-96 lg:w-96" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <Reveal>
            <span className="kicker">Pour qui ?</span>
            <h2 className="font-display mt-4 text-4xl text-ivoire lg:text-6xl">
              Une seule exigence
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-md text-ivoire-dim">
              Un goût lisible, juste et durable.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 md:grid-cols-3">
          {POURQUI.map((p, i) => (
            <StaggerItem key={p.t}>
              <Spotlight className="group h-full rounded-2xl border border-line card-soft p-8 transition-all duration-500 hover:border-sauge-deep/50 hover:-translate-y-1">
                <span className="font-display text-5xl text-or/30 transition-colors duration-500 group-hover:text-or/60">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-6 text-3xl text-ivoire">{p.t}</h3>
                <p className="mt-4 text-ivoire-dim">{p.d}</p>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================================================= CTA FINAL === */
export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 lg:py-48">
      <span className="halo left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[760px] max-w-[760px] -translate-x-1/2 -translate-y-1/2" />
      <span className="halo halo-soft left-[5%] top-[15%] h-[28vw] w-[28vw] max-h-[360px] max-w-[360px]" />
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="font-display text-4xl leading-tight text-ivoire sm:text-5xl lg:text-7xl">
            Vous avez une recette à créer, ajuster ou différencier ?
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-lg text-lg text-ivoire-dim">
            Parlons de votre projet. Sur-mesure, du goût d'abord, toujours.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@aymericpataud.fr"
              className="rounded-full bg-or px-8 py-4 text-base font-semibold text-charbon transition-transform duration-300 hover:scale-[1.03]"
            >
              Parler de votre projet
            </a>
            <a
              href="https://www.aymericpataud.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ivoire/25 px-8 py-4 text-base font-medium text-ivoire transition-colors duration-300 hover:border-or hover:text-or"
            >
              Découvrir mes services
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="font-display mt-16 text-2xl text-or/80">
            Aymeric Pataud
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.3em] text-ivoire-dim">
            Expert du goût
          </p>
        </Reveal>
      </div>
    </section>
  );
}
