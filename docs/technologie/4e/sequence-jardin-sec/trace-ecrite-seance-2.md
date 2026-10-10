# Trace écrite — Séance 2 : Qui décide d'arroser ? Les deux chaînes et la règle « si »

!!! info "4e · Projet jardin sec · automatiser l'arrosage · Séance 2 sur 3"

    Question de la séance : *Comment le système sait-il qu'il faut arroser ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 2](seance-2.md).

    [Trace écrite à imprimer (PDF)](traces/4e-jardin-seance2-trace.pdf)

## Ce que je dois retenir

### Les deux chaînes du système

La chaîne d'information acquiert l'humidité de la terre (capteur), la traite (carte Arduino et son programme) et communique un ordre (sortie D7 vers le relais).

La chaîne d'énergie alimente le système (alimentation 12 V), distribue l'énergie (relais), la convertit (pompe) et la transmet jusqu'aux plantes (tuyau et goutteurs). Le relais fait le lien entre les deux chaînes.

### Du capteur à la décision

Le capteur renvoie un nombre entre 0 et 1023. L'étalonnage donne deux repères : 200 dans la terre sèche, 600 dans la terre arrosée. On calcule l'humidité en % = 100 × (valeur − 200) ÷ 400.

Pour nos plantes, on arrose sous 30 %, soit une valeur de 320 : c'est le seuil. L'algorigramme se lit ainsi : lire le capteur ; si la valeur est inférieure à 320, alors faire tourner la pompe 3 s ; attendre ; recommencer.

On attend longtemps après un arrosage, car l'eau met du temps à atteindre le capteur.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **capteur** | le composant qui transforme une grandeur physique (ici l'humidité de la terre) en information |
| **actionneur** | le composant qui transforme l'énergie en action (ici la pompe qui fait circuler l'eau) |
| **chaîne d'information** | acquérir, traiter, communiquer : le trajet de l'information dans le système |
| **seuil** | la valeur limite à partir de laquelle le programme change de décision |

## Les erreurs à ne pas commettre

- Placer le relais dans la chaîne d'information seulement : il reçoit un ordre mais commande l'énergie.
- Confondre capteur et actionneur : le capteur mesure, l'actionneur agit.
- Arroser « jusqu'à ce que le capteur soit humide » : l'eau arrive trop lentement, on noierait les plantes.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'exercice autocorrectif de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T2.1** | Décrire et caractériser l'organisation interne d'un objet ou d'un système technique et ses échanges avec son environnement | Identifier | 1, 2, 3, 4, 5, 10 |
| **T2.3** | Comprendre et modifier un programme associé à une fonctionnalité | Appliquer | 6, 7, 8, 9 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'exercice autocorrectif :material-arrow-right:](exercices-seance-2.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-2.md){ .md-button }
