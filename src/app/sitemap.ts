import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/articles";
import { SITE } from "@/lib/site";

/** Pages statiques, avec leur priorité relative. */
const PAGES: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/expertise-du-gout/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/consulting/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/creation-sur-mesure/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/huiles-essentielles-culinaires/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/huiles-essentielles-hydrosolubles/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industriels-agroalimentaires/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/chefs-et-traiteurs/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/artisans-et-producteurs/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/references/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/aymeric-pataud/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/creations-fromageres/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/nutrition-sportive/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/creations-tartinables/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/creations-reunion/", priority: 0.5, changeFrequency: "monthly" },
  { path: "/blog/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.8, changeFrequency: "yearly" },
  { path: "/plan-du-site/", priority: 0.3, changeFrequency: "yearly" },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...PAGES.map((p) => ({
      url: `${SITE.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...ARTICLES.map((a) => ({
      url: `${SITE.url}/${a.slug}/`,
      lastModified: new Date(`${a.modified}T12:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
