# Trace écrite — Séance 6 : Le radar de recul

!!! info "4e · Séquence 4 · De la carte Arduino au robot mBot · Séance 6 sur 10"

    Question de la séance : *Comment un capteur peut-il mesurer une distance sans toucher l'obstacle ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 6](seance-6.md).

    [Trace écrite à imprimer (PDF)](traces/4e-arduino-mbot-seance6-trace.pdf)

## Ce que je dois retenir

### Mesurer par l'écho

Le capteur HC-SR04 émet une salve d'ultrasons à 40 000 Hz et mesure la durée de l'écho renvoyé par l'obstacle. Le son parcourt 0,034 cm par microseconde et fait l'aller et le retour : distance = durée × 0,034 ÷ 2, soit environ durée ÷ 58, avec la durée en microsecondes et la distance en centimètres.

### Étalonner le capteur

Pour savoir si un capteur est fiable, on compare ses mesures à une mesure de référence, ici une règle, à plusieurs distances et plusieurs fois. L'écart relevé indique la précision. Le HC-SR04 est précis à quelques centimètres près sur un obstacle plat et face à lui ; sans obstacle, pulseIn renvoie 0.

### Organiser le programme avec une fonction

Une fonction regroupe des instructions sous un nom, comme mesurerDistance(), qui renvoie la distance. loop() l'appelle, puis choisit le son du buzzer : silence au-delà d'un mètre, bips de plus en plus rapprochés, son continu sous 10 cm.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **ultrason** | un son trop aigu pour l'oreille humaine ; le HC-SR04 émet à 40 000 Hz |
| **écho** | le son renvoyé par un obstacle |
| **étalonnage** | la comparaison des mesures du capteur avec une mesure de référence, ici une règle |
| **fonction** | un bloc de programme nommé, qu'on appelle quand on en a besoin, comme mesurerDistance() |

## Les erreurs à ne pas commettre

- Oublier de diviser par 2 : la distance calculée est doublée.
- Faire confiance à une seule mesure : on en fait plusieurs et on compare à la règle.
- Traiter la valeur 0 comme un obstacle collé au capteur : elle signifie souvent « rien détecté ».

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Analyser | 6, 7, 8, 12 |
| **T2.1** | Décrire l'organisation interne d'un objet et ses échanges avec son environnement | Comprendre | 1, 2, 3, 4, 5, 11 |
| **T3.3** | Concevoir, écrire, tester et mettre au point un programme | Appliquer | 9, 10 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-6.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-6.md){ .md-button }
