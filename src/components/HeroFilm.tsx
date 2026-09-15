"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type PointerEvent,
} from "react";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * Film signature Poire et Cactus, affiché en entier dans le hero.
 *
 * Le 9:16 est conservé tel quel, sans recadrage. Les commandes sont dans
 * l'image et n'apparaissent qu'au survol, ou quand la vidéo est en pause.
 * Sur écran tactile, un appui sur le film les affiche trois secondes.
 * Lecture automatique en boucle, son coupé au départ : les navigateurs
 * bloquent l'autoplay sonore. Pas de lecture automatique si le visiteur a
 * demandé à réduire les animations.
 */
export default function HeroFilm({
  src,
  poster,
  credit,
}: {
  src: string;
  poster: string;
  credit: { studio: string; handle: string; href: string };
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const revealTimer = useRef<number | undefined>(undefined);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [touchReveal, setTouchReveal] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const sync = () => {
      setPlaying(!video.paused);
      setMuted(video.muted || video.volume === 0);
      setVolume(video.volume);
      setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    };
    const onTime = () => setTime(video.currentTime);
    const events = ["play", "pause", "volumechange", "loadedmetadata", "durationchange"];

    events.forEach((e) => video.addEventListener(e, sync));
    video.addEventListener("timeupdate", onTime);
    sync();

    video.muted = true;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.play().catch(() => {});
    }

    return () => {
      events.forEach((e) => video.removeEventListener(e, sync));
      video.removeEventListener("timeupdate", onTime);
      window.clearTimeout(revealTimer.current);
    };
  }, []);

  const reveal = () => {
    setTouchReveal(true);
    window.clearTimeout(revealTimer.current);
    revealTimer.current = window.setTimeout(() => setTouchReveal(false), 3000);
  };

  const togglePlay = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  // Souris : un clic sur le film met en pause ou relance.
  // Tactile : un appui affiche d'abord les commandes.
  const onVideoPointerUp = (e: PointerEvent<HTMLVideoElement>) => {
    if (e.pointerType === "mouse") togglePlay();
    else reveal();
  };

  const toggleMute = () => {
    const video = ref.current;
    if (!video) return;
    if (video.muted || video.volume === 0) {
      video.muted = false;
      if (video.volume === 0) video.volume = 1;
    } else {
      video.muted = true;
    }
  };

  const onVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const video = ref.current;
    if (!video) return;
    const value = Number(e.target.value);
    video.volume = value;
    video.muted = value === 0;
  };

  const onSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const video = ref.current;
    if (!video) return;
    video.currentTime = Number(e.target.value);
    setTime(video.currentTime);
  };

  const shown = !playing || touchReveal;
  const iconButton =
    "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-300";

  return (
    <figure className="mx-auto w-full max-w-[24rem] lg:min-w-[19rem] lg:max-w-[min(100%,calc((100svh_-_13rem)*0.5625))]">
      <div className="group relative aspect-[9/16] overflow-hidden rounded-3xl border border-line bg-vert-fonce shadow-[0_50px_100px_-60px_rgba(22,26,24,0.6)]">
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full cursor-pointer object-contain"
          poster={poster}
          loop
          muted
          playsInline
          preload="auto"
          onPointerUp={onVideoPointerUp}
          aria-label="Film de présentation d'Aymeric Pataud, expert du goût"
        >
          <source src={src} type="video/mp4" />
        </video>

        <div
          onPointerDown={(e) => {
            if (e.pointerType !== "mouse") reveal();
          }}
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-encre/80 via-encre/40 to-transparent px-4 pb-4 pt-16 transition-opacity duration-300 ${
            shown
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
          }`}
        >
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(time, duration || 0)}
            onChange={onSeek}
            aria-label="Avancer ou reculer dans la vidéo"
            aria-valuetext={`${formatTime(time)} sur ${formatTime(duration)}`}
            className="block h-1.5 w-full cursor-pointer accent-sauge"
          />

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Mettre en pause" : "Lire la vidéo"}
              className={`${iconButton} bg-creme text-vert-fonce hover:bg-sauge-pale`}
            >
              {playing ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 h-4 w-4 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <span className="text-xs tabular-nums text-creme/85">
              {formatTime(time)} / {formatTime(duration)}
            </span>

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Activer le son" : "Couper le son"}
                title={muted ? "Activer le son" : "Couper le son"}
                className={`${iconButton} border text-creme ${
                  muted
                    ? "border-creme bg-creme/20 hover:bg-creme/30"
                    : "border-creme/40 hover:border-creme"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 fill-none stroke-current"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 5 6 9H3v6h3l5 4z" className="fill-current" />
                  {muted ? (
                    <path d="m16 9 5 6m0-6-5 6" />
                  ) : (
                    <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
                  )}
                </svg>
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={muted ? 0 : volume}
                onChange={onVolume}
                aria-label="Volume"
                className="h-1.5 w-16 cursor-pointer accent-sauge sm:w-20"
              />
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs text-encre-soft">
        Film : {credit.studio} /{" "}
        <a
          href={credit.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-vert"
        >
          {credit.handle}
        </a>
      </figcaption>
    </figure>
  );
}
