# Ce qui attend une réponse du client

Aucun témoignage, aucun nom, aucun chiffre et aucune référence n'ont été
inventés. Quand la matière manquait, un emplacement visible a été laissé sur la
page concernée, et il est listé ici.

---

## 1. Emplacements réservés dans le site

Ces blocs sont visibles à l'écran, encadrés en pointillés. Ils disparaissent dès
que le contenu arrive.

| Page | Emplacement | Ce qu'il faut |
|---|---|---|
| `/consulting/` | Deux cas industriels chiffrés | Cas anonymisés mais typés, avec contexte, volume et résultat mesuré. |
| `/creation-sur-mesure/` | Photos de l'atelier | Vues de La Saline-les-Hauts et de la machine en fonctionnement. Plus le numéro et l'intitulé exact du brevet. |
| `/huiles-essentielles-culinaires/` | Catalogue PDF | Le lien de téléchargement du WordPress ne répond plus. Et la position à tenir sur les prix publics. |
| `/creations-fromageres/` | Photos des créations MEALK | Yaourts, tommes, raclettes, beurres, gamme par gamme. Sans elles, la page reste une liste. |
| `/nutrition-sportive/` | Visuels Trek & Adventure | Packaging des trente plats lyophilisés et date de lancement. Son nom et son visage seront associés à la marque : à dire explicitement une fois confirmé. |
| `/aymeric-pataud/` | Dates et liens de presse | Aymeric juge la presse secondaire (grand public, hors cible). Le bloc reste court. Manquent les dates, et l'identification de l'article de 2026 : Vital Food n°48 est le candidat le plus probable, à confirmer. |
| `/references/` | Nouveaux clients | Aymeric a signé plusieurs clients depuis. Il faut leur accord écrit avant d'afficher leur logo, puis le logo et une ligne de contexte pour chacun. |

---

## 2. La vidéo Poire et Cactus — en ligne le 15 septembre 2026

Le film est dans le hero de l'accueil, à droite du titre, en entier et dans son
format d'origine 9:16, sans recadrage. Choix de Teddy le 15 septembre 2026.

