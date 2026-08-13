# Inventaire du contenu WordPress

Tout le WordPress a été aspiré avant toute modification. Rien n'a été supprimé.

**Archive complète** : [`archive-wordpress/`](../archive-wordpress/)

- `contenu/` — les 25 pages et articles en texte lisible, avec leur URL, leur date et leurs métadonnées SEO
- `json/` — le JSON brut de l'API WordPress et les sitemaps Yoast d'origine

---

## Articles de blog : URLs conservées à l'identique

Les 8 articles restent à la racine, avec exactement le même slug. Aucun lien
partagé sur LinkedIn ne casse. Techniquement, c'est le segment
[`src/app/[slug]/page.tsx`](../src/app/%5Bslug%5D/page.tsx) qui les sert.

| URL (inchangée) | Publié le |
|---|---|
| `/huile-essentielle-alimentaire-pour-recettes-guide-et-idees/` | 27/10/2025 |
| `/huile-essentielle-culinaire-bio-recettes-et-bienfaits/` | 27/10/2025 |
| `/sublimer-sa-cuisine-creative-avec-les-huiles-essentielles-culinaires/` | 09/10/2025 |
| `/les-huiles-essentielles-comestibles-simples-sures-et-pretes-a-sublimer-vos-recettes/` | 28/09/2025 |
| `/premiere-mondiale-lhuile-essentielle-culinaire-de-poivre-patience-cote-divoire-la-creation-sur-mesure-au-coeur-de-mon-atelier/` | 19/09/2025 |
| `/des-huiles-essentielles-dans-vos-recettes-de-cuisine/` | 11/09/2025 |
| `/fromages-aromatises-une-nouvelle-experience-de-gout-grace-aux-huiles-essentielles-hydrosolubles/` | 11/09/2025 |
| `/comment-les-huiles-essentielles-reinventent-le-gout-dans-lagroalimentaire/` | 08/09/2025 |

Le texte des articles est repris mot pour mot. Seul le HTML a été nettoyé :
suppression des shortcodes Avada, des balises de mise en forme inutiles et des
attributs de l'éditeur. Deux articles n'avaient pas d'image à la une sous
WordPress et n'en ont donc pas ici.

---

## Pages : redirections 301

Configurées dans [`public/.htaccess`](../public/.htaccess), appliquées par
Apache au déploiement.

| Ancienne URL | Nouvelle URL |
|---|---|
| `/accueil-ap/` | `/` |
| `/aymeric-pataud-2/` | `/aymeric-pataud/` |
| `/chef-consultant-expert-du-gout/` | `/expertise-du-gout/` |
| `/expertise-accompagnement/` | `/expertise-du-gout/` |
| `/le-sur-mesure-aromatique/` | `/creation-sur-mesure/` |
| `/nos-huiles-essentielles-culinaires/` | `/huiles-essentielles-culinaires/` |
| `/nos-huiles-essentielles/` | `/huiles-essentielles-culinaires/` |
| `/pourquoi-choisir-nos-produits/` | `/huiles-essentielles-culinaires/` |
| `/chefs-traiteurs/` | `/chefs-et-traiteurs/` |
| `/ils-nous-font-confiance/` | `/references/` |
| `/contact-aymeric-pataud/` | `/contact/` |
| `/blog-aymeric-pataud/` | `/blog/` |

Conservées sans changement : `/mentions-legales/`,
`/politique-de-confidentialite/`, `/plan-du-site/`.

Reliquats WordPress également redirigés : `/wp-admin/`, `/wp-login.php`,
`/feed/`, `/author/aymericp/`, les sitemaps Yoast. `/xmlrpc.php` renvoie un 410.

---

## Contenu récupéré et réutilisé

| Source WordPress | Où il vit maintenant |
|---|---|
| Les 12 collaborations de `/ils-nous-font-confiance/` | [`src/content/references.ts`](../src/content/references.ts), page `/references/` |
| Les 7 citations signées de `/pourquoi-choisir-nos-produits/` | [`src/content/testimonials.ts`](../src/content/testimonials.ts) |
| Les 3 témoignages anonymes de `/expertise-accompagnement/` | même fichier, section anonyme |
| Le catalogue des 70 huiles de `/nos-huiles-essentielles-culinaires/` | [`src/content/oils.ts`](../src/content/oils.ts) |
| Le triangle aromatique de `/expertise-accompagnement/` | `/expertise-du-gout/` |
| La biographie de `/aymeric-pataud-2/` | `/aymeric-pataud/` |
| Les exemples d'accompagnements de `/expertise-accompagnement/` | `/consulting/` |
| Les mentions légales (SIRET, TVA, forme juridique) | [`src/lib/site.ts`](../src/lib/site.ts) et `/mentions-legales/` |
| La conférence TEDx, enterrée en bas de la page bio | Bloc dédié sur l'accueil et sur `/aymeric-pataud/` |

---

## Visuels

49 fichiers récupérés depuis la médiathèque WordPress (446 médias au total),
redimensionnés et convertis en WebP dans `public/images/`.

- 30 photos de shooting (portraits, atelier, produits, mise en œuvre)
- 13 logos clients, en tuiles arrondies car les fonds d'origine sont hétérogènes
- 6 images à la une d'articles

Le logo de marque a été détouré : le fond quasi transparent laissait un
rectangle visible sur le crème du site.

---

## Ce qui n'a pas été repris

- **Google Analytics.** Le WordPress en chargeait un. Le nouveau site ne dépose
  aucun cookie de mesure. À rebrancher si le client veut suivre son trafic,
  avec la bannière de consentement qui va avec.
- **Le formulaire Gravity Forms.** Impossible sur un site statique.
  Voir [`A-VALIDER.md`](./A-VALIDER.md).
- **La page « Configuration recommandée »** des mentions légales, qui
  conseillait Internet Explorer 8.
- **Les pages en double.** `/aymeric-pataud/` et `/aymeric-pataud-2/`
  coexistaient, tout comme `/nos-huiles-essentielles/` et
  `/nos-huiles-essentielles-culinaires/`. La version la plus récente a été
  retenue, l'ancienne redirige.
