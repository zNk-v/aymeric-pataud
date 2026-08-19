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

## 11. Typographie : retour au système, façon Apple

Première tentative : **Fraunces**, une serif éditoriale. Aymeric l'a trouvée
tordue, en particulier les capitales à jambage comme le J de « Je le traduis ».
Il avait raison : Fraunces embarque un axe *wonk* qui incline volontairement
certains dessins de lettres. Un parti pris qui passe mal sur un site vendu à
des directions R&D.

Remplacée par la **pile système**. Sur Mac et iPhone, le visiteur lit du SF
Pro, la police d'Apple, sans aucun téléchargement. Sur les autres plateformes,
Inter prend le relais. Une seule famille pour tout le site : la hiérarchie se
fait à la graisse, à la taille et à l'approche, comme chez Apple.

Effet de bord appréciable : les titres tiennent sur moins de lignes, et le
site charge une police de moins.

---

## 12. Palette resserrée

Un seul accent, extrait du logo. Le sauge du logo (`#A7C1B6`) est trop clair pour
du texte : il sert au décor, et une version profonde (`#3F5C50`) porte les liens,
les labels et les boutons. Contraste de 6,6:1 sur le crème, au-dessus du seuil
AA.


---

## 13. Premier retour client : la page d'accueil raccourcie de moitié

Aymeric : « La page d'accueil est très longue. Nos clients de l'agro restent
très peu de temps sur les sites, il faut avoir la bonne info, vite. »

Treize sections sont passées à huit, et la hauteur de 11 600 px à 6 500 px.
La fourche par profil remonte juste après le bandeau de preuves : le visiteur
choisit son chemin au deuxième écran au lieu du cinquième.

Rien n'est perdu, tout est sur les pages dédiées :

| Section retirée de l'accueil | Où elle vit |
|---|---|
| Ma posture | `/expertise-du-gout/` |
| L'atelier | `/creation-sur-mesure/` |
| Le consulting | `/consulting/` |
| Les témoignages | `/references/` et les pages profil |

Le bandeau de logos, qui formait une section à lui seul, est maintenant intégré
au bloc références. Les paddings verticaux ont été resserrés sur tout le site.

---

## 14. Les références refaites en explorateur

Aymeric : « Sur les références et les collaborations, il faut revoir cette
partie, je ne sais pas encore comment, mais ça ne va pas. »

Le diagnostic : quatorze cas empilés à la verticale, trois paragraphes chacun.
Personne ne lit ça, surtout pas un acheteur qui balaie.

La page devient un explorateur : des filtres par profil (Toutes, Industriels,
Chefs & traiteurs, Artisans & producteurs), une grille de cartes compactes sur
deux colonnes, et le détail qui se déplie au clic. Chaque carte tient en
170 px : logo, nom, secteur, phrase de conclusion.

Deux détails techniques qui comptent :

- Le dépliage est en CSS pur, pas en JavaScript. Le texte des quatorze cas
  reste donc dans le HTML, lisible par Google, et si la transition ne joue
  pas le contenu s'affiche quand même.
- Les liens `/references/#mealk` posés depuis les pages profil continuent de
  fonctionner : la carte visée s'ouvre et la page défile jusqu'à elle.


---

## 15. Deuxième retour client : deux spécialités qui manquaient

Le 17 août 2026, Aymeric envoie deux mails qui changent la structure.

### La double implantation

Le siège reste Amiens, l'atelier du goût existe des deux côtés. Le modèle
qu'il donne est « Paris–New York », version « Amiens–La Réunion ». Une bande
courte sur l'accueil, une mention dans le pied de page, et les deux lieux
dans les données structurées.

Tout tient dans `WORKSHOPS`, dans [`src/lib/site.ts`](../src/lib/site.ts). Au
retour en métropole, en août 2027, seul ce tableau change.

### Les fromagers, son plus fort potentiel

