# Trace écrite — Séance 3 : Programmer l'arrosage avec le kit Grove, puis l'évaluation

!!! info "4e · Projet jardin sec · automatiser l'arrosage · Séance 3 sur 3"

    Question de la séance : *Comment régler le programme pour qu'il n'arrose que quand nos plantes en ont besoin ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 3](seance-3.md).

    [Trace écrite à imprimer (PDF)](traces/4e-jardin-seance3-trace.pdf)

## Ce que je dois retenir

### Du programme à l'essai

Le programme d'arrosage reprend l'algorigramme : il lit la valeur du capteur sur A0, la compare au seuil de 320 ; si elle est plus petite, il met la sortie D7 à l'état haut pendant 3 s (le relais lance la pompe), puis il attend avant de relire.

Les réglages sont des constantes nommées au début du programme (CAPTEUR, RELAIS, SEUIL, DUREE_ARROSAGE, ATTENTE). Pour arroser plus tôt, on augmente SEUIL.

On vérifie le programme, on le téléverse dans la carte, puis on valide par des essais : dans la terre sèche, la pompe tourne ; dans la terre arrosée, elle reste arrêtée.

### Ce que la séquence m'a appris

Pour automatiser l'arrosage, on mesure d'abord (débit, efficience, pluie), on choisit le goutte à goutte, on décrit le système par ses deux chaînes, on fixe un seuil par étalonnage, puis on programme et on teste.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **programme** | la suite d'instructions que la carte exécute |
| **constante** | une valeur fixe nommée au début du programme, que l'on change en un seul endroit |
| **téléverser** | envoyer le programme de l'ordinateur vers la carte |
| **essai** | le test du système dans des conditions choisies, pour vérifier qu'il fait ce qui est prévu |

## Les erreurs à ne pas commettre

- Modifier le seuil à plusieurs endroits du programme au lieu de la constante.
- Oublier de remettre l'attente à 30 minutes après l'essai : dans le jardin, on arroserait trop souvent.
- Téléverser sans avoir vérifié : les erreurs s'affichent alors au milieu de l'essai.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'exercice autocorrectif de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T2.3** | Comprendre et modifier un programme associé à une fonctionnalité | Appliquer | 1, 2, 3, 4, 5 |
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Analyser | 6, 7, 8 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'exercice autocorrectif :material-arrow-right:](exercices-seance-3.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-3.md){ .md-button }
