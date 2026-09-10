# Séance 2 — Réguler et sécuriser

!!! info "Séquence 5 · séance 2 sur 3 · 55 minutes"

    Oscillation, marge de basculement, placement du capteur, faiblesses classiques.

## Ce qu'on a cherché

Une régulation simulée à la main, minute par minute, puis une étude de cas documentaire sur la
prise de contrôle massive d'objets connectés de 2016.

## Trace écrite

### La règle simulée

```
si temperature < 21  alors  chauffage = ALLUME
si temperature > 23  alors  chauffage = ETEINT
sinon                       chauffage inchangé

allumé  ->  +1,0 °C par minute
éteint  ->  -0,5 °C par minute
```

### La simulation, à partir de 18 °C

| Minute | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Température | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 23,5 | 23 | 22,5 | 22 | 21,5 | 21 | 20,5 |
| Chauffage | on | on | on | on | on | on | **off** | off | off | off | off | off | off | **on** |

La température oscille entre 20,5 et 24 °C. Elle ne se fixe jamais sur la consigne de 22 °C, et la
montée est deux fois plus raide que la descente.

### Les trois faiblesses classiques d'un objet connecté

| Faiblesse | Qui peut la corriger |
|---|---|
| Mot de passe d'usine identique et jamais changé | Le fabricant, en imposant un mot de passe unique |
| Service réseau ouvert que l'utilisateur ignore | Le fabricant, en le fermant par défaut |
| Absence totale de mises à jour | Le fabricant, en s'engageant sur une durée |

### Ce que je retiens

On n'allume pas et on n'éteint pas exactement à la consigne. Sans marge, l'appareil basculerait
plusieurs fois par minute et s'userait. On accepte une **oscillation** pour éviter un battement
permanent : c'est une conséquence assumée, pas un défaut de programmation.

Si le capteur est placé juste au-dessus du radiateur, la boucle fonctionne parfaitement, mais sur la
mauvaise grandeur : le chauffage s'éteint trop tôt et la pièce reste froide. Un système de
régulation ne vaut jamais mieux que son capteur.

En 2016, un programme a parcouru Internet en essayant sur chaque appareil une courte liste de mots
de passe d'usine. Des centaines de milliers de caméras et d'enregistreurs ont répondu, et ont servi
ensemble à saturer de grands services d'Internet. Leurs propriétaires n'ont rien remarqué : les
caméras filmaient normalement. La victime visible n'est pas le propriétaire de l'objet.

L'essentiel des faiblesses relève du fabricant, et ce n'est pas un oubli : c'est ce qui coûte le
moins cher à produire.

### Ce que je dois savoir refaire

- Simuler une régulation minute par minute et repérer les instants de basculement.
- Justifier la marge entre les deux seuils.
- Dire ce qui se passe quand le capteur est mal placé.
- Nommer les trois faiblesses classiques et dire qui peut les corriger.

!!! note "Ce qu'on ne fait pas"

    On raisonne sur documents. On ne teste rien, on ne cherche aucun mot de passe, on ne scanne
    aucun réseau.

## Pour aller plus loin

- Consommation énergétique et autonomie.
- Que devient la donnée collectée, et où.

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
