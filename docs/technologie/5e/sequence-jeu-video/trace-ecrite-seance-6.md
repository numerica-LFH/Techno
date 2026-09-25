# Trace écrite — Séance 6 : Le panier piloté au nez, l'écran titre dans Scratch Lab

!!! info "5e · Séquence projet · Inventer un jeu vidéo · Séance 6 sur 8"

    Question de la séance : *Comment piloter le panier avec le nez, et que faire si la caméra ne marche pas ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 6](seance-6.md).

    [Trace écrite à imprimer (PDF)](traces/5e-jeu-video-seance6-trace.pdf)

## Ce que je dois retenir

### Piloter un lutin avec le visage

L'extension Détection de visage utilise la caméra. Son image recouvre l'arrière-plan : on met la transparence de la vidéo à 100 (extension Détection vidéo). L'image devient invisible, la détection continue. Si on arrête la vidéo, la détection s'arrête.

Un lutin caché, le Nez, va sans arrêt à la position du nez. Le panier recopie l'abscisse x du Nez et garde son ordonnée : il reste en bas de l'écran.

### Prévoir un mode de secours

Si la pièce est sombre ou si le joueur sort du champ, aucun visage n'est détecté. Le bloc « si un visage est détecté alors, sinon » permet de revenir au clavier. Un jeu doit rester jouable quand une entrée fait défaut.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **extension** | une famille de blocs supplémentaire qu'on ajoute au projet, comme Détection de visage |
| **transparence** | un réglage de 0 (opaque) à 100 (invisible) de l'image vidéo sur la scène |
| **mode de secours** | une autre façon de jouer, prévue quand la solution principale ne fonctionne pas |

## Les erreurs à ne pas commettre

- Arrêter la vidéo pour cacher l'image : la détection s'arrête aussi.
- Faire suivre au panier x et y du nez : il quitte le bas de l'écran.
- Mettre des blocs du Lab dans le jeu principal : le fichier ne s'ouvre plus dans Scratch.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 1, 2, 3, 4, 5, 6, 9, 10 |
| **T1.2** | Décrire les interactions entre un objet, son environnement et les utilisateurs | Analyser | 7, 8 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-6.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-6.md){ .md-button }
