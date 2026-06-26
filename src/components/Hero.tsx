"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WordReveal } from "./motion-primitives";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Image parallax */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero-portrait.webp"
          alt="Aymeric Pataud, chef et expert du goût"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] opacity-90"
        />
        {/* Fondu de l'image vers le crème : texte lisible à gauche */}
        <div className="absolute inset-0 bg-gradient-to-r from-charbon via-charbon/85 to-charbon/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charbon via-transparent to-charbon/30" />
      </motion.div>

      {/* Halos verts en dégradé */}
      <span className="halo left-[-10%] top-[8%] h-[42vw] w-[42vw] max-h-[560px] max-w-[560px]" />
      <span className="halo halo-soft right-[6%] bottom-[2%] h-[34vw] w-[34vw] max-h-[440px] max-w-[440px]" />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="kicker"
        >
          Chef consultant · Expert du goût
        </motion.span>

        <h1 className="font-display mt-6 max-w-4xl text-5xl text-ivoire sm:text-6xl lg:text-8xl">
          <WordReveal text="Sublimez le goût." delay={0.3} immediate />
          <br />
          <span className="text-or">
            <WordReveal text="Signez la différence." delay={0.55} immediate />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-ivoire-dim sm:text-xl"
        >
          Je transforme vos idées en recettes abouties. Je révèle leur vrai
          potentiel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#essentiel"
            className="group relative overflow-hidden rounded-full bg-or px-7 py-3.5 text-sm font-semibold text-charbon transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">Découvrir mon expertise</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ivoire/25 px-7 py-3.5 text-sm font-medium text-ivoire transition-colors duration-300 hover:border-or hover:text-or"
          >
            Parler de votre projet
          </a>
        </motion.div>
      </motion.div>

      {/* Indicateur scroll */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-ivoire-dim">
          Défiler
        </span>
        <span className="h-12 w-px overflow-hidden bg-line">
          <motion.span
            className="block h-1/2 w-full bg-or"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
