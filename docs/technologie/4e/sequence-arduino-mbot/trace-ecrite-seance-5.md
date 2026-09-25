# Trace écrite — Séance 5 : Mesurer la lumière

!!! info "4e · Séquence 4 · De la carte Arduino au robot mBot · Séance 5 sur 10"

    Question de la séance : *Comment la carte mesure-t-elle une grandeur qui varie, comme la lumière ?*

    Version rédigée et corrigée du bloc « À retenir » de la [séance 5](seance-5.md).

    [Trace écrite à imprimer (PDF)](traces/4e-arduino-mbot-seance5-trace.pdf)

## Ce que je dois retenir

### Grandeur analogique et entrée analogique

La lumière est une grandeur analogique : elle varie de façon continue. La photorésistance, montée avec une résistance de 10 kilohms, transforme la lumière en une tension sur la broche A0 : plus il y a de lumière, plus la tension est grande (dans le montage du cours).

### La conversion analogique-numérique

La carte convertit la tension de 0 à 5 V en un nombre entier de 0 à 1023 (10 bits, 1 024 valeurs). analogRead(A0) renvoie ce nombre. Tension approchée = valeur × 5 ÷ 1023 : 512 correspond à environ 2,5 V.

### Décider avec un seuil

Pour une veilleuse, le programme compare la valeur lue à un seuil : si lumiere < SEUIL, la LED s'allume. Le seuil se choisit à partir de mesures relevées au moniteur série dans les situations réelles d'utilisation.

## Les mots à connaître

| Mot | Ce que je dois pouvoir écrire |
|---|---|
| **grandeur analogique** | une grandeur qui peut prendre une infinité de valeurs, comme la lumière ou la température |
| **entrée analogique** | une broche A0 à A5 qui mesure une tension entre 0 et 5 V |
| **conversion analogique-numérique** | la transformation d'une tension en un nombre entier ; sur la carte UNO, de 0 à 1023 |
| **seuil** | la valeur limite à partir de laquelle le programme change d'action |

## Les erreurs à ne pas commettre

- Confondre entrée numérique (0 ou 1) et entrée analogique (0 à 1023).
- Choisir un seuil au hasard sans mesurer.
- Brancher la photorésistance sur une broche numérique : on ne lit que 0 ou 1.

## Ce que je dois savoir faire

Les intitulés viennent du programme de technologie du cycle 4, BO n° 9 du 29 février 2024.
La dernière colonne renvoie aux questions de l'évaluation de la séance.

| Référence | Compétence | Niveau attendu | Questions |
|---|---|---|---|
| **T2.1** | Décrire l'organisation interne d'un objet et ses échanges avec son environnement | Comprendre | 1, 2, 3, 4, 5, 6, 11, 12 |
| **T2.3** | Comprendre et modifier un programme associé à une fonctionnalité | Appliquer | 8, 9 |
| **T3.2** | Valider les solutions techniques par des simulations ou des protocoles de tests | Analyser | 7, 10 |

Les quatre niveaux attendus sont ceux de la page [Objectifs et compétences](../../objectifs.md) : **comprendre** (j'explique avec mes mots), **identifier** (je repère sur un document nouveau), **analyser** (je compare et je justifie), **appliquer** (je réinvestis seul dans une autre situation).

## Vérifier que je sais

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-5.html){ .md-button .md-button--primary target=_blank }

[Revenir à la séance :material-arrow-left:](seance-5.md){ .md-button }
