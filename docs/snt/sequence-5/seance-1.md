# Séance 1 — Piloter une carte

!!! info "Séquence 5 · séance 1 sur 3 · 55 minutes"

    Entrées et sorties, boucle, condition, programme stocké dans la carte.

## Ce qu'on a cherché

Sur `makecode.microbit.org`, avec une carte micro:bit ou son simulateur. On inventorie ce dont la
carte dispose, puis on écrit trois programmes de plus en plus autonomes.

## Trace écrite

### Entrées et sorties de la carte

| Élément | Rôle |
|---|---|
| Boutons A et B | Capteurs |
| Accéléromètre | Capteur |
| Capteur de température | Capteur, il mesure la puce |
| Capteur de luminosité | Capteur |
| Matrice de LED | Actionneur, et accessoirement capteur de luminosité |
| Haut-parleur | Actionneur |

Deux cas se discutent. La matrice de LED sert aussi de capteur de luminosité : un même composant
peut jouer les deux rôles. Le capteur de température mesure la puce, un peu plus chaude que la
pièce : savoir ce que mesure vraiment un capteur fait partie du travail.

### Les trois programmes

```
1.  à l'appui du bouton A     ->  afficher(temperature())
2.  répéter indéfiniment      ->  afficher(temperature())
3.  répéter indéfiniment
        t = temperature()
        si t > 26 alors afficher(croix)
        sinon           afficher(coeur)
```

Le programme 2 fait basculer l'objet : il n'attend plus d'action humaine. Le programme 3 ajoute la
comparaison à un seuil, donc la décision.

### Ce que je retiens

Un programme sans boucle ne fait rien tant que personne n'appuie. La **boucle** est ce qui rend
l'objet autonome, la **condition** est ce qui le rend décideur.

En débranchant la carte de l'ordinateur pour l'alimenter par piles, le programme continue : il est
stocké dans la carte. C'est précisément ce qui fait un système embarqué. Ce programme permanent
s'appelle le **micrologiciel**, ou firmware.

### Ce que je dois savoir refaire

- Ranger chaque élément d'une carte en capteur ou en actionneur.
- Lire un programme court et dire ce qu'il fait, sans l'exécuter.
- Expliquer ce que change le passage d'un déclenchement au bouton à une boucle.

## La question de la séance suivante

Le programme compare une mesure à un seuil. Que devient la température de la pièce quand on laisse
tourner cette règle pendant vingt minutes ?

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
