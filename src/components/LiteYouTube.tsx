"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Façade YouTube légère : seule la miniature est chargée au rendu.
 * L'iframe n'arrive qu'au clic, ce qui évite ~600 ko de JS tiers au chargement.
 */
export default function LiteYouTube({
  id,
  title,
  thumb,
  className = "",
}: {
  id: string;
  title: string;
  thumb: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`group relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-vert-fonce shadow-[0_40px_90px_-45px_rgba(22,26,24,0.55)] ${className}`}
    >
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
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-encre/70 via-encre/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-creme/40 bg-encre/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-creme group-hover:bg-creme">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="ml-1 h-7 w-7 fill-creme transition-colors duration-500 group-hover:fill-vert-fonce"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
