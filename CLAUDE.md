# numerica-LFH/Techno — instructions pour Claude

Site de l'enseignement Technologie & SNT du **Lycée franco-hondurien**
(Tegucigalpa). MkDocs Material publié sur GitHub Pages à l'adresse
`https://numerica-lfh.github.io/Techno/`.

## Le dépôt en un coup d'œil

```
mkdocs.yml              configuration, palette indigo/amber, edit_uri: edit/main/docs/
docs/
  index.md              page d'accueil
  snt/
    index.md            présentation du programme, tableau des sept thèmes
    internet.md         thème 1
    web.md               thème 2
    reseaux-sociaux.md  thème 3
    donnees-structurees.md
    localisation.md
    objets-connectes.md
    photographie-numerique.md
  ressources/
    outils.md           logiciels et services utilisés en classe
    liens.md            liens externes classés par thème
  technologie/          cycle 4
  projets-etablissement/
```

Sources dans `docs/`. Le crayon d'édition est actif sur chaque page grâce à
`edit_uri`. Publication automatique à chaque push sur `main`.

## Vérifier avant de pousser

```bash
pip install mkdocs-material     # une seule fois
mkdocs serve                    # aperçu sur http://127.0.0.1:8000
mkdocs build --strict           # échoue si un lien interne est cassé
```

Toujours lancer `mkdocs build --strict` avant de committer une modification de
plusieurs pages : c'est ce qui attrape les liens et les ancres cassés.

## Gabarit d'une page de thème SNT

Toutes les pages de thème suivent la même structure, dans cet ordre. **Ne pas
la modifier** : c'est ce qui rend le site lisible d'un thème à l'autre.

```markdown
# Titre du thème

## Ce qu'on cherche
Deux ou trois phrases, qui posent une question ouverte. Pas de définition ici.

## Notions du programme
Liste à puces, reprise du programme officiel.

## Organisation
Nombre de séances, matériel nécessaire, ce que fait la séance d'introduction.

## Activités
### Activité 1 : titre court en minuscules
### Activité 2 : …
### Activité 3 : …

## Évaluation
Format et notions évaluées.

## À retenir
La phrase de la séquence, en une ou deux lignes. Elle est reprise telle quelle
dans la fiche élève et dans le diaporama : les trois doivent rester identiques.

## Pour aller plus loin
Deux pistes, jamais plus.
```

## Règles de rédaction

- **Dénomination** : « **Lycée franco-hondurien** », partout, sans variante.
  Des occurrences de « Lycée Français de Tegucigalpa » peuvent subsister dans
  `docs/programmes.md`, `docs/technologie/` et `docs/projets-etablissement/` —
  les corriger quand on les croise.
- **Horaire SNT** : 55 min par semaine, plus 55 min une semaine sur deux. Ne
  jamais réécrire « une heure trente par semaine ».
- **Pas de minutage** dans les pages du site ni dans les documents élève. Les
  déroulés minutés vivent uniquement dans les corrigés professeur.
- Phrases courtes, ton neutre et factuel. Pas de point d'exclamation, pas
  d'emoji, pas de tutoiement du lecteur dans les pages du site — le tutoiement
  n'existe que dans les fiches élève.
- Pas de moralisation : on décrit un mécanisme et on laisse l'élève conclure.
  « L'algorithme optimise une mesure, pas une valeur » plutôt que « les réseaux
  sociaux sont dangereux ».
- Les blocs de code sont des blocs markdown ` ``` `, sans coloration forcée.
- Lignes de source à 80 colonnes environ, comme le reste du dépôt.

## Ancres à ne pas casser

Renommer un de ces titres casse un lien interne :

- `snt/internet.md#seance-dintroduction-darpanet-au-web` — cité depuis `web.md`
- `ressources/outils.md#ecrire-des-pages-web` — cité depuis `web.md`

Après tout renommage de titre, relancer `mkdocs build --strict`.

## Éditeur HTML — tranché

**Phoenix Code** (`phcode.dev`), dans le navigateur, est le seul éditeur nommé
sur le site et dans les documents élève. VS Code a été retiré, y compris de
`ressources/liens.md`. Brackets est abandonné depuis 2021 et ne doit pas
réapparaître.

Le lien vers la première page web, `info.cern.ch`, est en **http** et non en
https : ne pas le « corriger ».

## Matériel pédagogique hors dépôt

Les fiches élève, diaporamas et évaluations ne sont pas dans ce dépôt. Ils sont
produits par des scripts Google Apps Script conservés dans le projet Claude
« classe de SNT - PREPARATION » :

| Fichier | Fonction | Produit |
|---|---|---|
| `FicheSNT_SequenceN.gs` | `creerFiche` | Google Doc + PDF |
| `PresentationSNT_SequenceN.gs` | `creerPresentation` | Slides + notes du présentateur |
| `EvaluationSNT_SequenceN.gs` | `creerEvaluation` | Quiz Forms /10 + classeur de vérification |

Charte commune au site et aux documents : indigo `#4051b5`, fond clair
`#eef0fb`. Corrigés professeur : réponses en vert `#1f7a4d`, notes
pédagogiques en rouge `#a03327`.

