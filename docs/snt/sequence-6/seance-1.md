# Séance 1 — Manipuler les pixels

!!! info "Séquence 6 · séance 1 sur 3 · 55 minutes"

    Niveaux de gris, négatif, seuillage, réversibilité.

## Ce qu'on a cherché

Une image de 4 sur 4 pixels en niveaux de gris, deux transformations, et une question posée à la
fin : peut-on revenir en arrière ?

## Trace écrite

### Les calculs de la séance

| Transformation | Règle | Exemple |
|---|---|---|
| Niveau de gris | moyenne des trois composantes | (60, 120, 90) donne 90 |
| Négatif | `v` devient `255 - v` | 90 donne 165 |
| Seuillage à 128 | au-dessus 255, sinon 0 | 140 donne 255, 90 donne 0 |

### Ce que je retiens

Le **négatif** est réversible : en le réappliquant, on retrouve la valeur de départ, puisque
`255 - (255 - v)` vaut `v`. Aucune information n'est perdue.

Le **seuillage** ne l'est pas. Après un seuillage à 128, l'image ne contient plus que deux valeurs,
0 et 255. Impossible de savoir si un pixel valait 140 ou 250.

C'est ce critère, réversible ou non, qui servira tel quel pour la compression en séance 2.

### Ce que je dois savoir refaire

- Convertir un pixel RVB en niveau de gris.
- Appliquer un négatif et un seuillage à des valeurs données.
- Justifier qu'une transformation est réversible, ou qu'elle ne l'est pas.

## La question de la séance suivante

Un pixel ne se transforme pas toujours seul. Que se passe-t-il quand le calcul fait intervenir ses
voisins ?

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
