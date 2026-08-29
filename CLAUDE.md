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

## Travailler sur ce dépôt

Ne jamais committer directement sur `main` sans relire le rendu : chaque push
publie le site. Créer une branche, vérifier avec `mkdocs serve`, puis ouvrir
une pull request.
