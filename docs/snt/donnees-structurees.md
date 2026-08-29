# Les données structurées et leur traitement

## Ce qu'on cherche

Un fichier de 200 000 lignes ne se lit pas. Il se trie, se filtre, se croise.
Avec quels outils, et selon quelle organisation des données ?

## Notions du programme

- Donnée, descripteur, table de données
- Formats ouverts, CSV, JSON
- Tri, recherche, filtrage
- Croisement de deux tables
- Métadonnées
- Stockage et centres de données

## Organisation

Une séance d'introduction, deux séances d'activités en salle informatique, une
évaluation courte de dix minutes. Un tableur suffit : rien n'exige de
programmer.

La séance d'introduction remonte aux cartes perforées et au recensement de
1890, pour montrer que le problème du rangement est plus vieux que
l'informatique, puis installe le vocabulaire — donnée, descripteur, table — et
les trois opérations qui structurent tout le thème : trier, filtrer, croiser.

## Activités

### Activité 1 : nettoyer un jeu de données

Sept lignes de relevés météo sont fournies au format CSV, séparateur
point-virgule :

```
id;station;departement;date;temp_max;pluie_mm
1;Tegucigalpa;FM;2025-03-01;31.2;0
2;San Pedro Sula;CR;01/03/2025;34,1;2.5
3;La Ceiba;AT;2025-03-01;;12
4;Tegucigalpa;FM;2025-03-01;31.2;0
5;Choluteca;CH;2025-03-02;38.9;0
6;Roatan;IB;2025-03-02;30.4;-1
7;Comayagua;CM;2025-03-02;327;0
```

Cinq lignes posent problème, deux sont correctes. On y retrouve les quatre
défauts qui reviennent dans tous les jeux de données réels :

- la **valeur manquante** — la case est vide, et vide ne vaut pas zéro ;
- le **doublon** — deux fois le même enregistrement sous un identifiant
  différent, qui fausse tous les comptages ;
- la **valeur aberrante** — 327 °C dans une station météo, une virgule
  oubliée ;
- l'**incohérence de format** — deux écritures de date, deux séparateurs
  décimaux dans la même colonne.

L'élève trie ensuite la table pour faire apparaître le doublon, puis écrit et
applique un filtre. Trier est la seule des trois opérations qui ne perd aucune
ligne.

### Activité 2 : croiser deux tables

Deux fichiers sont donnés : une table des stations, avec ville, département et
altitude, et une table des relevés, avec date et température. Ils partagent la
colonne `id_station`, qui sert de **clé**.

L'élève construit la table fusionnée — une ligne par relevé, pas une par
station — puis répond à une question à laquelle aucun des deux fichiers ne
répond seul : la station la plus haute est-elle la plus fraîche ?

La tendance va dans ce sens, mais un relevé la contredit. La bonne réponse
n'est ni oui ni non : ces six lignes ne suffisent pas à conclure. C'est le
cœur de l'activité.

### Activité 3 : données ouvertes

L'élève choisit un jeu de données sur un portail public, l'ouvre dans un
tableur et relève son titre, son producteur, sa date, ses dimensions, trois de
ses descripteurs et sa licence.

Il écrit ensuite deux questions auxquelles ce jeu permet de répondre et une
question à laquelle il ne permet pas de répondre : une question n'est possible
que si elle ne mobilise que des descripteurs présents dans le fichier.

Titre, auteur, date et licence ne sont pas des données mais des
**métadonnées** : elles disent d'où vient le fichier et ce que l'on a le droit
d'en faire.

## Évaluation

Dix questions à choix unique, dix minutes, fiche autorisée, correction
automatique. Elles portent sur le rôle des descripteurs, sur la distinction
entre une case vide et un zéro, sur les quatre types de défauts, sur la
différence entre trier et filtrer, sur la clé de fusion et sur les
métadonnées.

## À retenir

Une donnée sans descripteur ne vaut rien. La qualité du travail dépend d'abord
de la qualité de la structure choisie au départ.

## Pour aller plus loin

- Coût énergétique du stockage
- Anonymisation et ré-identification
