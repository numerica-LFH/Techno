# Trace écrite — Séance 7 : Le robot mBot

!!! info "4e · Séquence 4 · De la carte Arduino au robot mBot · Séance 7 sur 10"

    Question de la séance : *Qu'est-ce qui change quand le programme doit faire rouler un robot plutôt qu'un lutin ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 7](seance-7.md).

    [Trace écrite à imprimer (PDF)](traces/4e-arduino-mbot-seance7-trace.pdf)

## Ce que je dois retenir

### Le robot mBot

Un robot perçoit son environnement par des capteurs, décide avec un programme et agit par des actionneurs. Le mBot possède une carte mCore (une carte Arduino UNO adaptée), deux moteurs à courant continu, un capteur à ultrasons (port 3), un suiveur de ligne (port 2), deux LED de couleur, un buzzer et un bouton.

### La boucle et l'accumulation des erreurs

Pour un carré, la boucle « répéter 4 fois » remplace huit instructions par trois blocs. Si l'angle de rotation est un peu faux, l'erreur se répète à chaque tour et le carré ne se referme pas.

### De Scratch à mBlock

mBlock 5 reprend l'interface de Scratch et ajoute les blocs du robot. En mode connecté, le programme s'exécute sur l'ordinateur et le robot doit rester relié ; en mode téléversé, mBlock traduit les blocs en langage Arduino et les envoie dans la carte : le robot est autonome.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **robot** | un système qui perçoit son environnement par des capteurs, décide avec un programme et agit par des actionneurs |
| **moteur à courant continu** | l'actionneur qui fait tourner chaque roue ; sa vitesse dépend de la puissance envoyée |
| **mode connecté** | le programme s'exécute sur l'ordinateur, qui envoie les ordres au robot par câble ou radio |
| **mode téléversé** | le programme est envoyé dans la mémoire du robot, qui fonctionne seul |

## Les erreurs à ne pas commettre

- Dire que le robot « voit » : il mesure des distances et des contrastes avec ses capteurs.
- Oublier de passer en mode téléversé pour un robot qui doit rouler seul.
- Croire qu'un programme au temps donne toujours la même distance.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T2.1** | Décrire l'organisation interne d'un objet et ses échanges avec son environnement | Identifier | 1, 2, 3, 4, 5, 12 |
| **T2.3** | Comprendre et modifier un programme associé à une fonctionnalité | Comprendre | 6, 7, 8, 9, 10, 11 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-7.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-7.md){ .md-button }
