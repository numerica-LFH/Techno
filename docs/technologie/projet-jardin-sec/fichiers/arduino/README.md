# Programmes Arduino du projet jardin sec

Trois programmes pour le kit Grove Smart Plant Care, monté sur une carte Arduino Uno par son
Base Shield. Capteur d'humidité sur le port A0, relais de la pompe sur le port D7. Ouvrir
dans l'Arduino IDE, moniteur série à 9600 bauds.

| Fichier | Niveau | Ce qu'il fait |
|---|---|---|
| [jardin-lecture.ino](jardin-lecture.ino) | 4e, 3e | Affiche la valeur du capteur chaque seconde, pour l'étalonnage |
| [jardin-4e-arrosage.ino](jardin-4e-arrosage.ino) | 4e | Dose de 3 s sous le seuil de 320, puis attente |
| [jardin-3e-hysteresis.ino](jardin-3e-hysteresis.ino) | 3e | Deux seuils (320 et 400), filtre, journal temps ; valeur ; arrosage |

Pour les essais en classe, les attentes sont réduites à 10 s. Dans le jardin, remettre
`ATTENTE` ou `PAUSE` à 1800000 (30 minutes).

## Étalonnage

| Situation | Valeur de référence |
|---|---|
| Terre sèche | environ 200 |
| Terre juste arrosée | environ 600 |

Humidité en % = 100 × (valeur − 200) ÷ 400. Valeurs à remesurer avec le capteur de la classe.
Si la valeur baisse quand la terre est mouillée, inverser les tests et recalculer les seuils.
