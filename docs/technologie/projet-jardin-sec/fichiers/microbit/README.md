# Programmes micro:bit du projet jardin sec

Quatre programmes en MicroPython, avec l'équivalent MakeCode décrit en tête de
chaque fichier. Ils s'ouvrent sur python.microbit.org, ou dans l'éditeur hors ligne.

| Fichier | Niveau | Séance | Ce qu'il fait |
|---|---|---|---|
| `4e_1_lecture_capteur.py` | 4e | 4 | Lit la broche P0 et affiche la valeur brute, pour l'étalonnage |
| `4e_2_arrosage_seuil.py` | 4e | 5 et 6 | Convertit en pourcentage, arrose sous 30 %, filtre les valeurs aberrantes |
| `3e_1_emetteur.py` | 3e | 4 | Ajoute l'hystérésis à deux seuils et l'émission radio de la trame |
| `3e_2_recepteur.py` | 3e | 4 | Reçoit les huit jardinières, affiche et enregistre le journal de données |

## Étalonnage, à refaire pour chaque capteur

| Situation | Valeur brute attendue |
|---|---|
| Capteur dans l'air | 750 environ |
| Capteur dans un verre d'eau | 350 environ |
| Terre sèche | 700 environ |
| Terre juste arrosée | 400 environ |

Relation utilisée dans les programmes :

```
humidite = 100 * (SEC - valeur) / (SEC - MOUILLE)
```

Un seuil de 30 % correspond donc à une valeur brute de 630 avec ces repères.

## Câblage

| Élément | Broche | Alimentation |
|---|---|---|
| Capteur capacitif | P0 | 3V et GND du micro:bit |
| Module relais | P1 | 3V et GND du micro:bit |
| Électrovanne ou pompe | par le relais | circuit séparé 6 V, jamais relié au micro:bit |

Le capteur résistif à deux pointes est à proscrire : il se corrode en quelques
semaines dans la terre humide. Seul le capteur capacitif tient la saison.

## Réglages pour l'essai en classe

Pendant la mise au point, remplacer `ATTENTE` par 10000 et `DUREE_ARROSAGE` par
3000, pour observer plusieurs cycles en une séance. Remettre les vraies valeurs
avant l'installation extérieure.

## Récupération des données

La carte réceptrice enregistre dans son journal de bord. Branchée en USB, elle
apparaît comme une clé où se trouve `MY_DATA.HTM`. L'ouvrir, cliquer sur
« Download », puis coller le CSV dans l'onglet `Journal` du classeur
`bilan-eau-jardin-sec.xlsx`.
