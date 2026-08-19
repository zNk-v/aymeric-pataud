import type { NextConfig } from "next";

/**
 * Déploiement GitHub Pages = hébergement statique (pas de serveur Node).
 * On exporte le site en statique et on désactive l'optimiseur d'images Next.
 * basePath/assetPrefix sont ajoutés uniquement en build Pages (repo "projet"),
 * via la variable d'env PAGES=true (positionnée par le workflow GitHub Actions).
 */
const isPages = process.env.PAGES === "true";
const repo = "/aymeric-pataud";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isPages ? repo : "",
  assetPrefix: isPages ? `${repo}/` : "",
  // Exposé au client : next/image n'applique pas le basePath aux images
  // en export statique, on préfixe donc nous-mêmes via lib/asset.ts.
  env: {
    NEXT_PUBLIC_BASE_PATH: isPages ? repo : "",
    // Aperçu client : les emplacements réservés restent visibles, la
    // production ne les montre pas. Voir components/ui.tsx.
    NEXT_PUBLIC_PREVIEW: isPages ? "true" : "false",
  },
};

export default nextConfig;
