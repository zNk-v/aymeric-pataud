"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SITE } from "@/lib/site";
import { asset } from "@/lib/asset";
import { Arrow } from "@/components/ui";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer les menus à chaque navigation
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Verrouiller le scroll derrière le menu mobile
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenGroup(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href?: string) =>
    href && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen || openGroup
          ? "border-b border-line bg-creme/90 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:h-24 lg:px-10">
        <Link
          href="/"
          className="shrink-0"
          aria-label={`${SITE.name}, ${SITE.role}, retour à l'accueil`}
        >
          <Image
            src={asset("/images/logo-aymeric.png")}
            alt=""
            width={190}
            height={41}
            priority
            className="h-8 w-auto lg:h-9"
          />
        </Link>

        {/* Navigation desktop */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigation principale"
        >
          {NAV.map((group) => {
            const hasMenu = group.links.length > 0;
            const active =
              isActive(group.href) ||
              group.links.some((l) => isActive(l.href));

            if (!hasMenu) {
              return (
                <Link
                  key={group.label}
                  href={group.href!}
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenGroup(null);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-vert" : "text-encre hover:text-vert"
                  }`}
                >
                  {group.label}
                </Link>
              );
            }

            return (
              <div
                key={group.label}
                onMouseEnter={() => {
                  cancelClose();
                  setOpenGroup(group.label);
                }}
              >
                <button
                  type="button"
                  aria-expanded={openGroup === group.label}
                  onClick={() =>
                    setOpenGroup(openGroup === group.label ? null : group.label)
                  }
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active || openGroup === group.label
                      ? "text-vert"
                      : "text-encre hover:text-vert"
                  }`}
                >
                  {group.label}
                  <svg
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 transition-transform duration-300 ${
                      openGroup === group.label ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden rounded-full bg-vert px-6 py-3 text-sm font-semibold text-creme transition-all duration-300 hover:bg-vert-clair hover:scale-[1.02] lg:inline-flex"
          >
            Parler de votre projet
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-encre transition-all duration-300 ${
                  mobileOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-encre transition-all duration-300 ${
                  mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Méga-menu desktop */}
      <AnimatePresence>
        {openGroup ? (
          <motion.div
            key={openGroup}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            onMouseEnter={cancelClose}
            className="hidden border-t border-line-soft lg:block"
          >
            <div className="mx-auto max-w-7xl px-10 py-8">
              <div className="grid grid-cols-3 gap-3">
                {NAV.find((g) => g.label === openGroup)?.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-2xl border border-transparent p-5 transition-colors hover:border-line hover:bg-surface"
                  >
                    <span className="font-display flex items-center gap-2 text-xl">
                      {link.label}
                      <Arrow className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </span>
                    {link.description ? (
                      <span className="mt-2 block text-sm text-encre-soft">
                        {link.description}
                      </span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-creme lg:hidden"
          >
            <nav className="px-6 py-8" aria-label="Navigation mobile">
              {NAV.map((group) =>
                group.links.length === 0 ? (
                  <Link
                    key={group.label}
                    href={group.href!}
                    className="font-display block border-b border-line py-5 text-3xl"
                  >
                    {group.label}
                  </Link>
                ) : (
                  <div key={group.label} className="border-b border-line py-5">
                    <p className="font-display text-3xl">{group.label}</p>
                    <div className="mt-4 space-y-1 pl-1">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-2 py-2 text-encre-soft"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 rounded-full bg-sauge"
                          />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}

              <Link
                href="/contact/"
                className="mt-8 flex items-center justify-center rounded-full bg-vert px-7 py-4 text-base font-semibold text-creme"
              >
                Parler de votre projet
              </Link>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="mt-4 flex items-center justify-center gap-2 py-2 text-encre-soft"
              >
                {SITE.phone}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
