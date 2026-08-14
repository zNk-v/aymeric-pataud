import type { Metadata } from "next";
import { CtaBand, NextSteps, PageHero, TedxBlock } from "@/components/blocks";
import { QuoteBanner, SplitBlock } from "@/components/page-blocks";
import { Container, Kicker, Placeholder, Section, SectionHeader } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Le chef",
  description:
    "Chef de formation, membre des Toques Françaises, auteur du premier ouvrage au monde sur les huiles essentielles en cuisine (2003) et conférencier TEDx. Vingt-cinq ans à travailler le goût comme un langage.",
  alternates: { canonical: "/aymeric-pataud/" },
};

const REPERES = [
  { year: "1998", text: "Découverte des huiles essentielles à La Réunion" },
  { year: "2003", text: "Premier ouvrage au monde sur les huiles essentielles en cuisine" },
  { year: "2009", text: `Création de la marque ${SITE.brand}` },
  { year: "2013", text: "Invention des huiles essentielles culinaires hydrosolubles" },
  { year: "Aujourd'hui", text: "Laboratoire d'innovation et éco-extracteur breveté" },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Le chef"
        title="Chef, interprète du goût. Créateur de signatures gustatives."
        lede="Chef de formation et cuisinier dans l'âme. Depuis plus de vingt ans, je travaille le goût comme un langage. Pas comme un arôme à ajouter, pas comme une note à plaquer. Comme une matière vivante, faite d'équilibre, de mémoire et d'émotion."
        image="/images/portrait-noir.webp"
        imageAlt="Portrait d'Aymeric Pataud"
      />

      {/* Repères */}
      <Section tone="deep" size="sm">
        <Container>
          <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {REPERES.map((r) => (
              <StaggerItem key={r.year} className="h-full">
                <div className="flex h-full flex-col bg-surface p-7">
                  <span className="font-display text-2xl text-vert">
                    {r.year}
                  </span>
                  <span className="mt-3 text-sm text-encre-soft">{r.text}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <SplitBlock
        kicker="Le goût, avant les mots"
        title="Chez moi, on parlait peu. Mais on cuisinait."
        image="/images/portrait-tomate.webp"
        imageAlt="Aymeric Pataud en dégustation"
      >
        <p>
          Avant d&apos;être un métier, la cuisine a été ma première manière de
          m&apos;exprimer. J&apos;ai compris très tôt qu&apos;on pouvait
          transmettre, rassurer, aimer, simplement en faisant à manger.
        </p>
        <p>
          Le goût n&apos;était pas un détail. C&apos;était un langage.
        </p>
        <p>
          Je suis devenu chef par vocation, parce que la cuisine me permettait
          de dire les choses sans discours inutile. Très vite, une question
          s&apos;est imposée : pourquoi certaines recettes marquent quand
          d&apos;autres sonnent faux ? Ce n&apos;est pas une question
          d&apos;ingrédient, c&apos;est une question de lecture.
        </p>
      </SplitBlock>

      <SplitBlock
        kicker="La Réunion, 1998"
        title="Une fraction de goutte. Une intensité brute."
        image="/images/agrumes.webp"
        imageAlt="Travail des agrumes"
        reverse
        tone="deep"
      >
        <p>
          Il y a plus de vingt-cinq ans, sur l&apos;île de La Réunion, je
          découvre les huiles essentielles. Leur puissance, leur précision, leur
          pureté. Je comprends que le goût peut être travaillé avec une finesse
          inédite, à condition d&apos;y appliquer une rigueur absolue.
        </p>
        <p>
          Deux rencontres structurent ma manière de travailler. Victor Goeb,
          médecin et aromathérapeute, m&apos;apprend à lire le végétal : son
          équilibre, sa puissance, ses limites. Farid Chemat, spécialiste
          mondial de l&apos;éco-extraction, m&apos;ouvre à une aromatique plus
          juste, respectueuse du végétal et de l&apos;environnement.
        </p>
        <p>
          De là naît une conviction fondatrice : les huiles essentielles
          culinaires ne sont pas une solution, elles sont un outil.
        </p>
      </SplitBlock>

      <QuoteBanner>
        En 2003, j&apos;ai publié le premier ouvrage au monde consacré à
        l&apos;usage des huiles essentielles en cuisine. À une époque où
        l&apos;aromatique était encore réservée aux laboratoires et aux
        thérapeutes.
      </QuoteBanner>

      <TedxBlock />

      <SplitBlock
        kicker="Aujourd'hui"
        title="Je ne quitte pas la cuisine. Je la traduis."
        image="/images/atelier-cuisine.webp"
        imageAlt="Aymeric Pataud dans son laboratoire d'innovation culinaire"
        ratio="5/4"
      >
        <p>
          Mon travail a évolué vers la formulation, l&apos;ajustement fin et la
          création de signatures gustatives. Je ne parfume pas, je traduis : ce
          que le produit veut dire, ce que le marché attend, ce que la bouche
          perçoit réellement.
        </p>
        <p>
          Je travaille dans mon propre laboratoire de recherche et
          d&apos;innovation culinaire, équipé d&apos;un éco-extracteur
          d&apos;huile essentielle culinaire breveté. J&apos;accompagne chefs,
          artisans et marques agroalimentaires dans la création, la
          reformulation et la sublimation de recettes. Souvent avec les huiles{" "}
          {SITE.brand}, parfois sans. Toujours avec la même règle : le goût
          d&apos;abord.
        </p>
      </SplitBlock>

      {/* Vision */}
      <Section tone="dark">
        <Container size="narrow">
          <Reveal>
            <span className="kicker !text-sauge">Ma vision</span>
            <p className="font-display mt-8 text-balance text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
              Je crois à un goût lisible, cohérent, honnête et durable.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-sauge">
                  Je ne crois pas
                </p>
                <ul className="mt-5 space-y-3 text-lg text-creme/75">
                  <li>Aux recettes maquillées</li>
                  <li>Aux arômes de compensation</li>
                  <li>Aux solutions standard</li>
                </ul>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-sauge">
                  Ce que ça implique
                </p>
                <p className="mt-5 text-lg text-creme/75">
                  Le goût est un engagement, pas un artifice. C&apos;est aussi
                  pourquoi je travaille en sur-mesure uniquement, et pourquoi je
                  refuse certains projets.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <SplitBlock
        kicker="Transmettre"
        title="Un goût compris est un goût qui dure."
        image="/images/portrait-veste.webp"
        imageAlt="Aymeric Pataud en veste de chef"
        reverse
        tone="deep"
      >
        <p>
          Je suis, et je reste, chef. Membre des Toques Françaises, je continue
          à porter la veste et à défendre une vision exigeante, mais accessible,
          du goût.
        </p>
        <p>
          Chef bénévole pour La Tablée des Chefs, j&apos;anime des ateliers
          culinaires pour des jeunes en difficulté. Ambassadeur de
          l&apos;association Les Enfants Cuisinent, je sensibilise les plus
          jeunes à la richesse des saveurs et à une alimentation responsable.
        </p>
        <p>Parce que le goût se transmet autant qu&apos;il se travaille.</p>
      </SplitBlock>

      {/* Emplacements en attente */}
      <Section>
        <Container size="narrow">
          <SectionHeader
            kicker="Autorité"
            title="Livres, presse et distinctions"
            lede="Cette section attend la matière du client. Rien n'a été inventé pour la remplir."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Placeholder title="Les quatre ouvrages">
              Titres, éditeurs, années de parution, visuels de couverture et
              liens d&apos;achat. Seul le premier, publié en 2003, est
              documenté aujourd&apos;hui.
            </Placeholder>
            <Placeholder title="Les mentions presse">
              Trois à quatre sollicitations par an comme référence sur les
              huiles essentielles culinaires. Média, date, titre et lien ou
              scan pour chacune.
            </Placeholder>
            <Placeholder title="Collège Culinaire de France">
              Le site actuel mentionne les Toques Françaises. Confirmer les deux
              appartenances et fournir les logos officiels.
            </Placeholder>
            <Placeholder title="La vidéo signature">
              Le film réalisé par Poire et Cactus. Un emplacement de premier
              plan est déjà en place sur la page d&apos;accueil.
            </Placeholder>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Vous cherchez à créer, clarifier ou signer une recette ?"
        lede="Le goût commence toujours par une rencontre."
      />

      <NextSteps
        items={[
          {
            title: "La méthode",
            text: "Comment je lis une recette avant de la corriger.",
            href: "/expertise-du-gout/",
          },
          {
            title: "Références",
            text: "Quatorze collaborations documentées.",
            href: "/references/",
          },
          {
            title: "Le blog",
            text: "Articles de fond sur les huiles essentielles culinaires.",
            href: "/blog/",
          },
        ]}
      />
    </>
  );
}
