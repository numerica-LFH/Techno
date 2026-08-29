# Le Web

## Ce qu'on cherche

Une page web n'existe pas comme un fichier fini quelque part. Elle est
assemblée à chaque visite. Par qui, à partir de quoi ?

## Notions du programme

- HTML, CSS, ce que fait le navigateur
- URL, requête HTTP, réponse du serveur
- Hypertexte et liens
- Moteurs de recherche et indexation
- Notion de rang d'une page
- Paramètres de confidentialité, cookies

## Organisation

Deux séances de 55 minutes, placées dans la même semaine, sur les deux créneaux
du cycle. Les fichiers écrits en séance 1 servent en séance 2 : ils restent sur
les postes entre les deux.

| Séance | Contenu | Ce qu'on en garde |
|---|---|---|
| 1 | Activité 1 : écrire une page, puis la mettre en forme | Un mini-site de deux pages liées, et un fichier CSS |
| 2 | Activités 2 et 3 : inspecter un site, classer des pages | L'échange navigateur / serveur, et la notion de rang |

La séance qui précède la séquence, [aux origines d'Internet](internet.md#seance-dintroduction-darpanet-au-web),
sépare le réseau et le service. Elle n'est pas facultative : sans elle, « aller
sur Internet » et « ouvrir une page » restent la même chose pour la plupart des
élèves.

## Activités

### Activité 1 : écrire une page

Éditeur : **Phoenix Code**, à l'adresse [phcode.dev](https://phcode.dev/). Il
tourne dans le navigateur, il n'y a rien à installer. Voir
[Les outils](../ressources/outils.md#ecrire-des-pages-web).

**a.** Créer `page1.html` et `page2.html` **dans un même dossier**, puis
remplacer chaque ligne commençant par `<!` par le code HTML correspondant.

```html
<!DOCTYPE html>
<html>
    <head>
        <! mettre le titre "page 1">
    </head>
    <body>
        <! titre de niveau 1 "Sciences Numériques et Technologie">
        <! titre de niveau 2 "Page 1">
        <! insérer un lien hypertexte vers https://www.meteofrance.com>
        <! insérer un lien hypertexte vers page2.html>
    </body>
</html>
```

Dans `page2.html` : même structure, titre « page 2 », titre de niveau 2
« Page 2 », et un lien vers `page1.html` présenté avec une puce.

**b.** Ouvrir `page1.html` dans le navigateur. Les liens fonctionnent-ils, et à
quelle condition ?

**c.** Créer `style.css` dans le même dossier, et ajouter dans le `<head>` des
deux pages :

```html
<link href="style.css" rel="stylesheet" type="text/css">
```

Objectif : fond rouge sombre, titre de niveau 1 blanc avec une marge de 50 px,
titre de niveau 2 centré, liens bleus. Les codes hexadécimaux se trouvent sur
[htmlcolorcodes.com/fr](https://htmlcolorcodes.com/fr/).

!!! note "Là où ça bloque"

    Balise fermante oubliée, guillemets manquants autour de `href`, fichier
    enregistré en `.txt` par un éditeur mal réglé, et surtout les deux fichiers
    rangés dans des dossiers différents : `page2.html` devient introuvable. Le
    lien vers Météo France exige une adresse complète avec `https://`, le lien
    interne se contente du nom du fichier. C'est toute la différence entre une
    adresse absolue et une adresse relative.

Ce qu'on en conclut : le HTML donne le contenu et la structure, le CSS donne la
présentation, et c'est le navigateur qui assemble les deux.

### Activité 2 : inspecter une page existante

Ouvrir un site au choix, puis les outils de développement du navigateur (clic
droit, « Inspecter », ou `F12`) et l'onglet **Réseau**.

| Ce qu'on cherche | Ce qu'on trouve |
|---|---|
| L'URL complète | Protocole, nom du serveur, chemin de la ressource |
| Trois balises dans le code source | Les mêmes que celles écrites en activité 1 |
| Le nombre de fichiers demandés | Plusieurs dizaines, souvent des centaines |
| Le code de réponse | 200 trouvé, 404 inexistant, 301 redirigé, 500 en erreur |
| Un cookie | Ce que le site dépose pour reconnaître le visiteur |

Une page n'est pas un fichier : c'est le résultat de beaucoup de requêtes.

!!! warning "Code source affiché n'est pas code source envoyé"

    Sur un site moderne, une partie de la page est fabriquée par du JavaScript
    après son arrivée. L'onglet *Éléments* montre le résultat assemblé, l'onglet
    *Réseau* montre ce qui a réellement été envoyé par le serveur.

### Activité 3 : comment un moteur classe les résultats

**a.** Dessiner le graphe orienté des liens du mini-site de l'activité 1. Trois
sommets : `page1`, `page2`, `meteofrance.com`. Rappel : page1 pointe vers page2
et vers meteofrance.com, page2 pointe vers page1.

**b.** Compter les liens entrants de chaque sommet.

**c.** Si un moteur classait ces trois pages uniquement d'après ce nombre, quel
serait l'ordre ?

Il n'y en a pas : les trois sommets ont exactement un lien entrant. C'est le
ressort de l'activité. Le comptage seul ne départage rien, et il est de toute
façon insuffisant — un lien venant d'un site très visité ne vaut pas un lien
venant d'une page inconnue, n'importe qui peut fabriquer des centaines de pages
qui pointent vers la sienne, et le contenu de la page n'entre pas du tout dans
le calcul. Un moteur combine la popularité mesurée sur le graphe, la pertinence
du contenu, et d'autres critères encore.

Prolongement en cinq minutes : ajouter au tableau un quatrième sommet qui pointe
vers page2, le classement se départage aussitôt. Puis demander qui a créé ce
quatrième site.

## À retenir

Le navigateur demande, le serveur répond, le navigateur affiche. Tout le reste
est une variation sur ces trois temps.

## Évaluation

Dix minutes, en début du créneau suivant, sur un questionnaire en ligne corrigé
automatiquement. Dix questions couvrant les trois séances : origines d'Internet,
HTML et CSS, échange avec le serveur, rang d'une page. Chaque mauvaise réponse
renvoie l'élève au passage de la fiche concerné.

## Pour aller plus loin

- HTTPS et le chiffrement de la connexion
- Ce que révèle une requête (adresse IP, en-têtes, cookies)
