# Séance 0 — Ranger pour pouvoir chercher

!!! info "Séquence 3 · séance 0 sur 3 · 55 minutes"

    Donnée, descripteur, enregistrement, métadonnée.

## Ce qu'on a cherché

Le problème du rangement est plus vieux que l'informatique. On remonte aux cartes perforées, puis
on installe le vocabulaire et les trois opérations qui structurent tout le thème.

## Trace écrite

### Les mots de la séance

| Mot | Ce qu'il désigne |
|---|---|
| **Donnée** | Une valeur, par exemple 31,2 |
| **Descripteur** | Le nom d'une colonne, qui dit ce que la valeur décrit |
| **Enregistrement** | Une ligne complète de la table |
| **Table** | Un ensemble d'enregistrements décrits par les mêmes descripteurs |
| **Métadonnée** | Une donnée sur le fichier lui-même : auteur, date, licence |
| **Format ouvert** | Un format lisible sans un logiciel particulier, comme le CSV |

### La frise à retenir

| Date | Ce qui se passe | Ce que ça change |
|---|---|---|
| 1725 | Cartes perforées de Bouchon, pour les métiers à tisser | L'information sort de la tête de l'ouvrier |
| 1890 | Recensement américain dépouillé par machines à cartes | Le rangement devient mécanique, donc rapide |
| 1970 | Codd publie le modèle des tables relationnelles | Croiser deux tables devient une opération réglée |

### Un fichier CSV

```
id;station;departement;date;temp_max;pluie_mm
1;Tegucigalpa;FM;2025-03-01;31.2;0
```

La première ligne porte les **descripteurs**. Les suivantes sont les enregistrements. Le séparateur
est ici le point-virgule, pour ne pas confondre avec la virgule décimale.

### Les trois opérations

| Opération | Ce qu'elle fait | Perd-elle des lignes ? |
|---|---|---|
| Trier | Change l'ordre des lignes | Non |
| Filtrer | Ne garde que les lignes qui vérifient une condition | Oui |
| Croiser | Ajoute des colonnes venues d'une autre table | Selon la clé |

### Ce que je retiens

Une donnée sans descripteur ne vaut rien. La valeur 990, toute seule, peut être une altitude, une
population, une année ou un prix.

Un format ouvert comme le CSV reste lisible sans logiciel particulier : il survit au programme qui
l'a produit. Il ne contient que du texte et des valeurs, jamais de couleurs ni de formules.

Titre, auteur, date et licence ne sont pas des données mais des **métadonnées** : elles disent d'où
vient le fichier et ce que l'on a le droit d'en faire.

Les fichiers que nous consultons sont stockés dans des centres de données, alimentés et refroidis en
permanence, même quand personne ne les consulte.

## La question de la séance suivante

Ce fichier a l'air propre. Que se passe-t-il quand il ne l'est pas, ce qui est le cas de tous les
jeux de données réels ?

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
