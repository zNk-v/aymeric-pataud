# Mise en ligne

Le site se déploie déjà tout seul à chaque `git push` sur `main`. Deux
workflows, deux destinations :

| Workflow | Destination | État |
|---|---|---|
| `deploy.yml` | GitHub Pages, aperçu client | actif, en `noindex` |
| `production.yml` | FTPS vers l'hébergement, `www.aymericpataud.fr` | **en attente d'activation** |

Le build de production diffère de l'aperçu sur deux points, pilotés par la
seule variable `PAGES` :

- **l'indexation** : l'aperçu est en `noindex`, la production ne l'est pas ;
- **les emplacements réservés** : les encadrés en pointillés qui listent ce
  qu'Aymeric doit encore fournir sont visibles sur l'aperçu et **invisibles en
  production**. Le site peut donc partir en ligne sans attendre les photos.

---

## Ce qu'il reste à faire

### 1. Le formulaire de contact — le seul vrai point bloquant

Aujourd'hui, valider le formulaire ouvre le logiciel de messagerie du visiteur
avec un message prérempli. Sur mobile, un visiteur sans client mail configuré
ne peut rien envoyer : la demande est perdue.

Une ligne à changer dans
[`src/components/ContactForm.tsx`](../src/components/ContactForm.tsx) :

```ts
const ENDPOINT: string | null = "https://api.web3forms.com/submit";
```

Web3Forms : 250 envois par mois, gratuit, aucun compte à créer, une clé
reçue par e-mail. Largement suffisant.

### 2. Les identifiants FTP

Dans les réglages du dépôt GitHub, `Settings > Secrets and variables > Actions` :

**Secrets** : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
**Variables** : `DEPLOY_FTP` à `true`, `FTP_DIR` (racine web, avec `/` final)

Tant que `DEPLOY_FTP` n'est pas à `true`, le workflow ne fait rien et
n'échoue pas.

### 3. Sauvegarder le WordPress avant d'écraser quoi que ce soit

Le contenu est déjà archivé dans [`archive-wordpress/`](../archive-wordpress),
mais il faut aussi une sauvegarde complète des fichiers et de la base côté
hébergeur, faite depuis le panneau OVH. Le workflow FTP ne supprime pas les
dossiers `wp-content`, `wp-includes` et `wp-admin` : ils restent en place tant
que personne ne les enlève à la main.

### 4. Après la bascule

- Vérifier les 22 redirections 301 une par une sur le vrai serveur.
- Déclarer le nouveau `sitemap.xml` dans la Search Console.
- Surveiller les 404 pendant un mois.
- Mettre à jour le lien du profil LinkedIn.

---

## Les e-mails ne bougent pas

Question posée par Aymeric le 22 août. Réponse : **rien ne change**.

Le site et la messagerie sont deux services distincts, qui ne se croisent nulle
part :

- la messagerie dépend des **enregistrements MX** du domaine, qui pointent vers
  `mx1`, `mx2` et `mx3.mail.ovh.net` ;
- le site dépend des fichiers déposés à la racine web.

Le déploiement se contente d'envoyer des fichiers par FTP à l'hébergement qui
sert déjà `aymericpataud.fr`. **Aucun enregistrement DNS n'est modifié, aucun
MX n'est touché.** L'hébergement reste au nom d'Aymeric, chez son prestataire
actuel : le site n'est pas « hébergé chez Teddy », il est simplement déployé
par lui.
