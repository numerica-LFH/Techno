# Trace écrite — Séance 10 : Le défi du robot livreur

!!! info "3e · Séquence 4 · De la carte Arduino au robot mBot · Séance 10 sur 10"

    Question de la séance : *Comment programmer un robot qui livre des colis de façon fiable, et le prouver ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 10](seance-10.md).

    [Trace écrite à imprimer (PDF)](traces/3e-arduino-mbot-seance10-trace.pdf)

## Ce que je dois retenir

### Du cahier des charges au programme

Le robot livreur doit suivre la ligne, s'arrêter à moins de 10 cm d'un colis sans le toucher, compter et signaler ses livraisons, et fonctionner seul. Chaque exigence est reliée à un élément : suiveur de ligne, capteur à ultrasons, variable, LED et buzzer, mode téléversé.

### Le compteur de livraisons

La variable livraisons est initialisée à 0 au démarrage, avant la boucle. À chaque arrêt devant un colis, on ajoute 1. Une pause de 3 secondes évite de compter plusieurs fois le même colis.

### Tester pour prouver

Le test croisé, par un autre binôme et avec une grille commune sur 20 points, vérifie chaque exigence. Il désigne les améliorations à faire en priorité, en commençant par ce qui empêche la livraison.

### Des blocs au langage Arduino

mBlock traduit les blocs en langage Arduino avant de les téléverser : « ajouter 1 à livraisons » devient `livraisons = livraisons + 1;`, « attendre 3 secondes » devient `delay(3000);`, un « si alors » devient `if`.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **cahier des charges** | la liste des exigences que la solution doit respecter |
| **compteur** | une variable qui augmente de 1 à chaque événement, ici à chaque livraison |
| **test croisé** | l'évaluation d'une solution par un autre binôme, avec une grille commune |
| **critère** | un point précis et vérifiable de la grille |

## Les erreurs à ne pas commettre

- Initialiser le compteur dans la boucle : il revient à 0 à chaque tour.
- Oublier la pause après la livraison : un colis compte plusieurs fois.
- Juger le robot d'un autre binôme sans la grille : la note dépend alors de l'humeur.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.1** | Imaginer, concevoir et réaliser une ou des solutions en réponse à un besoin | Appliquer | 1, 2, 3 |
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Analyser | 8, 9 |
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 4, 5, 6, 7, 10 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-10.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-10.md){ .md-button }
