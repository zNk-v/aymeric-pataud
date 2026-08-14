# Les arbitrages que j'ai dû faire

Chacun est réversible. Ils sont listés pour être validés ou corrigés.

---

## 1. Le titre de la page d'accueil

**Retenu** : « Le goût est un langage. Je le traduis. »

C'est sa propre phrase, présente sur deux pages de son WordPress. Elle est
sensorielle, elle porte l'expertise sans passer par les huiles essentielles, et
elle tient en cinq mots. Juste en dessous, la ligne 2 place la méthode à sa
place : « Ma méthode privilégiée pour sublimer un goût : les huiles essentielles
culinaires. Un outil de précision, jamais une rustine. »

**Écarté** : « Sublimez le goût. Signez la différence. » C'est son accroche
actuelle, déjà partagée sur LinkedIn, mais elle sonne publicitaire plus que
sensorielle. Elle reste disponible si le client y tient : une ligne à changer
dans `src/components/home.tsx`.

**Écarté aussi** : « Quand une recette bloque, on m'appelle. » La plus efficace
pour un directeur R&D, la moins gastronomique. Trop sèche pour une première
impression.

---

## 2. « Je », pas « nous »

Le WordPress alterne les deux, parfois dans le même paragraphe. Tout est passé au
« je ».

C'est un consultant, pas une société. Son avantage concurrentiel tient à sa
personne, à son palais et à ses vingt-cinq ans d'expérience. Le « nous » d'une
structure de une personne affaiblit l'argument au lieu de le renforcer.

Conséquence : les citations clients, elles, restent mot pour mot, y compris
quand elles disent « leur expertise » ou « ils ».

---

## 3. Les huiles essentielles ne sont plus le sujet

Le WordPress place les huiles essentielles au centre de presque chaque page.
Le client refuse d'être « le type des huiles essentielles ».

L'arborescence fait passer l'expertise du goût devant : la méthode a sa page,
le consulting a la sienne, et les huiles deviennent une famille de pages parmi
d'autres. Sur l'accueil, elles n'apparaissent qu'en ligne 2, puis dans la
section hydrosolubles.

Le mot « twisteur », très présent sur le WordPress, n'apparaît plus dans les
titres. Il est resté dans les contenus repris tels quels.

---

## 4. Les chemins par profil

Le client demandait « une accroche commune, puis des chemins ou sections dédiées
par profil ». J'ai retenu des **pages** plutôt que des sections.

Un visiteur qui arrive de LinkedIn se qualifie lui-même en un clic, et chaque
page peut porter ses propres preuves. Un directeur R&D voit la réglementation et
la reproductibilité, un chef voit l'exclusivité et le format 30 ml. La section
d'accueil « Une même expertise, trois façons de s'en servir » sert de fourche.

---

## 5. L'argument réglementaire mis en scène

Le brief le désigne comme l'argument majeur absent du site actuel. Je lui ai
donné un bloc plein écran sur l'accueil, avec une comparaison visuelle de deux
listes d'ingrédients : la mention « arôme naturel » barrée d'un côté, « huile
essentielle de citron » de l'autre.

Formulation volontairement prudente, et note de contexte sous le visuel. **À
faire valider par Aymeric** : voir [`A-VALIDER.md`](./A-VALIDER.md).

---

## 6. Les hydrosolubles ont leur propre page

Le brief les décrit comme le segment le plus différenciant. Sur le WordPress,
elles sont noyées dans les caractéristiques produit.

Elles ont maintenant une page dédiée, une section sombre sur l'accueil, et une
histoire : un fromager pose un problème que personne n'a résolu, la réponse
ouvre un marché. Trois preuves l'appuient, toutes issues du site actuel.

---

## 7. Quatorze références, pas douze

Le WordPress présentait douze blocs, mais deux d'entre eux regroupaient deux
maisons. La Pétrie et Randofruits sont désormais séparées, ce qui donne
quatorze fiches.

Le contenu est resserré dans une structure commune : le défi, ce que j'ai fait,
le résultat, la phrase de conclusion. Rien n'a été ajouté.

Mathieu Blandin est exclu du bandeau de logos, car son visuel est un portrait
et non un logo. Il reste présent en fiche complète.

---

## 8. La Réunion, contenue exprès

Il rentre en métropole en août 2027. La Réunion n'apparaît qu'à trois endroits :
la page atelier, la page produits locaux, et un paragraphe de la biographie.
Jamais dans un titre de page, jamais dans la navigation.

`/produits-reunion/` est volontairement hors du menu principal, accessible
depuis le pied de page. En 2027, il suffit de réécrire la page atelier et de
retirer une ligne du pied de page.

---

## 9. Le TEDx remonté, et renommé

Il était en bas de la page biographie. Il a maintenant un bloc dédié sur
l'accueil et sur la page biographie, avec son vrai titre :
« Émotions culinaires : la goutte qui fait la différence, TEDxAmiens ».

La démo précédente affichait cette même vidéo sous le titre « Ils me font
confiance ». C'était une erreur, corrigée.

---

## 10. Le curseur personnalisé supprimé

La démo avait un curseur custom qui suivait la souris. Devant un directeur R&D
de PME agroalimentaire, ça fait gadget. Le reste du mouvement est conservé :
apparitions au scroll, survols nets, parallaxe légère du hero.

---

## 11. Typographie changée

La démo utilisait une grotesque pour tout. Le brief demande une serif éditoriale
pour les titres.

Titres en **Fraunces**, une serif variable à fort contraste, cohérente avec
l'univers gastronomique haut de gamme. Corps en **Inter**. Les deux sont servies
depuis le site, sans appel à un domaine tiers.

---

## 12. Palette resserrée

Un seul accent, extrait du logo. Le sauge du logo (`#A7C1B6`) est trop clair pour
du texte : il sert au décor, et une version profonde (`#3F5C50`) porte les liens,
les labels et les boutons. Contraste de 6,6:1 sur le crème, au-dessus du seuil
AA.
