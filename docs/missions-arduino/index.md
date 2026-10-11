# Missions Arduino

Un parcours de cinquante missions pour apprendre à câbler et à programmer une carte Arduino dans
Tinkercad Circuits, du grand débutant de 5e à l'objet connecté de 2nde. Chaque mission tient en
une séance : un schéma de câblage, un objectif clair, un pas à pas, des coups de pouce, un défi.
Le parcours conduit vers la station du projet jardin sec, construite avec le kit Grove de la classe.

## Les cinq paliers

| Palier | Classe de départ | Contenu | Programmation | Missions |
|---|---|---|---|---|
| [Palier 1 (vert)](palier-1.md) | 5e | Premiers circuits, LED, feu tricolore, buzzer | circuit, puis blocs | 01 à 10 |
| [Palier 1 bis (rose)](palier-1b.md) | 5e | Bouton, potentiomètre, lumière, si alors sinon, variables | blocs | 11 à 20 |
| [Palier 2 (bleu)](palier-2.md) | 4e | Servomoteur, température, distance, humidité, relais, écran | blocs | 21 à 30 |
| [Palier 3 (orange)](palier-3.md) | 3e | Passage au texte, hystérésis, filtres, commandes, journal | blocs puis texte | 31 à 40 |
| [Palier 4 (violet)](palier-4.md) | 2de | Fonctions, temps sans blocage, états, protocole, tests | texte | 41 à 50 |

Chaque classe commence à son palier. Un élève qui a terminé passe au palier suivant : le parcours
continue d'une année sur l'autre jusqu'en 2nde. En 5e, le palier vert est suivi du palier rose.
Chaque palier se termine par un atelier de synthèse (missions 10, 20, 30, 40 et 50).

## Une mission, pas à pas

1. Je lis « Ce que je dois obtenir » et je regarde le schéma de câblage. Le tableau « Le câblage,
   fil par fil » donne chaque liaison.
2. J'ouvre Tinkercad Circuits avec le code de la classe et je crée un nouveau circuit (ou je
   duplique celui de la mission précédente).
3. Je câble, puis je programme dans l'onglet **Code** en suivant le pas à pas. À partir de la
   mission 32, je colle d'abord le fichier de départ dans l'onglet Code, mode Texte.
4. Je lance la simulation et je compare avec l'objectif.
5. Si je suis bloqué, j'ouvre les coups de pouce dans l'ordre : les questions pour réfléchir, puis
   les blocs ou les instructions à utiliser, puis le squelette du programme. La rubrique « Si ça ne
   marche pas » aide à corriger les erreurs courantes.
6. Quand le résultat est conforme, je coche « J'ai réussi » et je tente le défi.
7. En fin de séance, je remplis « Où j'en suis » en bas de la page du palier, avec une capture
   d'écran de mon circuit et de mon programme.

## Bien démarrer dans Tinkercad Circuits

| Je veux | Je fais |
|---|---|
| Rejoindre la classe | tinkercad.com, **Rejoindre la classe**, code donné par le professeur, mon pseudonyme |
| Créer un circuit | **Créer**, puis **Circuit** |
| Ajouter un composant | je le fais glisser depuis la liste de droite (filtre « Tous » pour tout voir) |
| Tracer un fil | je clique sur un point de connexion, puis sur un autre ; je change la couleur du fil dans sa fenêtre |
| Programmer | bouton **Code**, puis **Blocs**, **Blocs + texte** ou **Texte** |
| Tester | **Démarrer la simulation** ; je clique sur un capteur pendant la simulation pour changer sa valeur |
| Voir les valeurs | **Moniteur série**, en bas de la zone de code |
| Reprendre un circuit | dans mon tableau de bord, menu du circuit, **Dupliquer** |

!!! info "Les blocs des coups de pouce"
    Les blocs dessinés dans les coups de pouce reprennent ceux de Tinkercad avec leurs couleurs :
    bleu pour les sorties, violet pour les entrées, orange pour le contrôle, vert pour les maths.
    Leurs libellés peuvent varier légèrement selon la version de Tinkercad. Dans Tinkercad, les
    blocs se répètent sans fin, comme la fonction `loop` du texte.

