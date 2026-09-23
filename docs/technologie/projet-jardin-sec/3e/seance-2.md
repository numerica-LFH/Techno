# Séance 2 : Rendre le système autonome en énergie

!!! question "La question du jour"
    Combien d'énergie notre système consomme-t-il par jour, et quelle taille de panneau solaire et d'accumulateur faut-il pour qu'il ne dépende plus jamais d'une pile ?

| Durée | Format | Compétences |
|---|---|---|
| 45 minutes | demi-groupe | Établir le bilan énergétique d'un système ; Dimensionner une source d'énergie à partir d'un besoin calculé ; Mesurer une grandeur électrique et interpréter le résultat |

## Avant

**Mon hypothèse.** Un panneau solaire de la taille d'une feuille A5 suffira-t-il à faire fonctionner le système en permanence ? Écris oui ou non, avec une raison.

### Les mots à repérer

| Mot | Définition |
|---|---|
| Puissance | énergie consommée ou produite par unité de temps, en watts |
| Énergie | produit d'une puissance par une durée, en wattheures |
| Capacité d'un accumulateur | quantité de charge stockée, en milliampères-heures, convertible en wattheures |
| Heures d'ensoleillement équivalentes | durée fictive à pleine puissance qui donne la même production que la journée réelle |
| Bilan énergétique | comparaison entre l'énergie produite et l'énergie consommée sur une même durée |

## Pendant : je recherche

### Activité 1 · je recherche : mesurer la consommation et calculer le besoin quotidien

Insère le multimètre en série dans le circuit d'alimentation. Relève le courant en veille et pendant l'ouverture de la vanne, puis calcule l'énergie consommée par le système sur une journée complète (le système arrose 4 fois par jour pendant 90 secondes, le reste du temps il est en veille).

- Le courant mesuré en veille vaut environ 15 mA sous 3 V. Calcule la puissance en veille.
- Pendant l'arrosage, le micro:bit consomme 0,045 W et la vanne 2,91 W. Quelle est la puissance totale ?
- Calcule l'énergie totale consommée par jour (arrosage plus veille).
- Quelle part la veille représente-t-elle dans ce total, et qu'en déduis-tu ?

### Activité 2 · je recherche : dimensionner le panneau et l'accumulateur

Le panneau solaire fait 2 W, Tegucigalpa compte environ 5 heures d'ensoleillement équivalentes par jour, et le cahier des charges impose 7 jours d'autonomie sans intervention. L'accumulateur 18650 fait 2 600 mAh sous 3,7 V.

- Quelle énergie utile le panneau produit-il chaque jour ?
- Convertis la capacité de l'accumulateur en wattheures.
- Quelle autonomie l'accumulateur donne-t-il sans aucun soleil, et la contrainte FP2 est-elle respectée ?
- Le rapport production sur consommation vaut 7 / 1,37. Que vaut-il et que signifie-t-il ?

## Après : ce que je retiens

Le **bilan énergétique** compare l'énergie **produite** et l'énergie **consommée** sur une même durée.  
Notre système consomme **45** milliwatts en veille et environ **2,9** watts pendant l'arrosage.  
Sur une journée, cela fait **1,08** Wh de veille et **0,29** Wh d'arrosage, soit environ **1,4** Wh par jour.  
La veille représente **79** % du total : c'est elle qu'il faudrait réduire en premier, en mettant le micro:bit en **sommeil**.  
Un panneau de **2** W, sous **5** heures d'ensoleillement équivalentes, produit **10** Wh dont **7** Wh utiles après pertes de charge.  
Un accumulateur de **2 600** mAh sous 3,7 V stocke **9,6** Wh et donne **7** jours d'autonomie sans soleil.  
Le rapport production sur consommation vaut environ **5**, la contrainte d'autonomie est **respectée**.

**La question de la prochaine séance.** Le système est autonome. Mais comment prouver, à quelqu'un qui n'était pas là, qu'il a bien fonctionné pendant trois semaines ? Il va falloir enregistrer les données.

## Matériel

- multimètres
- panneau solaire 6 V 2 W
- accumulateur 18650 et support
- micro:bit monté avec capteur et relais
- chronomètre
- fiche élève
