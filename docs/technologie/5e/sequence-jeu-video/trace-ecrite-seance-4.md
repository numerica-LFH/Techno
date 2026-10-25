# Trace écrite — Séance 4 : Score, vies, fin de partie et chasse aux bogues

!!! info "5e · Séquence projet · Inventer un jeu vidéo · Séance 4 sur 8"

    Question de la séance : *Comment le jeu compte-t-il les points et sait-il que la partie est finie ?*

    Même texte que le bloc « À retenir » de la [séance 4](seance-4.md). La fiche imprimée reprend ce texte avec des trous à compléter.

    [Trace écrite à imprimer (PDF)](traces/5e-jeu-video-seance4-trace.pdf)

## À retenir

### Score, vies, fin de partie et chasse aux bogues

Une variable doit être **initialisée** : on lui donne sa valeur de départ au clic sur le drapeau vert.

La fin de partie est une condition : **vies < 1** ou **score > 19**. Les blocs **et**, **ou**, **non** sont des **opérateurs logiques** qui combinent des conditions.

Un **bogue** est une erreur de programme. Pour le trouver, je **teste** ; je corrige une erreur à la fois, puis je teste à nouveau.

Au clic sur le drapeau vert, on **initialise** les variables.

La partie est perdue quand vies < **1**.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **initialiser** | donner à une variable sa valeur de départ, au clic sur le drapeau vert |
| **bogue** | une erreur dans un programme, qui produit un comportement inattendu |
| **tester** | faire fonctionner le programme dans une situation choisie pour vérifier ce qu'il fait |

## Les erreurs à ne pas commettre

- Oublier d'initialiser le score : il continue d'une partie à l'autre.
- Écrire « vies = 0 » quand les vies peuvent sauter de 1 à -1 : « vies < 1 » est plus sûr.
- Corriger plusieurs bogues d'un coup : on ne sait plus quelle modification a réparé ou cassé le jeu.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 1, 2, 6, 7, 8, 9 |
| **T2.2** | Identifier un dysfonctionnement d'un objet technique et y remédier | Analyser | 3, 4, 5, 10, 11, 12 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-4.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-4.md){ .md-button }
