import type { Metadata } from "next";
import { Container, Kicker, Section } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { LogoWall } from "@/components/blocks";
import { SITE, WORKSHOPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Décrivez votre produit et la contrainte que vous cherchez à lever. Trente minutes suffisent pour poser un diagnostic clair et orienté goût.",
  alternates: { canonical: "/contact/" },
};

const ETAPES = [
  {
    title: "Vous décrivez",
    text: "Le produit, le blocage, l'échéance. Plus c'est précis, plus la réponse l'est.",
  },
  {
    title: "Je réponds sous 48 h",
    text: "Jours ouvrés. Soit je vois immédiatement une piste, soit je vous dis que ce n'est pas pour moi.",
  },
  {
    title: "Trente minutes",
    text: "Un échange pour goûter le sujet et poser un avis extérieur, clair et objectif.",
  },
];

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-8 lg:pt-48 lg:pb-12">
        <span className="halo left-1/2 top-0 h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] -translate-x-1/2" />
        <Container className="text-center">
          <Kicker>Contact</Kicker>
          <h1 className="font-display display-xl mx-auto mt-6 max-w-3xl text-balance text-5xl sm:text-6xl lg:text-7xl">
            Le goût commence toujours par une rencontre.
          </h1>
          <p className="lede mx-auto mt-8 max-w-2xl">
            Décrivez le produit et ce qui bloque. Je vous dis en trente minutes
            ce que j&apos;entends en bouche et si je peux vous être utile.
          </p>
        </Container>
      </section>

      <Section size="sm">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Formulaire */}
            <div className="lg:col-span-7">
              <div className="card rounded-3xl p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>

            {/* Coordonnées */}
            <div className="lg:col-span-5">
              <div className="space-y-10">
                <div>
                  <Kicker>Direct</Kicker>
                  <div className="mt-5 space-y-4">
                    <a
                      href={`tel:${SITE.phoneHref}`}
                      className="font-display block text-3xl text-vert transition-colors hover:text-vert-clair"
                    >
                      {SITE.phone}
                    </a>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="link-underline block text-lg text-encre transition-colors hover:text-vert"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                {/* La double implantation remonte ici : c'est la première
                    page que consulte quelqu'un qui veut savoir où on est. */}
                <div>
                  <Kicker>Où je travaille</Kicker>
                  <p className="font-display mt-5 text-2xl">
                    {SITE.footprint}
                  </p>
                  <div className="mt-6 space-y-6">
                    {WORKSHOPS.map((w) => (
                      <div key={w.city}>
                        <p className="font-medium">
                          {w.city}
                          <span className="ml-2 text-sm font-normal text-encre-soft">
                            {w.region}
                          </span>
                        </p>
                        <p className="mt-1 text-sm text-vert">{w.role}</p>
                        {w.lead ? (
                          <address className="mt-2 not-italic text-sm text-encre-soft">
                            {SITE.address.street}
                            <br />
                            {SITE.address.postalCode} {SITE.address.city}
                          </address>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Kicker>Suivre l&apos;actualité</Kicker>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {[
                      { label: "LinkedIn", href: SITE.social.linkedin },
                      { label: "Instagram", href: SITE.social.instagram },
                      { label: "Facebook", href: SITE.social.facebook },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-vert hover:text-vert"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t border-line pt-8">
                  <Kicker>Comment ça se passe</Kicker>
                  <ol className="mt-6 space-y-6">
                    {ETAPES.map((e, i) => (
                      <li key={e.title} className="flex gap-5">
                        <span className="font-display shrink-0 text-sm text-vert/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="font-display block text-xl">
                            {e.title}
                          </span>
                          <span className="mt-1 block text-sm text-encre-soft">
                            {e.text}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <LogoWall tone="deep" />
    </>
  );
}
