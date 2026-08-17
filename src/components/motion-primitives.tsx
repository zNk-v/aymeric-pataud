"use client";

import {
  motion,
  useInView,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Toutes les animations d'apparition partent d'une opacité nulle, écrite en
 * style inline dans le HTML statique. Sans JavaScript, la page resterait donc
 * vide. Cette classe sert de prise pour la règle de repli déclarée dans
 * <noscript> (voir app/layout.tsx), qui remet tout à l'état visible.
 */
const REVEAL = "js-reveal";
const cx = (...c: (string | undefined)[]) => c.filter(Boolean).join(" ");

/* ---------------------------------------------------------------- Reveal --- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag
      ref={ref}
      className={cx(REVEAL, className)}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/* ------------------------------------------------------- Stagger group ----- */
export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap } },
  };
  return (
    <motion.div
      ref={ref}
      className={cx(REVEAL, className)}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
  ...rest
}: { children: ReactNode } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={staggerItem}
      className={cx(REVEAL, className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------- Word-by-word text reveal -- */
export function WordReveal({
  text,
  className,
  delay = 0,
  immediate = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Anime au montage (contenu above-the-fold) au lieu d'attendre le scroll. */
  immediate?: boolean;
}) {
  const ref = useRef(null);
  const inViewRaw = useInView(ref, { once: true, margin: "-10% 0px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const inView = immediate ? mounted : inViewRaw;
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            className={REVEAL}
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : undefined}
            transition={{
              duration: 0.7,
              ease: EASE,
              delay: delay + i * 0.04,
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ----------------------------------------------- Spotlight hover wrapper --- */
export function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className={`spotlight ${className}`} onMouseMove={onMove}>
      {children}
    </div>
  );
}
