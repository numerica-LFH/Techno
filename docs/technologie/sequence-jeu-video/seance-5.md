# Séance 5 — Comment un ordinateur trouve-t-il un visage ?

!!! info "Séance 5 sur 8 · 55 minutes · Classe entière"

    Je comprends comment la détection de visage de Scratch fonctionne, ses limites et les précautions à prendre.

    [Fiche élève à imprimer (PDF)](fiches/4e-jeu-video-seance5-eleve.pdf)

    [Trace écrite de la séance](trace-ecrite-seance-5.md)

## AVANT — j'entre dans la question

#### Ce qu'on cherche

Depuis octobre 2025, Scratch contient l'extension « Détection de visage ». Elle permet de piloter un lutin avec le nez, les yeux ou l'inclinaison de la tête. Avant de l'utiliser dans notre jeu, je cherche à comprendre ce qu'elle fait de l'image de ma caméra.

**Comment un ordinateur peut-il trouver un visage dans l'image d'une caméra ?**

J'écris trois choses que je crois savoir. Je n'ai pas besoin d'avoir raison : je reviendrai sur ces lignes à la fin de l'heure.

| N° | Mes hypothèses de départ | Vérifié en fin de séance (✔ / ✘) |
|---|---|---|
| 1 |   |   |
| 2 |   |   |
| 3 |   |   |

#### Vocabulaire à repérer

| Mot | Ce que j'en comprends, avec mes mots |
|---|---|
| **pixel** |   |
| **apprentissage supervisé** |   |
| **biais** |   |
| **donnée personnelle** |   |

## PENDANT — je recherche

### Activité 1 · Une image, c'est des nombres

L'image de la caméra affichée sur la scène fait 480 pixels de large et 360 pixels de haut. Chaque pixel est codé par trois nombres de 0 à 255 : rouge, vert, bleu.

a\. Combien de pixels compte l'image de la scène ?

b\. Un pixel noir est codé (0, 0, 0). Comment est codé un pixel blanc ?

c\. Pour l'ordinateur, un visage est-il une forme qu'il « voit » ? Qu'a-t-il réellement en mémoire ?

### Activité 2 · Apprendre à partir d'exemples

Personne n'a écrit à la main les règles « un visage, c'est deux yeux au-dessus d'un nez ». Des chercheurs ont montré au programme des milliers d'images déjà étiquetées « visage » ou « pas visage ». À force d'exemples, le programme a réglé ses paramètres : c'est un **modèle**. Scratch utilise un modèle de ce type, nommé BlazeFace.

1. On rassemble des milliers d'images **étiquetées** par des humains.
2. Le programme s'**entraîne** : il ajuste ses paramètres pour se tromper le moins possible.
3. On **teste** le modèle sur des images qu'il n'a jamais vues.
4. Le modèle est **utilisé** : dans Scratch, il repère le visage, le nez, les yeux, les oreilles.

d\. Pourquoi appelle-t-on cette méthode apprentissage « supervisé » ?

e\. Le calcul se fait dans mon navigateur. L'image de ma caméra est-elle envoyée sur Internet ?

### Activité 3 · Limites et précautions

Je complète le tableau en prévoyant si la détection fonctionnera bien, puis nous vérifions avec le professeur.

| Situation | Détection prévue | Pourquoi |
|---|---|---|
| Visage de face, bonne lumière |   |   |
| Pièce sombre ou contre-jour |   |   |
| Casquette et main devant la bouche |   |   |
| Deux élèves devant la caméra |   |   |

Si les images d'entraînement montrent surtout un type de visage, de lumière ou de peau, le modèle se trompe davantage pour les autres : c'est un **biais**.

f\. Que se passe-t-il si deux visages sont devant la caméra ? Comment l'éviter pendant une partie ?

g\. L'image de mon visage est une donnée personnelle. Je propose deux règles pour utiliser la caméra en classe.

### Mon défi

!!! example "Mon défi · 4e"

    Je propose un protocole de test : trois situations, ce que je mesure et comment je note le résultat.

## APRÈS — je fixe ce que j'ai appris

#### À retenir

!!! note "Deux documents, deux usages"

    Ce bloc se complète en classe, à la fin de l'heure : les phrases à trous se remplissent
    pendant la mise en commun. La [trace écrite de la séance](trace-ecrite-seance-5.md)
    reprend les mêmes notions rédigées, avec les définitions exactes et les compétences
    évaluées. C'est elle qui se colle dans le cahier.

Pour l'ordinateur, une image n'est qu'un tableau de **pixels**, c'est-à-dire de nombres.

La détection de visage utilise un **modèle** entraîné par **apprentissage supervisé** : des milliers d'images étiquetées par des humains.

Un modèle peut avoir des **biais** : il se trompe plus souvent dans les situations mal représentées dans ses exemples.

L'image d'un visage est une **donnée personnelle**. Dans Scratch, le calcul se fait sur l'ordinateur : l'image n'est pas envoyée.

Je complète : L'image de la scène compte 480 × 360 = `..........` pixels.

Je complète : Un modèle entraîné surtout sur des visages bien éclairés se trompe plus souvent à contre-jour : c'est un `..........`.

#### Je reviens sur mes hypothèses

Je remonte en haut de la fiche et je coche ✔ ou ✘. J'écris ici ce qui m'a le plus surpris :

#### La question de la prochaine séance

Peut-on piloter le panier avec le nez, et que faire si la caméra ne marche pas ?

## S'évaluer

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-5.html){ .md-button .md-button--primary target=_blank }

Treize questions reprenant les activités et le vocabulaire de la séance. J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au professeur. Je relis la trace écrite avant de commencer.
