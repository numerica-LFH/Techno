# Besoins, matériel et budget

## 1. Le besoin exprimé

Énoncé du besoin, formulé avec les élèves de 5e en séance 1 :

> Le Liceo a besoin de transformer le couloir gravillonné situé le long du bâtiment en un
> espace planté et vivant, utilisable par les classes, qui reste vert pendant la saison sèche
> sans prélever d'eau potable sur le réseau de l'établissement.

## 2. Cahier des charges fonctionnel

| Repère | Fonction | Critère | Niveau exigé | Flexibilité |
|---|---|---|---|---|
| FP1 | Permettre la culture de plantes dans un sol maîtrisé | profondeur de terre | 25 cm au minimum | F1 |
| FP2 | Alimenter les plantes en eau sans intervention quotidienne | autonomie sans intervention | 7 jours au minimum | F0 |
| FC1 | Limiter la consommation d'eau | volume consommé | moins de 1 L/m2/jour en saison sèche | F0 |
| FC2 | S'alimenter en eau de pluie | part d'eau de pluie | 100 % visé, 70 % accepté | F1 |
| FC3 | Fonctionner de façon autonome | intervention humaine pour arroser | aucune en fonctionnement normal | F1 |
| FC4 | Résister au climat local | tenue au soleil et à la pluie | boîtier étanche, bois traité | F0 |
| FC5 | Être construit avec des matériaux de récupération | part de matériaux récupérés | 60 % au minimum | F2 |
| FC6 | Être accessible aux élèves | hauteur de travail | entre 25 et 80 cm | F1 |
| FC7 | Respecter la sécurité des personnes | tension utilisée | très basse tension, 12 V au plus | F0 |
| FC8 | S'intégrer visuellement à la cour | traitement des surfaces | peinture et signalétique | F2 |

Flexibilité : F0 nulle, F1 faible, F2 forte.

## 3. Matériel par poste

Les prix sont indicatifs, en lempiras, relevés à Tegucigalpa. Ils sont à actualiser au moment
de la demande d'achat. La colonne « récup » indique ce qui peut être obtenu sans achat.

### 3.1 Structure et plantation, d'après le modèle SketchUp des 5e

Les élèves ne fabriquent pas les jardinières : ils les conçoivent. La construction est
confiée à l'établissement, à partir du modèle et du cahier des charges.

| Article | Quantité | Prix unitaire | Total | Récup |
|---|---|---:|---:|---|
| Palettes bois traitées HT, 120 x 80 cm | 12 | 80 | 960 | oui |
| Vis à bois 5 x 60 mm, boîte de 200 | 2 | 180 | 360 | non |
| Équerres galvanisées | 32 | 12 | 384 | non |
| Géotextile ou bâche perforée, rouleau 10 m | 1 | 450 | 450 | non |
| Terre végétale, sac de 40 L | 20 | 65 | 1 300 | partiel |
| Compost, sac de 40 L | 8 | 90 | 720 | oui, composteur |
| Paillage, écorce ou paille, sac | 10 | 55 | 550 | oui |
| Peinture extérieure, 1 L | 4 | 320 | 1 280 | non |
| **Sous-total structure** | | | **6 004** | |

### 3.2 Plantes adaptées au climat sec de Tegucigalpa

Choix retenu avec les élèves selon trois critères : besoin en eau faible, disponibilité locale,
intérêt pédagogique ou alimentaire.

| Plante | Nom local | Besoin en eau | Rôle dans le jardin |
|---|---|---|---|
| Romarin | romero | très faible | aromatique, bordure |
| Origan | orégano | faible | aromatique |
| Thym | tomillo | très faible | aromatique, couvre-sol |
| Aloe vera | sábila | très faible | plante grasse, réserve d'eau |
| Agave | maguey | très faible | structure, angle du jardin |
| Yucca | izote | très faible | fleur comestible, plante nationale |
| Citronnelle | zacate limón | faible | infusion, barrière à insectes |
| Lantana | cinco negritos | faible | fleur, pollinisateurs |
| Souci | flor de muerto | faible | fleur, protection des cultures |
| Piment | chile | moyen | culture d'expérience, comparaison |

Budget plants et semences : environ 1 500 lempiras.

### 3.3 Récupération et distribution d'eau, dimensionnées par les 4e

