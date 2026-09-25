# Trace écrite — Séance 2 : Faire bouger un lutin au clavier

!!! info "3e · Séquence projet · Inventer un jeu vidéo · Séance 2 sur 8"

    Question de la séance : *Comment un lutin sait-il où il est, et comment le faire bouger au clavier ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 2](seance-2.md).

    [Trace écrite à imprimer (PDF)](traces/3e-jeu-video-seance2-trace.pdf)

## Ce que je dois retenir

### La scène est un repère

La scène de Scratch mesure 480 pas sur 360. Le centre est le point (0 ; 0). L'abscisse x va de -240 à 240, l'ordonnée y va de -180 à 180. La position d'un lutin est donnée par ses coordonnées (x ; y).

Pour déplacer un lutin vers la droite, on ajoute un nombre positif à x ; vers la gauche, un nombre négatif.

### Boucle et condition

Une boucle répète les blocs placés à l'intérieur. « Répéter indéfiniment » tourne pendant toute la partie : c'est ce qui permet de tester les touches en permanence.

Une condition est un test qui vaut vrai ou faux. Le bloc « si alors » n'exécute son contenu que lorsque la condition est vraie, par exemple quand la flèche droite est pressée.

### La chute de la mangue

La mangue part d'une abscisse tirée au hasard, en haut de la scène, puis son ordonnée diminue de 5 à chaque tour de la boucle « répéter jusqu'à ce que », jusqu'à atteindre le bas. Plus le nombre retiré est grand, plus elle tombe vite.

### Enregistrer par versions

On enregistre le projet à chaque étape sous un nom numéroté : CUEILLETTE-v1, v2, v3. Si une modification casse le jeu, on repart de la version précédente.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **coordonnées** | le couple (x ; y) qui donne la position du lutin sur la scène |
| **boucle** | un bloc qui répète les blocs placés à l'intérieur |
| **condition** | un test qui vaut vrai ou faux ; le bloc « si alors » n'exécute son contenu que si c'est vrai |
| **version** | une copie enregistrée du projet à une étape donnée, par exemple CUEILLETTE-v1 |

## Les erreurs à ne pas commettre

- Mettre les blocs « si » hors de la boucle : les touches ne sont testées qu'une fois.
- Confondre x et y : x est horizontal, y est vertical.
- Écraser toujours le même fichier : une erreur fait perdre tout le travail.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T2.3** | Comprendre et modifier un programme associé à une fonctionnalité | Comprendre | 1, 2, 3, 4, 5, 6, 9, 13 |
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 7, 8, 10, 11, 12 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-2.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-2.md){ .md-button }