Il est cofondateur de MEALK et peut communiquer librement sur ces créations :
huit à neuf yaourts, cinq à six raclettes, des tommes de vache et de brebis,
cinq à six beurres. Une page dédiée, `/creations-fromageres/`, avec le verrou
technique qui a tout déclenché : aromatiser du lait avec une huile
essentielle, alors que l'huile et l'eau ne se mélangent pas.

Les fourchettes sont écrites telles qu'il les a données. Il n'a pas fourni de
compte exact, on n'en invente pas un.

### La nutrition sportive, une seconde spécialité

Trente plats lyophilisés avec Marie de Livinhac, son visage associé à la
marque Trek & Adventure, des barres 100 % réunionnaises avec Randofruits. Et
surtout : **sans aucune huile essentielle**. C'est ce qui rend cette page
utile au-delà d'elle-même, puisqu'elle prouve que sa méthode ne dépend pas de
son outil. L'ultra-trail n'est pas une anecdote non plus : il mange ce
qu'il conçoit.

### Les produits de La Réunion, recadrés

L'ancienne page les présentait comme un catalogue avec tarifs revendeur.
C'était faux : il développe pour ses clients, ce sont eux qui vendent. La page
devient `/creations-reunion/` et ne propose plus rien à l'achat. L'ancienne
URL part en 301.

### Toques Françaises et Collège Culinaire, séparés

Deux faits distincts qu'il ne fallait pas fondre en un. Aymeric est membre des
Toques Françaises. Les huiles essentielles culinaires viennent d'entrer au
Collège Culinaire de France, ce qui est une première mondiale. La seconde
information est la plus forte, elle attend sa date et sa source avant d'être
affirmée.

### Les livres

Plus commercialisés. Sur sa demande, une ligne dans la biographie plutôt
qu'une vitrine : le premier ouvrage au monde sur le sujet, en 2003. Pas de
couverture, pas de lien d'achat.

### Le nombre d'huiles

Il proposait « plus de 70 ». Sa liste publiée en compte 64, recomptées une par
une. Le site écrit « plus de 60 » et affiche le compte exact là où il est
calculé. On n'annonce pas un chiffre qu'on ne peut pas montrer.

### Les prix

Pas de tarif public. Il adapte ses prix selon les clients, un prix affiché
deviendrait un plafond. Et il est deux à quatre fois plus cher que le marché :
une grille tarifaire invite à le comparer sur le seul critère où il perd.

### Le titre des références

« Quinze ans avec un MOF. Dix ans avec un fromager. » ne lui plaisait pas.
Remplacé par **« Ils ne cherchent plus ailleurs. »**, qui vient de son propre
site. Elle dit un résultat plutôt qu'une performance.

### La carte « Chefs & traiteurs »

Basculée du flacon vers le consulting et les masterclass, comme demandé.

---

## 16. Deux corrections techniques trouvées en chemin

**Les couleurs.** Son code de charte, `#a9c3b8`, est à deux points par canal
de ce que j'avais extrait de son logo. Adopté tel quel. C'est sa seule
couleur : l'encre, le crème et le vert foncé lisible restent dérivés.

**La marque.** Son logo écrit `DÉLICE & SENS`, au singulier, avec
l'esperluette. Le site écrivait « Délices & Sens ». Corrigé partout.

**Le site était blanc sans JavaScript.** Les animations d'apparition partent
d'une opacité nulle inscrite dans le HTML statique, et rien ne les rattrapait.
Une règle dans `<noscript>` remet désormais tout à l'état visible. Trente
blocs concernés sur une page comme les créations fromagères.

**Le menu passait à deux lignes.** Sept groupes de navigation ne tenaient plus
en 1280 px. Approche resserrée entre 1024 et 1280 px, taille pleine au-delà.

**La fourche par profil a perdu ses images.** La section Créations, juste en
dessous, en porte déjà trois. Deux rangées de cartes illustrées qui se suivent
alourdissaient la page sans rien ajouter.


---

