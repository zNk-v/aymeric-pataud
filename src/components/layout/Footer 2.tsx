import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, LEGAL_LINKS, SITE } from "@/lib/site";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-creme-deep">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Identité */}
          <div className="lg:col-span-4">
            <Image
              src={asset("/images/logo-aymeric.png")}
              alt={`${SITE.name}, ${SITE.role}`}
              width={220}
              height={48}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-xs text-encre-soft">
              Chef de formation et expert du goût. Création, reformulation et
              signatures gustatives pour chefs, artisans et marques
              agroalimentaires.
            </p>

            <div className="mt-8 space-y-2 text-sm">
              <a
                href={`tel:${SITE.phoneHref}`}
                className="block font-semibold text-vert transition-colors hover:text-vert-clair"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="block text-encre-soft transition-colors hover:text-vert"
              >
                {SITE.email}
              </a>
            </div>

            <div className="mt-8 flex gap-3">
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
                  className="rounded-full border border-line px-4 py-2 text-xs font-medium text-encre-soft transition-colors hover:border-vert hover:text-vert"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Plan */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
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
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 text-sm text-encre-soft md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-vert">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <p>
            Site créé par{" "}
            <a
              href="https://sitaly.fr"
              target="_blank"
              rel="noopener"
              className="font-medium text-vert transition-colors hover:text-vert-clair"
            >
              Sitaly
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
