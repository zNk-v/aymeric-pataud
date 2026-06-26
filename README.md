# Aymeric Pataud — Expert du goût

Site vitrine one-page premium. Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis (smooth scroll).

## Démarrer

```bash
cd site
npm install
npm run dev      # http://localhost:3000
```

Build de production :

```bash
npm run build && npm run start
```

## Où changer quoi

### Couleurs
Tout est centralisé dans le bloc `@theme` de **`src/app/globals.css`** :

Thème clair éditorial (crème + accent vert pastel). Les noms de variables
gardent les anciens libellés (`charbon`/`ivoire`/`or`) pour la compat des
classes Tailwind, mais portent des valeurs CLAIRES :

| Variable             | Rôle                              | Valeur     |
| -------------------- | --------------------------------- | ---------- |
| `--color-charbon`    | Fond crème principal              | `#F3EEE4`  |
| `--color-charbon-card` | Carte / surface surélevée       | `#FBF8F2`  |
| `--color-ivoire`     | Texte encre chaude                | `#1D1A14`  |
| `--color-ivoire-dim` | Texte secondaire                  | `#6F6657`  |
| `--color-or`         | Accent vert lisible (labels/liens)| `#4F6B49`  |
| `--color-sauge`      | Vert pastel des halos / blooms    | `#A9CBA4`  |

Les halos verts en dégradé sont des `<span class="halo" />` (voir `globals.css`,
classe `.halo` / `.halo-soft`) posés dans les sections en `position:relative`.
Couleur des blooms : `rgba(169, 203, 164, …)` = le vert `#A9CBA4`.

### Textes
Chaque section est un composant dans **`src/components/`** :
- `Hero.tsx` — titre, sous-titre, CTA
- `Sections.tsx` — manifeste, l'essentiel (bento), posture, approche, huiles, endurance, preuve sociale, pour qui, CTA final
- `Header.tsx` / `Footer.tsx` — navigation, réseaux

Les textes reprennent le verbatim du site d'origine. Les tableaux en haut de `Sections.tsx` (`ESSENTIEL`, `FAIRE`, `TEMPS`, `POURQUI`, `CLIENTS`) pilotent les listes.

### Images
Dans **`public/images/`**. Remplace un fichier en gardant le même nom, ou change le `src` dans le composant. Toutes les images passent par `next/image` (AVIF/WebP automatique).

### Vidéo (preuve sociale)
`src/components/LiteYouTube.tsx` — façade légère : la miniature s'affiche, l'iframe YouTube ne se charge qu'au clic (bon pour le Lighthouse). Pour changer la vidéo : modifier l'`id` dans `Sections.tsx` (`<LiteYouTube id="..." />`) et la miniature `public/images/video-thumb.jpg`.

## Animations
- **Lenis** : smooth scroll global (`SmoothScroll.tsx`)
- **Framer Motion** : reveals, stagger, text reveal mot à mot, parallax hero (`motion-primitives.tsx`)
- **Spotlight doré** au hover des cartes, **marquee** en footer
- `prefers-reduced-motion` respecté partout

## Structure

```
site/
├── public/images/        # tous les visuels
├── src/
│   ├── app/
│   │   ├── globals.css   # palette + tokens + grain
│   │   ├── layout.tsx    # fonts (Fraunces + Inter), metadata
│   │   └── page.tsx      # assemblage des sections
│   └── components/        # Header, Hero, Sections, Footer, LiteYouTube, etc.
```