## 17. L'articulation entre les trois pages qui parlaient de fromage

Aymeric a repéré le risque tout seul : « je ne veux pas qu'on se retrouve avec
deux pages qui racontent la même chose à moitié chacune ». Il avait raison,
les pages hydrosolubles et créations fromagères citaient exactement le même
trio Mealk / La Comtoise / Brasserie Félicité.

La règle retenue tient en une phrase : **une page répond à « comment ça
marche », l'autre à « ce que ça donne ».**

| Page | Périmètre | Preuves |
|---|---|---|
| `/huiles-essentielles-hydrosolubles/` | La technique, et toutes les matrices aqueuses **sauf le lait** | La Comtoise, Brasserie Félicité, Very Foody |
| `/creations-fromageres/` | Le lait et les produits laitiers | MEALK seul |

Chacune renvoie vers l'autre une fois, avec un bloc explicite. Mealk reste cité
sur la page hydrosolubles dans la citation d'origine, puisque c'est de son
problème qu'est née la technique, mais aucune gamme n'y est détaillée.

**Mealk quitte `/artisans-et-producteurs/`.** Fromager, affineur et
distributeur premium, il n'est pas un producteur qui transforme sa propre
récolte. Pré Grandin et Randofruits tiennent ce rôle bien mieux.

---

## 18. Ce qu'Aymeric a tranché le 17 août

- **Couleurs** : il n'a pas de charte plus complète que son code. Les
  dérivations sont validées.
- **Collège Culinaire de France** : entrée en **mai 2026**. La date est posée,
  le placeholder retiré.
- **MEALK** : il confirme par écrit être cofondateur. La mention passe dans
  ses repères biographiques, où elle manquait. Chef et cofondateur d'une marque
  de fromagerie, c'est un marqueur d'autorité que rien ne remplaçait.
- **Presse** : il la juge secondaire, ces articles visent le grand public et
  pas les industriels qu'il cherche. Le bloc reste court, il prouve la présence
  médiatique sans occuper la page.
- **Étiquetage** : son exemple est meilleur que le mien. J'avais construit une
  boisson avec acidifiant et conservateur, ce qui brouillait la lecture. Il
  propose un gâteau, où une seule ligne change :

  > Farine, sucre, œufs, beurre, levure, **arôme naturel**.
  > Farine, sucre, œufs, beurre, levure, **huile essentielle de citron**.

  Même recette, même liste, un seul mot. C'est plus parlant et ça évite de
  faire une promesse sur les additifs qu'on ne peut pas tenir.
- **La Réunion sur le consulting** : la concurrence y est quasi inexistante.
  L'argument manquait, il est maintenant sur la page, avec le délai
  d'intervention comme preuve concrète.
- **Contact** : la double implantation remonte sur la page elle-même, pas
  seulement dans le pied de page. C'est la première page que consulte
  quelqu'un qui cherche où on est basé.


---

## 19. MEALK : cofondateur, mais plus associé

Aymeric a précisé le 18 août : il est cofondateur de la marque, il n'est plus
associé aux sociétés qui l'exploitent. Il en reste le créateur des recettes et
le fournisseur des ingrédients aromatiques. Sa consigne : « pas trop de MEALK
partout ».

Elle est fondée. Un site qui s'appuierait sur MEALK comme sur sa marque
raconterait quelque chose de faux, et gênerait les propriétaires actuels.

Ce qui a changé :

- MEALK **sort des reconnaissances** sur la page biographie. Ce n'était pas une
  appartenance qui fait autorité, c'était un client.
- La page créations **met en avant son travail**, pas la marque. Une seule
  mention, en bas des gammes : « ces gammes sont distribuées sous la marque
  MEALK, j'en crée les recettes et je fournis les ingrédients aromatiques ».
- Le renvoi depuis la page hydrosolubles ne revendique plus rien.
- La carte de l'accueil parle des quarante-trois recettes, plus de la marque.

