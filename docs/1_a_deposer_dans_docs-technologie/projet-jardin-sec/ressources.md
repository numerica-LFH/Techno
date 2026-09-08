# Ressources techniques du projet

## Deux usages de SketchUp, à ne pas confondre

Les élèves modélisent à la main, sur **SketchUp Free** dans le navigateur : ce sont les
[trois pas à pas](sketchup/index.md), douze gestes chacun, avec leur test en ligne.

Les scripts Ruby ci-dessous s'exécutent dans **SketchUp Pro**, sur le poste du professeur. Ils
servent à préparer le modèle de référence et à le projeter, jamais à remplacer le travail des
élèves.

## Scripts SketchUp

Cinq fichiers Ruby, à placer dans un même dossier. Ils s'exécutent depuis la console Ruby
de SketchUp Pro, menu Fenêtre, Console Ruby. Toutes les dimensions sont en mètres, le
modèle est à l'échelle 1 pour 1.

| Fichier | Ce qu'il construit | Quand s'en servir |
|---|---|---|
| `_commun.rb` | La bibliothèque de fonctions partagée, à charger en premier | Toujours |
| `00_site_avant.rb` | Le couloir tel qu'il est : sol, mur, fenêtres et grilles, dalle, mur de soutènement, bâtiment en brique, haie, jeune pin | Fin de séance 2 de 5e, en démonstration |
| `01_5e_jardiniere.rb` | La jardinière, en six étapes appelables une par une, puis la nomenclature et l'implantation des huit exemplaires | Séance 4 de 5e, projeté au rythme de la classe |
| `02_4e_reseau.rb` | Gouttière, fût sur support surélevé, ligne principale, antennes, goutteurs, capteurs, boîtier de commande | Séance 2 de 4e |
| `03_3e_amenagement.rb` | Ombrière, panneau solaire, jardinières murales en palette, fresque, coin des chevalets, végétation et étiquettes | Séance 6 de 3e |
| `99_site_apres.rb` | Charge tout et construit le modèle complet en une commande, plus le récapitulatif chiffré du projet | Présentation, ou secours si un binôme perd son fichier |

### Démarrage type

```ruby
load "C:/jardin-sec/sketchup/_commun.rb"
load "C:/jardin-sec/sketchup/00_site_avant.rb"
JardinSec::Avant.construire
```

### Les six étapes de la jardinière, à projeter une par une

```ruby
load "C:/jardin-sec/sketchup/01_5e_jardiniere.rb"
JardinSec::Jardiniere.etape1     # le rectangle du fond, 1,20 x 0,80
JardinSec::Jardiniere.etape2     # Pousser-Tirer de 0,02
JardinSec::Jardiniere.etape3     # la première paroi longue
JardinSec::Jardiniere.etape4     # la paroi opposée, par copie
JardinSec::Jardiniere.etape5     # les deux parois courtes de 0,76
JardinSec::Jardiniere.etape6     # les quatre montants d'angle
JardinSec::Jardiniere.nomenclature
JardinSec::Jardiniere.implanter
```

Chaque étape affiche dans la console la valeur que l'élève doit taper au clavier, ce qui
permet de suivre exactement le déroulé de la fiche de séance.

### Le modèle complet en une commande

```ruby
load "C:/jardin-sec/sketchup/99_site_apres.rb"
JardinSec::Complet.construire
JardinSec::Complet.avant_apres    # bascule entre l'état avant et l'état après
JardinSec::Complet.recapitulatif  # les vingt chiffres du projet
```

Les éléments sont répartis en six calques : `01 Site`, `02 Jardinieres`, `03 Reseau eau`,
`04 Commande et energie`, `05 Vegetation`, `06 Signaletique`. Deux scènes sont enregistrées,
`Site avant` et `Site apres`.

### Sans SketchUp Pro

SketchUp for Schools, la version navigateur utilisée par les élèves, n'a pas de console Ruby.
Les scripts servent alors au professeur, sur un poste équipé de la version Pro, pour préparer
le modèle de référence et le projeter. Les élèves reproduisent les mêmes gestes à la main,
c'est d'ailleurs l'objet des séances.

## Programmes micro:bit

Quatre programmes en MicroPython, chacun accompagné de son équivalent MakeCode en blocs,
décrit en tête de fichier.

| Fichier | Niveau | Séance |
|---|---|---|
| `4e_1_lecture_capteur.py` | 4e | 4, étalonnage du capteur |
| `4e_2_arrosage_seuil.py` | 4e | 5 et 6, arrosage au seuil avec filtre de sécurité |
| `3e_1_emetteur.py` | 3e | 4, hystérésis à deux seuils et émission radio |
| `3e_2_recepteur.py` | 3e | 4, réception, affichage et journal de données |

## Classeur de calcul

`bilan-eau-jardin-sec.xlsx`, six onglets. Les élèves ne modifient que les cellules bleues sur
fond jaune, tout le reste se recalcule.

| Onglet | Contenu | Séance |
|---|---|---|
| Notice | Mode d'emploi, code couleur, origine des données | |
| Parametres | Les 18 valeurs d'entrée du projet | toutes |
| Bilan_eau | Surfaces, consommations, économie, contrainte FC1 | 5e 1, 3e 5 |
| Journal | Zone de collage du CSV micro:bit et son analyse | 3e 3 |
| Energie | Bilan énergétique et autonomie | 3e 2 |
| Materiel | Budget par poste, total en lempiras et en euros | |
