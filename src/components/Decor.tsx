"use client";

/**
 * Motifs décoratifs repris du logo : la feuille (avec nervures) et la goutte d'eau.
 * Tracés fins en vert sauge, très faible opacité, posés en arrière-plan
 * entre les sections pour rythmer la page sans surcharger.
 */

export function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
      className={className}
      stroke="currentColor"
      strokeWidth="1"
    >
      {/* Contour de la feuille (forme d'amande pointée) */}
      <path
        d="M50 6 C72 24 80 50 50 94 C20 50 28 24 50 6 Z"
        strokeWidth="1.1"
      />
      {/* Nervure centrale */}
      <path d="M50 12 L50 88" strokeWidth="1.1" />
      {/* Nervures latérales façon arête */}
      <path d="M50 30 L36 26 M50 30 L64 26" />
      <path d="M50 44 L33 40 M50 44 L67 40" />
      <path d="M50 58 L34 56 M50 58 L66 56" />
      <path d="M50 72 L38 72 M50 72 L62 72" />
    </svg>
  );
}

export function DropMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
      className={className}
      stroke="currentColor"
      strokeWidth="1.1"
    >
      {/* Goutte d'eau */}
      <path d="M50 8 C50 8 22 44 22 64 a28 28 0 0 0 56 0 C78 44 50 8 50 8 Z" />
      {/* Reflet interne */}
      <path
        d="M38 60 a12 16 0 0 0 6 18"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  );
}

/**
 * Bloc décoratif positionné en arrière-plan d'une section.
 * `variant` choisit le motif, le reste du style se passe via className.
 */
export function Decor({
  variant = "leaf",
  className = "",
}: {
  variant?: "leaf" | "drop";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-[5] text-sauge-deep ${className}`}
    >
      {variant === "leaf" ? (
        <LeafMark className="h-full w-full" />
      ) : (
        <DropMark className="h-full w-full" />
      )}
    </div>
  );
}
