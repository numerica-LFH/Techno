# La photographie numérique

## Ce qu'on cherche

Entre la lumière qui entre dans l'objectif et le fichier envoyé sur un réseau
social, tout est transformé. Que garde-t-on, et que jette-t-on ?

## Notions du programme

- Capteur photosites, pixels, résolution
- Codage d'une image, profondeur de couleur, RVB
- Traitement d'image : contraste, filtres, convolution
- Compression avec et sans perte
- Métadonnées EXIF
- Photographie computationnelle

## Organisation

Une séance d'introduction, deux séances d'activités, une évaluation courte de
dix minutes. Les calculs des activités 1 et 2 se font à la main, sur de petites
matrices : c'est laborieux, et c'est là que le mécanisme s'installe. Un
prolongement en Python est possible pour les classes qui vont plus vite.

L'amorce la plus efficace tient en deux nombres : le nombre de pixels d'une
photo du téléphone d'un élève, et le poids du fichier. Largeur × hauteur ×
3 octets donne environ dix fois le poids réel. L'écart se voit avant toute
explication, et c'est lui qui porte la séquence.

## Activités

### Activité 1 : manipuler les pixels

L'élève convertit d'abord trois pixels donnés en RVB vers un niveau de gris par
la moyenne des composantes, et calcule le nombre de couleurs codables sur trois
octets : 256 × 256 × 256, soit 16 777 216.

Il applique ensuite deux transformations à une image de 4 × 4 pixels en niveaux
de gris :

- le **négatif**, où chaque valeur devient 255 moins elle-même ;
- le **seuillage** à 128, où tout ce qui dépasse devient 255 et le reste 0.

La question qui compte vient à la fin : peut-on revenir en arrière ? Le négatif
est réversible, aucune information n'est perdue. Le seuillage ne l'est pas :
impossible de savoir si un pixel valait 140 ou 250.

Ce critère servira tel quel pour la compression, en séance 2.

### Activité 2 : appliquer un filtre

Une image de 5 × 5 pixels est fournie : trois colonnes sombres, deux colonnes
claires, donc un bord net au milieu. Deux noyaux de convolution 3 × 3 sont
donnés, l'un qui fait la moyenne du voisinage, l'autre qui compare un pixel à
ses quatre voisins directs.

L'élève applique les deux noyaux à trois pixels de la ligne du milieu. Le
premier noyau remplace le bord net par un dégradé : l'image devient floue. Le
second donne **zéro** partout où l'image est uniforme, et une grande valeur de
part et d'autre du bord.

L'explication est à faire formuler : le noyau retranche aux quatre voisins
quatre fois la valeur du pixel. Quand tout se vaut, le compte tombe juste et le
résultat est nul. La machine ne voit aucune forme — le contour n'est pas
détecté, il est ce qui reste quand tout le reste s'annule.

Dernière question : pourquoi ce calcul est-il impossible sur les pixels du bord
de l'image ?

### Activité 3 : lire les métadonnées

Sur une photo prise par l'élève lui-même, ou fournie par le professeur, on
relève les données EXIF : date et heure, marque et modèle de l'appareil,
dimensions, temps de pose et sensibilité, coordonnées GPS lorsqu'elles sont
présentes.

L'élève multiplie ensuite largeur × hauteur × 3 octets et compare au poids réel
du fichier. Le rapport est d'environ un à dix : le fichier ne contient pas la
valeur de chaque pixel, il est compressé **avec perte**.

Il publie enfin la photo sur un service en ligne, la retélécharge et relit ses
métadonnées. Les coordonnées GPS ont souvent disparu — ce qui ne veut pas dire
que le service ne les a pas lues et conservées de son côté.

Chacun travaille sur sa propre photo. On ne lit pas les métadonnées de la photo
de quelqu'un d'autre.

## Évaluation

Dix questions à choix unique, dix minutes, fiche autorisée, correction
automatique. Elles portent sur la distinction photosite / pixel, sur le nombre
de couleurs en RVB, sur la réversibilité du négatif et du seuillage, sur le
résultat d'un noyau de contours en zone uniforme, sur le problème du bord et
sur la portée des données EXIF.

## À retenir

Une photo transporte plus que son image. Date, appareil, réglages et parfois
coordonnées GPS voyagent avec le fichier.

## Pour aller plus loin

- Pourquoi le JPEG dégrade, et où cela se voit
- Ce que fait le traitement automatique d'un téléphone avant l'enregistrement
