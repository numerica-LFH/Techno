# Séance 1 — Nettoyer un jeu de données

!!! info "Séquence 3 · séance 1 sur 3 · 55 minutes"

    Valeur manquante, doublon, valeur aberrante, incohérence de format.

## Ce qu'on a cherché

Sept lignes de relevés météo. Cinq posent problème, deux sont correctes. On cherche lesquelles, et
on nomme chaque défaut.

## Trace écrite

### Le jeu de données de l'activité

```
id;station;departement;date;temp_max;pluie_mm
1;Tegucigalpa;FM;2025-03-01;31.2;0
2;San Pedro Sula;CR;01/03/2025;34,1;2.5
3;La Ceiba;AT;2025-03-01;;12
4;Tegucigalpa;FM;2025-03-01;31.2;0
5;Choluteca;CH;2025-03-02;38.9;0
6;Roatan;IB;2025-03-02;30.4;-1
7;Comayagua;CM;2025-03-02;327;0
```

Sept enregistrements, six descripteurs. Les lignes 1 et 5 sont les seules correctes.

### Les quatre défauts

| Défaut | Ce qu'il est | Où il est ici |
|---|---|---|
| **Valeur manquante** | La case est vide, et vide ne vaut pas zéro | Ligne 3, température |
| **Doublon** | Deux fois le même enregistrement sous un identifiant différent | Ligne 4, copie de la ligne 1 |
| **Valeur aberrante** | Une valeur impossible dans le contexte | Ligne 7 (327 °C), ligne 6 (pluie négative) |
| **Incohérence de format** | Deux écritures dans la même colonne | Ligne 2, date et séparateur décimal |

### Ce que je retiens

Vide ne vaut pas zéro. Remplacer une valeur manquante par un zéro fausse toutes les moyennes : c'est
l'erreur la plus fréquente et la plus coûteuse.

Un doublon fausse tous les comptages, même quand l'identifiant diffère. Le **tri** est ce qui le
fait apparaître : il place les lignes identiques les unes sous les autres, et il ne perd aucune
ligne.

Une valeur aberrante vient souvent d'une virgule oubliée, ici 327 pour 32,7. Elle peut aussi être un
code d'erreur du capteur, comme la pluie de -1 mm : encore faut-il le savoir, ce qui suppose une
documentation.

Filtrer, c'est ne garder que les lignes qui vérifient une condition. Le filtre « relevés du 2 mars
sans pluie » laisse les lignes 5 et 7, mais pas la ligne 6, dont la pluie vaut -1 et non 0.

### Ce que je dois savoir refaire

- Compter les enregistrements et les descripteurs d'un fichier CSV.
- Nommer le défaut d'une ligne parmi les quatre.
- Dire quelles lignes restent après un filtre donné.
- Justifier que trier ne perd aucune ligne, contrairement à filtrer.

## La question de la séance suivante

Ce fichier ne dit rien de l'altitude des stations. Une autre table, elle, la connaît. Comment
répondre à une question qu'aucun des deux fichiers ne traite seul ?

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
