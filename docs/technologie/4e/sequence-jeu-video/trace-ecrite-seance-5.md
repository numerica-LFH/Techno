# Trace écrite — Séance 5 : Comment un ordinateur trouve-t-il un visage ?

!!! info "4e · Séquence projet · Inventer un jeu vidéo · Séance 5 sur 8"

    Question de la séance : *Comment un ordinateur peut-il trouver un visage dans l'image d'une caméra ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 5](seance-5.md).

    [Trace écrite à imprimer (PDF)](traces/4e-jeu-video-seance5-trace.pdf)

## Ce que je dois retenir

### Une image est un tableau de nombres

Une image numérique est faite de pixels. Chaque pixel est codé par trois nombres de 0 à 255 (rouge, vert, bleu). L'image de la scène en compte 480 × 360, soit 172 800. L'ordinateur ne « voit » pas de visage : il cherche des régularités dans ces nombres.

### L'apprentissage supervisé

Les règles de détection n'ont pas été écrites à la main. Un programme a été entraîné sur des milliers d'images étiquetées par des humains, « visage » ou « pas visage ». Il a ajusté ses paramètres pour se tromper le moins possible, puis il a été testé sur des images nouvelles. Le résultat est un modèle ; celui de Scratch s'appelle BlazeFace.

### Biais et données personnelles

Un modèle se trompe davantage dans les situations peu présentes dans ses exemples : pièce sombre, contre-jour, visage caché, types de visages sous-représentés. C'est un biais.

L'image d'un visage est une donnée personnelle. Dans Scratch, le modèle est téléchargé une fois et le calcul se fait sur l'ordinateur : l'image n'est pas envoyée sur Internet. En classe, on n'enregistre ni ne partage aucune image.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **pixel** | le plus petit point d'une image numérique ; sa couleur est codée par des nombres |
| **apprentissage supervisé** | l'entraînement d'un programme sur des milliers d'exemples déjà étiquetés, ici « visage » ou « pas visage » |
| **biais** | une erreur systématique d'un modèle, souvent due à des exemples d'entraînement qui ne représentent pas tout le monde |
| **donnée personnelle** | une information qui permet d'identifier une personne, comme l'image de son visage |

## Les erreurs à ne pas commettre

- Dire que l'ordinateur « voit » ou « reconnaît » la personne : il détecte la présence d'un visage, il ne sait pas qui c'est.
- Croire qu'un modèle ne se trompe jamais : il dépend de ses exemples d'entraînement.
- Oublier qu'une image de visage est une donnée personnelle.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T1.2** | Décrire les interactions entre un objet, son environnement et les utilisateurs | Comprendre | 4, 5, 6, 7, 8, 9, 11, 13 |
| **T2.1** | Décrire l'organisation interne d'un objet et ses échanges avec son environnement | Identifier | 1, 2, 3, 10, 12 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-5.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-5.md){ .md-button }
