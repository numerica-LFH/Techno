# Trace écrite — Séance 1 : De Scratch à Arduino

!!! info "3e · Séquence 4 · De la carte Arduino au robot mBot · Séance 1 sur 10"

    Question de la séance : *Comment un programme peut-il agir sur un objet réel ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 1](seance-1.md).

    [Trace écrite à imprimer (PDF)](traces/3e-arduino-mbot-seance1-trace.pdf)

## Ce que je dois retenir

### De l'écran à l'objet réel

Une carte Arduino contient un microcontrôleur, un petit ordinateur sur une seule puce, qui exécute un programme. Comme le jeu Scratch, elle suit une chaîne d'information : elle acquiert des informations par des capteurs, les traite, puis agit sur le monde réel par des actionneurs.

Capteurs du kit : bouton poussoir, photorésistance, capteur à ultrasons. Actionneurs : LED, buzzer, servomoteur.

### La structure d'un programme Arduino

Un programme Arduino comprend deux parties. setup() est exécutée une seule fois au démarrage : on y déclare les broches en entrée ou en sortie. loop() est répétée sans fin tant que la carte est alimentée.

digitalWrite(broche, HIGH) met une sortie à l'état haut (5 V) ; LOW la met à 0 V. delay(1000) attend 1 000 millisecondes, soit une seconde.

### Simuler avant de construire

Tinkercad Circuits simule la carte et les composants dans le navigateur. On peut programmer en blocs ou en texte, et passer de l'un à l'autre. Une simulation évite d'abîmer le matériel et permet de trouver les erreurs plus tôt.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **microcontrôleur** | un petit ordinateur sur une seule puce, qui exécute un programme ; celui de la carte UNO s'appelle ATmega328P |
| **capteur** | un composant qui acquiert une information sur le monde réel et la transmet à la carte |
| **actionneur** | un composant qui agit sur le monde réel à partir d'un ordre de la carte : LED, moteur, buzzer |
| **broche** | une borne de la carte où l'on branche un fil ; chaque broche porte un numéro |
| **simulation** | le fonctionnement d'un montage reproduit par un logiciel, sans matériel réel |

## Les erreurs à ne pas commettre

- Confondre capteur et actionneur : le capteur informe la carte, l'actionneur reçoit ses ordres.
- Croire que loop() s'exécute une seule fois : elle tourne sans fin.
- Oublier que delay() compte en millisecondes : delay(1) ne dure qu'un millième de seconde.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T2.1** | Décrire l'organisation interne d'un objet et ses échanges avec son environnement | Identifier | 1, 2, 3, 4, 13 |
| **T2.3** | Comprendre et modifier un programme associé à une fonctionnalité | Comprendre | 5, 6, 7, 8, 10, 12 |
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Comprendre | 9, 11 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-1.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-1.md){ .md-button }
