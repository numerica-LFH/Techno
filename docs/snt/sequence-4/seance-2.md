# Séance 2 — Cartes et plus court chemin

!!! info "Séquence 4 · séance 2 sur 3 · 55 minutes"

    Carte collaborative, couches, graphe pondéré, itinéraire.

## Ce qu'on a cherché

Une contribution réelle sur une carte libre, puis un petit graphe de six lieux pour comprendre ce
que calcule un guidage.

## Trace écrite

### Les mots de la séance

| Mot | Ce qu'il désigne |
|---|---|
| **Couche** | Un jeu de données superposé aux autres : routes, relief, commerces |
| **Carte collaborative** | Une carte que chacun peut compléter et corriger |
| **Graphe pondéré** | Un graphe dont chaque arête porte un nombre, ici une durée |
| **Poids** | Le nombre écrit sur une arête |
| **Graphe orienté** | Un graphe dont certaines arêtes ne se parcourent que dans un sens |

### Le graphe de l'activité

```
A Lycée   B Marché   C Parc   D Hôpital   E Stade   F Aéroport

A-B : 4    A-C : 2    B-C : 1    B-D : 5
C-D : 8    C-E : 10   D-E : 2    D-F : 6    E-F : 3
```

| Question | Réponse | Détail |
|---|---|---|
| Le plus rapide de A à F | A, C, B, D, E, F | 2 + 1 + 5 + 2 + 3 = **13 minutes**, cinq étapes |
| Le moins d'étapes de A à F | A, B, D, F | 4 + 5 + 6 = **15 minutes**, trois étapes |

### Ce que je retiens

Ce qui compte dans un calcul d'itinéraire est la **somme des poids**, pas le nombre d'arêtes. Le
trajet en cinq étapes bat ici le trajet en trois étapes.

Un sens unique se représente en **orientant** l'arête : la structure du graphe change. Un
embouteillage se représente en **changeant le poids** de l'arête, sans toucher au graphe. C'est
exactement ce que font les calculateurs d'itinéraire en temps réel, et c'est pourquoi un trajet plus
long en kilomètres peut être annoncé comme plus court en durée.

Sur une carte collaborative, les données sont produites par des contributeurs et librement
réutilisables. Chaque contribution est publique et signée immédiatement. Le projet se protège des
erreurs et du vandalisme par l'historique complet, l'annulation possible et la relecture par la
communauté.

Un historique de déplacements sans aucun nom peut suffire à désigner une personne : où elle dort, où
elle travaille, qui elle fréquente.

### Ce que je dois savoir refaire

- Trouver le chemin de poids minimal sur un petit graphe, et le distinguer du chemin le plus court
  en nombre d'étapes.
- Représenter un sens unique, puis un embouteillage.
- Dire ce qui distingue une carte collaborative d'une carte propriétaire.

!!! note "Ce qu'on ne met pas sur la carte"

    Aucune adresse personnelle, aucun nom d'élève ne rejoint la carte. Les contributions portent sur
    des points d'intérêt réels et vérifiables.

## Pour aller plus loin

- Précision, sources d'erreur, correction différentielle.
- Ce que révèle un historique de déplacements.

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