## Faire une capture d'écran

| Ordinateur | Raccourci | Ensuite |
|---|---|---|
| Windows | touche Windows + Maj + S | la capture est copiée : Ctrl + V dans la zone prévue |
| Mac | Cmd + Ctrl + Maj + 4 | la capture est copiée : Cmd + V dans la zone prévue |
| Chromebook | Ctrl + Maj + touche fenêtres | choisir le fichier dans Téléchargements |

La capture montre le circuit et le programme : j'ouvre l'onglet Code avant de la faire.

## De Tinkercad au kit Grove

Le parcours se termine sur le vrai matériel. Dans chaque mission, l'encadré « Sur le vrai
matériel » dit ce qui change. Le kit Grove Smart Plant Care de la classe se branche sur une carte
Arduino Uno par son Base Shield : pas de plaque d'essai, pas de résistance à placer.

| Dans Tinkercad | Dans le kit Grove | Port du Base Shield |
|---|---|---|
| Capteur d'humidité du sol | capteur d'humidité Grove | A0 |
| Relais et moteur | relais Grove et pompe à eau 12 V | D7 |
| Bouton poussoir et résistance de 10 kΩ | module bouton Grove | port numérique, par exemple D2 |
| Potentiomètre | encodeur rotatif Grove (il compte des crans) | port numérique |
| Écran LCD 16 x 2 | écran OLED Grove | I2C |
| Capteur de température TMP36 | capteur de température et d'humidité de l'air Grove | I2C |
| Photorésistance | capteur de lumière du soleil Grove | I2C |

Le contenu exact du kit et le brochage sont à vérifier sur la notice Seeed. Les modules sur I2C se
programment avec la bibliothèque indiquée par la notice. Les valeurs d'étalonnage du capteur
d'humidité se remesurent toujours dans la vraie terre (voir la [séquence jardin sec](../technologie/projet-jardin-sec/index.md)).

## Sources et licences

Les missions ont été conçues pour le site à partir de ressources officielles de l'enseignement de
la technologie :

- éduscol STI : revue *Technologie* n° 204 (2016), « Forum des pédagogies », progression en six
  étapes avec Arduino (sorties numériques, entrées numériques, entrées analogiques, moniteur
  série, variables, communication) ;
- éduscol STI : guide professeur « Éclairage automatique de couloir, solution micro programmée »
  (Ardublock, modules Grove : bouton, capteur de lumière, télémètre, afficheur LCD I2C) ;
- éduscol STI : fiche « Simulation de circuits et composants pilotés par Arduino : Tinkercad
  Circuits » ;
- Édubase (éduscol) : « Présentation de la carte Arduino », « Initiation au langage de
  programmation Arduino », « Programmer une carte Arduino avec Ardublock », « Mesurer la
  luminosité avec une photorésistance et une carte Arduino », « Un capteur de température avec
  Arduino », « TP Arduino » ;
- Tube Sciences & Technologies (apps.education.fr), chaîne « Tinkercad au collège » (Frédéric
  Llante) : vidéos « Comment réaliser un câblage Arduino avec Tinkercad », « Comment ajouter un
  bouton à un circuit Arduino sous Tinkercad », « Comment téléverser un programme dans la carte
  Arduino », « Concevoir un feu tricolore », intégrées dans les missions 03, 04, 07, 11 et 30 ;
- académie de Strasbourg : TP « Les lois de l'électricité avec Tinkercad » (missions 01 et 02) ;
- académie de Bordeaux, maths-sciences : activités avec Arduino (LED RVB, détecteur de proximité) ;
- programme de SNT de seconde, thème « Informatique embarquée et objets connectés » (palier violet).

Tinkercad est un service d'Autodesk ; Arduino est une marque d'Arduino SA. Schémas, pas à pas,
programmes, défis et questions : Lycée franco-hondurien, licence CC BY-NC-SA.
