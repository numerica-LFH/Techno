# Trace écrite — Séance 4 : Le jeu « attrape la lumière »

!!! info "3e · Séquence 4 · De la carte Arduino au robot mBot · Séance 4 sur 10"

    Question de la séance : *Comment programmer un jeu de réflexe juste, où l'on ne peut pas tricher ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 4](seance-4.md).

    [Trace écrite à imprimer (PDF)](traces/3e-arduino-mbot-seance4-trace.pdf)

## Ce que je dois retenir

### Un jeu programmé sur la carte

Le jeu « attrape la lumière » utilise deux variables, score et vies, comme le jeu vidéo fait dans Scratch. La LED s'allume après une attente tirée au hasard par random(1000, 3000), entre 1 et 3 secondes. Le joueur a 500 ms pour appuyer ; millis() donne le temps écoulé depuis le démarrage et permet de mesurer cette fenêtre.

### Trouver une triche par les tests

Un programme se teste dans les situations normales et dans les situations anormales. En gardant le bouton enfoncé, on gagne à chaque fois : la version 1 vérifie que le bouton est enfoncé pendant la fenêtre, pas qu'il était relâché avant.

### Corriger et vérifier

La version 2 vérifie le bouton juste avant d'allumer la LED : s'il est déjà enfoncé, le joueur perd une vie. Elle ajoute une victoire à 10 points. Après la correction, on refait le test de la triche et une partie normale, pour vérifier qu'on n'a rien cassé.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **variable** | une case mémoire nommée ; ici score et vies |
| **nombre aléatoire** | un nombre tiré au hasard ; random(1000, 3000) donne un nombre entre 1 000 et 2 999 |
| **millis()** | le temps écoulé depuis le démarrage de la carte, en millisecondes |
| **cas de test** | une situation choisie pour vérifier le programme, y compris une utilisation anormale |

## Les erreurs à ne pas commettre

- Tester seulement les parties normales : les triches passent inaperçues.
- Corriger sans refaire le test qui avait révélé le problème.
- Croire que random(1000, 3000) peut donner 3 000 : la borne haute est exclue.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Analyser | 4, 5, 6, 7, 9, 13 |
| **T2.2** | Identifier un dysfonctionnement d'un objet technique et y remédier | Analyser | 8, 11 |
| **T2.3** | Comprendre et modifier un programme associé à une fonctionnalité | Comprendre | 1, 2, 3, 10, 12 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-4.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-4.md){ .md-button }
