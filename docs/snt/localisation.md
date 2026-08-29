# Localisation, cartographie et mobilité

## Ce qu'on cherche

Un téléphone affiche sa position à quelques mètres près, sans rien émettre vers
les satellites. Par quel calcul ?

## Notions du programme

- Principe de la triangulation et du temps de vol
- GPS et autres constellations
- Trame NMEA
- Cartes numériques, couches, données collaboratives
- Calcul d'itinéraire, algorithmes de plus court chemin
- Confidentialité des données de localisation

## Organisation

Une séance d'introduction, deux séances d'activités, une évaluation courte de
dix minutes. L'activité 2 demande un accès à Internet et des comptes
OpenStreetMap créés à l'avance.

La séance d'introduction part de Spoutnik et de l'effet Doppler, puis établit
le principe : un satellite diffuse sa position et l'heure, le récepteur en
déduit une distance à partir du temps de vol, et trois distances suffisent à
fixer un point. Un quatrième satellite corrige l'horloge du récepteur, qui
n'est pas atomique.

Le mot *triangulation* est d'usage courant, mais ici on croise des distances,
pas des angles : il s'agit d'une **trilatération**.

## Activités

### Activité 1 : décoder une trame NMEA

Une trame relevée à Tegucigalpa est donnée :

```
$GPGGA,141236.00,1406.2280,N,08712.7360,W,1,08,1.02,990.4,M,-8.7,M,,*55
```

L'élève identifie les champs — heure UTC, latitude, hémisphère, longitude,
est ou ouest, nombre de satellites, altitude — puis convertit en degrés
décimaux. Une latitude s'écrit `ddmm.mmmm` : les deux premiers chiffres sont
des degrés, le reste des minutes d'angle, à diviser par soixante.

Deux erreurs sont attendues et utiles : lire « 1406,2280 degrés », alors
qu'aucune latitude ne dépasse 90 ; et oublier le signe négatif de la longitude
ouest, ce qui fait tomber le point en Inde. La vérification sur un fond de
carte les corrige immédiatement.

L'élève calcule enfin l'heure locale, le Honduras étant à UTC−6, et cherche à
quoi servent les deux caractères qui suivent l'astérisque : ils permettent de
vérifier que la trame n'a pas été abîmée pendant la transmission.

### Activité 2 : contribuer à une carte libre

Sur `openstreetmap.org`, l'élève se place autour de l'établissement, compare la
carte à ce qu'il connaît du quartier, puis ajoute ou corrige un point d'intérêt
réel et vérifiable : un commerce, un arrêt, un passage piéton. Il renseigne les
attributs et rédige un commentaire de modification qui dit ce qu'il a fait et
comment il le sait.

Sa contribution est publique et signée, immédiatement. C'est l'occasion de
regarder comment le projet se protège des erreurs et du vandalisme :
historique complet, annulation possible, relecture par la communauté.

Aucune adresse personnelle, aucun nom d'élève ne rejoint la carte.

### Activité 3 : plus court chemin

Six lieux et les durées de trajet entre ceux qui sont reliés :

```
A Lycée   B Marché   C Parc   D Hôpital   E Stade   F Aéroport

A-B : 4    A-C : 2    B-C : 1    B-D : 5
C-D : 8    C-E : 10   D-E : 2    D-F : 6    E-F : 3
```

L'élève cherche le trajet le plus rapide du lycée à l'aéroport, puis celui qui
passe par le moins de lieux. Ce ne sont pas les mêmes : le premier traverse
cinq étapes en treize minutes, le second trois étapes en quinze minutes. Ce qui
compte est la somme des poids, pas le nombre d'arêtes.

Il représente ensuite un sens unique — le graphe devient orienté — et un
embouteillage — on change le poids d'une arête, sans toucher au graphe. C'est
exactement ce que font les calculateurs d'itinéraire en temps réel.

## Évaluation

Dix questions à choix unique, dix minutes, fiche autorisée, correction
automatique. Elles portent sur le fait que le récepteur n'émet rien, sur le
calcul de la distance à partir du temps de vol, sur le nombre de satellites
nécessaires, sur la conversion d'une latitude, sur le modèle collaboratif d'une
carte libre et sur le plus court chemin de l'activité 3.

## À retenir

Le récepteur écoute, il n'émet pas. Sa position vient du décalage entre les
signaux de plusieurs satellites.

## Pour aller plus loin

- Précision, sources d'erreur, correction différentielle
- Ce que révèle un historique de déplacements
