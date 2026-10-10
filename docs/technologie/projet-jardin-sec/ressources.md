# Ressources techniques du projet

## Deux usages de SketchUp, à ne pas confondre

Les élèves modélisent à la main, sur **SketchUp Free** dans le navigateur : ce sont les
[trois pas à pas](sketchup/index.md), douze gestes chacun ; celui de 3e se termine par un test en ligne.

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
| `00_site_avant.rb` | Le couloir tel qu'il est : sol, mur, fenêtres et grilles, dalle, mur de soutènement, bâtiment en brique, haie, jeune pin | Projet présenté aux 5e, en démonstration |
| `01_5e_jardiniere.rb` | La jardinière, en six étapes appelables une par une, puis la nomenclature et l'implantation des huit exemplaires | Séance 3 de 5e, observation du modèle de référence |
| `02_4e_reseau.rb` | Gouttière, fût sur support surélevé, ligne principale, antennes, goutteurs, capteurs, boîtier de commande | Prolongement SketchUp de 4e |
| `03_3e_amenagement.rb` | Ombrière, panneau solaire, jardinières murales en palette, fresque, coin des chevalets, végétation et étiquettes | Prolongement SketchUp de 3e |
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

Chaque étape affiche dans la console les dimensions de la pièce construite. Ces valeurs
servent au professeur : en 5e et en 4e, les élèves dessinent sans cotes.

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
le modèle de référence et le projeter. Les élèves construisent leur propre modèle dans SketchUp
Free, en suivant les pas à pas.

## Programmes Arduino du kit Grove

Le kit Grove Smart Plant Care est monté sur une carte Arduino Uno par son Base Shield : capteur
d'humidité sur le port A0, relais de la pompe sur le port D7. Les programmes s'ouvrent dans
l'Arduino IDE ; le moniteur série se règle à 9600 bauds.

| Fichier | Niveau | Séance | Ce qu'il fait |
|---|---|---|---|
| `jardin-lecture.ino` | 4e, 3e | 4e séance 2 (démonstration), 3e séance 1 | Affiche la valeur du capteur chaque seconde, pour l'étalonnage |
| `jardin-4e-arrosage.ino` | 4e | séance 3 | Donne une dose de 3 s quand la valeur passe sous le seuil de 320, puis attend |
| `jardin-3e-hysteresis.ino` | 3e | séance 3 | Deux seuils (320 et 400), filtre des valeurs impossibles, journal au moniteur série |

Les fichiers sont dans le dossier `programmes` de chaque séquence et dans
[fichiers/arduino](fichiers/arduino/README.md).

### Étalonnage, à refaire pour chaque capteur

| Situation | Valeur de référence |
|---|---|
| Capteur à l'air | proche de 0 |
| Terre sèche | environ 200 |
| Terre juste arrosée | environ 600 |
| Capteur dans un verre d'eau | plusieurs centaines, au-dessus de la terre arrosée |

Avec ces repères, l'humidité en % vaut 100 × (valeur − 200) ÷ 400 : 30 % correspond à 320,
50 % à 400. Si le capteur de la classe donne une valeur qui baisse quand la terre est
mouillée, il faut inverser les tests des programmes et recalculer les seuils.

## Classeur de calcul

`bilan-eau-jardin-sec.xlsx`. Les élèves ne modifient que les cellules bleues sur fond jaune,
tout le reste se recalcule. Les onglets utiles aux séquences en trois séances :

| Onglet | Contenu | Séance |
|---|---|---|
| Parametres | Les valeurs d'entrée du projet | toutes |
| Bilan_eau | Surfaces, consommations, économie, contrainte FC1 | 5e séance 1, 3e séance 2 |
| Journal | Zone de collage d'un journal de mesures et son analyse | 3e séance 1, en prolongement |
| Materiel | Budget par poste | |

L'onglet Energie et les colonnes du journal pensées pour la version micro:bit ne sont plus
utilisés : le journal du kit Grove se copie depuis le moniteur série (colonnes temps ;
valeur ; arrosage).
