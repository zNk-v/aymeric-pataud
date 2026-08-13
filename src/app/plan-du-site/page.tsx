import type { Metadata } from "next";
import Link from "next/link";
import { Container, Kicker, Section } from "@/components/ui";
import { FOOTER_LINKS, LEGAL_LINKS } from "@/lib/site";
import { ARTICLES } from "@/content/articles";

export const metadata: Metadata = {
  title: "Plan du site",
  description: "Toutes les pages et tous les articles du site, en une liste.",
  alternates: { canonical: "/plan-du-site/" },
};

export default function Page() {
  return (
    <>
      <section className="pt-36 pb-8 lg:pt-48 lg:pb-12">
        <Container size="prose">
          <Kicker>Navigation</Kicker>
          <h1 className="font-display mt-6 text-5xl lg:text-6xl">
            Plan du site
          </h1>
        </Container>
      </section>

      <Section size="sm">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="kicker">Accueil</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <Link href="/" className="text-encre-soft hover:text-vert">
                    Page d&apos;accueil
                  </Link>
                </li>
              </ul>
            </div>

            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <p className="kicker">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-encre-soft transition-colors hover:text-vert"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-line pt-12">
            <p className="kicker">Articles</p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {ARTICLES.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/${a.slug}/`}
                    className="text-encre-soft transition-colors hover:text-vert"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 border-t border-line pt-12">
            <p className="kicker">Informations légales</p>
            <ul className="mt-6 space-y-3">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-encre-soft transition-colors hover:text-vert"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
