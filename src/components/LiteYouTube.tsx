"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Façade YouTube légère (type lite-youtube) : on n'affiche que la miniature.
 * L'iframe ne se charge qu'au clic → préserve le Lighthouse.
 */
export default function LiteYouTube({
  id,
  title,
  thumb,
}: {
  id: string;
  title: string;
  thumb: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-line shadow-[0_30px_70px_-32px_rgba(29,26,20,0.45)] transition-shadow duration-500 hover:shadow-[0_0_70px_-12px_rgba(169,203,164,0.65)]">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Lire la vidéo : ${title}`}
        >
          <Image
            src={thumb}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-charbon/70 via-transparent to-charbon/20" />
          {/* Bouton play doré custom */}
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-or/50 bg-charbon/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-or">
            <span className="absolute inset-0 rounded-full bg-or/20 animate-ping [animation-duration:2.5s] group-hover:hidden" />
            <svg
              viewBox="0 0 24 24"
              className="ml-1 h-8 w-8 fill-or transition-colors duration-500 group-hover:fill-charbon"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
