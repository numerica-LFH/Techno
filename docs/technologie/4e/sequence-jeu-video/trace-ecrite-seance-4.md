# Trace écrite — Séance 4 : Score, vies, fin de partie et chasse aux bogues

!!! info "4e · Séquence projet · Inventer un jeu vidéo · Séance 4 sur 8"

    Question de la séance : *Comment le jeu compte-t-il les points et sait-il que la partie est finie ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 4](seance-4.md).

    [Trace écrite à imprimer (PDF)](traces/4e-jeu-video-seance4-trace.pdf)

## Ce que je dois retenir

### Initialiser les variables

Au clic sur le drapeau vert, la scène initialise les variables : score à 0, vies à 3, vitesse à 5. Sans initialisation, une nouvelle partie reprendrait les valeurs de la précédente.

### Compter une seule fois

Quand la mangue touche le panier, le score augmente de 1 et la mangue repart aussitôt en haut. Si elle restait sur le panier, le test serait vrai à chaque tour de boucle et le score augmenterait sans arrêt.

### Finir la partie

La scène attend que la condition « vies < 1 ou score > 19 » soit vraie. Elle affiche alors l'écran Perdu ou Gagné, puis « stop tout » arrête tous les scripts. « et », « ou », « non » sont des opérateurs logiques.

### Tester et corriger

Un bogue est une erreur de programme. On le trouve en testant, c'est-à-dire en faisant fonctionner le jeu dans une situation choisie. On corrige une erreur à la fois et on teste après chaque correction. On enregistre ensuite une nouvelle version, CUEILLETTE-v2.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **initialiser** | donner à une variable sa valeur de départ, au clic sur le drapeau vert |
| **bogue** | une erreur dans un programme, qui produit un comportement inattendu |
| **tester** | faire fonctionner le programme dans une situation choisie pour vérifier ce qu'il fait |
| **opérateur logique** | un bloc « et », « ou », « non » qui combine des conditions |

## Les erreurs à ne pas commettre

- Oublier d'initialiser le score : il continue d'une partie à l'autre.
- Écrire « vies = 0 » quand les vies peuvent sauter de 1 à -1 : « vies < 1 » est plus sûr.
- Corriger plusieurs bogues d'un coup : on ne sait plus quelle modification a réparé ou cassé le jeu.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 1, 2, 6, 7, 8, 9, 12 |
| **T2.2** | Identifier un dysfonctionnement d'un objet technique et y remédier | Analyser | 3, 4, 5, 10, 11, 13 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-4.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-4.md){ .md-button }
