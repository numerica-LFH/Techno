# Trace écrite — Séance 5 : Comment un ordinateur trouve-t-il un visage ?

!!! info "5e · Séquence projet · Inventer un jeu vidéo · Séance 5 sur 8"

    Question de la séance : *Comment un ordinateur peut-il trouver un visage dans l'image d'une caméra ?*

    Même texte que le bloc « À retenir » de la [séance 5](seance-5.md). La fiche imprimée reprend ce texte avec des trous à compléter.

    [Trace écrite à imprimer (PDF)](traces/5e-jeu-video-seance5-trace.pdf)

## À retenir

### Comment un ordinateur trouve-t-il un visage ?

Pour l'ordinateur, une image n'est qu'un tableau de **pixels**, c'est-à-dire de nombres.

La détection de visage utilise un **modèle** entraîné par **apprentissage supervisé** : des milliers d'images étiquetées par des humains.

Un modèle peut avoir des **biais** : il se trompe plus souvent dans les situations mal représentées dans ses exemples.

L'image d'un visage est une **donnée personnelle**. Dans Scratch, le calcul se fait sur l'ordinateur : l'image n'est pas envoyée.

L'image de la scène compte 480 × 360 = **172 800** pixels.

Un modèle entraîné surtout sur des visages bien éclairés se trompe plus souvent à contre-jour : c'est un **biais**.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **pixel** | le plus petit point d'une image numérique ; sa couleur est codée par des nombres |
| **apprentissage supervisé** | l'entraînement d'un programme sur des milliers d'exemples déjà étiquetés, ici « visage » ou « pas visage » |
| **biais** | une erreur systématique d'un modèle, souvent due à des exemples d'entraînement qui ne représentent pas tout le monde |

## Les erreurs à ne pas commettre

- Dire que l'ordinateur « voit » ou « reconnaît » la personne : il détecte la présence d'un visage, il ne sait pas qui c'est.
- Croire qu'un modèle ne se trompe jamais : il dépend de ses exemples d'entraînement.
- Oublier qu'une image de visage est une donnée personnelle.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T1.2** | Décrire les interactions entre un objet, son environnement et les utilisateurs | Comprendre | 4, 5, 6, 7, 8, 9, 11, 12 |
| **T2.1** | Décrire l'organisation interne d'un objet et ses échanges avec son environnement | Identifier | 1, 2, 3, 10 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-5.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-5.md){ .md-button }
