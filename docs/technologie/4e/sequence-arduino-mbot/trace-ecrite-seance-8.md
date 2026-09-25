# Trace écrite — Séance 8 : Étalonner les déplacements du robot

!!! info "4e · Séquence 4 · De la carte Arduino au robot mBot · Séance 8 sur 10"

    Question de la séance : *Comment obtenir d'un robot un déplacement précis ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 8](seance-8.md).

    [Trace écrite à imprimer (PDF)](traces/4e-arduino-mbot-seance8-trace.pdf)

## Ce que je dois retenir

### Pourquoi étalonner

Le mBot n'a pas de capteur qui mesure la distance parcourue par ses roues. Un programme « avancer pendant 1 seconde » donne une distance qui varie avec le sol, la charge des piles et les glissements.

### Mesures répétées et moyenne

On fait plusieurs essais pour un même réglage et on calcule la moyenne des mesures. On en déduit la vitesse du robot en cm/s, puis la durée nécessaire : durée = distance ÷ vitesse. On étalonne de même la durée d'un quart de tour.

### S'appuyer sur un capteur

Plutôt qu'un temps fixé, on peut arrêter le robot sur une mesure : « avancer, attendre jusqu'à ce que la distance soit inférieure à 10 cm, arrêter ». Le robot réagit alors à son environnement réel.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **étalonnage** | la série de mesures qui relie un réglage (durée, puissance) à un résultat (distance, angle) |
| **moyenne** | la somme des mesures divisée par leur nombre ; elle atténue les écarts d'un essai à l'autre |
| **vitesse** | la distance parcourue par seconde, ici en cm/s |
| **attendre jusqu'à ce que** | un bloc qui bloque le programme tant qu'une condition est fausse |

## Les erreurs à ne pas commettre

- Se fier à un seul essai.
- Confondre la durée et la distance dans le programme : mBlock attend une durée en secondes.
- Régler le seuil d'arrêt trop bas : le robot glisse et touche l'obstacle.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Analyser | 1, 2, 3, 6, 9, 10, 11, 12 |
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 4, 5, 7, 8 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-8.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-8.md){ .md-button }
