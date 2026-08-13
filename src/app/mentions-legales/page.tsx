import type { Metadata } from "next";
import { Container, Kicker, Section } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${SITE.url}. Éditeur, hébergeur, propriété intellectuelle et droits des personnes.`,
  alternates: { canonical: "/mentions-legales/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <section className="pt-36 pb-8 lg:pt-48 lg:pb-12">
        <Container size="prose">
          <Kicker>Informations légales</Kicker>
          <h1 className="font-display mt-6 text-5xl lg:text-6xl">
            Mentions légales
          </h1>
        </Container>
      </section>

      <Section size="sm">
        <Container size="prose">
          <div className="prose">
            <h2>Éditeur du site</h2>
            <p>
              {SITE.legal.company} — {SITE.legal.form}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.city}
              <br />
              SIRET : {SITE.legal.siret}
              <br />
              Numéro de TVA intracommunautaire : {SITE.legal.vat}
              <br />
              Téléphone : {SITE.phone}
              <br />
              E-mail : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>Directeur de la publication : {SITE.legal.publisher}.</p>

            <h2>Hébergement</h2>
            <p>{SITE.legal.host}</p>

            <h2>Conception du site</h2>
            <p>
              Conception et développement :{" "}
              <a href="https://sitaly.fr" target="_blank" rel="noopener noreferrer">
                Sitaly
              </a>
              .
            </p>
            <p>
              Versions précédentes : NET CONCEPT (développement initial), La
              Mordue du Web (refonte 2025).
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site — textes,
              photographies, illustrations, logos, marques et éléments
              graphiques — est protégé par le droit d&apos;auteur et le droit
              des marques. Toute reproduction, représentation, modification ou
              adaptation, totale ou partielle, sans autorisation écrite
              préalable, est interdite.
            </p>
            <p>
              Les marques et logos des entreprises citées en référence
              appartiennent à leurs propriétaires respectifs et sont reproduits
              avec leur accord.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Les informations transmises via le formulaire de contact servent
              uniquement à répondre à la demande de l&apos;internaute. Aucune
              donnée n&apos;est cédée ni vendue à des tiers.
            </p>
            <p>
              Conformément au Règlement général sur la protection des données et
              à la loi Informatique et Libertés, vous disposez d&apos;un droit
              d&apos;accès, de rectification, d&apos;effacement, de limitation
              et d&apos;opposition sur les données qui vous concernent. Pour
              l&apos;exercer, écrivez à{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
            <p>
              Le détail des traitements figure dans la{" "}
              <a href="/politique-de-confidentialite/">
                politique de confidentialité
              </a>
              .
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site ne dépose aucun cookie de mesure d&apos;audience ni de
              publicité. Les vidéos intégrées ne se chargent qu&apos;après un
              clic explicite, via le domaine youtube-nocookie.com : aucun cookie
              tiers n&apos;est déposé tant que la vidéo n&apos;est pas lancée.
            </p>

            <h2>Responsabilité</h2>
            <p>
              Les informations publiées sur ce site sont fournies à titre
              indicatif. Les indications relatives aux dosages, aux matrices et
              à l&apos;étiquetage dépendent de chaque produit, de son procédé de
              fabrication et de la réglementation applicable à sa catégorie.
              Elles ne remplacent pas une étude de faisabilité ni une validation
              réglementaire propre à votre gamme.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
