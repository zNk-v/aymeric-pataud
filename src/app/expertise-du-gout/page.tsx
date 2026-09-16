import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, NextSteps, PageHero, Testimonials } from "@/components/blocks";
import {
  ListBlock,
  QuoteBanner,
  SplitBlock,
  Steps,
} from "@/components/page-blocks";
import { Container, Kicker, Section, TextLink } from "@/components/ui";
import { Reveal } from "@/components/motion-primitives";
import { asset } from "@/lib/asset";
import { DISTINCTIONS } from "@/content/credentials";

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
        Un goût perçu comme faible est presque toujours un goût mal construit.
      </QuoteBanner>

      <SplitBlock
        kicker="Une approche de chef"
        title="Je goûte, j'analyse, je démonte, je rééquilibre."
        image="/images/atelier-mains.webp"
        imageAlt="Travail de mise au point en cuisine"
        ratio="5/4"
      >
        <p>
          Trop de recettes sont aromatisées sans être comprises. On ajoute une
          note, on la plaque, on espère que ça tienne. En bouche, le message
          reste confus.
        </p>
        <p>
          Mon rôle n&apos;est pas d&apos;ajouter. C&apos;est d&apos;écouter, de
          démonter, de rééquilibrer, puis de traduire une intention en
          sensation. Je travaille une recette comme un chef travaille une
          assiette, qu&apos;il s&apos;agisse d&apos;un plat, d&apos;une boisson
          ou d&apos;un produit destiné à la ligne de production.
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
        {/* Le procédé d'éco-extraction : Aymeric a autorisé ces précisions le
            8 septembre 2026, la chaire de Farid Chemat et le brevet. */}
        <p>
          Quand le goût visé n&apos;existe dans aucun flacon, je l&apos;extrais.
          Mon procédé d&apos;éco-extraction sur mesure est né de vingt ans de
          recherche avec Farid Chemat, chercheur et titulaire d&apos;une chaire
          à l&apos;UNESCO, et il est protégé par un brevet. Il travaille au plus près de la plante et du
          producteur, sur des volumes qu&apos;aucun industriel de
          l&apos;arôme ne descend chercher.
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

      {/* Le détail vit désormais sur /nutrition-sportive/ : ici, la méthode
          seulement, avec le renvoi vers la spécialité. */}
      <SplitBlock
        kicker="La méthode hors des huiles"
        title="La preuve qu'elle ne dépend pas de l'outil."
        image="/images/endurance.webp"
        imageAlt="Repas d'effort et nutrition sportive"
        ratio="5/4"
      >
        <p>
          Sur les produits déshydratés et lyophilisés, je travaille sans aucune
          huile essentielle. La matière sèche, les épices et les plantes
          suffisent. La lecture du goût, elle, ne change pas.
        </p>
        <p>
          C&apos;est devenu une seconde spécialité : rendre gourmand un plat
          d&apos;effort, une barre énergétique ou un repas lyophilisé, là où le
          goût a justement tendance à disparaître.
        </p>
        <p>
          <TextLink href="/nutrition-sportive/">
            Voir les créations de nutrition sportive
          </TextLink>
        </p>
      </SplitBlock>

      {/* Distinctions transmises par Aymeric le 15 septembre 2026. Le texte
          est le sien ; la bande preuve de l'accueil renvoie ici. */}
      <Section id="reconnaissances" tone="deep">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <Reveal>
                <Kicker>Reconnaissances</Kicker>
                <h2 className="font-display mt-5 text-balance text-4xl lg:text-5xl">
                  Primé, incubé, et adhérent des réseaux de l&apos;agroalimentaire.
                </h2>
                <p className="lede mt-6">{DISTINCTIONS.text}</p>
              </Reveal>
              {/* Photo du produit primé, envoyée par Aymeric le 16 septembre
                  2026 : c'est bien le sirop, pas la crème de vinaigre. */}
              <Reveal delay={0.1}>
                <figure className="mt-10">
                  <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl">
                    <Image
                      src={asset("/images/sirop-food-creativ.jpg")}
                      alt="Le sirop aux huiles essentielles de citron noir et de poivre de Sichuan de Picardie"
                      fill
                      sizes="(min-width: 1024px) 24rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm text-encre-soft">
                    Le sirop citron noir et poivre de Sichuan de Picardie,
                    primé par Food Creativ en 2024.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <ul className="divide-y divide-line border-y border-line">
                {DISTINCTIONS.items.map((d, i) => (
                  <Reveal key={d.name} delay={0.08 * i}>
                    <li className="grid grid-cols-[4.5rem_1fr] gap-4 py-6">
                      <p className="font-display text-2xl text-vert">{d.year}</p>
                      <div>
                        <h3 className="font-display text-2xl">{d.name}</h3>
                        <p className="mt-1 text-encre-soft">{d.role}</p>
                        <p className="mt-3">
                          <TextLink href={d.url} external>
                            Voir le site
                          </TextLink>
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

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
            text: "Plus de 60 références professionnelles, en lipo et en hydrosoluble.",
            href: "/huiles-essentielles-culinaires/",
          },
        ]}
      />
    </>
  );
}
