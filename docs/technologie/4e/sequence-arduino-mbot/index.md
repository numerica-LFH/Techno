# Séquence 4 — De la carte Arduino au robot mBot

**4e · dix séances de 55 minutes · cinq semaines**

Après le jeu vidéo, le programme quitte l'écran pour agir sur des objets réels. On simule dans Tinkercad, on câble les composants du kit Arduino (LED, bouton, photorésistance, capteur à ultrasons), puis on programme le robot mBot jusqu'au défi du robot livreur.

[Fiche séquence à imprimer (PDF)](fiches/4e-arduino-mbot-fiche-sequence.pdf)

!!! abstract "Ce que dit le programme"

    Thèmes : *Les objets et systèmes techniques*, *Informatique et programmation*.
    Compétences travaillées (BO n° 9 du 29 février 2024) :

    - Décrire l'organisation interne d'un objet, capteurs, traitement, actionneurs (T2.1).
    - Comprendre et modifier un programme associé à une fonctionnalité (T2.3).
    - Concevoir, écrire, tester et mettre au point un programme (T3.3).
    - Valider une solution par simulation et par un protocole de test (T3.2).
    - Identifier un dysfonctionnement et y remédier (T2.2).

!!! tip "Organisation de la semaine"

    Chaque semaine : une séance en **classe entière** (simulation Tinkercad, analyse, démonstration) et une séance en **demi-groupe** (kit Arduino puis mBot, en binôme). Règle de sécurité : tout montage est vérifié par le professeur avant de brancher le câble USB.

## Les dix séances

| N° | Modalité | Séance | Ce qu'on y construit | Trace écrite | À imprimer |
|---|---|---|---|---|---|
| 1 | Classe entière (salle info) | [De Scratch à Arduino](seance-1.md) | Chaîne d'information, composants du kit, première simulation Tinkercad | [Trace écrite](trace-ecrite-seance-1.md) | [PDF](fiches/4e-arduino-mbot-seance1-eleve.pdf) |
| 2 | Demi-groupe | [Une LED sur plaque d'essai](seance-2.md) | LED et résistance, téléversement, recherche de bogues ; clignote-v1 | [Trace écrite](trace-ecrite-seance-2.md) | [PDF](fiches/4e-arduino-mbot-seance2-eleve.pdf) |
| 3 | Classe entière (salle info) | [Un bouton pour commander](seance-3.md) | Entrée numérique, résistance de rappel, si sinon, moniteur série, algorigramme | [Trace écrite](trace-ecrite-seance-3.md) | [PDF](fiches/4e-arduino-mbot-seance3-eleve.pdf) |
| 4 | Demi-groupe | [Le jeu « attrape la lumière »](seance-4.md) | Score, vies, hasard, millis() ; trouver et corriger une triche (reflexe-v1, v2) | [Trace écrite](trace-ecrite-seance-4.md) | [PDF](fiches/4e-arduino-mbot-seance4-eleve.pdf) |
| 5 | Classe entière (salle info) | [Mesurer la lumière](seance-5.md) | Photorésistance, entrée analogique de 0 à 1023, conversion, seuil ; veilleuse-v1 | [Trace écrite](trace-ecrite-seance-5.md) | [PDF](fiches/4e-arduino-mbot-seance5-eleve.pdf) |
| 6 | Demi-groupe | [Le radar de recul](seance-6.md) | Capteur à ultrasons HC-SR04, écho, d = durée ÷ 58, étalonnage, fonction ; radar-v1, v2 | [Trace écrite](trace-ecrite-seance-6.md) | [PDF](fiches/4e-arduino-mbot-seance6-eleve.pdf) |
| 7 | Classe entière | [Le robot mBot](seance-7.md) | Éléments du mBot, robot débranché avec boucle, de Scratch à mBlock, modes connecté et téléversé | [Trace écrite](trace-ecrite-seance-7.md) | [PDF](fiches/4e-arduino-mbot-seance7-eleve.pdf) |
| 8 | Demi-groupe | [Étalonner les déplacements du robot](seance-8.md) | Mesures répétées et moyenne, carré, arrêt devant un obstacle ; livreur-v1, v2 | [Trace écrite](trace-ecrite-seance-8.md) | [PDF](fiches/4e-arduino-mbot-seance8-eleve.pdf) |
| 9 | Classe entière (salle info) | [Suivre une ligne](seance-9.md) | Suiveur de ligne (valeurs 0 à 3), algorigramme, essais de puissance | [Trace écrite](trace-ecrite-seance-9.md) | [PDF](fiches/4e-arduino-mbot-seance9-eleve.pdf) |
| 10 | Demi-groupe | [Le défi du robot livreur](seance-10.md) | Cahier des charges, compteur de livraisons, test croisé sur 20, QCM ; lien blocs et C (3e) | [Trace écrite](trace-ecrite-seance-10.md) | [PDF](fiches/4e-arduino-mbot-seance10-eleve.pdf) |

## Les programmes de la séquence

Programmes à ouvrir dans l'Arduino IDE ou à recopier dans Tinkercad :

- [clignote-v1.ino](programmes/clignote-v1.ino) · séance 2
- [bouton-v1.ino](programmes/bouton-v1.ino) · séance 3
- [reflexe-v1.ino](programmes/reflexe-v1.ino) · séance 4
- [veilleuse-v1.ino](programmes/veilleuse-v1.ino) · séance 5
- [radar-v1.ino](programmes/radar-v1.ino) et [radar-v2.ino](programmes/radar-v2.ino) · séance 6

Outils : [Tinkercad Circuits](https://www.tinkercad.com/circuits), Arduino IDE, mBlock 5. Voir aussi la page [Liens utiles](../../../ressources/liens.md).

## Déroulé d'ensemble

Chaque séance suit la même trame : **AVANT** (la question du jour, puis mes hypothèses ou ce que
j'observe), **PENDANT** (je recherche : les activités, puis mon défi), **APRÈS** (ce que je
retiens, et la question qui ouvre la séance suivante). Chaque séance se termine par une
évaluation en ligne « S'évaluer » dont la note est envoyée au professeur.