Résultat : une mention visible par page, contre trois à cinq avant.

**Une date inventée, retirée.** J'avais daté la cofondation de 2015 dans la
frise biographique. Aymeric ne l'a jamais donnée. Le fait est repassé dans le
texte, sans date, et la frise ne contient plus que des jalons réellement datés.

---

## 20. Les gammes, en vrai

Sa liste du 18 août remplace mes fourchettes. **Neuf gammes, quarante-trois
recettes** : yaourts (10), beurres (8), miels (7), raclettes (6), fondues (5),
cheesecakes (4), tommes de brebis, burrata, crémeux au safran.

C'est autrement plus démonstratif que « huit à neuf yaourts ». Un fabricant qui
lit « Litchi et géranium », « Safran de la Baie de Somme » ou « Cèpes et
morilles » comprend l'étendue du travail sans qu'on ait besoin de l'expliquer.

Les miels et les cheesecakes ne sont pas des produits laitiers au sens strict.
Ils restent sur cette page parce qu'ils appartiennent à la même gamme et à la
même technique.

Seule retouche : « Banane et citron ver » est devenu « citron vert », coquille
manifeste.

---

## 21. MEALK, la bonne lecture

Ma correction du 18 août était la mauvaise. Aymeric a repris le sujet le 19 :

> « Bien évidemment qu'il faut que l'on parle de la marque MEALK sur le site
> car je suis le cofondateur et le créateur de la plupart des recettes […]
> mais je ne veux pas que les lecteurs pensent que MEALK, c'est MOI ! »

Le problème n'était donc pas le nombre de mentions, c'était l'attribution.
J'avais réduit la visibilité de la marque là où il fallait préciser qui fait
quoi. Retirer le nom ne dit pas au lecteur qui exploite la marque, ça le laisse
deviner.

La marque est donc de nouveau nommée librement : dans le hero de la page
créations, dans la carte de l'accueil, dans le renvoi depuis la page
hydrosolubles, et dans sa biographie.

Ce qui lève l'ambiguïté, c'est un bloc **« Qui fait quoi »** en deux colonnes,
sous les gammes :

| Ce que je fais | Ce que je ne fais pas |
|---|---|
| Cofondateur de MEALK. J'en ai créé la plupart des recettes et je fournis les ingrédients aromatiques. | Je n'exploite pas la marque et je ne la commercialise pas : mon ancien associé, cofondateur lui aussi, s'en charge. |

Le même contenu est repris en prose dans sa biographie. Les trois formulations
vivent dans `DAIRY_ROLE`, dans
[`src/content/creations.ts`](../src/content/creations.ts) : si son statut
change, un seul endroit à reprendre.

Deux nuances de vocabulaire qui comptent : **« la plupart des recettes »**, pas
toutes, et **« marque de crémerie »** plutôt que « sa marque ».

---

## 22. Le bloc « Qui fait quoi » retiré, et l'axe Créations élargi

Aymeric, le 19 août : « Qui fait quoi, on s'en fout ! Ça n'intéresse personne.
À aucun moment je dis que j'exploite la marque MEALK, donc pas de problème. »

Il a raison sur le fond. J'avais construit ce bloc pour lever une ambiguïté
qu'il avait signalée, mais expliquer un montage capitalistique à un directeur
R&D venu chercher une solution de goût, c'est répondre à une question que
personne ne pose. La mention reste en une phrase dans sa biographie, ça suffit.

### Le vrai sujet : ne pas l'enfermer

« Avec uniquement les gammes fromagères et les créations sport, on donne
l'impression que je ne fais que du fromage et du sport, alors que je peux
accompagner n'importe quelle société dans n'importe quel domaine. »

L'axe Créations passe donc à quatre entrées, avec l'ajout de
`/creations-tartinables/` : ketchup, sauce barbecue, caviar de cornichons,
houmous rose, caviar d'aubergines, tartinable artichaut-parmesan, crème de
butternut à la truffe, sauce burger sans œufs.

