# Séance 8 — Tester, améliorer et présenter son jeu

!!! info "Séance 8 sur 8 · 55 minutes · Demi-groupe"

    Je fais tester mon jeu par un autre binôme avec la grille du jury, j'écris son mode d'emploi et je l'améliore.

    [Fiche élève à imprimer (PDF)](fiches/3e-jeu-video-seance8-eleve.pdf)

    [Trace écrite de la séance](trace-ecrite-seance-8.md)

## AVANT — j'entre dans la question

#### J'observe

Un autre binôme joue à mon jeu sans aucune explication. Je le regarde jouer sans rien dire pendant trois minutes.

| Je regarde | Ce que j'observe |
|---|---|
| Ce que le joueur fait dans les dix premières secondes |   |
| Le moment où il hésite ou se trompe |   |
| Ce qu'il dit à la fin de la partie |   |

#### Ce qu'on cherche

Le jury de la Nuit du Code joue au jeu sans connaître l'équipe. Tout ce qui n'est pas écrit dans le mode d'emploi ou visible à l'écran n'existe pas pour lui.

**Comment savoir si mon jeu est bon, et comment l'améliorer ?**

#### Vocabulaire à repérer

| Mot | Ce que j'en comprends, avec mes mots |
|---|---|
| **mode d'emploi** |   |
| **test croisé** |   |
| **critère** |   |
| **amélioration** |   |

## PENDANT — je recherche

### Activité 1 · Le mode d'emploi

J'écris le mode d'emploi de mon jeu en cinq lignes au maximum, dans la case « Instructions » du projet.

| Ligne | Ce qu'elle dit |
|---|---|
| But du jeu |   |
| Commandes |   |
| Ce qu'il faut éviter |   |
| Comment on gagne ou on perd |   |

### Activité 2 · Le test croisé

J'échange mon poste avec un autre binôme. Je joue à son jeu et je le note avec la grille du jury.

| Critère | Ce que je regarde | Note sur 5 |
|---|---|---|
| Jouabilité | le jeu démarre, se joue sans bogue, s'arrête |   |
| Richesse | règles, niveaux, sons, écrans de fin |   |
| Originalité | une idée qu'on n'a pas vue ailleurs |   |
| Consignes | univers respecté, mode d'emploi présent |   |
| Total |   | / 20 |

a\. J'écris un point fort et une amélioration pour l'autre binôme.

### Activité 3 · Améliorer, puis faire le point

Je lis la grille remplie par l'autre binôme. Je choisis les améliorations et je les fais.

b\. Quelle amélioration ai-je faite en premier ? Pourquoi celle-là ?

Le lien entre blocs et texte : voici le script du panier écrit en Python, le langage de la seconde.

*Le script du panier traduit en Python (fonction touche_pressee imaginaire)*

```python
x = 0
y = -150
while True:                      # répéter indéfiniment
    if touche_pressee("droite"): # si touche flèche droite pressée ? alors
        x = x + 10               #     ajouter 10 à x
    if touche_pressee("gauche"):
        x = x - 10
```

c\. Quelle ligne Python correspond au bloc « répéter indéfiniment » ? Et au bloc « si alors » ?

J'enregistre la version finale et je passe l'évaluation de fin de séquence (S'évaluer).

### Mon défi

!!! example "Mon défi · 3e"

    Je traduis en Python la règle « si la mangue touche le panier, ajouter 1 au score ».

## APRÈS — je fixe ce que j'ai appris

#### À retenir

!!! note "Deux documents, deux usages"

    Ce bloc se complète en classe, à la fin de l'heure : les phrases à trous se remplissent
    pendant la mise en commun. La [trace écrite de la séance](trace-ecrite-seance-8.md)
    reprend les mêmes notions rédigées, avec les définitions exactes et les compétences
    évaluées. C'est elle qui se colle dans le cahier.

Un jeu se juge sur des **critères** : jouabilité, richesse, originalité, respect des consignes.

Le **mode d'emploi** dit le but, les commandes et comment on gagne ou on perd.

Le **test croisé** montre ce que je ne vois plus dans mon propre jeu ; j'en tire des **améliorations**, en commençant par la jouabilité.

En Python, une boucle s'écrit `while True:`, une condition `if` ; l'indentation remplace l'emboîtement des blocs.

Je complète : La grille du jury compte quatre critères notés sur `..........`, soit un total sur 20.

Je complète : Je corrige d'abord ce qui touche la `..........`.

#### Retour sur mes observations

Je relis ce que j'ai noté dans « J'observe ». J'explique maintenant ce que j'ai vu, avec le vocabulaire de la séance :

## S'évaluer

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-8.html){ .md-button .md-button--primary target=_blank }

Quatorze questions reprenant les activités et le vocabulaire de la séance. J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au professeur. Je relis la trace écrite avant de commencer.
