# Trace écrite — Séance 3 : Le programme à deux seuils, puis l'évaluation

!!! info "3e · Projet jardin sec · le système complet et son bilan · Séance 3 sur 3"

    Question de la séance : *Comment empêcher le système d'arroser par petits coups rapprochés et de réagir à une mesure fausse ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 3](seance-3.md).

    [Trace écrite à imprimer (PDF)](traces/3e-jardin-seance3-trace.pdf)

## Ce que je dois retenir

### Le programme final

Le programme lit la valeur du capteur. Il écarte d'abord les valeurs impossibles (filtre : sous 50 ou au-dessus de 950). Sinon, si la valeur est sous 320 (30 %), il passe en période d'arrosage ; si elle dépasse 400 (50 %), il l'arrête. Entre les deux, la décision précédente est gardée : c'est l'hystérésis.

La variable `arrosage` mémorise l'état d'un tour de boucle à l'autre. Pendant la période d'arrosage, la pompe donne une dose de 3 s, puis le programme attend avant de relire.

Chaque mesure est écrite dans le moniteur série (temps ; valeur ; arrosage) : ce journal permet de vérifier, par des essais, que le système fait ce qui est prévu.

### Ce que la séquence m'a appris

On fiabilise les mesures (étalonnage, moyenne, médiane), on prouve le résultat par un bilan chiffré (93 % d'économie, contrainte FC1 respectée), puis on améliore le programme (hystérésis, filtre). L'amélioration est logicielle : aucun matériel n'a été ajouté.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **hystérésis** | le réglage à deux seuils : on démarre à un seuil bas et on s'arrête à un seuil haut |
| **variable** | un nom qui garde une valeur en mémoire et peut changer pendant le programme |
| **filtre** | la partie du programme qui écarte les valeurs impossibles |
| **condition** | le test qui choisit entre plusieurs actions (si, sinon si, sinon) |

## Les erreurs à ne pas commettre

- Oublier la variable d'état : sans mémoire, l'hystérésis ne fonctionne pas.
- Inverser les seuils : on démarre au seuil bas et on s'arrête au seuil haut.
- Laisser passer une valeur aberrante : sans filtre, un faux contact fait arroser.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'exercice autocorrectif de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 1, 2, 3, 4, 5, 6 |
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Analyser | 7, 8, 9 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'exercice autocorrectif :material-arrow-right:](exercices-seance-3.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-3.md){ .md-button }
