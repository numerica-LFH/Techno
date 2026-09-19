# Liens utiles

Tous les outils listés ici sont accessibles depuis un navigateur, sans
installation, sauf mention contraire.

## Programmation

| Outil | Lien | Usage |
|---|---|---|
| Scratch | [scratch.mit.edu](https://scratch.mit.edu/) | Programmation par blocs, 5e à 3e et Nuit du Code |
| Scratch hors ligne | [scratch.mit.edu/download](https://scratch.mit.edu/download) | Version installable, utile quand la connexion est faible |
| Scratch Lab | [lab.scratch.mit.edu](https://lab.scratch.mit.edu/) | Blocs expérimentaux du MIT (texte animé, webcam), sans compte |
| MakeCode micro:bit | [makecode.microbit.org](https://makecode.microbit.org/) | Programmation des cartes micro:bit, blocs ou Python |
| Thonny | [thonny.org](https://thonny.org/) | Environnement Python léger, à installer |
| Vittascience | [vittascience.com](https://vittascience.com/) | Simulation de cartes et de capteurs |

### Scratch, mise en route

Créer un compte élève avec l'adresse de l'établissement. Les projets se
retrouvent alors depuis n'importe quel poste. Sans compte, penser à télécharger
le fichier `.sb3` en fin de séance, rien n'est conservé.

### Scratch Lab

[lab.scratch.mit.edu](https://lab.scratch.mit.edu/)

Scratch est un langage de programmation par blocs né au MIT et développé
aujourd'hui par la Scratch Foundation. On assemble des blocs comme les pièces
d'un puzzle pour faire bouger des lutins, compter des points, réagir au clavier
ou à la caméra. C'est le langage de la Nuit du Code pour l'école, le collège et
le lycée.

Scratch Lab est l'espace d'essai de la Scratch Foundation. L'équipe y teste de
nouveaux blocs avant de décider s'ils entreront dans Scratch. On y trouve
actuellement :

| Expérience | Ce qu'elle permet |
|---|---|
| Animated Text | Écrire un titre qui apparaît lettre par lettre, grossit ou passe en arc-en-ciel |
| Video Sprites | Afficher l'image de la webcam à l'intérieur d'un lutin |
| Face Sensing | Suivre le nez, les yeux ou la bouche du joueur avec la webcam |

La détection de visage a quitté le Lab : elle fait partie de Scratch depuis
octobre 2025, sous le nom Détection de visage.

Avant de s'en servir :

- Le Lab n'a pas de compte. En fin de séance, on télécharge le projet en
  fichier `.sb3`, sinon il est perdu.
- Les blocs du Lab s'affichent en anglais.
- Un projet qui contient des blocs du Lab ne fonctionne ni dans Scratch en
  ligne ni dans Scratch hors ligne. On le garde dans un fichier à part.
- Le Lab peut changer ou présenter des bogues : on le réserve aux mini-projets
  d'une ou deux séances.

### Scratch Lab et la Nuit du Code

Le jour du concours, les équipes programment dans Scratch à partir d'un univers
imposé : lutins, décors et sons fournis, sans aucun script. Les blocs du Lab n'y
ont pas leur place, et un jeu piloté à la webcam reste à éviter, car le jury
doit pouvoir le tester au clavier.

Le Lab sert à l'entraînement. Il donne envie de coder et fait découvrir la
vision par ordinateur. Les réflexes du concours se travaillent ensuite dans
Scratch : boucles, conditions, variables, clones, messages entre lutins et
sauvegardes numérotées (`jeu-v1.sb3`, `jeu-v2.sb3`).

Voir aussi la page [La Nuit du Code](../projets-etablissement/nuit-du-code.md).

## Écrire des pages web

| Outil | Lien | Usage |
|---|---|---|
| Phoenix Code | [web.phcode.dev](https://web.phcode.dev/) | **L'éditeur utilisé en classe.** HTML et CSS dans le navigateur, aperçu en direct |
| Codes couleurs | [htmlcolorcodes.com/fr](https://htmlcolorcodes.com/fr/) | Trouver le code hexadécimal d'une couleur |
| La première page web | [info.cern.ch](http://info.cern.ch/hypertext/WWW/TheProject.html) | Mise en ligne en 1991, toujours accessible |

### Phoenix Code, et pourquoi plus Brackets

Adobe a arrêté le support de Brackets le 1<sup>er</sup> septembre 2021. Le
projet a été repris sous le nom de Phoenix Code, qui tourne cette fois
entièrement dans le navigateur : même ergonomie, même aperçu en direct, aucune
installation. L'adresse `brackets.io` y redirige désormais.

Phoenix Code ouvre un dossier du disque de l'élève, qui garde donc ses fichiers
chez lui. Rien à installer, rien à créer comme compte : c'est ce qui en fait
l'outil du cours, au lycée comme à la maison.

## Modélisation 3D et dessin

| Outil | Lien | Usage |
|---|---|---|
| SketchUp Free | [app.sketchup.com](https://app.sketchup.com/) | Modélisation 3D dans le navigateur, compte Trimble gratuit |
| SketchUp for Schools | [edu.sketchup.com/app](https://edu.sketchup.com/app) | Version scolaire, connexion avec le compte de l'établissement |
| Tinkercad | [tinkercad.com](https://www.tinkercad.com/) | Modélisation 3D simple, blocs de code, partie circuits ci-dessous |
| FreeCAD | [freecad.org](https://www.freecad.org/) | Modélisation paramétrique libre, à installer |

### SketchUp Web, accès direct

[Ouvrir SketchUp Free](https://app.sketchup.com/){ .md-button .md-button--primary }
[Ouvrir SketchUp for Schools](https://edu.sketchup.com/app){ .md-button }

### Qu'est-ce que SketchUp Web

SketchUp est un logiciel de dessin en trois dimensions. SketchUp Web en est la
version qui s'ouvre dans un onglet du navigateur : aucune installation, aucun
fichier à gérer sur le poste, il suffit d'un compte et d'une connexion. C'est
cette version que nous utilisons en classe, au lycée comme à la maison.

Le principe tient en deux gestes. On trace d'abord une surface plane, rectangle
ou cercle, puis on l'étire en volume avec l'outil Pousser/Tirer. On répète
l'opération pour creuser, ajouter une paroi, poser un toit. Pendant le tracé,
les dimensions se tapent directement au clavier, ce qui permet de travailler aux
cotes réelles du projet plutôt qu'à vue d'œil.

| Outil | Ce qu'il fait |
|---|---|
| Ligne et Rectangle | Tracer les contours d'une face |
| Pousser/Tirer | Donner du volume à une face, ou creuser |
| Mesure | Vérifier une distance, placer une ligne guide |
| Déplacer et Copier | Déplacer une forme, en répéter une série |
| Orbite, Panoramique, Zoom | Tourner autour du modèle et s'en approcher |
| Composant | Grouper des formes en un objet réutilisable |

### Se connecter à SketchUp la première fois

1. Ouvrir [app.sketchup.com](https://app.sketchup.com/) et choisir de créer un
   compte Trimble avec l'adresse de l'établissement.
2. Valider le courriel de confirmation, puis revenir sur la page.
3. Sélectionner l'offre SketchUp Free, qui ne demande aucun moyen de paiement.
4. Les modèles s'enregistrent dans l'espace Trimble Connect du compte, 10 Go.
   Pour garder une copie sur le poste, utiliser Fichier puis Télécharger.

### Ce que la version gratuite permet

| Fonction | Version gratuite |
|---|---|
| Modélisation et cotation | Complètes, tous les outils du cours |
| Enregistrement en ligne | 10 Go d'espace Trimble Connect |
| Téléchargement du modèle | Formats `.skp` et `.stl`, ce dernier pour l'impression 3D |
| Image du modèle | Export PNG, avec un filigrane sur l'offre gratuite |
| Import de fichiers extérieurs | Réservé aux offres payantes |
| Extensions | Indisponibles sur la version web, quelle que soit l'offre |

### SketchUp, quelle version choisir

La version web gratuite suffit pour les activités du cycle 4. SketchUp for
Schools est gratuit pour les établissements inscrits à Google for Education ou
Microsoft for Education : l'administrateur du domaine ouvre l'accès, les élèves
se connectent ensuite avec leur compte scolaire, sans compte Trimble, et leurs
modèles sont rangés dans le Drive ou le OneDrive de l'établissement.

Un modèle commencé sur l'une des deux versions se reprend sur l'autre en passant
par un fichier `.skp` téléchargé puis rouvert.

### Où SketchUp sert dans le cours

Les trois pas à pas du projet jardin sec se font entièrement sur SketchUp Web,
douze étapes chacun :

- [Vue d'ensemble des pas à pas](../technologie/projet-jardin-sec/sketchup/index.md)
- [5e, créer le bac](../technologie/projet-jardin-sec/sketchup/5e.md)
- [4e, le bac et les espaces extérieurs](../technologie/projet-jardin-sec/sketchup/4e.md)
- [3e, l'espace complet](../technologie/projet-jardin-sec/sketchup/3e.md)

Une consigne à garder d'une séance à l'autre : nommer son modèle dès la première
minute, sous la forme `jardin-nom-classe`, et le télécharger en fin de séance
quand on travaille sur un poste partagé.

## Électronique, simuler un montage

| Outil | Lien | Usage |
|---|---|---|
| Tinkercad Circuits | [tinkercad.com/circuits](https://www.tinkercad.com/circuits) | Montages électroniques simulés dans le navigateur, Arduino et micro:bit |

### Tinkercad Circuits, accès direct

[Ouvrir Tinkercad Circuits](https://www.tinkercad.com/circuits){ .md-button .md-button--primary }

### Qu'est-ce que Tinkercad Circuits

Tinkercad Circuits est la partie électronique de Tinkercad, éditée par Autodesk.
Tout se passe dans le navigateur : on pose une plaque d'essai, on tire les fils,
on branche une LED, une résistance, un moteur, un capteur, puis on lance la
simulation. Le circuit fonctionne à l'écran, la LED s'allume ou ne s'allume pas,
et le montage se corrige sans matériel ni risque de casse.

Deux cartes programmables sont simulées : l'Arduino Uno et la micro:bit, celle
que nous utilisons en classe. Le code s'écrit en blocs, comme dans MakeCode, ou
en texte pour l'Arduino. Un moniteur série et des instruments de mesure
permettent de suivre les valeurs pendant que le programme tourne.

| Élément | Ce qu'on en fait |
|---|---|
| Plaque d'essai et fils | Câbler un montage comme sur la table du labo |
| Composants | LED, résistances, interrupteurs, moteurs, servomoteurs, capteurs |
| Carte micro:bit ou Arduino | Programmer le montage en blocs ou en texte |
| Bouton Démarrer la simulation | Voir le circuit fonctionner, et repérer l'erreur de câblage |
| Instruments | Multimètre et oscilloscope pour mesurer tension et courant |
| Partager | Un lien envoie le montage au professeur ou au binôme |

### Se connecter à Tinkercad la première fois

1. Ouvrir [tinkercad.com/circuits](https://www.tinkercad.com/circuits) et créer un
   compte Autodesk avec l'adresse de l'établissement, ou se connecter avec le
   compte Google du lycée.
2. Quand le professeur a ouvert une classe Tinkercad, les élèves entrent par le
   code de classe et un pseudonyme, sans créer d'adresse ni de mot de passe.
3. Les montages s'enregistrent tout seuls dans le tableau de bord du compte.
4. Le service est gratuit, y compris la partie classe.

### Où Tinkercad Circuits sert dans le cours

Le simulateur sert à préparer et à rattraper le travail sur carte réelle :

- tester un montage avant de le câbler, ce qui évite les composants grillés
- continuer un montage à la maison, sans matériel
- reprendre une séance manquée, le circuit et le programme étant au même endroit
- projeter un montage au tableau pendant la correction

Les programmes micro:bit du projet jardin sec se transposent directement dans le
simulateur, voir les [ressources techniques du projet](../technologie/projet-jardin-sec/ressources.md).

## Espace de travail collaboratif

Jamboard servait à faire travailler plusieurs élèves sur une même page. Google
l'a fermé le 31 décembre 2024, les Jams existants ont été convertis en PDF puis
supprimés. L'outil retenu en remplacement est **Digipad**.

### Digipad

[ladigitale.dev](https://ladigitale.dev)

Un mur partagé où chacun dépose ses contributions sur la même page, en direct.
Le professeur crée le pad et distribue le lien ou le code. Les élèves écrivent
sans créer de compte.

Ce qu'on y met : du texte, une image, un fichier, un lien, une vidéo, un
enregistrement audio, un dessin. Chaque bloc se déplace, se commente et se vote.

Usages en classe :

- recueil des représentations initiales en début de séquence
- travail de groupe où chaque équipe occupe une colonne
- dépôt des productions de projet, visibles par toute la classe
- correction collective, en projetant le pad au tableau

Le service est hébergé en France par La Digitale, sans publicité et sans
collecte de données élèves. Les pads peuvent être protégés par mot de passe et
exportés en PDF.

### Autres espaces utilisés ponctuellement

| Outil | Lien | Quand |
|---|---|---|
| Excalidraw | [excalidraw.com](https://excalidraw.com/) | Schéma tracé à plusieurs, chaîne d'énergie au tableau |
| Google Slides | [slides.google.com](https://slides.google.com/) | Une diapositive par groupe, quand le rendu doit être structuré |
| Google Docs | [docs.google.com](https://docs.google.com/) | Rédaction commune d'un dossier de projet |
| Google Forms | [forms.google.com](https://forms.google.com/) | Évaluations courtes corrigées automatiquement |

## Données et cartographie

| Outil | Lien | Usage |
|---|---|---|
| OpenStreetMap | [openstreetmap.org](https://www.openstreetmap.org/) | Cartographie collaborative, SNT et projets |
| uMap | [umap.openstreetmap.fr](https://umap.openstreetmap.fr/) | Création de cartes personnalisées |
| data.gouv.fr | [data.gouv.fr](https://www.data.gouv.fr/) | Jeux de données ouverts français |
| Capytale | [capytale2.ac-paris.fr](https://capytale2.ac-paris.fr/) | Activités Python en ligne, si l'établissement y a accès |

## Concours

| Concours | Lien |
|---|---|
| La Nuit du Code | [nuitducode.net](https://www.nuitducode.net) |
| Castor informatique | [castor-informatique.fr](https://castor-informatique.fr/) |
| Algoréa | [algorea.org](https://www.algorea.org/) |

## Textes officiels

- [Résumé des programmes](../programmes.md) sur ce site
- [Eduscol](https://eduscol.education.fr)
- [Bulletin officiel](https://www.education.gouv.fr)

## Signaler un lien mort

Les services en ligne ferment sans prévenir, Jamboard l'a montré. Signalez un
lien cassé en classe, il sera corrigé.
