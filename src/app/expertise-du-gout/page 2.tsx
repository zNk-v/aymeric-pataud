import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, NextSteps, PageHero, Testimonials } from "@/components/blocks";
import {
  FeatureGrid,
  ListBlock,
  QuoteBanner,
  SplitBlock,
  Steps,
} from "@/components/page-blocks";
import { Container, Kicker, Section } from "@/components/ui";
import { Reveal } from "@/components/motion-primitives";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "L'expertise du goût",
  description:
    "Lire une recette avant de la corriger : attaque, équilibre, longueur, intention. La méthode d'un chef qui travaille le goût comme une structure, pas comme une note aromatique.",
  alternates: { canonical: "/expertise-du-gout/" },
};

const TRIANGLE = [
  {
    title: "Signature gustative",
    text: "Une identité aromatique propre à chaque recette, qui marque la mémoire. Là où un arôme de substitution remplace, mes huiles intensifient une matière existante : poudre de gingembre, zeste séché, herbe déshydratée. Elles subliment sans trahir.",
  },
  {
    title: "Clean label",
    text: "Des huiles 100 % issues de plantes, sans solvant, sans additif, sans résidu. Le goût est authentique, l'étiquette est plus courte. Certaines huiles remplacent à elles seules plusieurs arômes ou extraits.",
  },
  {
    title: "Impact sensoriel",
    text: "Une intensité maîtrisée, une aromatisation nette sans surdose. Dosage possible sous 0,1 g/kg, pour respecter les textures délicates : un biscuit, une ganache, une sauce fine. Moins de matière, plus de perception.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="L'expertise du goût"
        title="Le goût n'est pas une note. C'est une structure."
        lede="Une attaque, un équilibre, une longueur, une cohérence. Créer du goût ne consiste pas à ajouter, mais à comprendre ce qui se passe en bouche et à le rendre lisible, même sous contrainte industrielle."
        image="/images/portrait-veste.webp"
        imageAlt="Aymeric Pataud en dégustation"
      />

      <ListBlock
        kicker="Étape 1"
        title="Lire le goût avant d'agir"
        intro="Chaque intervention commence par une lecture. Quatre questions, dans cet ordre."
        items={[
          "Que dit la première sensation ?",
          "Où se situe l'équilibre ?",
          "Que reste-t-il en bouche ?",
          "Le message est-il clair ou confus ?",
        ]}
      />

      <QuoteBanner>
        Un goût perçu comme faible est souvent un goût mal construit. Mon rôle
        est d&apos;identifier ce qui brouille le message, puis de rétablir une
        structure juste.
      </QuoteBanner>

      <SplitBlock
        kicker="Une approche de chef"
        title="Je goûte, j'analyse, je démonte, je rééquilibre."
        image="/images/atelier-mains.webp"
        imageAlt="Travail de mise au point en cuisine"
        ratio="5/4"
      >
        <p>
          Je travaille une recette comme un chef travaille une assiette. Que ce
          soit pour un plat, une boisson, un dessert ou un produit destiné à la
          ligne de production, la logique reste identique.
        </p>
        <p>
          Le goût doit être compris immédiatement, puis durer sans lasser.
        </p>
      </SplitBlock>

      <SplitBlock
        kicker="Le goût avant l'ingrédient"
        title="Je ne pars jamais d'un ingrédient. Je pars d'un goût à atteindre."
        image="/images/poivre.webp"
        imageAlt="Analyse sensorielle d'une épice"
        reverse
        tone="deep"
      >
        <p>
          Une recette peut être trop plate, trop agressive, trop courte ou
          déséquilibrée sans que le problème vienne de l&apos;aromatisation.
        </p>
        <p>
          Dans la majorité des cas, il s&apos;agit d&apos;un défaut de
          construction gustative. Ajouter un arôme ne le corrige pas, il le
          masque.
        </p>
      </SplitBlock>

      {/* Le triangle aromatique */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Kicker>Ma méthode</Kicker>
                <h2 className="font-display mt-5 text-balance text-4xl leading-[1.08] lg:text-5xl">
                  Le triangle aromatique
                </h2>
                <p className="lede mt-6">
                  Trois exigences tenues en même temps. Aucune ne se négocie
                  contre une autre.
                </p>
                <div className="relative mt-10 aspect-[9/8] overflow-hidden rounded-2xl border border-line bg-surface">
                  <Image
                    src={asset("/images/triangle-aromatique.webp")}
                    alt="Le triangle aromatique : signature gustative, clean label, impact sensoriel"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-contain p-4"
                  />
                </div>
              </Reveal>
            </div>

            <div className="grid gap-4 lg:col-span-8">
              {TRIANGLE.map((t, i) => (
                <Reveal key={t.title} delay={0.08 * i}>
                  <div className="card rounded-3xl p-8">
                    <span className="font-display text-sm text-vert/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-4 text-2xl lg:text-3xl">
                      {t.title}
                    </h3>
                    <p className="mt-4 text-encre-soft">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Steps
        kicker="Comment ça se passe"
        title="Quatre temps, du premier appel au produit validé"
        tone="deep"
        steps={[
          {
            title: "Diagnostic",
            text: "Trente minutes pour goûter, écouter et poser un avis extérieur. Clair, objectif, orienté goût.",
          },
          {
            title: "Lecture",
            text: "Le goût existant est déconstruit : ce qu'il exprime, ce que la bouche perçoit, ce qui brouille le message.",
          },
          {
            title: "Ajustement",
            text: "L'aromatique intervient comme une ponctuation. Jamais comme un camouflage, toujours dans le respect de la structure.",
          },
          {
            title: "Reproductibilité",
            text: "Validation du dosage, de la tenue dans le temps et de la stabilité en volume. Le message doit rester lisible au millième lot.",
          },
        ]}
      />

      <FeatureGrid
        kicker="Goût & endurance"
        title="Là où le goût a tendance à disparaître"
        lede="Produits déshydratés ou lyophilisés, barres énergétiques, plats d'effort. Peu de poids, peu de volume, juste de l'eau chaude. Et une exigence intacte : la sensation d'un plat maison."
        columns={2}
        items={[
          {
            title: "Une contrainte technique forte",
            text: "Tenue du goût dans le temps, lisibilité malgré la fatigue sensorielle, stabilité après transformation, reproductibilité réelle.",
          },
          {
            title: "Un enjeu qui n'est pas gustatif",
            text: "Quand le corps fatigue et que la répétition s'installe, le goût devient un levier mental. Le défi n'est pas d'en faire plus, c'est de rester juste.",
          },
        ]}
      />

      <Testimonials
        variant="anonymous"
        title="Trois interventions, racontées par ceux qui les ont commandées"
        lede="Ces clients travaillent sous accord de confidentialité. Leurs mots sont repris tels quels, leur identité reste couverte."
      />

      <CtaBand
        title="Vous cherchez à clarifier, créer ou reformuler un goût sans perdre d'impact ?"
        lede="Trente minutes suffisent pour poser un diagnostic honnête."
      />

      <NextSteps
        items={[
          {
            title: "Consulting",
            text: "Accompagnement R&D, création de recette, formation et démonstration.",
            href: "/consulting/",
          },
          {
            title: "Création sur-mesure",
            text: "L'atelier, l'éco-extracteur breveté et les huiles qui n'existent nulle part ailleurs.",
            href: "/creation-sur-mesure/",
          },
          {
            title: "Les huiles culinaires",
            text: "Plus de 70 références professionnelles, en lipo et en hydrosoluble.",
            href: "/huiles-essentielles-culinaires/",
          },
        ]}
      />
    </>
  );
}
