import Image from "next/image";
import { asset } from "@/lib/asset";

const NAV = [
  { href: "#manifeste", label: "Manifeste" },
  { href: "#essentiel", label: "L'essentiel" },
  { href: "#approche", label: "Approche" },
  { href: "#huiles", label: "Huiles essentielles" },
  { href: "#preuve", label: "Ils en parlent" },
  { href: "#pour-qui", label: "Pour qui" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: "M13.5 9H16l.5-3h-3V4.2c0-.9.3-1.5 1.6-1.5H16V0.1C15.7 0 14.8 0 13.7 0 11.4 0 9.9 1.4 9.9 4v2H7v3h2.9v8h3.6V9z" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "M10 1.8c2.7 0 3 0 4 .1 1 0 1.5.2 1.9.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.4.3.9.4 1.9.1 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.5-.4 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.1-.9.3-1.9.4-1 .1-1.3.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.9-.4-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.1-.4-.3-.9-.4-1.9-.1-1-.1-1.3-.1-4s0-3 .1-4c0-1 .2-1.5.4-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.1.9-.3 1.9-.4 1-.1 1.3-.1 4-.1M10 0C7.3 0 6.9 0 5.9.1 4.8.1 4.1.3 3.5.5c-.7.3-1.2.6-1.8 1.2C1.1 2.3.8 2.8.5 3.5.3 4.1.1 4.8.1 5.9 0 6.9 0 7.3 0 10s0 3.1.1 4.1c0 1.1.2 1.8.4 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.2 1.3.4 2.4.4 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1.1 0 1.8-.2 2.4-.4.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.2-.6.4-1.3.4-2.4.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c0-1.1-.2-1.8-.4-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.2-1.3-.4-2.4-.4C13.1 0 12.7 0 10 0zm0 4.9A5.1 5.1 0 1 0 10 15a5.1 5.1 0 0 0 0-10.1zm0 8.4A3.3 3.3 0 1 1 10 6.7a3.3 3.3 0 0 1 0 6.6zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "M4.5 3.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM.7 6.9h3.6V20H.7V6.9zM7 6.9h3.4v1.8h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V20h-3.6v-5.8c0-1.4 0-3.2-1.9-3.2s-2.2 1.5-2.2 3.1V20H7V6.9z" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-line py-8">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[0, 1].map((g) => (
            <div key={g} className="flex items-center" aria-hidden={g === 1}>
              {["Sublimez le goût", "Signez la différence", "Le goût d'abord", "Toujours"].map(
                (w) => (
                  <span
                    key={w}
                    className="font-display mx-8 text-3xl text-ivoire/30 lg:text-5xl"
                  >
                    {w}
                    <span className="mx-8 text-or">·</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <Image
              src={asset("/images/logo-header.png")}
              alt="Aymeric Pataud"
              width={220}
              height={38}
              className="h-8 w-auto"
            />
            <p className="mt-5 text-ivoire-dim">
              Chef consultant et expert du goût. Création, reformulation et
              signatures gustatives naturelles.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ivoire-dim transition-colors duration-300 hover:border-or hover:text-or"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3" aria-label="Navigation pied de page">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-ivoire-dim transition-colors hover:text-or"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-ivoire-dim/70 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Aymeric Pataud — Expert du goût. · Site créé par{" "}
            <a
              href="https://sitaly.fr"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-2 transition-colors hover:text-or"
            >
              Sitaly
            </a>
          </p>
          <a href="#" className="transition-colors hover:text-or">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
