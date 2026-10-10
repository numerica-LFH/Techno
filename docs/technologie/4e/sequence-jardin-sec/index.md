# Séquence projet — Jardin sec : automatiser l'arrosage

**4e · 3 séances de 40 minutes · une semaine et demie**

Les 5e ont chiffré le besoin du jardin : 6,2 L par jour. En 4e, on mesure des débits et on compare trois principes d'arrosage, on calcule l'eau de pluie récupérable, on décrit le système automatique par ses deux chaînes, puis on règle et on teste le programme d'arrosage sur le kit Grove de la classe.

[Fiche séquence à imprimer (PDF)](fiches/4e-jardin-fiche-sequence.pdf)

!!! abstract "Ce que dit le programme"

    Thème 2 : *Structure, fonctionnement, comportement*, et thème 1 : *Usages et interactions*.
    Compétences travaillées (BO n° 9 du 29 février 2024) :

    - T1.3 Caractériser et choisir un objet ou un système technique selon différents critères.
    - T2.1 Décrire et caractériser l'organisation interne d'un objet ou d'un système technique et ses échanges avec son environnement.
    - T2.3 Comprendre et modifier un programme associé à une fonctionnalité.
    - T3.2 Valider les solutions techniques par des simulations ou des protocoles de tests.

    Connaissances : débit, efficience, principe technique ; chaîne d'information et chaîne d'énergie ; capteur, actionneur, étalonnage, seuil ; algorigramme, condition, constante.

!!! tip "Organisation de la semaine"

    Trois séances sur une semaine et demie. Le projet démarre sur le créneau en demi-groupe : séances 1 et 3 en **demi-groupe** (mesures, poste informatique, SketchUp ou kit Grove, évaluation sur poste) ; séance 2 en **classe entière** (documents, analyse, choix). Aucune fabrication à la main : les élèves mesurent, conçoivent et programment. Chaque séance commence par une observation, puis par des hypothèses que l'on vérifie en fin d'heure.

## Les 3 séances

| N° | Modalité | Séance | Ce qu'on y construit | Trace écrite | À imprimer |
|---|---|---|---|---|---|
| 1 | Demi-groupe (atelier, point d'eau) | [Arroser sans gaspiller : je mesure un débit](seance-1.md) | Mesure du débit d'un goutteur et de la pompe du kit, efficience de trois principes d'arrosage, eau de pluie | [Trace écrite](trace-ecrite-seance-1.md) | [PDF](fiches/4e-jardin-seance1-eleve.pdf) |
| 2 | Classe entière | [Qui décide d'arroser ? Les deux chaînes et la règle « si »](seance-2.md) | Chaîne d'information et chaîne d'énergie du kit Grove, étalonnage du capteur, seuil, algorigramme | [Trace écrite](trace-ecrite-seance-2.md) | [PDF](fiches/4e-jardin-seance2-eleve.pdf) |
| 3 | Demi-groupe (salle informatique) | [Programmer l'arrosage avec le kit Grove, puis l'évaluation](seance-3.md) | Lecture du programme Arduino, réglage du seuil, essai sur le kit, évaluation de fin de séquence (40 questions) | [Trace écrite](trace-ecrite-seance-3.md) | [PDF](fiches/4e-jardin-seance3-eleve.pdf) |

## Évaluation de fin de séquence

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation-sequence.html){ .md-button .md-button--primary target=_blank }

40 questions sur les trois séances : QCM, vrai ou faux, associations, remises en ordre et réponses courtes. Elle se passe pendant la séance 3. J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au professeur. Avant, je relis les traces écrites et je refais les exercices autocorrectifs de chaque séance.

| Séance | Exercice autocorrectif |
|---|---|
| 1 · Arroser sans gaspiller : je mesure un débit | [dix questions](exercices-seance-1.html) |
| 2 · Qui décide d'arroser ? Les deux chaînes et la règle « si » | [dix questions](exercices-seance-2.html) |
| 3 · Programmer l'arrosage avec le kit Grove, puis l'évaluation | [huit questions](exercices-seance-3.html) |

## Le projet jardin sec

Cette séquence est la part de la classe dans le [projet jardin sec](../../projet-jardin-sec/index.md), mené sur les trois niveaux du cycle 4. La page du projet rassemble la question commune, le cahier des charges, le matériel, les pas à pas SketchUp et les programmes.

## Les programmes Arduino

À ouvrir dans l'Arduino IDE. Le kit Grove est branché sur une carte Arduino Uno par son Base Shield : capteur d'humidité sur A0, relais de la pompe sur D7.

- [jardin-lecture.ino](programmes/jardin-lecture.ino) : lire le capteur et l'étalonner
- [jardin-4e-arrosage.ino](programmes/jardin-4e-arrosage.ino) : arroser sous le seuil de 320 (séance 3)

## Pour aller plus loin

- Le [pas à pas SketchUp 4e](../../projet-jardin-sec/sketchup/4e.md) : implanter les huit bacs, le fût et la ligne d'arrosage dans la cour, sans cotes.
- Le [cahier des charges complet](../../projet-jardin-sec/besoins-et-materiel.md) du projet.

## Déroulé d'ensemble

Chaque séance suit la même trame. **AVANT** : j'observe un document ou un objet, je lis la question
du jour, puis j'écris mes hypothèses. **PENDANT** : je recherche (les activités, puis mon défi).
**APRÈS** : je complète ce que je retiens, je reviens sur mes observations et mes hypothèses, et je
lis la question qui ouvre la séance suivante. Chaque séance a sa série d'exercices autocorrectifs
« S'entraîner » ; l'évaluation de fin de séquence a lieu pendant la séance 3.
