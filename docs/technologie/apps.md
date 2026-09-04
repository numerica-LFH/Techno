# Applications interactives

Chaque application reprend un chapitre du cours sous une forme jouable : la question du chapitre, les
objectifs, le contenu étape par étape, un quiz autocorrectif et une fiche de synthèse. Elles
fonctionnent dans le navigateur, sans installation et sans compte.

!!! tip "Comment s'en servir"

    - En classe, en demi-groupe, sur les postes de la salle.
    - À la maison, pour revoir avant une évaluation. Le quiz peut être refait autant de fois que voulu.
    - Au tableau, en classe entière, pour la mise en commun de fin de séance.

    Le bouton **Lecture facilitée** agrandit l'interligne et l'espacement des lettres. Le bouton
    **Imprimer** produit une version papier de toutes les étapes, utile pour un élève sans connexion.

## 5e

| Chapitre | Question du chapitre | Ouvrir |
|---|---|---|
| 1. Les besoins humains et les objets techniques | Pour vivre, l'être humain a-t-il simplement besoin d'eau et de nourriture ? | [Ouvrir](../apps/besoins-humains.html){ target=_blank } |
| 5. Programmation par blocs avec micro:bit | Comment donner des ordres à un objet sans écrire une seule ligne de code ? | [Ouvrir](../apps/microbit-programmation.html){ target=_blank } |
| 6. Chaîne d'information et chaîne d'énergie | Dans un objet technique, y a-t-il seulement de l'énergie qui circule ? | [Ouvrir](../apps/chaine-info-energie.html){ target=_blank } |
| 7. Données numériques, stockage et traitement | Comment les ordinateurs stockent-ils et traitent-ils tout ce que je leur confie ? | [Ouvrir](../apps/donnees-stockage.html){ target=_blank } |
| 8. Découvrir les réseaux informatiques | Les ordinateurs travaillent-ils seuls ? | [Ouvrir](../apps/reseaux-informatiques.html){ target=_blank } |
| Projet. De la réalité à la 3D | Comment passer d'un espace réel à sa maquette numérique à l'échelle ? | [Ouvrir](../apps/projet-architecture.html){ target=_blank } |
| 10. Les ponts | Pourquoi ne construit-on pas le même pont partout ? | [Ouvrir](../apps/les-ponts.html){ target=_blank } |

## 4e

| Chapitre | Question du chapitre | Ouvrir |
|---|---|---|
| 4. Algorithmique et robot mBot | Comment expliquer à un robot ce qu'il doit faire, sans aucune ambiguïté ? | [Ouvrir](../apps/algorithmique-mbot.html){ target=_blank } |
| 5. Données numériques et traitement de l'information | Comment une machine peut-elle tout représenter avec seulement deux chiffres ? | [Ouvrir](../apps/donnees-numeriques.html){ target=_blank } |
| 7. Modélisation 3D avec SketchUp | Comment dessiner une pièce qui devra s'emboîter dans un objet réel ? | [Ouvrir](../apps/sketchup-3d.html){ target=_blank } |

L'application SketchUp contient un **calculateur d'impact** : masse réelle, coût matière, coût
électrique, empreinte carbone et longueur de filament d'une pièce imprimée en 3D. Les élèves y voient
directement l'effet du taux de remplissage sur le coût.

## 3e

Les applications de 3e sont en préparation. Le détail des chapitres figure sur la page
[Technologie 3e](3e/index.md).

## Transversal

| Outil | À quoi il sert | Ouvrir |
|---|---|---|
| Positionnement CRCN | Se situer sur les 16 compétences du cadre de référence, repérer celles qui restent à travailler et les chapitres à reprendre | [Ouvrir](../apps/pix-positionnement.html){ target=_blank } |

Cet outil accompagne la rubrique [PIX](../pix/index.md). Il ne remplace pas PIX et ne donne aucune
note : il indique par où commencer.

## Comment elles sont faites

Les applications sont des pages autonomes du site. Elles ne dépendent d'aucun service extérieur,
n'utilisent aucune bibliothèque externe et fonctionnent hors ligne une fois la page chargée. Le
contenu de chaque chapitre est décrit dans la page elle-même, le moteur commun se trouve dans
`docs/apps/assets/`.

Ce choix a une conséquence pratique : si un service en ligne ferme ou change d'adresse, les
applications continuent de fonctionner. Elles restent modifiables directement dans le dépôt du site.
