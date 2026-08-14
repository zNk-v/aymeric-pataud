"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal, Stagger, StaggerItem, Spotlight } from "./motion-primitives";
import { Container, Kicker, Section, SectionHeader } from "./ui";
import { asset } from "@/lib/asset";

/* ====================================================== Bloc en deux ===== */
export function SplitBlock({
  kicker,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  tone = "creme",
  ratio = "4/5",
  id,
}: {
  kicker?: string;
  title: string;
  children: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tone?: "creme" | "deep" | "surface";
  ratio?: "4/5" | "5/4" | "1/1";
  id?: string;
}) {
  const aspect =
    ratio === "5/4" ? "aspect-[5/4]" : ratio === "1/1" ? "aspect-square" : "aspect-[4/5]";
  return (
    <Section tone={tone} id={id}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div
            className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}
          >
            <Reveal>
              <div
                className={`relative ${aspect} overflow-hidden rounded-3xl border border-line`}
              >
                <Image
                  src={asset(image)}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
            <Reveal delay={0.1}>
              {kicker ? <Kicker>{kicker}</Kicker> : null}
              <h2
                className={`font-display text-balance text-3xl leading-[1.1] lg:text-5xl ${kicker ? "mt-5" : ""}`}
              >
                {title}
              </h2>
              <div className="mt-7 space-y-5 text-lg text-encre-soft">
                {children}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ============================================================= Étapes ==== */
export function Steps({
  kicker,
  title,
  lede,
  steps,
  tone = "creme",
}: {
  kicker?: string;
  title: string;
  lede?: string;
  steps: { title: string; text: string }[];
  tone?: "creme" | "deep" | "surface";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} />
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.title} className="h-full">
              <div className="flex h-full flex-col bg-surface p-8">
                <span className="font-display text-sm text-vert/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-encre-soft">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

/* ======================================================= Grille cartes === */
export function FeatureGrid({
  kicker,
  title,
  lede,
  items,
  columns = 3,
  tone = "creme",
  align = "left",
}: {
  kicker?: string;
  title: string;
  lede?: string;
  items: { title: string; text: string }[];
  columns?: 2 | 3;
  tone?: "creme" | "deep" | "surface";
  align?: "left" | "center";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <SectionHeader kicker={kicker} title={title} lede={lede} align={align} />
        <Stagger
          className={`mt-14 grid gap-4 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
        >
          {items.map((it) => (
            <StaggerItem key={it.title} className="h-full">
              <Spotlight className="card h-full rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1">
                <h3 className="font-display text-2xl">{it.title}</h3>
                <p className="mt-4 text-encre-soft">{it.text}</p>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

/* ====================================================== Bandeau phrase === */
export function QuoteBanner({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <Section tone="dark" size="sm">
      <Container size="narrow" className="text-center">
        <Reveal>
          <p className="font-display text-balance text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
            {children}
          </p>
          {attribution ? (
            <p className="mt-8 text-sm uppercase tracking-[0.24em] text-sauge">
              {attribution}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </Section>
  );
}

/* ==================================================== Liste en colonnes == */
export function ListBlock({
  kicker,
  title,
  intro,
  items,
  tone = "creme",
}: {
  kicker?: string;
  title: string;
  intro?: string;
  items: string[];
  tone?: "creme" | "deep" | "surface";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              {kicker ? <Kicker>{kicker}</Kicker> : null}
              <h2 className="font-display mt-5 text-balance text-3xl leading-[1.1] lg:text-5xl">
                {title}
              </h2>
              {intro ? <p className="lede mt-6">{intro}</p> : null}
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="space-y-px" gap={0.07}>
              {items.map((item, i) => (
                <StaggerItem key={item}>
                  <div className="group flex items-baseline gap-6 border-b border-line py-5 transition-colors duration-300 hover:border-vert/40">
                    <span className="font-display shrink-0 text-sm text-vert/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl transition-colors duration-300 group-hover:text-vert lg:text-2xl">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}
