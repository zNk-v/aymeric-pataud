"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Section, Arrow } from "./ui";
import { REFERENCES, type Reference } from "@/content/references";
import { asset } from "@/lib/asset";

/**
 * Retour client : la liste de 14 cas empilés verticalement était illisible.
 * Un acheteur de l'agro balaie, il ne lit pas trois paragraphes par client.
 *
 * Nouvelle logique : une grille compacte que l'on filtre par profil, et le
 * détail (défi / intervention / résultat) qui se déplie à la demande.
 * Les ancres /references/#slug utilisées par les autres pages continuent de
 * fonctionner : le cas visé s'ouvre et défile jusqu'à lui.
 */

const FILTERS = [
  { key: "all", label: "Toutes" },
  { key: "industriel", label: "Industriels" },
  { key: "chef", label: "Chefs & traiteurs" },
  { key: "artisan", label: "Artisans & producteurs" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

function count(key: FilterKey) {
  return key === "all"
    ? REFERENCES.length
    : REFERENCES.filter((r) => r.audience.includes(key)).length;
}

function Detail({ r }: { r: Reference }) {
  return (
    <div className="grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
      {[
        { t: "Le défi", d: r.challenge },
        { t: "Mon intervention", d: r.work },
        { t: "Le résultat", d: r.result },
      ].map((b) => (
        <div key={b.t}>
          <p className="kicker">{b.t}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-encre-soft">{b.d}</p>
        </div>
      ))}
      {r.website ? (
        <p className="sm:col-span-3">
          <a
            href={r.website}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-vert"
          >
            Voir leur site
            <Arrow />
          </a>
        </p>
      ) : null}
    </div>
  );
}

function Card({
  r,
  open,
  onToggle,
}: {
  r: Reference;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      id={r.slug}
      className={`card scroll-mt-32 overflow-hidden rounded-3xl transition-colors duration-300 ${
        open ? "border-vert/40" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`detail-${r.slug}`}
        className="flex w-full items-start gap-5 p-6 text-left lg:p-7"
      >
        {r.logo ? (
          <span className="flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-creme p-2">
            <Image
              src={asset(r.logo)}
              alt=""
              width={80}
              height={56}
              className="h-full w-auto max-w-full object-contain"
            />
          </span>
        ) : null}

        <span className="min-w-0 flex-1">
          <span className="font-display block text-xl leading-tight">
            {r.name}
          </span>
          <span className="mt-1 block text-sm text-encre-soft">{r.sector}</span>
          {r.pullQuote ? (
            <span className="font-display mt-3 block text-base leading-snug text-vert">
              « {r.pullQuote} »
            </span>
          ) : null}
        </span>

        <span
          aria-hidden="true"
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-transform duration-300 ${
            open ? "rotate-45 border-vert text-vert" : "text-encre-soft"
          }`}
        >
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* Dépliage en CSS pur (grid-template-rows 0fr -> 1fr).
          Deux raisons de ne pas passer par une animation JS ici :
          le contenu des 14 cas reste dans le HTML, donc lisible par Google,
          et si la transition ne joue pas, le bloc s'affiche quand même à sa
          hauteur naturelle au lieu de rester invisible. */}
      <div
        id={`detail-${r.slug}`}
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        className="grid transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <div
          className={`overflow-hidden transition-[visibility] duration-[350ms] ${
            open ? "visible" : "invisible"
          }`}
        >
          <div className="px-6 pb-7 lg:px-7">
            <Detail r={r} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReferenceExplorer() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [open, setOpen] = useState<string | null>(null);

  // Ancre entrante (/references/#mealk depuis une page profil) : on remet le
  // filtre à zéro pour que la carte soit dans la liste, on l'ouvre, on y va.
  // Le listener couvre aussi les changements de hash sans rechargement.
  useEffect(() => {
    const goToHash = () => {
      const slug = window.location.hash.replace("#", "");
      if (!slug || !REFERENCES.some((r) => r.slug === slug)) return;
      setFilter("all");
      setOpen(slug);
      window.requestAnimationFrame(() => {
        document.getElementById(slug)?.scrollIntoView({ block: "center" });
      });
    };
    goToHash();
    window.addEventListener("hashchange", goToHash);
    return () => window.removeEventListener("hashchange", goToHash);
  }, []);

  const list =
    filter === "all"
      ? REFERENCES
      : REFERENCES.filter((r) => r.audience.includes(filter));

  return (
    <Section id="collaborations">
      <Container>
        {/* Filtres */}
        <div
          role="group"
          aria-label="Filtrer les collaborations par profil"
          className="flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={active}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  active
                    ? "border-vert bg-vert text-creme"
                    : "border-line text-encre-soft hover:border-vert hover:text-vert"
                }`}
              >
                {f.label}
                <span className={active ? "opacity-70" : "opacity-50"}>
                  {" "}
                  {count(f.key)}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-5 text-sm text-encre-soft">
          Cliquez sur une collaboration pour lire le détail.
        </p>

        {/* Grille */}
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
          {list.map((r) => (
            <Card
              key={r.slug}
              r={r}
              open={open === r.slug}
              onToggle={() => setOpen(open === r.slug ? null : r.slug)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