- Lecture automatique en boucle, son coupé au départ (les navigateurs bloquent
  l'autoplay sonore). Pas d'autoplay si le visiteur réduit les animations.
- Commandes sous l'image, pour ne rien masquer : lecture et pause, son et
  volume, barre pour avancer. Composant
  [`src/components/HeroFilm.tsx`](../src/components/HeroFilm.tsx).
- Crédit exigé par le studio, affiché sous le film :
  « Studio Poire et Cactus / @studiopoireetcactus ».
- Fichier : `public/videos/aymeric-pataud-film.mp4`, 1080 × 1920, H.264 + AAC,
  1 min 32, 22 Mo. L'original reçu pesait 221 Mo en HEVC, illisible sur une
  partie des navigateurs. Image d'attente : `public/images/film-poster.jpg`,
  la première image du film.

Reste à faire : des sous-titres, la voix off porte tout le propos.

---

## 3. Le formulaire de contact

WordPress gérait l'envoi nativement avec Gravity Forms. Ce n'est plus possible
sur un site statique.

**Aujourd'hui**, le formulaire est complet et fonctionnel : à la validation, il
ouvre le logiciel de messagerie du visiteur avec un message prérempli et
structuré. Zéro coût, zéro compte à créer, zéro dépendance.

**Sa limite** : sur mobile, un visiteur sans client mail configuré ne peut pas
envoyer. Une partie des demandes se perd.

**Pour passer à un envoi direct**, une seule ligne à changer dans
[`src/components/ContactForm.tsx`](../src/components/ContactForm.tsx) :

```ts
const ENDPOINT: string | null = "https://formspree.io/f/xxxxxxxx";
```

Options gratuites, à trancher ensemble :

| Service | Gratuit | Remarque |
|---|---|---|
| **Web3Forms** | 250 envois / mois | Pas de compte à créer, une clé par e-mail. Le plus simple. |
| **Formspree** | 50 envois / mois | Interface soignée, anti-spam correct. |
| **FormSubmit** | Illimité | Aucune inscription, mais confirmation par e-mail au premier envoi. |

Vu le trafic actuel, n'importe laquelle suffit largement.

---

## 4. Points à trancher

### Le client des tartinables : nommé ou pas ?
Aymeric demande de ne pas le nommer sur `/creations-tartinables/`. Mais le même
client, SNC Pré Grandin, est nommé sur `/references/` et sur
`/artisans-et-producteurs/`, avec ces mêmes produits détaillés (ketchup, sauce
barbecue, houmous à la betterave, tartinable artichaut et parmesan, sauce
burger sans œufs). Il l'était déjà sur son ancien WordPress, avec son accord.

Un lecteur qui parcourt les deux pages fait le lien en dix secondes. Trois
options : nommer partout, anonymiser partout, ou assumer l'écart. À trancher
avec lui.

### L'adresse affichée
Le site affiche `213 rue Jules Barni, 80000 Amiens`, repris des mentions
légales WordPress. Aymeric est à La Réunion jusqu'en août 2027. Faut-il afficher
l'adresse réunionnaise, garder Amiens comme siège, ou n'afficher aucune adresse
en dehors des mentions légales ? Modifiable dans
[`src/lib/site.ts`](../src/lib/site.ts).

### L'adresse e-mail — tranché le 3 septembre 2026
Aymeric a créé `aymeric@aymericpataud.fr` et demande que ce soit l'adresse
affichée sur le site et destinataire du formulaire. En ligne depuis le
4 septembre 2026. L'ancienne, `ap@aymericpataud.fr`, reste active de son côté.

### Le téléphone
`06 71 80 31 93`, repris du WordPress. Toujours valide ?

### L'argument réglementaire
La section sur l'étiquetage est en bonne place sur l'accueil et sur la page
industriels. Elle est formulée avec précaution :

> Selon la matrice et le dosage, elles se déclarent sous leur nom botanique, pas
> sous la mention générique.

C'est un argument commercial fort, et un argument juridiquement sensible.
**Aymeric doit relire et valider cette formulation avant la mise en ligne.** Une
mention de prudence figure déjà sous le visuel d'étiquette et dans les mentions
légales.

### ~~Les codes couleur de la marque~~ — réglé le 17/08/2026
Code fourni : `#a9c3b8`, « verts gris pastel ». À deux points par canal de ce
qui avait été extrait du logo. Adopté tel quel. C'est sa seule couleur : les
neutres et le vert foncé lisible restent dérivés, dans le bloc `@theme` de
[`src/app/globals.css`](../src/app/globals.css).

### ~~Le nom de la marque~~ — réglé le 17/08/2026
Son logo officiel tranche : `DÉLICE & SENS`, au singulier, avec l'esperluette,
signature « l'aromatisation végétale ». Corrigé partout.

### ~~L'adresse affichée~~ — réglé le 17/08/2026
Double implantation : siège et atelier historique à Amiens, atelier du goût à
La Saline-les-Hauts. Le modèle « Amiens–La Réunion » est posé sur l'accueil et
dans le pied de page.

### La liste à jour des huiles
Le site écrit « plus de 60 » et affiche 64, recomptées depuis sa liste
publiée. Il pense en avoir plus de 70 aujourd'hui. Le chiffre exact sera
écrit dès que la liste arrivera, via Vorombola.

### Le catalogue PDF
À récupérer auprès de Vorombola. Décision prise : pas de prix affichés. Le
catalogue sera téléchargeable contre une adresse e-mail, ce qui alimente sa
base de contacts, et les tarifs se discutent au téléphone.

Il s'agit du catalogue des huiles, pas des prestations. Les trois formats
d'intervention de `/consulting/` affichent leur prix depuis le 8 septembre
2026, à la demande d'Aymeric. Les deux décisions ne se contredisent pas :
une journée de coaching se compare, un flacon se négocie.

### ~~La confirmation MEALK~~ — obtenue le 17/08/2026
Confirmé par écrit : cofondateur de la marque MEALK, libre de communiquer sur
ces créations. La mention est passée dans ses repères biographiques.

### ~~Le statut MEALK~~ — clarifié le 19/08/2026
Cofondateur, créateur de la plupart des recettes, fournisseur des ingrédients.
Il n'exploite ni ne commercialise la marque : son ancien associé, cofondateur
lui aussi, s'en charge. La marque est nommée librement sur le site, et le bloc
« Qui fait quoi » de la page créations lève l'ambiguïté. Si son statut change,
c'est `DAIRY_ROLE` dans
[`src/content/creations.ts`](../src/content/creations.ts) qu'il faut reprendre.

### Les visuels MEALK générés par IA
Aymeric envisage de faire produire les visuels manquants par IA, avec
Vorombola. À trancher : une photo de produit générée ne montre pas le produit
réel. Sur une page qui sert de preuve à des fabricants, l'écart se voit et se
retourne contre lui. Mieux vaut peu de vraies photos que beaucoup de fausses.

### Le nombre de collaborations
Le WordPress annonçait 12 cas, il y en a 14 après relecture (La Pétrie et
Randofruits étaient regroupés). Le chiffre « plus de 200 clients » est repris
tel quel du site actuel.

### Google Analytics
Le WordPress en chargeait un, le nouveau site n'en a pas. Faut-il le remettre ?
Si oui, il faudra une bannière de consentement, et les mentions légales et la
politique de confidentialité devront être ajustées : elles affirment aujourd'hui
qu'aucun cookie de mesure n'est déposé.

---

## 5. Après la mise en ligne

- Déclarer le nouveau `sitemap.xml` dans la Search Console et surveiller les 404
  pendant un mois.
- Vérifier que les 12 redirections 301 répondent, une par une.
- Mettre à jour le lien du profil LinkedIn, qui est le principal apporteur de
  trafic.
- Ce site est une base de production. Une étude de mots-clés interviendra
  ensuite : l'arborescence a été conçue pour absorber des pages
  supplémentaires sans refonte.
