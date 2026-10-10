# Trace écrite — Séance 1 : Mesurer pour régler : étalonner le capteur et lire un journal

!!! info "3e · Projet jardin sec · le système complet et son bilan · Séance 1 sur 3"

    Question de la séance : *Comment s'assurer que les mesures du capteur sont fiables avant de leur confier l'arrosage ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 1](seance-1.md).

    [Trace écrite à imprimer (PDF)](traces/3e-jardin-seance1-trace.pdf)

## Ce que je dois retenir

### Étalonner un capteur

Un capteur donne un nombre ; pour l'interpréter, on l'étalonne : on relève sa valeur dans des états connus. Le capteur du kit donne environ 200 dans la terre sèche et 600 dans la terre arrosée.

Chaque mesure varie un peu : on fait plusieurs relevés, après stabilisation, et on calcule la moyenne. La profondeur du capteur doit rester la même, sinon l'étalonnage ne vaut plus.

L'humidité en % se calcule par 100 × (valeur − 200) ÷ 400 : 30 % correspond à 320, 50 % à 400.

### Lire un journal de données

Le journal enregistre les mesures à intervalles réguliers (ici toutes les 30 minutes). Il permet de vérifier ce que le système a fait, après coup.

Deux défauts apparaissent : une valeur aberrante (0 entre 319 et 326) fait arroser pour rien, et une valeur qui reste autour du seuil unique fait démarrer et arrêter la pompe sans cesse.

La médiane de trois mesures successives élimine une valeur aberrante isolée.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **étalonnage** | le relevé de la valeur d'un capteur dans des états connus, pour pouvoir interpréter ses mesures |
| **journal de données** | l'enregistrement daté et régulier des mesures d'un système |
| **valeur aberrante** | une mesure impossible ou isolée, due à une panne ou à un faux contact |
| **médiane** | la valeur du milieu quand on range des valeurs dans l'ordre |

## Les erreurs à ne pas commettre

- Se fier à un seul relevé : la mesure varie, il faut une moyenne.
- Croire toutes les valeurs du journal : une valeur isolée et impossible est une aberration.
- Confondre moyenne et médiane : la moyenne de 319, 0 et 326 vaut 215, la médiane 319.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'exercice autocorrectif de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Analyser | 1, 2, 3, 4, 5 |
| **T2.1** | Décrire et caractériser l'organisation interne d'un objet ou d'un système technique et ses échanges avec son environnement | Identifier | 6, 7, 8, 9, 10 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'exercice autocorrectif :material-arrow-right:](exercices-seance-1.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-1.md){ .md-button }
