# Téléchargements

Les documents élève du projet, rangés par usage. Les fiches professeur, les corrigés et les
grilles d'évaluation ne sont pas publiés sur ce site.

## Fiches des neuf séances

Trois séances par niveau. Chaque séquence a aussi sa fiche séquence, ses traces écrites, ses
exercices autocorrectifs et son évaluation de fin de séquence, sur sa page.

=== "5e"

    | Séance | Fiche élève | Trace écrite |
    |---|---|---|
    | Fiche séquence | [PDF](../5e/sequence-jardin-sec/fiches/5e-jardin-fiche-sequence.pdf) | |
    | 1, de combien d'eau ce jardin aura-t-il besoin | [PDF](../5e/sequence-jardin-sec/fiches/5e-jardin-seance1-eleve.pdf) | [PDF](../5e/sequence-jardin-sec/traces/5e-jardin-seance1-trace.pdf) |
    | 2, quelle jardinière, quelles plantes, quel paillage | [PDF](../5e/sequence-jardin-sec/fiches/5e-jardin-seance2-eleve.pdf) | [PDF](../5e/sequence-jardin-sec/traces/5e-jardin-seance2-trace.pdf) |
    | 3, modéliser la jardinière dans SketchUp | [PDF](../5e/sequence-jardin-sec/fiches/5e-jardin-seance3-eleve.pdf) | [PDF](../5e/sequence-jardin-sec/traces/5e-jardin-seance3-trace.pdf) |

=== "4e"

    | Séance | Fiche élève | Trace écrite |
    |---|---|---|
    | Fiche séquence | [PDF](../4e/sequence-jardin-sec/fiches/4e-jardin-fiche-sequence.pdf) | |
    | 1, arroser sans gaspiller : je mesure un débit | [PDF](../4e/sequence-jardin-sec/fiches/4e-jardin-seance1-eleve.pdf) | [PDF](../4e/sequence-jardin-sec/traces/4e-jardin-seance1-trace.pdf) |
    | 2, les deux chaînes et la règle « si » | [PDF](../4e/sequence-jardin-sec/fiches/4e-jardin-seance2-eleve.pdf) | [PDF](../4e/sequence-jardin-sec/traces/4e-jardin-seance2-trace.pdf) |
    | 3, programmer l'arrosage avec le kit Grove | [PDF](../4e/sequence-jardin-sec/fiches/4e-jardin-seance3-eleve.pdf) | [PDF](../4e/sequence-jardin-sec/traces/4e-jardin-seance3-trace.pdf) |

=== "3e"

    | Séance | Fiche élève | Trace écrite |
    |---|---|---|
    | Fiche séquence | [PDF](../3e/sequence-jardin-sec/fiches/3e-jardin-fiche-sequence.pdf) | |
    | 1, étalonner le capteur et lire un journal | [PDF](../3e/sequence-jardin-sec/fiches/3e-jardin-seance1-eleve.pdf) | [PDF](../3e/sequence-jardin-sec/traces/3e-jardin-seance1-trace.pdf) |
    | 2, innovation et bilan d'eau | [PDF](../3e/sequence-jardin-sec/fiches/3e-jardin-seance2-eleve.pdf) | [PDF](../3e/sequence-jardin-sec/traces/3e-jardin-seance2-trace.pdf) |
    | 3, le programme à deux seuils | [PDF](../3e/sequence-jardin-sec/fiches/3e-jardin-seance3-eleve.pdf) | [PDF](../3e/sequence-jardin-sec/traces/3e-jardin-seance3-trace.pdf) |

## Pas à pas SketchUp

| Pas à pas | Fiche élève |
|---|---|
| 5e, créer le bac | [PDF](fichiers/fiches/sketchup/sketchup-5e-eleve.pdf) |
| 4e, le bac et les espaces extérieurs | [PDF](fichiers/fiches/sketchup/sketchup-4e-eleve.pdf) |
| 3e, l'espace complet | [PDF](fichiers/fiches/sketchup/sketchup-3e-eleve.pdf) |

Le test de 3e se fait directement dans le navigateur, la correction est immédiate :
[test 3e](sketchup/quiz-3e.html).

## Programmes Arduino du kit Grove

- [jardin-lecture.ino](fichiers/arduino/jardin-lecture.ino), lecture et étalonnage du capteur
- [jardin-4e-arrosage.ino](fichiers/arduino/jardin-4e-arrosage.ino), arrosage sous un seuil
- [jardin-3e-hysteresis.ino](fichiers/arduino/jardin-3e-hysteresis.ino), deux seuils, filtre et journal
- [Notice de branchement et d'étalonnage](fichiers/arduino/README.md)

## Scripts SketchUp pour la version Pro

À charger dans la console Ruby. Ils servent à préparer et à projeter le modèle de référence.
Sur la version en ligne, les élèves construisent leur modèle en suivant les pas à pas.

- [_commun.rb](fichiers/scripts-sketchup/_commun.rb), la bibliothèque à charger en premier
- [00_site_avant.rb](fichiers/scripts-sketchup/00_site_avant.rb), la cour avant travaux
- [01_5e_jardiniere.rb](fichiers/scripts-sketchup/01_5e_jardiniere.rb), le bac en six étapes
- [02_4e_reseau.rb](fichiers/scripts-sketchup/02_4e_reseau.rb), le fût et le réseau
- [03_3e_amenagement.rb](fichiers/scripts-sketchup/03_3e_amenagement.rb), l'aménagement complet
- [99_site_apres.rb](fichiers/scripts-sketchup/99_site_apres.rb), le modèle final en une commande

## Calcul et présentation

- [bilan-eau-jardin-sec.xlsx](fichiers/classeur/bilan-eau-jardin-sec.xlsx), classeur du bilan d'eau
- [Présentation bilingue du projet](fichiers/presentation/presentation-jardin-sec-fr-es.pdf),
  français et espagnol, version de septembre 2026 (projet en 18 séances, conservée pour mémoire)
