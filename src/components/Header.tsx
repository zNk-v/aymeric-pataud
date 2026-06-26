"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { href: "#manifeste", label: "Manifeste" },
  { href: "#essentiel", label: "L'essentiel" },
  { href: "#approche", label: "Approche" },
  { href: "#huiles", label: "Huiles essentielles" },
  { href: "#preuve", label: "Ils en parlent" },
  { href: "#pour-qui", label: "Pour qui" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-charbon/70 border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" aria-label="Aymeric Pataud — accueil" className="relative z-50">
          <Image
            src="/images/logo-header.png"
            alt="Aymeric Pataud, expert du goût"
            width={210}
            height={36}
            priority
            className="h-7 w-auto lg:h-8"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-sm text-ivoire-dim transition-colors hover:text-ivoire"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-or transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-or/40 px-5 py-2.5 text-sm font-medium text-or transition-all duration-300 hover:bg-or hover:text-charbon lg:inline-block"
        >
          Parler de votre projet
        </a>

        {/* Burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-ivoire"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-ivoire"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-ivoire"
          />
        </button>
      </div>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-charbon px-8 lg:hidden"
          >
            {NAV.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.06 }}
                className="font-display text-4xl text-ivoire py-2"
              >
                {n.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + NAV.length * 0.06 }}
              className="mt-8 inline-block w-fit rounded-full bg-or px-6 py-3 text-base font-medium text-charbon"
            >
              Parler de votre projet
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
