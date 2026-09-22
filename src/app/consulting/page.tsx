import type { Metadata } from "next";
import { CtaBand, NextSteps, PageHero, Testimonials } from "@/components/blocks";
import {
  ListBlock,
  QuoteBanner,
  SplitBlock,
} from "@/components/page-blocks";
import {
  Container,
  Placeholder,
  Section,
  SectionHeader,
  TextLink,
} from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { FreeOffer, OfferGrid } from "@/components/offers";

export const metadata: Metadata = {
  title: "Consulting & formations",
  description:
    "Tests R&D, création de recettes, coaching R&D, coaching en cuisine, team building : des offres distinctes autour des huiles essentielles culinaires, et un accompagnement gratuit pour vous orienter.",
  alternates: { canonical: "/consulting/" },
};

const CAS = [
  {
    audience: "Marques agroalimentaires & industriels",
    items: [
      "Reformulation d'un plat cuisiné végétal jugé trop fade par les panels consommateurs, avec l'intégration ciblée de deux huiles essentielles culinaires",
      "Substitution d'arômes « nature identique » dans une boisson sans alcool : passage au 100 % végétal, réduction des volumes de dosage, baisse des coûts matière",
      "Développement d'un profil aromatique unique pour une gamme de sauces premium, devenu argument marketing",
    ],
  },
  {
    audience: "Chefs, traiteurs & restaurateurs",
    items: [
      "Accompagnement d'un chef étoilé pour twister une crème dessert signature, sans alourdir la recette",
      "Création d'une huile essentielle maison à partir d'une plante du potager d'un restaurant, extraite à l'éco-extracteur",
      "Développement d'un twist aromatique pour une sauce traiteur haut de gamme : recette mieux équilibrée, longueur en bouche renforcée",
    ],
  },
  {
    audience: "Artisans & TPE food",
    items: [
      "Optimisation d'un produit chocolaté bio avec une huile essentielle liposoluble, pour une meilleure cohérence entre goût perçu et promesse d'étiquetage",
      "Formulation sur-mesure d'un arôme hydrosoluble pour une gamme de glaces artisanales : intégration stable, profil plus naturel",
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Consulting & formations"
        title="Je ne vends pas des flacons. Je règle un problème."
        lede="Le plus souvent en une phrase, après avoir goûté. C'est pour cela que mes clients acceptent un tarif deux à quatre fois supérieur au marché, et qu'ils ne repartent pas."
        image="/images/portrait-atelier.webp"
        imageAlt="Aymeric Pataud en séance de travail"
      />

      <ListBlock
        kicker="Ce que je débloque"
        title="Les quatre situations dans lesquelles on m'appelle"
        intro="Aucune ne se règle en changeant de fournisseur d'arômes."
        items={[
          "Un panel consommateur trouve le produit fade, sans savoir dire pourquoi",
          "Une reformulation clean label a fait perdre l'impact d'origine",
          "Une gamme ne se distingue plus en rayon face à la concurrence",
          "Une carte, une recette ou un produit a besoin d'une signature reconnaissable",
        ]}
      />

      <QuoteBanner>
        Je ne suis pas un fournisseur. Je suis celui qu&apos;on appelle quand la
        recette bloque et que personne autour de la table ne sait dire ce qui
        cloche.
      </QuoteBanner>

      {/* Cinq offres distinctes, chacune avec son bouton de contact, puis
          l'accompagnement gratuit à part. Demande d'Aymeric du 21 septembre
          2026, voir content/offers.ts. */}
      <OfferGrid />
      <FreeOffer />

      <SplitBlock
        kicker="La méthode"
        title="Écouter avant d'agir. Toujours."
        image="/images/pipette-dessert.webp"
        imageAlt="Ajustement aromatique sur un dessert"
        tone="deep"
        ratio="5/4"
      >
        <p>
          Avant toute proposition, je lis le goût existant : ce que le produit
          exprime aujourd&apos;hui, ce que la bouche perçoit réellement, ce qui
          brouille le message, ce qui doit être clarifié.
        </p>
        <p>
          Le goût est déconstruit, puis reconstruit. Toujours avec une lecture
          culinaire, jamais purement technique.
        </p>
        <p>
          Chaque projet démarre de votre cahier des charges, pas de mes
          ingrédients. Je m&apos;adapte à votre recette, votre image, vos
          contraintes réglementaires et industrielles.
        </p>
      </SplitBlock>

      {/* Exemples d'accompagnements */}
      {/* La Réunion : sur place, il n'a quasiment pas de concurrence. C'est un
          argument commercial daté, il vaut jusqu'à son retour en métropole. */}
      <SplitBlock
        kicker="À La Réunion"
        title="Sur l'île, je suis à peu près seul à faire ce métier."
        image="/images/atelier-extracteur.webp"
        imageAlt="L'atelier du goût de La Saline-les-Hauts"
        ratio="5/4"
        reverse
      >
        <p>
          En métropole, un industriel qui cherche un consultant en goût a
          l&apos;embarras du choix. À La Réunion, la concurrence est quasi
          inexistante : grands hôtels, agroalimentaire local, transformateurs
          de produits du terroir trouvent rarement quelqu&apos;un qui sache
          lire une recette et la corriger sur place.
        </p>
        <p>
          Mon atelier du goût de La Saline-les-Hauts me permet d&apos;intervenir
          dans la semaine, avec le matériel, plutôt que de faire voyager des
          échantillons pendant un mois.
        </p>
        <p>
          <TextLink href="/creations-reunion/">
            Voir ce que je développe sur l&apos;île
          </TextLink>
        </p>
      </SplitBlock>

      <Section>
        <Container>
          <SectionHeader
            kicker="Exemples d'accompagnements"
            title="Ce que ça donne en pratique"
            lede="Interventions réelles, décrites sans nommer les clients qui n'ont pas donné leur accord."
          />
          <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
            {CAS.map((c) => (
              <StaggerItem key={c.audience} className="h-full">
                <div className="card h-full rounded-3xl p-8">
                  <h3 className="font-display text-2xl">{c.audience}</h3>
                  <ul className="mt-6 space-y-4">
                    {c.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-encre-soft">
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-sauge"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <Placeholder title="Deux cas industriels chiffrés" className="mt-8">
              Le client souhaite ajouter deux cas anonymisés mais typés, avec
              contexte, volume et résultat mesuré. À fournir par Aymeric.
            </Placeholder>
          </Reveal>
        </Container>
      </Section>

      <Testimonials variant="anonymous" title="Ce qu'ils en retiennent" />

      <CtaBand
        title="Trente minutes, un œil extérieur, un diagnostic clair."
        lede="Décrivez le produit et le blocage. Je vous dis ce que je vois."
        primaryLabel="Demander un échange"
      />

      <NextSteps
        items={[
          {
            title: "La méthode",
            text: "Comment je lis une recette avant de la corriger.",
            href: "/expertise-du-gout/",
          },
          {
            title: "Industriels agroalimentaires",
            text: "Reformulation, clean label, reproductibilité, étiquetage.",
            href: "/industriels-agroalimentaires/",
          },
          {
            title: "Chefs & traiteurs",
            text: "Signer une carte avec un goût introuvable ailleurs.",
            href: "/chefs-et-traiteurs/",
          },
        ]}
      />
    </>
  );
}
