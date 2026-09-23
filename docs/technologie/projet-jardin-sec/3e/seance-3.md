# Séance 3 : Lire les données pour améliorer le réglage

!!! question "La question du jour"
    Trois semaines de mesures d'humidité sont enregistrées. Que disent ces courbes du fonctionnement du système, et comment améliorer le réglage sans toucher au matériel ?

| Durée | Format | Compétences |
|---|---|---|
| 45 minutes | classe entière | Collecter, trier et analyser des données pour valider un fonctionnement ; Interpréter une représentation graphique ; Proposer une amélioration argumentée à partir de mesures |

## Avant

**Mon hypothèse.** Sur trois semaines, combien de fois penses-tu que le système a arrosé ? Écris ton estimation et vérifie-la sur la courbe.

### Les mots à repérer

| Mot | Définition |
|---|---|
| Journal de données | enregistrement daté et régulier des mesures faites par un système |
| Période d'échantillonnage | durée entre deux mesures successives |
| Moyenne mobile | moyenne calculée sur les dernières mesures, qui lisse les variations brusques |
| Hystérésis | écart entre le seuil de démarrage et le seuil d'arrêt, qui évite les basculements rapides |
| Aberration | valeur isolée, très éloignée des autres, qui traduit une erreur de mesure |

## Pendant : je recherche

### Activité 1 · je recherche : ce que raconte la courbe

La courbe donne l'humidité de la jardinière 3, mesurée toutes les 30 minutes pendant 21 jours. Réponds en relevant les valeurs sur le graphique.

- Combien d'arrosages comptes-tu sur les 21 jours ?
- Pourquoi le système arrose-t-il moins que le maximum autorisé ?
- Repère les jours 8 et 9. Que s'est-il passé ?
- Au jour 14, une valeur isolée à 0 % apparaît puis tout revient normal. Comment l'interprètes-tu ?

### Activité 2 · je recherche : améliorer le traitement des mesures

Complète le tableau de moyenne mobile, puis propose un réglage à deux seuils pour éviter les arrosages rapprochés inutiles.

- Calcule la moyenne mobile sur 3 pour la 4e valeur du tableau.
- Cette moyenne mobile supprime-t-elle vraiment l'effet de l'aberration ? Quelle méthode serait plus efficace ?
- On remplace le seuil unique de 30 % par deux seuils, 28 % pour démarrer et 45 % pour arrêter. Comment s'appelle cet écart, et combien de points vaut-il ?
- Sur les 34 arrosages relevés, 6 sont séparés de moins d'une heure. Cette hystérésis les supprime-t-elle, et cela coûte-t-il du matériel supplémentaire ?

## Après : ce que je retiens

Un **journal de données** enregistre les mesures de façon datée et régulière, ici toutes les **30** minutes pendant **21** jours.  
La lecture de la courbe montre **34** arrosages, soit **1,6** par jour, alors que le programme en autorise **4** : le maximum est une **sécurité**, pas une consigne.  
Une montée lente et durable signale une **pluie**, une valeur isolée à 0 % est une **aberration**.  
La **moyenne mobile** atténue les aberrations mais ne les supprime pas ; la **médiane** sur trois valeurs les élimine.  
Remplacer le seuil unique par deux seuils, **28** % pour démarrer et **45** % pour arrêter, s'appelle une **hystérésis**.  
Elle supprime **6** arrosages inutiles sur 21 jours, sans aucun matériel supplémentaire : l'amélioration est **logicielle**.

**La question de la prochaine séance.** Ces améliorations sont écrites sur le papier. Il reste à les programmer, et à faire remonter les données de chaque jardinière jusqu'à un poste unique.

## Matériel

- extrait du journal de données projeté et distribué
- papier millimétré
- tableur au vidéoprojecteur
- classeur bilan-eau fourni
- fiche élève
