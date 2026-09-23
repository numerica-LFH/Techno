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

### Activité 1 · je recherche : de l'organigramme au programme

Place les huit cartes instructions dans le bon ordre, en respectant la forme des symboles : rectangle pour une action, losange pour un test. Traduis ensuite ton organigramme en blocs MakeCode, avec une variable humidite et le bloc si alors sinon.

- Quelle carte vient en premier dans la boucle ?
- Pourquoi arroser 90 secondes et non jusqu'à ce que le capteur passe au-dessus du seuil ?
- Quel bloc correspond au losange de l'organigramme ?
- Quel volume d'eau délivrent 90 secondes d'arrosage avec un goutteur de 2 L/h ?

### Activité 2 · je recherche : trois cas qui font tout rater

Pour chaque cas, dis ce que fait le programme actuel, puis écris la correction à apporter.

- Le capteur se débranche et renvoie 1023, donc une humidité négative. Que fait le programme ?
- Le fût est vide mais la vanne s'ouvre quand même. Que se passe-t-il ?
- Combien d'arrosages par jour ce programme fait-il au maximum, et quel volume cela représente-t-il ?

## Après : ce que je retiens

Avant de programmer, on écrit l'**algorithme**, puis on le représente par un **organigramme** où les tests sont des **losanges**.  
La règle de notre système : lire le capteur, convertir en pourcentage, et **si** l'humidité est inférieure à **30** %, ouvrir la vanne pendant **90** secondes.  
On arrose une **dose fixe** puis on attend **30** minutes, car l'eau met du temps à atteindre le capteur.  
Un cycle délivre environ **400** millilitres sur les huit goutteurs.  
Un programme fiable prévoit une **sécurité** : les valeurs hors de la plage **300** à **800** sont ignorées, et le nombre d'arrosages par jour est **limité**.  
Sans ces sécurités, une simple panne de capteur ferait consommer **19** litres par jour au lieu de 6.

**La question de la prochaine séance.** L'algorithme est prêt. Il reste à le brancher pour de bon sur la vanne et à mesurer, pendant une semaine, combien d'eau le jardin consomme réellement.

## Matériel

- organigramme vierge projeté et distribué
- simulateur MakeCode au vidéoprojecteur
- jeu de cartes instructions à ordonner
- fiche élève
