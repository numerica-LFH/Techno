# Trace écrite — Séance 4 : Bilan : la maison qui s'éclaire, puis l'évaluation

!!! info "4e · Séquence Scratch · Prendre en main Scratch · Séance 4 sur 4"

    Question de la séance : *Comment un programme peut-il allumer la lumière d'une maison tout seul ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 4](seance-4.md).

    [Trace écrite à imprimer (PDF)](traces/4e-scratch-seance4-trace.pdf)

## Ce que je dois retenir

### Simuler l'éclairage avec des costumes

Le lutin Maison a deux costumes : maison éteinte et maison allumée. Changer de costume change l'image du lutin : c'est ainsi qu'on simule l'éclairage. Au clic sur le drapeau vert, on initialise la maison sur le costume « maison éteinte ».

### Réagir à un capteur

Le programme attend une information venue d'un capteur, puis il agit. Le micro mesure le volume sonore ; au-dessus du seuil de 30, « costume suivant » fait passer la maison d'éteinte à allumée, ou l'inverse. Si la classe est bruyante, on augmente le seuil.

### Bilan de la séquence

Un programme Scratch se lance par un événement, répète ses tests dans une boucle, décide avec des conditions et agit sur la scène (son, costume, mouvement). Avant de fermer TurboWarp, on enregistre le fichier .sb3 : c'est la même méthode pour toutes les missions du site.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **costume** | une des apparences d'un lutin ; changer de costume change son image |
| **initialiser** | donner l'état de départ au clic sur le drapeau vert (ici : maison éteinte) |
| **seuil** | la valeur à partir de laquelle le programme réagit |
| **variable** | une case qui garde une valeur ; ici la luminosité, réglée avec un curseur |

## Les erreurs à ne pas commettre

- Oublier d'initialiser : la maison reste allumée d'un essai à l'autre.
- Tester la touche une seule fois, hors de toute boucle : la lumière ne réagit plus après le premier appui.
- Placer le seuil dans le mauvais sens : « > 20 » allume la maison quand il fait jour.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'exercice autocorrectif de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 1, 2, 3, 7 |
| **T2.2** | Identifier un dysfonctionnement et y remédier | Analyser | 4, 5, 6, 8 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'exercice autocorrectif :material-arrow-right:](exercices-seance-4.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-4.md){ .md-button }
