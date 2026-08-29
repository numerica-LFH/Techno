# Informatique embarquée et objets connectés

## Ce qu'on cherche

Une montre, un thermostat, une balance : à quel moment un objet cesse d'être un
objet pour devenir un système qui décide ?

## Notions du programme

- Systèmes embarqués, contraintes de taille, d'énergie, de temps
- Capteurs et actionneurs
- Interface homme-machine
- Boucle de régulation, commande d'un système
- Sécurité des objets connectés

## Organisation

Une séance d'introduction, deux séances d'activités, une évaluation courte de
dix minutes. La séance 1 se fait en salle informatique avec des cartes
micro:bit, ou à défaut avec le simulateur de MakeCode. La séance 2 ne demande
que la fiche et des documents imprimés.

La séance d'introduction établit la réponse à la question de départ : l'objet
décide à partir du moment où il **compare une mesure à une consigne**. Un
interrupteur ne décide pas, il transmet. Un thermostat sans réseau décide ; une
lampe connectée pilotée à la main ne décide pas.

## Activités

### Activité 1 : piloter une carte

Sur `makecode.microbit.org`, avec une carte micro:bit ou son simulateur.

L'élève commence par inventorier ce dont la carte dispose et range chaque
élément en **capteur** — il transforme une grandeur physique en information —
ou en **actionneur** — il transforme une information en action physique. Deux
cas se discutent : la matrice de LED sert aussi de capteur de luminosité, et le
capteur de température mesure en réalité la puce, un peu plus chaude que la
pièce.

Il écrit ensuite trois programmes successifs :

1. afficher la température à l'appui d'un bouton ;
2. le faire en boucle, sans appui — l'objet n'attend plus d'action humaine ;
3. ajouter une condition : au-dessus de 26 °C une croix, sinon un cœur.

Il débranche enfin la carte et l'alimente par piles : le programme continue,
parce qu'il est stocké dans la carte. C'est ce qui fait un système embarqué.

### Activité 2 : réguler

On veut maintenir une pièce à 22 °C avec un chauffage qui ne sait que
s'allumer ou s'éteindre. La règle programmée est donnée :

```
si temperature < 21  alors  chauffage = ALLUME
si temperature > 23  alors  chauffage = ETEINT
sinon                       chauffage inchangé

Effet observé : allumé  ->  +1,0 °C par minute
                éteint  ->  -0,5 °C par minute
```

L'élève simule à la main, minute par minute, à partir de 18 °C. La température
ne se stabilise jamais sur la consigne : elle oscille en dents de scie, et la
montée est plus raide que la descente.

Il explique alors pourquoi on n'allume pas et on n'éteint pas exactement à
22 °C : sans marge, l'appareil basculerait plusieurs fois par minute. On accepte
une oscillation pour éviter un battement permanent.

Dernière question, et la plus instructive : que se passe-t-il si le capteur est
placé juste au-dessus du radiateur ? La boucle fonctionne parfaitement — sur la
mauvaise grandeur. Un système de régulation ne vaut jamais mieux que son
capteur.

### Activité 3 : chercher la faille

Étude de cas documentaire sur la prise de contrôle massive d'objets connectés
de 2016 : un programme a parcouru Internet en essayant sur chaque appareil une
courte liste de mots de passe d'usine. Des centaines de milliers de caméras et
d'enregistreurs ont répondu, et ont servi ensemble à saturer de grands services
d'Internet. Leurs propriétaires n'ont rien remarqué : les caméras filmaient
normalement.

L'élève identifie les trois faiblesses qui reviennent presque toujours — mot de
passe d'usine identique et jamais changé, service réseau ouvert que
l'utilisateur ignore, absence totale de mises à jour — et dit pour chacune qui
peut la corriger. L'essentiel relève du fabricant, et ce n'est pas un oubli :
c'est ce qui coûte le moins cher à produire.

On raisonne sur documents. On ne teste rien, on ne cherche aucun mot de passe,
on ne scanne aucun réseau.

## Évaluation

Dix questions à choix unique, dix minutes, fiche autorisée, correction
automatique. Elles portent sur la distinction capteur / actionneur, sur les
trois contraintes du système embarqué, sur la consigne et l'oscillation, sur le
placement du capteur et sur les faiblesses classiques d'un objet connecté.

## À retenir

Un objet connecté est un ordinateur avec un capteur et une liaison réseau. Ses
faiblesses sont celles d'un ordinateur, avec en plus l'absence de mises à jour.

## Pour aller plus loin

- Consommation énergétique et autonomie
- Que devient la donnée collectée, et où
