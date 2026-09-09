# Séance 5 : Écrire l'algorithme qui décide d'arroser

!!! question "La question du jour"
    Le capteur donne une valeur, la pompe attend un ordre. Quel raisonnement, écrit noir sur blanc, permet de passer de l'un à l'autre sans gaspiller une goutte ?

| Durée | Format | Compétences |
|---|---|---|
| 45 minutes | classe entière | Écrire un algorithme sous forme d'organigramme puis de programme ; Utiliser une structure conditionnelle et une variable ; Anticiper le comportement d'un programme dans des cas particuliers |

## Avant

**Mon hypothèse.** Écris en français, en trois phrases maximum, la règle que devrait suivre le système pour arroser correctement. Commence par « Si ».

### Les mots à repérer

| Mot | Définition |
|---|---|
| Algorithme | suite d'instructions écrite avant le programme, indépendante du langage utilisé |
| Organigramme | représentation graphique d'un algorithme, avec des losanges pour les tests |
| Structure conditionnelle | instruction si alors sinon, qui oriente le programme selon une condition |
| Hystérésis | usage de deux seuils différents pour démarrer et pour arrêter, afin d'éviter les basculements rapides |
| Sécurité logicielle | règle inscrite dans le programme pour éviter un dégât en cas de mesure fausse |

## Pendant : je recherche

### Activité 1 · je recherche : construire l'organigramme

Place les huit cartes instructions dans le bon ordre, en respectant la forme des symboles : rectangle pour une action, losange pour un test.

- Quelle carte vient en premier dans la boucle ?
- Quelle carte est un test, et quelle forme lui donne-t-on ?
- Que se passe-t-il sur la branche non ?
- Pourquoi attendre 30 minutes et non 2 secondes entre deux mesures ?
- Pourquoi arroser 90 secondes et non jusqu'à ce que le capteur passe au-dessus du seuil ?

### Activité 2 · je recherche : du losange aux blocs

Traduis ton organigramme en blocs MakeCode. Utilise une variable humidite et le bloc si alors sinon.

- Quel bloc correspond au losange de l'organigramme ?
- Que vaut pin1 quand l'électrovanne est fermée ?
- Pourquoi écrire pin1.write_digital(0) avant la boucle ?
- À quoi correspondent 90000 et 1800000 ?
- Quel volume d'eau délivrent 90 secondes d'arrosage avec un goutteur de 2 L/h ?

### Activité 3 · je recherche : trois cas qui font tout rater

Pour chaque cas, dis ce que fait le programme actuel, puis écris la correction à apporter.

- Il pleut à verse pendant la nuit. Que fait le programme ?
- Le capteur se débranche et renvoie 1023, donc une humidité négative. Que fait le programme ?
- Le fût est vide mais la vanne s'ouvre quand même. Que se passe-t-il ?
- Écris la ligne de sécurité à ajouter dans le programme.
- Combien d'arrosages par jour ce programme fait-il au maximum, et quel volume cela représente-t-il ?

## Après : ce que je retiens

Avant de programmer, on écrit l'_____________, puis on le représente par un _______________ où les tests sont des __________.  
La règle de notre système : lire le capteur, convertir en pourcentage, et ________ l'humidité est inférieure à ________ %, ouvrir la vanne pendant ________ secondes.  
On arrose une ___________ puis on attend ________ minutes, car l'eau met du temps à atteindre le capteur.  
Un cycle délivre environ ________ millilitres sur les huit goutteurs.  
Un programme fiable prévoit une __________ : les valeurs hors de la plage ________ à ________ sont ignorées, et le nombre d'arrosages par jour est ________.  
Sans ces sécurités, une simple panne de capteur ferait consommer ________ litres par jour au lieu de 6.

**La question de la prochaine séance.** L'algorithme est prêt. Il reste à le brancher pour de bon sur la vanne et à mesurer, pendant une semaine, combien d'eau le jardin consomme réellement.

## Matériel

- organigramme vierge projeté et distribué
- simulateur MakeCode au vidéoprojecteur
- jeu de cartes instructions à ordonner
- fiche élève
