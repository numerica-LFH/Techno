# Séance 3 : Chaîne d'énergie et chaîne d'information de l'arrosage

!!! question "La question du jour"
    Dans un système qui arrose tout seul, qu'est-ce qui circule, et par où ? Comment séparer ce qui transporte l'énergie de ce qui transporte l'information ?

| Durée | Format | Compétences |
|---|---|---|
| 45 minutes | classe entière | Identifier les fonctions d'un système technique et les organiser en chaînes ; Repérer les entrées et les sorties d'un système, ses capteurs et ses actionneurs ; Décrire le fonctionnement d'un système par un schéma |

## Avant

**Mon hypothèse.** Le système doit arroser seulement quand la terre est sèche. Dessine au brouillon, avec des flèches, ce qui doit se passer entre le moment où la terre devient sèche et le moment où l'eau coule.

### Les mots à repérer

| Mot | Définition |
|---|---|
| Chaîne d'énergie | suite des fonctions alimenter, distribuer, convertir, transmettre, qui agit sur la matière |
| Chaîne d'information | suite des fonctions acquérir, traiter, communiquer, qui agit sur les données |
| Capteur | composant qui transforme une grandeur physique en un signal utilisable par le programme |
| Actionneur | composant qui transforme l'énergie reçue en action, ici la pompe ou l'électrovanne |
| Ordre | signal envoyé par la partie commande vers la partie opérative pour déclencher une action |

## Pendant : je recherche

### Activité 1 · je recherche : la chaîne d'énergie

Place les six étiquettes suivantes dans les quatre cases de la chaîne d'énergie : panneau solaire et accumulateur, relais, pompe, tuyau et goutteurs, eau du fût, arrosage de la plante.

- Fonction alimenter : quel composant ?
- Fonction distribuer : quel composant ?
- Fonction convertir : quel composant, et quelle conversion ?
- Fonction transmettre : quel composant ?
- Quelle est l'entrée et quelle est la sortie de cette chaîne ?
- Notre fût est surélevé. Peut-on supprimer la pompe ?

### Activité 2 · je recherche : la chaîne d'information

Place les étiquettes suivantes dans les trois cases de la chaîne d'information : capteur d'humidité, micro:bit, afficheur à LED, valeur de l'humidité, ordre de mise en marche.

- Fonction acquérir : quel composant, et quelle grandeur physique mesure-t-il ?
- Fonction traiter : quel composant, et que fait-il exactement ?
- Fonction communiquer : quels composants ?
- Où se fait le lien entre les deux chaînes ?
- Quelle est la différence entre le capteur et l'actionneur ?

### Activité 3 · je recherche : et si cela tombe en panne ?

Pour chacune des trois pannes suivantes, indique ce que fait le système et ce qui arrive aux plantes.

- Le capteur est débranché et renvoie toujours la valeur maximale, terre très sèche.
- L'accumulateur est vide après trois jours sans soleil.
- Un goutteur est bouché par un dépôt.
- Quelle conclusion générale tires-tu pour la conception du programme ?

## Après : ce que je retiens

Un système automatisé se décrit par deux chaînes.  
La ____________________ enchaîne les fonctions ___________, _____________, ___________ et ______________ : panneau solaire, relais, pompe, tuyau et goutteurs.  
La __________________________ enchaîne les fonctions __________, _________ et ______________ : capteur d'humidité, micro:bit, afficheur.  
Le _________ transforme une grandeur physique en information, l'_____________ transforme l'énergie en action.  
Le ________ fait le lien entre les deux chaînes : il reçoit un ________ et laisse passer l'énergie.  
Comme le fût est surélevé, la _________ peut remplacer la pompe, ce qui économise de l'_________.  
Un programme fiable prévoit toujours le cas de la ________ du capteur, avec une durée d'arrosage __________.

**La question de la prochaine séance.** Nous savons ce que doit faire le système. Reste à faire parler le capteur : quelle valeur donne-t-il dans une terre sèche, et dans une terre humide ?

## Matériel

- schéma vierge des deux chaînes, format A4
- étiquettes des composants à placer
- le matériel réel présenté sur la table, capteur, micro:bit, relais, pompe, panneau solaire
- fiche élève
