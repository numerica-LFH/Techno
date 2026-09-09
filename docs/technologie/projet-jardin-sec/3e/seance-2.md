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

### Activité 1 · je recherche : mesurer ce que le système consomme

Insère le multimètre en série dans le circuit d'alimentation. Relève le courant en veille, puis pendant l'ouverture de la vanne.

- Comment branche-t-on un ampèremètre ?
- Courant mesuré en veille, micro:bit seul avec capteur ?
- Courant mesuré pendant l'ouverture de la vanne ?
- Calcule la puissance en veille.
- Calcule la puissance pendant l'arrosage.

### Activité 2 · je recherche : le besoin d'une journée

Le système arrose 4 fois par jour pendant 90 secondes. Le reste du temps, il est en veille.

- Quelle durée totale d'arrosage par jour ?
- Énergie consommée par l'arrosage ?
- Énergie consommée par la veille sur 24 h ?
- Besoin énergétique total par jour ?
- Quelle part la veille représente-t-elle ?
- Le panneau fait 2 W et Tegucigalpa compte environ 5 heures d'ensoleillement équivalentes par jour. Quelle énergie produit-il ?

### Activité 3 · je recherche : quelle réserve pour tenir sans soleil ?

Le cahier des charges impose 7 jours d'autonomie sans intervention. L'accumulateur 18650 fait 2 600 mAh sous 3,7 V.

- Convertis la capacité de l'accumulateur en wattheures.
- Quelle autonomie donne-t-il, sans aucun soleil ?
- La contrainte FP2 est-elle respectée ?
- Le rapport production sur consommation vaut 7 / 1,37. Que vaut-il et que signifie-t-il ?
- Réponds enfin à la question du jour.

## Après : ce que je retiens

Le ______________________ compare l'énergie __________ et l'énergie ___________ sur une même durée.  
Notre système consomme ________ milliwatts en veille et environ ________ watts pendant l'arrosage.  
Sur une journée, cela fait ________ Wh de veille et ________ Wh d'arrosage, soit environ ________ Wh par jour.  
La veille représente ________ % du total : c'est elle qu'il faudrait réduire en premier, en mettant le micro:bit en _________.  
Un panneau de ________ W, sous ________ heures d'ensoleillement équivalentes, produit ________ Wh dont ________ Wh utiles après pertes de charge.  
Un accumulateur de ________ mAh sous 3,7 V stocke ________ Wh et donne ________ jours d'autonomie sans soleil.  
Le rapport production sur consommation vaut environ ________, la contrainte d'autonomie est ___________.

**La question de la prochaine séance.** Le système est autonome. Mais comment prouver, à quelqu'un qui n'était pas là, qu'il a bien fonctionné pendant trois semaines ? Il va falloir enregistrer les données.

## Matériel

- multimètres
- panneau solaire 6 V 2 W
- accumulateur 18650 et support
- micro:bit monté avec capteur et relais
- chronomètre
- fiche élève
