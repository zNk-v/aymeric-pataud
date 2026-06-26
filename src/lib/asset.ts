/**
 * Préfixe un chemin d'asset public avec le basePath de déploiement.
 * Nécessaire car next/image n'ajoute pas le basePath aux images
 * en export statique (GitHub Pages sert le site sous /aymeric-pataud/).
 * En local (dev), NEXT_PUBLIC_BASE_PATH est vide → chemins inchangés.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE}${path}`;
}
