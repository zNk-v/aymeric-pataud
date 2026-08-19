# Mise en ligne

## Le principe

Le domaine `aymericpataud.fr` **reste enregistré chez OVH**, et sa zone DNS
aussi. On change uniquement les deux enregistrements `A` pour qu'ils pointent
vers l'hébergement Hostinger.

**Les mails ne peuvent pas casser** : dans une zone DNS, l'enregistrement `A`
dit où est le site, les `MX` disent où vont les mails. Ce sont deux lignes
distinctes. On touche la première, on ne touche pas les secondes.

État actuel de la zone, à préserver tel quel :

```
MX   1 mx1.mail.ovh.net · 5 mx2.mail.ovh.net · 100 mx3.mail.ovh.net
TXT  v=spf1 include:mx.ovh.com ~all
NS   dns101.ovh.net · ns101.ovh.net
```

**Le retour arrière est immédiat** : le WordPress reste en place chez OVH, il
n'est jamais écrasé. Si quelque chose cloche, on remet l'ancienne IP
`145.239.37.162` dans les deux `A` et l'ancien site revient.

---

## Dans l'ordre

### 1. Vérifier le renouvellement du domaine — urgent

`aymericpataud.fr` expire le **11 septembre 2026**. S'il n'est pas renouvelé,
le site et les mails s'arrêtent le même jour, quelle que soit la suite. À
vérifier dans l'espace OVH d'Aymeric avant tout le reste.

### 2. Sauvegarder le WordPress

Sauvegarde complète, fichiers et base, depuis le panneau OVH. Le contenu
éditorial est déjà archivé dans [`archive-wordpress/`](../archive-wordpress),
mais ça ne remplace pas une sauvegarde de l'hébergeur.

### 3. Brancher le formulaire de contact

Aujourd'hui, valider le formulaire ouvre le logiciel de messagerie du visiteur.
Sur mobile, un visiteur sans client mail configuré ne peut rien envoyer.

Une ligne dans [`src/components/ContactForm.tsx`](../src/components/ContactForm.tsx) :

```ts
const ENDPOINT: string | null = "https://api.web3forms.com/submit";
```

Web3Forms : 250 envois par mois, gratuit, pas de compte à créer.

### 4. Renseigner les accès de déploiement

Le site est déjà créé côté hébergeur. Les valeurs à reporter se lisent dans
son panneau, `Fichiers > Comptes FTP`. **Ce dépôt est public : aucune de ces
valeurs ne doit y être écrite.**

Dans le dépôt GitHub, `Settings > Secrets and variables > Actions` :

| | Nom | Où le trouver |
|---|---|---|
| Secret | `FTP_SERVER` | « IP FTP (nom d'hôte) », sans le préfixe `ftp://` |
| Secret | `FTP_USERNAME` | « Nom d'utilisateur FTP » |
| Secret | `FTP_PASSWORD` | à définir via « Changer le mot de passe du FTP » |
| Variable | `DEPLOY_FTP` | `true` |
| Variable | `FTP_DIR` | `./public_html/` |

Tant que `DEPLOY_FTP` n'est pas à `true`, le workflow ne fait rien.

### 5. Déployer et vérifier sur la préversion

Lancer le workflow Production, puis ouvrir l'URL de préversion fournie par
l'hébergeur. Le site doit s'afficher entièrement avant qu'on touche au DNS.

Cette préversion est traitée à part dans le `.htaccess` : elle est exemptée de
la redirection vers le domaine définitif, sans quoi elle renverrait vers
l'ancien site et ne servirait à rien. Elle est aussi envoyée en `noindex`,
pour ne pas créer de contenu dupliqué aux yeux de Google.

### 6. Seulement ensuite, basculer les deux enregistrements

Dans la zone DNS OVH :

| Type | Nom | Nouvelle valeur |
|---|---|---|
| A | `@` | l'IP de l'hébergement |
| CNAME | `www` | `aymericpataud.fr` |

**Ne rien toucher d'autre.** Ni les `MX`, ni le `TXT` du SPF, ni les
serveurs de noms. L'ancienne valeur du `A` est `145.239.37.162` : c'est elle
qu'il faut remettre pour revenir en arrière.

Le certificat SSL se génère seul une fois le domaine résolu.

### 7. Après la bascule

- Vérifier les 22 redirections 301 une par une.
- Déclarer `sitemap.xml` dans la Search Console et surveiller les 404.
- Mettre à jour le lien du profil LinkedIn.

---

## Les deux builds

Une seule variable, `PAGES`, sépare l'aperçu de la production :

| | Aperçu (`PAGES=true`) | Production |
|---|---|---|
| Destination | GitHub Pages | Hostinger |
| Préfixe d'URL | `/aymeric-pataud` | aucun |
| Indexation | `noindex` | indexable |
| Emplacements réservés | visibles | **invisibles** |

Les encadrés en pointillés qui listent ce qu'Aymeric doit encore fournir ne
sortent donc jamais en production. Le site peut partir en ligne sans attendre
les photos.

Le workflow refuse d'envoyer quoi que ce soit si le build ressemble à un
aperçu : présence d'un `noindex`, d'un emplacement réservé ou du préfixe
d'URL. Ces trois contrôles sont écrits en `if/then` et non en
`grep && exit`, parce qu'un `grep` qui ne trouve rien renvoie 1 et ferait
échouer l'étape dans le cas où tout va bien.