Quand une activité change dans une fiche, la page du thème correspondante doit
être mise à jour dans le même mouvement — et réciproquement. La phrase
« À retenir » est le point de contact le plus visible entre les deux.

## État des pages

| Page | État |
|---|---|
| `snt/reseaux-sociaux.md` | activités rédigées |
| `snt/donnees-structurees.md` | activités rédigées |
| `snt/localisation.md` | activités rédigées |
| `snt/objets-connectes.md` | activités rédigées |
| `snt/photographie-numerique.md` | activités rédigées |
| `snt/index.md` | **à corriger** : horaire encore « une heure trente par semaine » |
| `snt/internet.md` | **à compléter** : séance d'introduction et activités encore « à venir » |
| `snt/web.md` | **à compléter** : les trois activités encore « à venir » |
| `ressources/outils.md` | **à compléter** : aucun éditeur HTML listé |
| `ressources/liens.md` | **à compléter** : section « écrire des pages web » absente |

## Rangement des séquences de technologie

Chaque séquence vit dans le dossier de son niveau, avec la même structure :

```
docs/technologie/<niveau>/<sequence>/
  index.md                    page de la séquence
  seance-N.md                 une page par séance
  trace-ecrite-seance-N.md    trace écrite de la séance
  exercices-seance-N.html     exercice autocorrectif (rien n'est envoyé)
  evaluation-sequence.html    évaluation de fin de séquence, 40 questions (Apps Script)
  fiches/  traces/  img/      PDF élève, PDF des traces, figures
```

Le projet jardin sec suit cette règle : `sequence-jardin-sec` dans 5e, 4e et 3e (trois séances
chacune). `docs/technologie/projet-jardin-sec/` ne garde que le dossier commun : présentation,
besoins et matériel, pas à pas SketchUp, ressources (scripts SketchUp, programmes Arduino du kit
Grove, classeur) et téléchargements. Les fiches professeur ne sont jamais déposées dans `docs/`.

## Parcours de missions

`docs/missions-scratch/` et `docs/missions-arduino/` suivent le même modèle : cinq paliers de
couleur (vert, rose, bleu, orange, violet), chaque classe démarre à son palier (5e, 5e, 4e, 3e,
2de), coups de pouce dépliables, case « J'ai réussi » et formulaire « Où j'en suis » en bas de
page. Le script commun `docs/missions-scratch/assets/progression.js` gère les trois modes
(`data-type` scratch, arduino, sketchup) et envoie au même Apps Script (`Code.gs`). Les corrigés
des missions Arduino et les fiches professeur ne vont jamais dans `docs/`.

## Blog de la classe

`docs/blog/` utilise le plugin blog de Material (onglet « Blog »). Rubriques
autorisées, et seulement elles : Vie de la classe, Projets, Actions, Veille
(une autre valeur fait échouer la publication). Le projet concerné va dans
`tags` et alimente la page `blog/projets.md`.

```
docs/blog/
  index.md            présentation, liste des articles en dessous
  proposer.md         formulaire élève (assets/proposer.js)
  projets.md          veille rangée par projet (plugin tags)
  posts/              un fichier AAAA-MM-JJ-titre-prenom.md par article,
                      sa photo éventuelle à côté (même nom, .jpg)
```

Le formulaire envoie au même Apps Script (`Code.gs`, `_type: "article"`) :
ligne « À relire » dans l'onglet Blog, courriel à numerica@ avec le .md prêt
et la photo. Le professeur relit puis dépose les fichiers dans
`docs/blog/posts/`. Règles de publication : prénom et classe seulement, aucun
visage, aucun nom lisible, sources citées.

## La semaine en images (vidéo du vendredi)

Les photos de la semaine sont rangées dans Google Drive (compte numerica@),
dossier « Blog · semaine en images », un sous-dossier par semaine ISO
(« 2026-S43 · 19 au 23 octobre ») créé chaque lundi par `Code.gs`. Le
professeur y dépose ses photos depuis son téléphone ; la légende est la
description du fichier dans Drive. Les photos des articles élèves y sont
copiées automatiquement (nom `eleve-…`, légende « … · Prénom (classe) »).

Chaque vendredi à 14 h 07 (Tegucigalpa), `.github/workflows/semaine-en-images.yml`
lance `scripts/semaine_en_images.py` : lecture du dossier via l'Apps Script
(secret `CLE_MONTAGE`), montage ffmpeg en 1280 x 720 sans musique (ouverture,
une diapositive par photo, fin), vidéo renvoyée à l'Apps Script qui la range
dans « Blog · vidéos » et la partage en lecture par lien, puis article
`docs/blog/posts/AAAA-MM-JJ-semaine-en-images-aaaa-snn.md` proposé en pull
request sur la branche `semaine/AAAA-SNN`. Moins de trois images : pas de
vidéo. Publier = fusionner la pull request. Relance manuelle : Actions >
La semaine en images > Run workflow (champ semaine facultatif).

Secrets GitHub nécessaires : `URL_APPS_SCRIPT` (adresse /exec) et
`CLE_MONTAGE` (fonction `afficherCleMontage` de `Code.gs`).

## Travailler sur ce dépôt

Ne jamais committer directement sur `main` sans relire le rendu : chaque push
publie le site. Créer une branche, vérifier avec `mkdocs serve`, puis ouvrir
une pull request.
