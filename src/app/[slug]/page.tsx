import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/blocks";
import { Arrow, Container, Section } from "@/components/ui";
import { ARTICLES, getArticle } from "@/content/articles";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/site";

/**
 * Les articles vivent à la racine, exactement comme sous WordPress.
 * Ces URLs sont partagées sur LinkedIn depuis des années : les changer
 * casserait des liens existants. Les routes statiques (/blog/, /contact/…)
 * ont la priorité sur ce segment dynamique.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/${article.slug}/` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.metaDescription,
      publishedTime: article.date,
      modifiedTime: article.modified,
      images: article.image ? [article.image] : undefined,
    },
  };
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.modified,
    image: article.image ? `${SITE.url}${article.image}` : undefined,
    mainEntityOfPage: `${SITE.url}/${article.slug}/`,
    author: { "@id": `${SITE.url}/#person` },
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "fr-FR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="relative overflow-hidden pt-36 pb-12 lg:pt-48 lg:pb-16">
          <span className="halo left-1/2 top-0 h-[42vw] w-[42vw] max-h-[520px] max-w-[520px] -translate-x-1/2" />
          <Container size="prose">
            <Link
              href="/blog/"
              className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-vert"
            >
              <Arrow className="rotate-180" />
              Tous les articles
            </Link>
            <h1 className="font-display mt-8 text-balance text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-encre-soft">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{SITE.name}</span>
            </p>
          </Container>
        </header>

        {article.image ? (
          <Container size="narrow">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line">
              <Image
                src={asset(article.image)}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
            </div>
          </Container>
        ) : null}

        <Section size="sm">
          <Container size="prose">
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />
          </Container>
        </Section>
      </article>

      {/* Autres articles */}
      <Section tone="deep" size="sm">
        <Container>
          <h2 className="font-display text-3xl lg:text-4xl">À lire ensuite</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((a) => (
              <Link key={a.slug} href={`/${a.slug}/`} className="block h-full">
                <div className="card group flex h-full flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1">
                  <span className="text-xs uppercase tracking-[0.18em] text-encre-soft">
                    {formatDate(a.date)}
                  </span>
                  <h3 className="font-display mt-4 flex-1 text-xl leading-snug">
                    {a.title}
                  </h3>
                  <span className="link-underline mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-vert">
                    Lire
                    <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Une recette à créer, ajuster ou différencier ?"
        lede="Décrivez votre produit et la contrainte. Je vous réponds sous 48 h ouvrées."
      />
    </>
  );
}
