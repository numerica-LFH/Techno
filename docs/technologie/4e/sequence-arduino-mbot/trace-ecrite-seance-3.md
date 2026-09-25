# Trace écrite — Séance 3 : Un bouton pour commander

!!! info "4e · Séquence 4 · De la carte Arduino au robot mBot · Séance 3 sur 10"

    Question de la séance : *Comment la carte sait-elle qu'on appuie sur un bouton ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 3](seance-3.md).

    [Trace écrite à imprimer (PDF)](traces/4e-arduino-mbot-seance3-trace.pdf)

## Ce que je dois retenir

### Lire un bouton

Un bouton poussoir est un capteur branché sur une entrée numérique. La broche lit deux états : 1 (HIGH, 5 V) quand le bouton est enfoncé, 0 (LOW, 0 V) quand il est relâché. Dans le programme, digitalRead(2) renvoie cet état.

La résistance de rappel de 10 kilohms, entre la broche et GND, ramène la broche à 0 quand le bouton est relâché. Sans elle, la broche est flottante et la valeur lue change au hasard.

### Voir ce que lit la carte

Serial.begin(9600) ouvre la liaison avec l'ordinateur ; Serial.println(valeur) envoie une valeur que le moniteur série affiche. C'est le moyen de vérifier ce que la carte mesure.

### Choisir entre deux actions

La structure if (condition) { instructions } else { autres instructions } exécute le premier bloc si la condition est vraie, le second sinon. Dans l'algorigramme, c'est le losange avec ses deux sorties, oui et non. On compare avec ==, on affecte avec =.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **entrée numérique** | une broche qui lit seulement deux états : 1 (HIGH, 5 V) ou 0 (LOW, 0 V) |
| **résistance de rappel** | une résistance qui ramène la broche à 0 quand le bouton est relâché, pour éviter un état flottant |
| **moniteur série** | une fenêtre qui affiche les valeurs envoyées par la carte à l'ordinateur |
| **si sinon** | une structure qui choisit entre deux actions selon qu'une condition est vraie ou fausse |

## Les erreurs à ne pas commettre

- Oublier la résistance de rappel : le bouton semble appuyé au hasard.
- Écrire `if (etat = HIGH)` : la variable est modifiée au lieu d'être comparée.
- Oublier Serial.begin() dans setup() : le moniteur n'affiche rien.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T2.3** | Comprendre et modifier un programme associé à une fonctionnalité | Comprendre | 2, 5, 6, 8, 9, 12 |
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 7, 10, 11 |
| **T2.1** | Décrire l'organisation interne d'un objet et ses échanges avec son environnement | Identifier | 1, 3, 4 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-3.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-3.md){ .md-button }
