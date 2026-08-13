import Link from "next/link";
import type { ReactNode } from "react";

/* ----------------------------------------------------------- Container --- */
export function Container({
  children,
  className = "",
  size = "wide",
}: {
  children: ReactNode;
  className?: string;
  size?: "wide" | "prose" | "narrow";
}) {
  const max =
    size === "prose" ? "max-w-3xl" : size === "narrow" ? "max-w-5xl" : "max-w-7xl";
  return (
    <div className={`mx-auto w-full ${max} px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------- Section --- */
export function Section({
  children,
  id,
  className = "",
  tone = "creme",
  size = "md",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "creme" | "deep" | "surface" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const tones = {
    creme: "",
    deep: "bg-creme-deep",
    surface: "bg-surface",
    dark: "bg-vert-fonce text-creme",
  } as const;
  const sizes = {
    sm: "py-16 lg:py-24",
    md: "py-24 lg:py-32",
    lg: "py-28 lg:py-44",
  } as const;
  return (
    <section
      id={id}
      className={`relative ${tones[tone]} ${sizes[size]} ${className}`}
    >
      {children}
    </section>
  );
}

/* -------------------------------------------------------------- Kicker --- */
export function Kicker({ children }: { children: ReactNode }) {
  return <span className="kicker block">{children}</span>;
}

/* ------------------------------------------------------------- Buttons --- */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300";
  const variants = {
    solid: "bg-vert text-creme hover:bg-vert-clair hover:scale-[1.02]",
    outline:
      "border border-encre/20 text-encre hover:border-vert hover:text-vert",
    ghost: "text-vert hover:text-vert-clair",
  } as const;
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------- Section header --- */
export function SectionHeader({
  kicker,
  title,
  lede,
  align = "left",
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2
        className={`font-display text-balance text-4xl lg:text-6xl ${kicker ? "mt-5" : ""}`}
      >
        {title}
      </h2>
      {lede ? <p className="lede mt-6">{lede}</p> : null}
    </div>
  );
}

/* --------------------------------------------------------------- Arrow --- */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
    >
      <path
        d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ----------------------------------------------------------- Text link --- */
export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const cls =
    "link-underline inline-flex items-center gap-2 text-sm font-semibold text-vert transition-colors hover:text-vert-clair";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <Arrow />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <Arrow />
    </Link>
  );
}

/* ------------------------------------------------------------ Fil rouge --- */
/** Liste de points avec puce sauge. */
export function BulletList({
  items,
  className = "",
}: {
  items: ReactNode[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="relative flex gap-3 text-encre-soft">
          <span
            aria-hidden="true"
            className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-sauge"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------- Emplacement à venir --- */
/**
 * Bloc réservé pour un contenu que le client doit encore fournir.
 * Volontairement visible : rien ne doit être inventé à la place.
 * Recensé dans docs/A-VALIDER.md.
 */
export function Placeholder({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-dashed border-sauge bg-sauge-pale/25 p-7 ${className}`}
    >
      <p className="kicker">Emplacement réservé</p>
      <p className="font-display mt-3 text-2xl">{title}</p>
      <p className="mt-2 text-sm text-encre-soft">{children}</p>
    </div>
  );
}
