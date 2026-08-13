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
| `/aymeric-pataud/` | Les quatre ouvrages | Titres, éditeurs, années, couvertures, liens d'achat. Seul celui de 2003 est documenté aujourd'hui. |
| `/aymeric-pataud/` | Mentions presse | Média, date, titre, lien ou scan. Trois à quatre par an d'après le brief. |
| `/aymeric-pataud/` | Collège Culinaire de France | Le WordPress ne mentionne que les Toques Françaises. Confirmer les deux appartenances et fournir les logos. |
| `/aymeric-pataud/` | Vidéo signature | Le film Poire et Cactus. |
| `/consulting/` | Deux cas industriels chiffrés | Cas anonymisés mais typés, avec contexte, volume et résultat mesuré. |
| `/creation-sur-mesure/` | Photos de l'atelier | Vues de La Saline-les-Hauts et de la machine en fonctionnement. Plus le numéro et l'intitulé exact du brevet. |
| `/huiles-essentielles-culinaires/` | Catalogue PDF | Le lien de téléchargement du WordPress ne répond plus. Et la position à tenir sur les prix publics. |
| `/produits-reunion/` | Fiches produit | Photos, poids, DLUO, conditionnements, tarifs revendeur. |

---

## 2. La vidéo Poire et Cactus

L'emplacement est déjà construit, en haut de la page d'accueil, à droite du
titre. Il affiche aujourd'hui une photo. Quand la vidéo arrive, une seule ligne
change dans [`src/lib/site.ts`](../src/lib/site.ts) :

```ts
export const SIGNATURE_VIDEO = {
  src: "/videos/signature.mp4",   // au lieu de null
  poster: "/images/hero-poster.webp",
};
```

Le bloc bascule en lecture automatique, en boucle, sans son. Aucune retouche de
mise en page.

Format attendu : MP4 H.264, format portrait 4/5, moins de 3 Mo si possible, à
déposer dans `public/videos/`. Prévoir une version sous-titrée si la voix off
porte du contenu.

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

### L'adresse affichée
Le site affiche `213 rue Jules Barni, 80000 Amiens`, repris des mentions
légales WordPress. Aymeric est à La Réunion jusqu'en août 2027. Faut-il afficher
l'adresse réunionnaise, garder Amiens comme siège, ou n'afficher aucune adresse
en dehors des mentions légales ? Modifiable dans
[`src/lib/site.ts`](../src/lib/site.ts).

### L'adresse e-mail
Le site utilise `ap@aymericpataud.fr`, la seule documentée publiquement (dans
les mentions légales). Est-ce bien l'adresse à laquelle il veut recevoir les
demandes commerciales ?

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

### Le nom de la marque
`Délices & Sens` a été retenu. Le WordPress alterne avec `Délice et Sens` sur
plusieurs pages. Laquelle est la bonne ?

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
