# Séance 4 : Faire parler le capteur d'humidité

!!! question "La question du jour"
    Le capteur renvoie un nombre. Que vaut ce nombre dans une terre sèche, dans une terre juste arrosée, et comment le transformer en une information utilisable ?

| Durée | Format | Compétences |
|---|---|---|
| 45 minutes | demi-groupe | Écrire, mettre au point et exécuter un programme ; Utiliser un capteur et interpréter la grandeur mesurée ; Établir une relation entre une mesure brute et une grandeur physique |

## Avant

**Mon hypothèse.** Le capteur renvoie un nombre entre 0 et 1023. Selon toi, la terre sèche donne-t-elle un grand nombre ou un petit nombre ? Écris ta réponse avant de mesurer.

### Les mots à repérer

| Mot | Définition |
|---|---|
| Valeur analogique | nombre renvoyé par le micro:bit pour une tension, entre 0 et 1023 |
| Étalonnage | opération qui associe les valeurs brutes du capteur à des états connus, ici sec et humide |
| Seuil | valeur limite au-delà de laquelle le programme change de comportement |
| Variable | case mémoire nommée qui garde une valeur pendant l'exécution du programme |
| Boucle | partie du programme répétée indéfiniment, ici la lecture périodique du capteur |

## Pendant : je recherche

### Activité 1 · je recherche : lire et afficher la valeur

Dans MakeCode, écris le programme suivant : dans une boucle toujours, afficher le nombre lu sur la broche P0, puis attendre 2 secondes.

- Quels blocs utilises-tu, dans l'ordre ?
- Pourquoi placer la lecture dans une boucle toujours ?
- À quoi sert la pause de 2 secondes ?
- Le capteur est branché sur P0, 3V et GND. Que se passe-t-il si on inverse 3V et GND ?

### Activité 2 · je recherche : étalonner le capteur

Relève la valeur affichée dans chacune des quatre situations, en attendant 10 secondes de stabilisation à chaque fois.

- Capteur dans l'air, valeur relevée ?
- Capteur enfoncé dans un verre d'eau jusqu'au trait, valeur relevée ?
- Capteur dans la terre sèche ?
- Capteur dans la terre juste arrosée ?
- Que conclus-tu sur le sens de variation ?
- Pourquoi faut-il étalonner chaque capteur, et pas seulement un ?

### Activité 3 · je recherche : du nombre brut au pourcentage

On veut afficher une humidité en pourcentage, 0 % pour la terre la plus sèche et 100 % pour la terre saturée.

- Le capteur renvoie 550. Calcule l'humidité en pourcentage.
- Le capteur renvoie 690. Calcule.
- Le seuil d'arrosage est fixé à 30 % d'humidité. À quelle valeur brute cela correspond-il ?
- Pourquoi ne pas fixer le seuil à 60 % pour être tranquille ?
- Que se passe-t-il si un élève déplace le capteur de 5 cm en profondeur ?

## Après : ce que je retiens

Un capteur d'humidité capacitif renvoie une ______________________ comprise entre ________ et ________.  
Cette valeur _________ quand l'humidité augmente : la terre sèche donne environ ________, la terre arrosée environ ________.  
L'_____________ consiste à relever la valeur dans deux états connus, l'air pour le sec et l'eau pour le mouillé, et à noter ces deux repères pour chaque capteur.  
On convertit ensuite la valeur brute en pourcentage avec la relation h = 100 x (________ - valeur) / (sec - mouillé).  
Le ________ d'arrosage retenu pour nos plantes xérophytes est de ________ %, soit une valeur brute de ________.  
La lecture est placée dans une ________, et la profondeur du capteur doit rester ________, sinon l'étalonnage ne vaut plus.

**La question de la prochaine séance.** Le capteur sait dire si la terre est sèche. Comment écrire l'algorithme qui décide d'arroser, et surtout comment l'empêcher de vider le fût ?

## Matériel

- 6 micro:bit et câbles USB
- 6 capteurs capacitifs, pinces crocodile
- 3 pots de terre sèche, 3 pots de terre saturée, un verre d'eau
- postes avec MakeCode
- fiche élève
