import Link from "next/link";
import { Button, Container, Kicker } from "@/components/ui";
import { FOOTER_LINKS } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 lg:pt-52 lg:pb-40">
      <span className="halo left-1/2 top-0 h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] -translate-x-1/2" />
      <Container className="text-center">
        <Kicker>Erreur 404</Kicker>
        <h1 className="font-display display-xl mx-auto mt-6 max-w-3xl text-balance text-5xl sm:text-6xl lg:text-7xl">
          Cette page n&apos;existe pas, ou plus.
        </h1>
        <p className="lede mx-auto mt-8 max-w-xl">
          Le site a été refondu. Si vous arrivez d&apos;un lien ancien, la page
          que vous cherchez a peut-être changé d&apos;adresse.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/">Retour à l&apos;accueil</Button>
          <Button href="/plan-du-site/" variant="outline">
            Voir le plan du site
          </Button>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl gap-10 border-t border-line pt-12 text-left sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <p className="kicker">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-encre-soft transition-colors hover:text-vert"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
