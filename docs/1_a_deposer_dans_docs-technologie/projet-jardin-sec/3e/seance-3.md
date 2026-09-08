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
- Quelle est la durée moyenne entre deux arrosages ?

### Activité 2 · je recherche : lisser les mesures

On calcule une moyenne mobile sur 3 mesures pour supprimer l'effet des aberrations. Complète le tableau.

- Calcule la moyenne mobile sur 3 pour la 4e valeur.
- Calcule-la pour la 5e valeur.
- La moyenne mobile a-t-elle supprimé l'effet de l'aberration ?
- Quelle méthode serait plus efficace contre une aberration isolée ?
- Applique la médiane sur 3 à la 4e valeur.

### Activité 3 · je recherche : régler avec deux seuils

On propose de remplacer le seuil unique de 30 % par deux seuils : arroser sous 28 %, arrêter au-dessus de 45 %.

- Comment s'appelle cet écart entre les deux seuils ?
- Quel problème résout-elle ?
- Sur la courbe, combien d'arrosages rapprochés de moins d'une heure comptes-tu ?
- Quelle économie l'hystérésis permettrait-elle sur les 21 jours ?
- Cette amélioration coûte-t-elle quelque chose ?

## Après : ce que je retiens

Un _______________________ enregistre les mesures de façon datée et régulière, ici toutes les ________ minutes pendant ________ jours.  
La lecture de la courbe montre ________ arrosages, soit ________ par jour, alors que le programme en autorise ________ : le maximum est une __________, pas une consigne.  
Une montée lente et durable signale une ________, une valeur isolée à 0 % est une _____________.  
La __________________ atténue les aberrations mais ne les supprime pas ; la _________ sur trois valeurs les élimine.  
Remplacer le seuil unique par deux seuils, ________ % pour démarrer et ________ % pour arrêter, s'appelle une _____________.  
Elle supprime ________ arrosages inutiles sur 21 jours, sans aucun matériel supplémentaire : l'amélioration est _____________.

**La question de la prochaine séance.** Ces améliorations sont écrites sur le papier. Il reste à les programmer, et à faire remonter les données de chaque jardinière jusqu'à un poste unique.

## Matériel

- extrait du journal de données projeté et distribué
- papier millimétré
- tableur au vidéoprojecteur
- classeur bilan-eau fourni
- fiche élève
