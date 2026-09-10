# Séance 0 — Écouter le ciel

!!! info "Séquence 4 · séance 0 sur 3 · 55 minutes"

    Temps de vol, distance, trilatération, correction d'horloge.

## Ce qu'on a cherché

Un récepteur GPS n'émet rien. Il faut donc expliquer comment un appareil silencieux peut savoir où
il se trouve.

## Trace écrite

### Les mots de la séance

| Mot | Ce qu'il désigne |
|---|---|
| **Temps de vol** | La durée mise par le signal pour aller du satellite au récepteur |
| **Trilatération** | Le croisement de plusieurs distances pour fixer un point |
| **Constellation** | L'ensemble des satellites d'un système : GPS, Galileo, GLONASS, Beidou |
| **Récepteur** | L'appareil qui écoute et qui calcule |

### La frise à retenir

| Date | Ce qui se passe | Ce que ça change |
|---|---|---|
| 1957 | Spoutnik, et la mesure de l'effet Doppler sur son signal | Si l'on sait où est le satellite, on peut se situer |
| 1978 | Lancement des premiers satellites GPS | Le principe devient un système |
| 1983 | Ouverture du GPS aux usages civils | La position sort du domaine militaire |

### Le principe, en quatre lignes

1. Le satellite diffuse sa position et l'heure exacte. Il ne sait pas qui l'écoute.
2. Le récepteur compare l'heure reçue à son horloge : c'est le temps de vol.
3. Distance égale vitesse de la lumière multipliée par ce temps de vol.
4. Trois distances fixent un point. Un quatrième satellite corrige l'horloge du récepteur.

### Ce que je retiens

Le récepteur **écoute**, il n'émet pas. Sa position vient du décalage entre les signaux de
plusieurs satellites. Un million d'utilisateurs simultanés ne ralentissent rien, puisque le
satellite se contente de diffuser.

Le mot *triangulation* est d'usage courant, mais ici on croise des distances et non des angles : il
s'agit d'une **trilatération**.

La lumière parcourt environ 300 mètres par microseconde. Une erreur d'un millionième de seconde sur
l'horloge se traduit donc par une erreur de position d'environ 300 mètres : voilà pourquoi le
quatrième satellite est indispensable, l'horloge du récepteur n'étant pas atomique.

### Ce que je dois savoir refaire

- Dire ce que contient le message d'un satellite, et ce que calcule le récepteur.
- Écrire la relation entre distance, vitesse et temps de vol.
- Justifier le nombre minimal de satellites pour une position en trois dimensions.

## La question de la séance suivante

Le récepteur produit une ligne de texte, plusieurs fois par seconde. Que contient-elle exactement,
et comment la lire ?

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