| Article | Quantité | Prix unitaire | Total |
|---|---|---:|---:|
| Fût plastique 200 L avec couvercle | 1 | 950 | 950 |
| Gouttière PVC 3 m et coudes | 4 | 210 | 840 |
| Robinet de puisage 1/2 pouce et passe-cloison | 1 | 180 | 180 |
| Filtre à feuilles, grille inox | 1 | 120 | 120 |
| Tuyau goutte à goutte 16 mm, couronne de 50 m | 1 | 690 | 690 |
| Goutteurs réglables 2 L/h | 40 | 8 | 320 |
| Raccords, tés, bouchons | 1 lot | 350 | 350 |
| **Sous-total eau** | | | **3 450** |

### 3.4 Commande : le kit Grove de la classe

La commande de l'arrosage utilise le **Grove Smart Plant Care Kit for Arduino** de Seeed
Studio, déjà présent dans la classe, monté sur une carte Arduino Uno par son Base Shield.

| Élément du kit | Rôle dans le projet | Branchement retenu |
|---|---|---|
| Base Shield V2 | relie les modules Grove à la carte Arduino Uno | sur la carte |
| Capteur d'humidité du sol | acquérir l'humidité de la terre | port A0 |
| Relais Grove | distribuer l'énergie à la pompe sur ordre de la carte | port D7 |
| Pompe à eau et son tuyau | convertir l'énergie électrique et faire circuler l'eau | par le relais, alimentation 12 V |
| Écran OLED, capteur de température et d'humidité de l'air, bouton, encodeur, capteur de débit | prolongements possibles | non utilisés dans les séances |

Le contenu exact du kit et le brochage sont à vérifier sur la notice fournie avec le kit. Les
repères du capteur (environ 200 dans la terre sèche, 600 dans la terre arrosée) sont à
remesurer avec le capteur de la classe avant les séances.

| Article complémentaire | Quantité | Prix unitaire | Total |
|---|---|---:|---:|
| Câble USB pour la carte Arduino | 1 | 90 | 90 |
| Boîtier étanche IP65, 150 x 110 x 70 mm | 1 | 290 | 290 |
| Pots de terre pour les essais en classe | 2 | 60 | 120 |
| **Sous-total commande, hors kit** | | | **500** |

### 3.5 Petit matériel de mesure, à emprunter en priorité

Décamètre, mètre, verre doseur ou éprouvette, chronomètre, balance de cuisine au gramme,
barquettes, bouteille de 1,5 L et goutteur pour la mesure de débit, arrosoir.

### 3.6 Récapitulatif

| Poste | Montant en lempiras | Équivalent approximatif en euros |
|---|---:|---:|
| Structure et plantation | 6 004 | 210 |
| Plantes et semences | 1 500 | 53 |
| Récupération et distribution d'eau | 3 450 | 121 |
| Commande, hors kit Grove déjà présent | 500 | 18 |
| **Total** | **11 454** | **402** |

Conversion indicative sur la base de 28,5 lempiras pour 1 euro. Les prix sont à actualiser au
moment de la demande d'achat. Le kit Grove et la commande sont réutilisables d'une année sur
l'autre.

## 4. Logiciels et ressources numériques

| Outil | Usage | Remarque |
|---|---|---|
| SketchUp Free | modélisation 3D de la jardinière et du site | app.sketchup.com, compte Trimble par élève |
| Console Ruby de SketchUp Pro | exécution des scripts fournis | pour le professeur, en démonstration |
| Arduino IDE | lecture, réglage et téléversement des programmes du kit Grove | moniteur série à 9600 bauds |
| Tableur | bilan d'eau, lecture du journal de données | classeur fourni |

## 5. Sécurité et organisation

- Aucune fabrication à la main pendant les séances : ni sciage, ni vissage, ni perçage.
- Aucune tension supérieure à 12 V. La pompe et son alimentation sont mises en marche par le
  professeur ; les connecteurs Grove se branchent et se débranchent hors tension.
- Les mesures d'eau se font près d'un point d'eau, loin des postes informatiques.
- Le fût de récupération reste fermé par son couvercle et sa grille, contre les moustiques.
- Une fiche d'arrosage de secours est affichée près du jardin, pour les périodes de vacances.

## 6. Calendrier type sur une année scolaire

| Période | 5e | 4e | 3e |
|---|---|---|---|
| Semaines 1 et 2 | séances 1 à 3 : besoin, choix, modèle SketchUp | | |
| Semaines 3 et 4 | | séances 1 à 3 : débit, chaînes, programme | |
| Semaines 5 et 6 | | | séances 1 à 3 : mesures fiables, bilan, programme final |
| Semaine 7 | présentation commune du jardin aux familles et à la direction | | |