Le chapeau de la section change aussi : « Le domaine change. La méthode, non. »

### La page est construite sur les contraintes, pas sur les produits

C'est ce qui la rend utile. Un produit fini ne prouve rien à un industriel, il
a déjà vu des tartinables. Une contrainte levée, si :

- diviser le sucre par deux **et** gagner en gourmandise ;
- retirer tous les additifs d'une sauce barbecue ;
- construire un goût qui survit à la pasteurisation ;
- une sauce burger sans œufs, sans additifs, stable à température ambiante.

Une contrainte se transpose d'un secteur à l'autre. Un produit non. C'est
exactement l'argument qui casse l'enfermement qu'il craint.

Ses deux formules sont reprises telles quelles : « Ce sont eux les vrais
clients » pour la validation par ses enfants, et « le challenge le plus dur que
j'aie eu à relever » pour la sauce burger.

S'y ajoute la mention des dizaines d'entreprises couvertes par des accords de
confidentialité, qui suggère un volume que le site ne peut pas détailler.

---

## 23. Chronologie corrigée

Aymeric a revu son parcours le 20 août. Deux dates étaient fausses et deux
jalons manquaient. La frise passe de cinq à sept entrées :

| Année | Jalon |
|---|---|
| 1999 | Découverte des huiles essentielles à La Réunion |
| 2004 | Premier ouvrage au monde sur les huiles essentielles en cuisine |
| 2005 | Premiers essais sur le prototype de l'éco-extracteur par micro-ondes |
| 2009 | Création de la marque Délice & Sens |
| 2013 | Invention des huiles essentielles culinaires hydrosolubles |
| 2023 | Achat de l'éco-extracteur et créations sur mesure |
| Aujourd'hui | Deux ateliers du goût, Amiens et La Réunion |

Les deux nouveaux jalons racontent quelque chose que le site ne disait pas :
dix-huit ans séparent les premiers essais sur le prototype de l'achat de la
machine. Ce n'est pas un achat d'équipement, c'est une obsession tenue.

**La grille de cartes égales a été remplacée par une liste sur deux colonnes.**
Cinq entrées de longueur voisine tenaient dans cinq cartes. Sept entrées de
longueurs très inégales, dont une de dix-sept mots, laissaient des blancs
absurdes. La liste absorbe n'importe quel nombre d'entrées et n'importe quelle
longueur, et se lit comme une chronologie dans les deux sens de balayage :
colonne de gauche et colonne de droite sont toutes deux croissantes.

**Deux corrections hors de la page.** 1998 et 2003 apparaissaient aussi dans le
texte courant, dans la meta description, dans la section Ouvrages et dans le
bandeau de preuves de l'accueil. Aymeric n'avait signalé que les trois
premières. Tout est aligné : le même fait ne peut pas porter deux dates selon
la page.

---

## 24. Deux ajouts d'Aymeric, le 21 août

**« Miels » devient « Miels pour fromages ».** Sa remarque est juste : une
rubrique miel n'a rien à faire dans une page fromage sans ce qualificatif. Le
produit change de sens avec deux mots.

**Biscuiterie Jeannette entre dans les références**, quinzième collaboration.
Madeleines, financiers et cakes depuis 2013, avec la fourniture exclusive des
huiles Délice & Sens sur la gamme madeleines.

Deux détails d'écriture : il écrivait « depuis plus de 10 ans », le site dit
« treize ans de collaboration », qui se vérifie depuis 2013 et frappe plus
fort. Et sa formule « ce qui dit tout » est conservée telle quelle.

Le témoignage nominatif de Benoît Martinet, repris du WordPress, existait déjà
dans `testimonials.ts` sans être rattaché à une référence. Les deux se
rejoignent maintenant.

Le compteur de collaborations de l'accueil était écrit en dur. Il se calcule
désormais, pour qu'un seizième ajout ne laisse pas un chiffre faux derrière lui.
