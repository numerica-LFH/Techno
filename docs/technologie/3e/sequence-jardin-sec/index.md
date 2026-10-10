# Séquence projet — Jardin sec : le système complet et son bilan

**3e · 3 séances de 40 minutes · une semaine et demie**

Le jardin arrose seul depuis la 4e. En 3e, on vérifie que ses mesures sont fiables (étalonnage, journal de données), on retrace comment le goutte à goutte est devenu une innovation et on prouve par un bilan chiffré que le jardin tient sa promesse, puis on améliore le programme avec deux seuils et un filtre.

[Fiche séquence à imprimer (PDF)](fiches/3e-jardin-fiche-sequence.pdf)

!!! abstract "Ce que dit le programme"

    Thème 1 : *Usages et interactions*, et thème 3 : *Création, conception, réalisation, innovations*.
    Compétences travaillées (BO n° 9 du 29 février 2024) :

    - T1.1 Décrire les liens entre usages et évolutions technologiques des objets et des systèmes techniques.
    - T2.1 Décrire et caractériser l'organisation interne d'un objet ou d'un système technique et ses échanges avec son environnement.
    - T3.2 Valider les solutions techniques par des simulations ou des protocoles de tests.
    - T3.3 Concevoir, écrire, tester et mettre au point un programme.

    Connaissances : découverte, invention, innovation, effet rebond ; étalonnage, journal de données, valeur aberrante ; bilan chiffré et cahier des charges ; hystérésis, variable, condition, filtre.

!!! tip "Organisation de la semaine"

    Trois séances sur une semaine et demie. Le projet démarre sur le créneau en demi-groupe : séances 1 et 3 en **demi-groupe** (mesures, poste informatique, SketchUp ou kit Grove, évaluation sur poste) ; séance 2 en **classe entière** (documents, analyse, choix). Aucune fabrication à la main : les élèves mesurent, conçoivent et programment. Chaque séance commence par une observation, puis par des hypothèses que l'on vérifie en fin d'heure.

## Les 3 séances

| N° | Modalité | Séance | Ce qu'on y construit | Trace écrite | À imprimer |
|---|---|---|---|---|---|
| 1 | Demi-groupe (salle informatique, kit Grove) | [Mesurer pour régler : étalonner le capteur et lire un journal](seance-1.md) | Étalonnage du capteur d'humidité par relevés répétés, seuils en pourcentage, lecture d'un journal de données, valeur aberrante, médiane | [Trace écrite](trace-ecrite-seance-1.md) | [PDF](fiches/3e-jardin-seance1-eleve.pdf) |
| 2 | Classe entière | [Innovation et bilan : le jardin tient-il sa promesse ?](seance-2.md) | Découverte, invention, innovation : l'histoire du goutte à goutte ; bilan d'eau chiffré du jardin, contrainte FC1, effet rebond | [Trace écrite](trace-ecrite-seance-2.md) | [PDF](fiches/3e-jardin-seance2-eleve.pdf) |
| 3 | Demi-groupe (salle informatique) | [Le programme à deux seuils, puis l'évaluation](seance-3.md) | Hystérésis, variable d'état, filtre des valeurs aberrantes, journal au moniteur série, évaluation de fin de séquence (40 questions) | [Trace écrite](trace-ecrite-seance-3.md) | [PDF](fiches/3e-jardin-seance3-eleve.pdf) |

## Évaluation de fin de séquence

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation-sequence.html){ .md-button .md-button--primary target=_blank }

40 questions sur les trois séances : QCM, vrai ou faux, associations, remises en ordre et réponses courtes. Elle se passe pendant la séance 3. J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au professeur. Avant, je relis les traces écrites et je refais les exercices autocorrectifs de chaque séance.

| Séance | Exercice autocorrectif |
|---|---|
| 1 · Mesurer pour régler : étalonner le capteur et lire un journal | [dix questions](exercices-seance-1.html) |
| 2 · Innovation et bilan : le jardin tient-il sa promesse ? | [dix questions](exercices-seance-2.html) |
| 3 · Le programme à deux seuils, puis l'évaluation | [neuf questions](exercices-seance-3.html) |

## Le projet jardin sec

Cette séquence est la part de la classe dans le [projet jardin sec](../../projet-jardin-sec/index.md), mené sur les trois niveaux du cycle 4. La page du projet rassemble la question commune, le cahier des charges, le matériel, les pas à pas SketchUp et les programmes.

## Les programmes Arduino

À ouvrir dans l'Arduino IDE. Le kit Grove est branché sur une carte Arduino Uno par son Base Shield : capteur d'humidité sur A0, relais de la pompe sur D7.

- [jardin-lecture.ino](programmes/jardin-lecture.ino) : lire le capteur et l'étalonner (séance 1)
- [jardin-3e-hysteresis.ino](programmes/jardin-3e-hysteresis.ino) : deux seuils, filtre et journal (séance 3)

## Pour aller plus loin

- Le [pas à pas SketchUp 3e](../../projet-jardin-sec/sketchup/3e.md) et son test en ligne : le modèle complet du jardin, coté, avec ses scènes.
- Le [classeur du bilan d'eau](../../projet-jardin-sec/fichiers/classeur/bilan-eau-jardin-sec.xlsx), pour refaire les calculs au tableur.

## Déroulé d'ensemble

Chaque séance suit la même trame. **AVANT** : j'observe un document ou un objet, je lis la question
du jour, puis j'écris mes hypothèses. **PENDANT** : je recherche (les activités, puis mon défi).
**APRÈS** : je complète ce que je retiens, je reviens sur mes observations et mes hypothèses, et je
lis la question qui ouvre la séance suivante. Chaque séance a sa série d'exercices autocorrectifs
« S'entraîner » ; l'évaluation de fin de séquence a lieu pendant la séance 3.
