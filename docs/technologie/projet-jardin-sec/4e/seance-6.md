# Séance 6 : Brancher, régler et mesurer la consommation réelle

!!! question "La question du jour"
    Le système complet fonctionne-t-il, et combien d'eau consomme-t-il réellement en une semaine, comparé à un arrosage manuel ?

| Durée | Format | Compétences |
|---|---|---|
| 45 minutes | demi-groupe | Réaliser en équipe le prototype d'un système automatisé ; Mettre au point un programme à partir d'essais ; Comparer une performance mesurée à une performance attendue |

## Avant

**Mon hypothèse.** Le programme est réglé sur 4 arrosages par jour de 90 secondes. Calcule à l'avance le volume consommé en une semaine, avant de le mesurer.

### Les mots à repérer

| Mot | Définition |
|---|---|
| Mise au point | réglages successifs faits après les premiers essais, jusqu'au fonctionnement attendu |
| Essai | fonctionnement volontairement provoqué pour observer le comportement du système |
| Relevé | note écrite d'une mesure, datée, qui permettra la comparaison |
| Performance | valeur mesurée d'une grandeur que le cahier des charges impose |
| Écart | différence entre la performance mesurée et la performance attendue |

## Pendant : je recherche

### Activité 1 · je recherche : câbler et faire fonctionner

Câble le montage selon le schéma, fais vérifier par le professeur, puis mets sous tension. Pour l'essai, remplace 30 minutes par 10 secondes dans le programme.

- Sur quelles broches se branchent le capteur et le relais ?
- Pourquoi faire vérifier le câblage avant la mise sous tension ?
- Pourquoi réduire l'attente à 10 secondes pour l'essai ?

### Activité 2 · je recherche : la consommation réelle, et la comparaison avec l'arrosage manuel

Le tableau donne le niveau du fût relevé chaque jour par les élèves de service. Complète les calculs, puis compare avec les jardinières témoins arrosées à la main.

- Quel volume total et quelle consommation moyenne par jour le système a-t-il consommés en 7 jours ? La contrainte de moins de 6,2 L par jour est-elle respectée ?
- Le calcul prévisionnel donnait 11,2 L pour la semaine. Quel est l'écart avec les 19 L mesurés, et cite deux causes possibles.
- Les témoins ont reçu 6 L par jour à la main, soit 42 L sur la semaine. Quelle économie réalise le système, en litres et en pourcentage, et que représenterait-elle sur les 180 jours de la saison sèche ?
- Le système coûte environ 2 000 lempiras, l'eau du réseau coûte environ 0,03 lempira le litre. Est-il rentable en argent sur une saison ?

## Après : ce que je retiens

Après le câblage vient la **mise au point** : on fait des **essais** en accéléré, on observe, on corrige le programme.  
La consommation mesurée est de **2,7** litres par jour, contre **6** litres pour l'arrosage manuel des témoins, soit **55** % d'économie.  
La prévision annonçait **11,2** litres pour la semaine, la mesure donne **19** litres : l'**écart** s'explique par le remplissage du tuyau et les **fuites** aux raccords.  
Une prévision juste ne remplace jamais un **relevé** : on mesure toujours la performance réelle.  
La contrainte de moins de **6,2** litres par jour est **respectée**.  
Le système n'est pas rentable en **argent**, mais il économise la **ressource** et donne au jardin son **autonomie** pendant les vacances.

**La question de la prochaine séance.** La séquence de 4e est terminée. En 3e, la question devient : comment rendre ce système totalement autonome, et comment prouver, données à l'appui, qu'il tient ses promesses ?

## Matériel

- montage complet sur une jardinière, capteur, micro:bit, relais, électrovanne ou pompe
- fût rempli, compteur volumétrique ou éprouvette de 2 L
- chronomètre
- tableau de relevé
- fiche élève
