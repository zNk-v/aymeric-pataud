# aymericpataud.fr

Site de production d'Aymeric Pataud, chef consultant et expert du goût.

Next.js 15 en export statique. Pas de serveur, pas de base de données, pas de
plugin. Le build produit un dossier `out/` de fichiers plats.

---

## Documentation

| Document | Contenu |
|---|---|
| [`docs/A-VALIDER.md`](docs/A-VALIDER.md) | Ce qui attend une réponse du client : emplacements vides, points à trancher, formulaire |
| [`docs/CHOIX-EDITORIAUX.md`](docs/CHOIX-EDITORIAUX.md) | Les arbitrages faits pendant la refonte, et pourquoi |
| [`docs/INVENTAIRE-WORDPRESS.md`](docs/INVENTAIRE-WORDPRESS.md) | Contenu récupéré, URLs conservées, redirections 301 |
| [`archive-wordpress/`](archive-wordpress/) | L'archive brute du WordPress, avant toute modification |

---

## Démarrer

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

Le build écrit dans `out/`. Aucune variable d'environnement n'est nécessaire en
local.

---

## Structure

```
src/
  app/                    une page par route, plus sitemap.ts et robots.ts
    [slug]/               les 8 articles, à la racine, slugs WordPress inchangés
  components/
    layout/               en-tête et pied de page
    ui.tsx                primitives : Container, Section, Button, Placeholder
    blocks.tsx            blocs partagés : hero de page, TEDx, témoignages, CTA
    page-blocks.tsx       blocs de contenu : split, étapes, grilles, citations
    home.tsx              les sections propres à l'accueil
  content/                le contenu éditorial, séparé de la mise en page
    articles.ts           généré depuis l'archive WordPress
    references.ts         les 14 collaborations
    testimonials.ts       citations signées et anonymes
    oils.ts               le catalogue
    profiles.ts           les 3 profils cibles
  lib/site.ts             coordonnées, navigation, constantes
public/
  .htaccess               redirections 301, cache, en-têtes de sécurité
  images/                 visuels en WebP
```

Le contenu vit dans `src/content/`. Pour corriger un texte de référence ou
ajouter une huile au catalogue, il n'y a pas besoin de toucher aux composants.

---

## Déploiement

Deux workflows GitHub Actions, deux cibles.

### Aperçu client — `deploy.yml`

Publie sur GitHub Pages à chaque push sur `main`, sous
`znk-v.github.io/aymeric-pataud`. Les pages sont en `noindex` pour ne pas
concurrencer la production. Sert à faire valider avant mise en ligne.

### Production — `production.yml`

Envoie `out/` par FTPS vers l'hébergement du domaine. **Inactif tant que la
variable `DEPLOY_FTP` n'est pas passée à `true`** dans les réglages du dépôt,
ce qui évite les builds en échec.

Pour l'activer, voir l'en-tête de
[`.github/workflows/production.yml`](.github/workflows/production.yml).

Le déploiement ne touche ni aux DNS, ni à la messagerie. Il écrit uniquement
dans la racine web, et laisse les dossiers `wp-*` en place tant que le client
n'a pas confirmé qu'ils peuvent partir.

---

## Points d'attention

**Les URLs d'articles ne doivent pas changer.** Elles sont partagées sur
LinkedIn depuis des années. Elles vivent à la racine via `src/app/[slug]/`, et
toute modification de slug doit s'accompagner d'une 301 dans `public/.htaccess`.

**Le `.htaccess` doit rester dans `public/`.** Il est copié tel quel dans `out/`
au build, et le workflow de production vérifie sa présence avant l'envoi.

**Aucun contenu ne doit être inventé.** Les blocs `<Placeholder>` marquent ce
qui manque. Ils sont visibles à l'écran exprès, et recensés dans
[`docs/A-VALIDER.md`](docs/A-VALIDER.md).

**Pas de `localStorage` ni de `sessionStorage`.**

**L'arborescence reste ouverte.** Une étude de mots-clés viendra en seconde
passe. Les pages profil et produit peuvent se démultiplier sans refonte.
