# Séance 0 — Ce que la photo jette

!!! info "Séquence 6 · séance 0 sur 3 · 55 minutes"

    Photosite et pixel, codage RVB, poids théorique et poids réel.

## Ce qu'on a cherché

Deux nombres suffisent à lancer la séquence : le nombre de pixels d'une photo prise avec un
téléphone, et le poids du fichier. Ils ne concordent pas, et l'écart porte tout le reste.

## Trace écrite

### Les mots de la séance

| Mot | Ce qu'il désigne |
|---|---|
| **Photosite** | Une case du capteur, un objet physique |
| **Pixel** | Une case de l'image enregistrée, un objet numérique |
| **Définition** | Le nombre de pixels, largeur multipliée par hauteur |
| **RVB** | Le codage d'une couleur par ses composantes rouge, verte et bleue |
| **Compression avec perte** | Une réduction du poids qui écarte définitivement de l'information |

### La frise à retenir

| Date | Ce qui se passe | Ce que ça change |
|---|---|---|
| 1826 | Première photographie de Niépce | L'image est fixée par un procédé chimique |
| 1969 | Invention du capteur CCD | La lumière devient un nombre |
| 1975 | Premier appareil photo numérique | L'image est enregistrée sans film |

### Le calcul de l'amorce

```
4 000 x 3 000 pixels x 3 octets  =  36 000 000 octets, soit 36 Mo environ
poids réel du fichier            =  3,6 Mo environ
rapport                          =  environ un à dix
```

### Ce que je retiens

Le photosite est sur le capteur, le pixel est dans le fichier. Ce ne sont pas deux mots pour la même
chose.

Chaque composante étant codée sur 8 bits, un pixel RVB peut prendre 256 x 256 x 256 valeurs, soit
**16 777 216 couleurs**. Le pixel (255, 255, 0) est jaune, le pixel (0, 0, 0) est noir.

Le fichier ne contient pas la valeur de chaque pixel : il est **compressé**, et le rapport est
d'environ un à dix. Le format JPEG compresse avec perte, le format PNG sans perte, et c'est pour
cela qu'un PNG pèse plus lourd.

### Ce que je dois savoir refaire

- Distinguer photosite et pixel.
- Calculer le poids théorique d'une image non compressée.
- Calculer le nombre de couleurs représentables en RVB sur trois octets.

## La question de la séance suivante

Si une image n'est qu'un tableau de nombres, alors la transformer revient à faire des calculs.
Lesquels, et peut-on toujours revenir en arrière ?

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
