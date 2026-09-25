# Trace écrite — Séance 9 : Suivre une ligne

!!! info "3e · Séquence 4 · De la carte Arduino au robot mBot · Séance 9 sur 10"

    Question de la séance : *Comment un robot peut-il suivre une ligne noire sans la voir comme nous ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 9](seance-9.md).

    [Trace écrite à imprimer (PDF)](traces/3e-arduino-mbot-seance9-trace.pdf)

## Ce que je dois retenir

### Le capteur de ligne

Le suiveur de ligne du mBot a deux capteurs infrarouges tournés vers le sol. Chacun émet une lumière invisible : le blanc la réfléchit, le noir l'absorbe. Le capteur a besoin d'un contraste fort entre la ligne et le sol.

### La valeur de 0 à 3

La carte résume l'état des deux yeux par une valeur : 0, les deux sur le noir, le robot est centré ; 1, œil gauche sur le noir, la ligne part à gauche, on tourne à gauche ; 2, œil droit sur le noir, on tourne à droite ; 3, les deux sur le blanc, la ligne est perdue.

### L'algorithme et le réglage

Dans une boucle « répéter indéfiniment », le programme lit la valeur et choisit le mouvement. La puissance se règle par des essais : trop faible, le robot est lent ; trop forte, il dépasse la ligne dans les virages. On retient un compromis.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **capteur infrarouge** | un capteur qui émet une lumière invisible et mesure ce que le sol lui renvoie |
| **réflexion** | le renvoi de la lumière par une surface ; le blanc renvoie beaucoup, le noir presque rien |
| **valeur du suiveur** | le nombre de 0 à 3 qui résume ce que voient les deux capteurs |
| **compromis** | un réglage qui équilibre deux exigences opposées, ici la vitesse et la précision |

## Les erreurs à ne pas commettre

- Inverser gauche et droite : valeur 1, on tourne du côté de l'œil qui voit le noir.
- Lire le capteur une seule fois, hors de la boucle.
- Choisir la puissance la plus forte : le robot sort de la piste.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T2.3** | Comprendre et modifier un programme associé à une fonctionnalité | Comprendre | 1, 2, 3, 4, 7, 13 |
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Analyser | 5, 6, 8, 11, 12 |
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Analyser | 9, 10 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-9.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-9.md){ .md-button }
