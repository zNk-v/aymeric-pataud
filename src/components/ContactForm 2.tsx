"use client";

import { useState } from "react";
import { PROFILES } from "@/content/profiles";
import { SITE } from "@/lib/site";

/**
 * Formulaire de contact compatible hébergement statique.
 *
 * Deux modes, un seul interrupteur : ENDPOINT.
 *  - null            → ouvre le client mail du visiteur avec un message prérempli.
 *                      Fonctionne dès aujourd'hui, sans compte ni abonnement.
 *  - "https://…"     → POST direct vers un service tiers (Formspree, Web3Forms,
 *                      Formsubmit…). Le reste du composant ne change pas.
 *
 * WordPress gérait l'envoi nativement via Gravity Forms. Ce n'est plus
 * possible sur un site statique. Voir docs/A-VALIDER.md.
 */
const ENDPOINT: string | null = null;

type Status = "idle" | "sending" | "sent" | "error";

const SUBJECTS = [
  "Création ou reformulation d'une recette",
  "Huiles essentielles culinaires",
  "Huiles hydrosolubles (fromages, boissons)",
  "Création sur-mesure à l'atelier",
  "Consulting, formation, démonstration",
  "Autre",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Pot de miel : rempli uniquement par un robot.
    if (data.get("website")) return;

    if (!ENDPOINT) {
      const lines = [
        `Nom : ${data.get("name")}`,
        `Société : ${data.get("company") || "—"}`,
        `Profil : ${data.get("profile")}`,
        `Téléphone : ${data.get("phone") || "—"}`,
        `E-mail : ${data.get("email")}`,
        `Sujet : ${data.get("subject")}`,
        "",
        String(data.get("message") ?? ""),
      ];
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        `Demande site — ${data.get("subject")}`
      )}&body=${encodeURIComponent(lines.join("\n"))}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-encre transition-colors placeholder:text-encre-soft/60 focus:border-vert focus:outline-none";
  const label = "mb-2 block text-sm font-medium text-encre";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Pot de miel anti-spam, masqué aux lecteurs d'écran */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Nom et prénom <span className="text-vert">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            Société
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="profile" className={label}>
          Vous êtes <span className="text-vert">*</span>
        </label>
        <select id="profile" name="profile" required defaultValue="" className={field}>
          <option value="" disabled>
            Choisir…
          </option>
          {PROFILES.map((p) => (
            <option key={p.slug} value={p.label}>
              {p.label}
            </option>
          ))}
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>
            E-mail <span className="text-vert">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Téléphone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={label}>
          Votre demande <span className="text-vert">*</span>
        </label>
        <select id="subject" name="subject" required defaultValue="" className={field}>
          <option value="" disabled>
            Choisir…
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Votre projet <span className="text-vert">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Le produit, le problème rencontré, l'échéance."
          className={`${field} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-vert px-8 py-4 text-sm font-semibold text-creme transition-all duration-300 hover:bg-vert-clair hover:scale-[1.02] disabled:opacity-60"
        >
          {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" ? (
            <span className="text-vert">
              {ENDPOINT
                ? "Message envoyé. Réponse sous 48 h ouvrées."
                : "Votre logiciel de messagerie s'ouvre avec le message prérempli."}
            </span>
          ) : null}
          {status === "error" ? (
            <span className="text-encre-soft">
              L&apos;envoi a échoué. Écrivez directement à{" "}
              <a href={`mailto:${SITE.email}`} className="text-vert underline">
                {SITE.email}
              </a>
              .
            </span>
          ) : null}
        </p>
      </div>

      <p className="pt-2 text-xs text-encre-soft">
        Les informations transmises servent uniquement à répondre à votre
        demande. Voir la{" "}
        <a href="/politique-de-confidentialite/" className="underline">
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
}
