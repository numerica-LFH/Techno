# Trace écrite — Séance 2 : Une LED sur plaque d'essai

!!! info "3e · Séquence 4 · De la carte Arduino au robot mBot · Séance 2 sur 10"

    Question de la séance : *Comment brancher une LED sur la carte et la commander sans rien abîmer ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 2](seance-2.md).

    [Trace écrite à imprimer (PDF)](traces/3e-arduino-mbot-seance2-trace.pdf)

## Ce que je dois retenir

### Brancher une LED

Une LED est une diode : elle ne laisse passer le courant que dans un sens, de la patte longue (anode) vers la patte courte (cathode). Elle se branche en série avec une résistance de 220 ohms qui limite le courant et la protège, ainsi que la broche de la carte.

Sur la plaque d'essai, les trous d'une même rangée sont reliés : on y enfiche les composants sans soudure.

### Téléverser un programme

Dans l'Arduino IDE, on choisit le type de carte et le port, puis on vérifie : le logiciel compile le programme et signale les erreurs de syntaxe. Le téléversement envoie ensuite le programme dans la mémoire de la carte. La carte l'exécute seule dès qu'elle est alimentée, même débranchée de l'ordinateur.

### Chercher un bogue

Quand le résultat n'est pas celui attendu, on cherche dans trois directions : le montage (sens de la LED, broche, fils), le programme (point-virgule, delay manquant), les réglages du logiciel (carte, port). On change une seule chose à la fois, puis on teste.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **plaque d'essai** | une plaque percée où l'on enfiche les composants sans soudure ; les trous d'une même rangée sont reliés |
| **résistance** | un composant qui limite le courant ; ici 220 ohms pour protéger la LED |
| **polarité** | le sens de branchement : la patte longue de la LED (anode) va vers le + |
| **téléverser** | envoyer le programme de l'ordinateur vers la mémoire de la carte par le câble USB |

## Les erreurs à ne pas commettre

- Brancher une LED sans résistance.
- Brancher le câble USB avant d'avoir fait vérifier le montage.
- Oublier le point-virgule à la fin d'une instruction.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 1, 2, 3, 4, 5, 6, 7, 11, 12, 13 |
| **T2.2** | Identifier un dysfonctionnement d'un objet technique et y remédier | Analyser | 8, 9, 10 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-2.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-2.md){ .md-button }
