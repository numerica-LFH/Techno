# Séance 2 — Croiser deux tables

!!! info "Séquence 3 · séance 2 sur 3 · 55 minutes"

    Clé de fusion, données ouvertes, ce qu'un jeu de données ne dit pas.

## Ce qu'on a cherché

Deux fichiers qui partagent une colonne. On les fusionne, puis on va chercher un vrai jeu de données
sur un portail public pour voir ce qu'il permet et ce qu'il ne permet pas.

## Trace écrite

### Les mots de la séance

| Mot | Ce qu'il désigne |
|---|---|
| **Clé** | La colonne commune qui permet de relier les lignes de deux tables |
| **Fusion** | La table obtenue en rapprochant les deux, ligne par ligne |
| **Ligne orpheline** | Une ligne dont la clé n'existe pas dans l'autre table |
| **Données ouvertes** | Un jeu de données publié et librement réutilisable |
| **Licence** | Ce qui dit ce que l'on a le droit de faire du fichier |

### La fusion

La table des stations donne ville, département et altitude. La table des relevés donne date et
température. Les deux partagent `id_station`, qui sert de **clé**.

La table fusionnée compte **une ligne par relevé**, pas une par station : six relevés donnent six
lignes, quelle que soit la taille de la table des stations.

### Ce que je retiens

Pour croiser deux tables, il faut une colonne commune. Le nombre de lignes de chacune n'a aucune
importance. Une ligne dont la clé n'existe pas dans l'autre table reste orpheline : elle existe,
mais on ne peut pas la compléter.

La station la plus haute est-elle la plus fraîche ? La tendance va dans ce sens, et un relevé la
contredit. La bonne réponse n'est ni oui ni non : six lignes ne suffisent pas à conclure. Refuser de
conclure sur un échantillon minuscule fait partie du travail.

Une question ne peut être traitée avec un jeu de données que si elle ne mobilise que des
descripteurs présents dans le fichier. Écrire une question à laquelle le fichier ne répond pas est
aussi instructif que d'en écrire une à laquelle il répond.

Retirer les noms d'un jeu de données ne garantit rien : le croisement de plusieurs descripteurs,
âge, code postal, date, peut désigner une seule personne.

### Ce que je dois savoir refaire

- Identifier la clé qui relie deux tables et dire combien de lignes aura la fusion.
- Expliquer ce qu'est une ligne orpheline.
- Relever les métadonnées d'un jeu de données : titre, producteur, date, dimensions, licence.
- Écrire une question à laquelle un jeu de données permet de répondre, et une à laquelle il ne
  permet pas de répondre.

## Pour aller plus loin

- Coût énergétique du stockage.
- Anonymisation et ré-identification.

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
