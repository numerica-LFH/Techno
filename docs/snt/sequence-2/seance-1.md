# Séance 1 : mesurer un graphe

!!! info "Séquence 2 · séance 1 sur 3 · 45 minutes"

    Degré, distance, diamètre, sommet pont. [Fiche élève en PDF](fiches/snt-seq2-seance1-eleve.pdf)

## Ce qu'on a cherché

Un petit réseau de huit personnes, neuf relations, des prénoms fictifs. On le dessine, on le
mesure, puis on retire quelqu'un pour voir ce qui casse.

## Trace écrite

À recopier dans le cahier de leçon : les mots de la séance et « ce que je retiens ».

### Le graphe de l'activité

```
Ana - Bruno      Ana - Carla      Bruno - Diego    Carla - Diego
Diego - Elsa     Elsa - Fabio     Elsa - Hugo      Fabio - Gabriela
Gabriela - Hugo
```

Huit sommets, neuf arêtes.

### Les mots de la séance

| Mot | Ce qu'il désigne | Sur ce graphe |
|---|---|---|
| **Degré** | Le nombre de relations directes d'un sommet | Diego : 3, Ana : 2 |
| **Chemin** | Une suite d'arêtes qui mène d'un sommet à un autre | Ana, Bruno, Diego |
| **Distance** | Le nombre d'arêtes du plus court chemin entre deux sommets | Ana à Hugo : 4 |
| **Diamètre** | La plus grande distance entre deux sommets du graphe | 5, entre Ana et Gabriela |
| **Sommet pont** | Un sommet dont la suppression coupe le graphe en morceaux | Diego, et Elsa |

### Les résultats à retenir

| Sommet | Ana | Bruno | Carla | Diego | Elsa | Fabio | Gabriela | Hugo |
|---|---|---|---|---|---|---|---|---|
| Degré | 2 | 2 | 2 | 3 | 3 | 2 | 2 | 2 |

Distances : Ana à Diego, 2. Ana à Hugo, 4 (Ana, Bruno, Diego, Elsa, Hugo). Bruno à Gabriela, 4.
La distance est un **minimum** : ce n'est pas la longueur du premier chemin trouvé.

Sans Diego, le groupe Ana, Bruno, Carla ne peut plus joindre le reste du réseau. Sans Elsa, c'est
pareil : l'arête Diego-Elsa est le seul lien entre les deux groupes.

### Ce que je retiens

Un graphe se mesure avec des nombres. Le **degré** d'un sommet compte ses relations directes. La
**distance** entre deux sommets est le nombre d'arêtes du plus court chemin qui les relie ; le
**diamètre** est la plus grande de ces distances.

Le degré ne suffit pas à mesurer l'importance d'un sommet : un sommet est indispensable s'il est le
seul passage entre deux groupes, c'est un **sommet pont**.

Les plateformes font ces calculs sur le graphe de leurs utilisateurs, par exemple pour suggérer des
« amis d'amis », à distance 2.

### Ce que je dois savoir refaire

- Dessiner un graphe à partir d'une liste de relations.
- Calculer un degré, une distance et le diamètre.
- Repérer un sommet dont la suppression coupe le graphe.

!!! note "Sur les données de la classe"

    On travaille sur des prénoms fictifs. Le graphe réel des relations de la classe n'est jamais
    construit.

## La question de la séance suivante

La plateforme connaît ce graphe. Qu'en fait-elle, et qu'est-ce que je lui ai donné pour qu'elle le
connaisse ?

## S'entraîner

[Ouvrir les exercices de la séance :material-arrow-right:](exercices-seance-1.html){ .md-button .md-button--primary target=_blank }

13 questions à correction immédiate, autant de tentatives que nécessaire. Chaque réponse est
expliquée. Le score ne compte pas dans la moyenne et n'est envoyé à personne.

L'évaluation notée de la séquence se trouve en bas de la page
[Séquence 2 : les réseaux sociaux](index.md#sevaluer).
