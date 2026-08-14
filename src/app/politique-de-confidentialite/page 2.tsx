import type { Metadata } from "next";
import { Container, Kicker, Section } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données sont collectées sur ce site, pourquoi, combien de temps elles sont conservées et comment exercer vos droits.",
  alternates: { canonical: "/politique-de-confidentialite/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <section className="pt-36 pb-8 lg:pt-48 lg:pb-12">
        <Container size="prose">
          <Kicker>Vos données</Kicker>
          <h1 className="font-display mt-6 text-balance text-5xl lg:text-6xl">
            Politique de confidentialité
          </h1>
        </Container>
      </section>

      <Section size="sm">
        <Container size="prose">
          <div className="prose">
            <h2>Responsable du traitement</h2>
            <p>
              {SITE.legal.company} ({SITE.legal.form}), {SITE.address.street},{" "}
              {SITE.address.postalCode} {SITE.address.city}. Contact :{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>

            <h2>Données collectées</h2>
            <p>
              Ce site est un site statique. Il ne crée aucun compte, ne suit
              aucun parcours de navigation et ne dépose aucun cookie de mesure
              d&apos;audience.
            </p>
            <p>
              Les seules données collectées sont celles que vous saisissez
              volontairement dans le formulaire de contact : nom, société,
              profil professionnel, adresse e-mail, téléphone et contenu de
              votre message.
            </p>

            <h2>Finalité et base légale</h2>
            <p>
              Ces données servent uniquement à traiter votre demande et à vous
              répondre. La base légale est votre consentement, matérialisé par
              l&apos;envoi du formulaire, ainsi que l&apos;exécution de mesures
              précontractuelles prises à votre demande.
            </p>

            <h2>Destinataires</h2>
            <p>
              Les messages sont reçus par {SITE.legal.publisher} uniquement.
              Aucune donnée n&apos;est vendue, louée ni transmise à des fins
              commerciales à des tiers.
            </p>

            <h2>Durée de conservation</h2>
            <p>
              Les échanges sont conservés pendant la durée nécessaire au
              traitement de la demande, puis trois ans à compter du dernier
              contact, conformément aux recommandations de la CNIL en matière de
              prospection.
            </p>

            <h2>Vos droits</h2>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, d&apos;opposition et de
              portabilité sur les données qui vous concernent. Pour l&apos;exercer,
              écrivez à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL
              (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                cnil.fr
              </a>
              ).
            </p>

            <h2>Cookies et services tiers</h2>
            <p>
              Aucun cookie n&apos;est déposé à l&apos;arrivée sur le site. Les
              polices de caractères sont servies depuis le site lui-même, sans
              appel à un domaine tiers.
            </p>
            <p>
              Les vidéos sont intégrées via youtube-nocookie.com et ne se
              chargent qu&apos;après un clic de votre part. Tant que vous ne
              lancez pas la lecture, aucune requête n&apos;est envoyée à YouTube
              et aucun cookie tiers n&apos;est déposé.
            </p>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par {SITE.legal.host}. Des journaux de
              connexion techniques peuvent être conservés par l&apos;hébergeur
              conformément à ses obligations légales.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
