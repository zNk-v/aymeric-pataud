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
};

export default nextConfig;
