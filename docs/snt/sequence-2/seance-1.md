# Séance 1 — Mesurer un graphe

!!! info "Séquence 2 · séance 1 sur 3 · 55 minutes"

    Degré, distance, diamètre, sommet pont.

## Ce qu'on a cherché

Un petit réseau de huit personnes, neuf relations, des prénoms fictifs. On le dessine, on le
mesure, puis on retire quelqu'un pour voir ce qui casse.

## Trace écrite

### Le graphe de l'activité

```
Ana-Bruno    Ana-Carla     Bruno-Diego    Carla-Diego
Diego-Elsa   Elsa-Fabio    Fabio-Gabriela Gabriela-Hugo   Elsa-Hugo
```

Huit sommets, neuf arêtes.

### Les mots de la séance

| Mot | Ce qu'il désigne | Sur ce graphe |
|---|---|---|
| **Degré** | Le nombre de relations directes d'un sommet | Diego : 3, Ana : 2 |
| **Distance** | Le nombre minimal d'arêtes entre deux sommets | Ana à Hugo : 4 |
| **Diamètre** | La plus grande de ces distances | 5, entre Ana et Gabriela |
| **Pont** | Un sommet dont le retrait coupe le graphe en deux | Diego |

### Les résultats à retenir

| Sommet | Ana | Bruno | Carla | Diego | Elsa | Fabio | Gabriela | Hugo |
|---|---|---|---|---|---|---|---|---|
| Degré | 2 | 2 | 2 | 3 | 3 | 2 | 2 | 2 |

Le chemin d'Ana à Hugo : Ana, Bruno, Diego, Elsa, Hugo. Quatre arêtes, et aucun chemin plus court
n'existe. C'est là le point de vigilance : la distance est un **minimum**, pas la longueur du
premier chemin trouvé.

En retirant Diego, le groupe Ana, Bruno, Carla ne peut plus joindre le reste du réseau. Le graphe
se coupe en deux morceaux.

### Ce que je retiens

Le degré compte les relations directes, pas les personnes que l'on peut atteindre. La distance
compte les étapes minimales. Le diamètre est la plus grande distance du graphe : il dit à quel point
le réseau est ramassé.

Diego n'a que trois relations, et pourtant sa disparition coupe le réseau en deux. Avoir beaucoup de
liens et occuper une position stratégique sont deux choses différentes.

Une plateforme qui connaît ce graphe calcule immédiatement les contacts que deux personnes ont en
commun : ce sont les sommets situés à distance 2.

### Ce que je dois savoir refaire

- Dessiner un graphe à partir d'une liste de relations.
- Calculer le degré de chaque sommet, une distance, et le diamètre.
- Repérer un sommet pont et dire ce que son retrait provoque.

!!! note "Sur les données de la classe"

    On travaille sur des prénoms fictifs. Le graphe réel des relations de la classe n'est jamais
    construit.

## La question de la séance suivante

La plateforme connaît ce graphe, et bien davantage. Que sait-elle exactement, et qu'ai-je accepté
sans le lire ?

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
