# Séance 1 — Mesurer pour régler : étalonner le capteur et lire un journal

!!! info "Séance 1 sur 3 · 40 minutes · Demi-groupe (salle informatique, kit Grove)"

    J'étalonne le capteur du kit par des relevés répétés, puis je lis le journal de données d'un arrosage pour repérer ce qui ne va pas.

    [Fiche élève à imprimer (PDF)](fiches/3e-jardin-seance1-eleve.pdf)

    [Trace écrite de la séance](trace-ecrite-seance-1.md)

## AVANT — j'entre dans la question

#### J'observe

Le professeur téléverse le programme de lecture dans le kit Grove et projette le moniteur série. Il plante le capteur dans de la terre sèche, puis dans de la terre arrosée. Je regarde les nombres.

| Je regarde | Ce que j'observe |
|---|---|
| Les nombres dans la terre sèche |   |
| Les nombres dans la terre arrosée |   |

#### Ce qu'on cherche

Les 4e ont programmé un arrosage à un seuil. Avant de confier tout le jardin au système, il faut savoir si ses mesures sont fiables : un capteur mal réglé ou une mesure fausse font arroser pour rien.

**Comment s'assurer que les mesures du capteur sont fiables avant de leur confier l'arrosage ?**

J'écris trois choses que je crois savoir. Je n'ai pas besoin d'avoir raison : je reviendrai sur ces lignes à la fin de l'heure.

| N° | Mes hypothèses de départ | Vérifié en fin de séance (✔ / ✘) |
|---|---|---|
| 1 |   |   |
| 2 |   |   |
| 3 |   |   |

#### Vocabulaire à repérer

| Mot | Ce que j'en comprends, avec mes mots |
|---|---|
| **étalonnage** |   |
| **journal de données** |   |
| **valeur aberrante** |   |
| **médiane** |   |

## PENDANT — je recherche

### Activité 1 · J'étalonne le capteur

1. Un binôme au kit : programme `jardin-lecture.ino` téléversé, moniteur série ouvert à 9600 bauds.
2. Capteur planté dans la terre sèche, à la profondeur repérée : j'attends 10 s, puis je relève cinq valeurs.
3. Même chose dans la terre arrosée.
4. Les autres binômes recopient les relevés projetés et calculent.

| Situation | Mes cinq relevés | Relevés de référence | Moyenne de référence |
|---|---|---|---|
| terre sèche |   | 198 · 203 · 201 · 196 · 202 |   |
| terre arrosée |   | 597 · 604 · 601 · 598 · 600 |   |

a\. Pourquoi faire cinq relevés et une moyenne plutôt qu'un seul relevé ?

b\. Avec humidité en % = 100 × (valeur − 200) ÷ 400, je calcule les valeurs qui correspondent à 30 % et à 50 %.

### Activité 2 · Je lis un journal de données

Avec le programme à un seul seuil (320), le système a enregistré une ligne toutes les 30 minutes. La pompe vaut 1 quand elle donne une dose d'eau.

| temps (min) | valeur | pompe |
|---|---|---|
| 0 | 331 | 0 |
| 30 | 322 | 0 |
| 60 | 318 | 1 |
| 90 | 324 | 0 |
| 120 | 319 | 1 |
| 150 | 0 | 1 |
| 180 | 326 | 0 |
| 210 | 317 | 1 |
| 240 | 323 | 0 |

c\. Combien de doses la pompe a-t-elle données en 4 heures ? Que remarque-t-on sur les valeurs ?

d\. La valeur 0 à 150 min est-elle possible ? Qu'a fait le programme ?

e\. Je calcule la médiane des trois valeurs 319, 0 et 326. Qu'est-ce que je constate ?

### Mon défi

!!! example "Mon défi · 3e"

    Le journal enregistre une ligne toutes les 30 minutes pendant les 21 jours d'essai. Combien de lignes contient-il ? Pourquoi le lire avec un tableur plutôt qu'à l'œil ?

    *Prolongement : en fin d'heure si le temps le permet, sinon à la maison.*

## APRÈS — je fixe ce que j'ai appris

#### À retenir

!!! note "Deux documents, deux usages"

    Ce bloc se complète en classe, à la fin de l'heure : les phrases à trous se remplissent
    pendant la mise en commun. La [trace écrite de la séance](trace-ecrite-seance-1.md)
    reprend les mêmes notions rédigées, avec les définitions exactes et les compétences
    évaluées. C'est elle qui se colle dans le cahier.

L'**étalonnage** relève la valeur du capteur dans des états connus. On fait plusieurs relevés et on en prend la moyenne : terre sèche 200, terre arrosée 600.

Avec humidité en % = 100 × (valeur − 200) ÷ 400, 30 % correspond à 320 et 50 % à 400.

Un **journal de données** enregistre les mesures de façon datée et régulière. Il montre ce que le système a vraiment fait.

Une **valeur aberrante** fait arroser pour rien. La **médiane** de trois mesures l'élimine ; une valeur autour du seuil fait démarrer et arrêter la pompe sans cesse.

Je complète : Relever la valeur d'un capteur dans des états connus, c'est l'`..........`.

Je complète : Une mesure impossible due à un faux contact est une valeur `..........`.

#### Je reviens sur mes observations et mes hypothèses

Je coche ✔ ou ✘ chaque hypothèse. J'explique ensuite ce que j'ai observé au début de la séance, avec le vocabulaire de la séance :

#### La question de la prochaine séance

Le goutte à goutte et notre jardin tiennent-ils leur promesse d'économiser l'eau ?

## S'entraîner

[Ouvrir l'exercice autocorrectif :material-arrow-right:](exercices-seance-1.html){ .md-button .md-button--primary target=_blank }

Dix questions sur la séance. Je réponds, puis je vérifie : la correction et une explication s'affichent sous chaque question. Je recommence autant de fois que je veux ; rien n'est envoyé.
