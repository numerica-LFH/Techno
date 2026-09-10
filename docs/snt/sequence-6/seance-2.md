# Séance 2 — Filtres et métadonnées

!!! info "Séquence 6 · séance 2 sur 3 · 55 minutes"

    Convolution, détection de contours, compression, données EXIF.

## Ce qu'on a cherché

Une image de 5 sur 5 pixels avec un bord net au milieu, deux noyaux à appliquer à la main, puis les
métadonnées d'une vraie photo.

## Trace écrite

### Les mots de la séance

| Mot | Ce qu'il désigne |
|---|---|
| **Convolution** | Un calcul qui combine un pixel et ses voisins |
| **Noyau** | Le tableau de coefficients utilisé pour ce calcul |
| **EXIF** | Les métadonnées enregistrées dans le fichier image |

### L'image et les deux noyaux

L'image fait 5 sur 5 : trois colonnes sombres à 10, deux colonnes claires à 200, donc un bord net au
milieu.

```
noyau de moyenne          noyau de contours
1/9  1/9  1/9              0   -1    0
1/9  1/9  1/9             -1    4   -1
1/9  1/9  1/9              0   -1    0
```

Sur les trois pixels de la ligne du milieu :

| Noyau | Résultats | Effet |
|---|---|---|
| Moyenne | 10 · 73,3 · 136,7 | Le bord net devient un dégradé : l'image est floue |
| Contours | 0 · -190 · +190 | Zéro partout où l'image est uniforme, valeur forte de part et d'autre du bord |

### Ce que je retiens

Le noyau de contours retranche aux quatre voisins quatre fois la valeur du pixel. Quand tout se
vaut, le compte tombe juste et le résultat est nul. La machine ne voit aucune forme : le contour
n'est pas détecté, il est ce qui reste quand tout le reste s'annule.

Le calcul est impossible sur les pixels du bord de l'image : il leur manque des voisins, et le noyau
déborde.

Le fichier ne contient pas la valeur de chaque pixel. La compression **JPEG** écarte définitivement
des détails peu visibles à l'œil, et le rapport atteint environ un à dix. Enregistrer douze fois de
suite la même photo en JPEG dégrade l'image un peu plus à chaque passage.

Les données **EXIF** contiennent la date et l'heure, la marque et le modèle de l'appareil, les
dimensions, le temps de pose, la sensibilité, et parfois les coordonnées GPS. Elles sont invisibles à
l'écran et voyagent avec le fichier. Publier une photo sur un service en ligne fait souvent
disparaître les coordonnées GPS du fichier public, ce qui ne veut pas dire que le service ne les a
pas lues et conservées de son côté.

### Ce que je dois savoir refaire

- Appliquer un noyau 3 sur 3 à un pixel donné.
- Dire ce que donne un noyau de contours en zone uniforme, et pourquoi.
- Expliquer pourquoi le calcul échoue au bord de l'image.
- Nommer trois champs EXIF et dire ce qu'ils révèlent.

!!! note "Sur les photos utilisées"

    Chacun travaille sur sa propre photo, ou sur celle fournie par le professeur. On ne lit pas les
    métadonnées de la photo de quelqu'un d'autre.

## Pour aller plus loin

- Pourquoi le JPEG dégrade, et où cela se voit.
- Ce que fait le traitement automatique d'un téléphone avant l'enregistrement.

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
