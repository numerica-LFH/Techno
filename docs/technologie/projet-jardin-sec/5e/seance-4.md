# Séance 4 : Modéliser la jardinière en trois dimensions

!!! question "La question du jour"
    Comment passer des cotes écrites dans le cahier des charges à un modèle 3D précis, dont on peut extraire la liste des planches à couper ?

| Durée | Format | Compétences |
|---|---|---|
| 45 minutes | demi-groupe | Représenter une solution technique à l'aide d'un outil numérique ; Utiliser un modèle numérique pour préparer une réalisation ; Établir une nomenclature à partir d'un modèle |

## Avant

**Mon hypothèse.** Combien de planches penses-tu qu'il faut pour fabriquer une jardinière de 1,2 m sur 0,8 m et 0,3 m de haut ? Écris ton estimation et le raisonnement en une phrase.

### Les mots à repérer

| Mot | Définition |
|---|---|
| Composant | élément du modèle que l'on peut copier, chaque copie se met à jour quand on modifie l'original |
| Nomenclature | liste des pièces d'un objet avec leur nombre et leurs dimensions |
| Tableau de découpe | liste des coupes à effectuer dans la matière première |
| Chute | morceau de matière restant après découpe |
| Plan coté | dessin portant toutes les dimensions nécessaires à la fabrication |

## Pendant : je recherche

### Activité 1 · je recherche : construire le caisson et le dupliquer

Suis les six étapes projetées pour construire le caisson, note à chaque étape la valeur que tu tapes au clavier, puis sélectionne tout le caisson, clic droit, Créer un composant, nomme-le Jardiniere_5e, et place huit exemplaires dans le modèle de la cour.

- Pourquoi les parois courtes mesurent-elles 0,76 m et non 0,80 m ?
- Une fois le fond posé, quelle est la hauteur totale de la jardinière, et quel est son volume intérieur utile en litres ?
- Quelle différence entre un groupe et un composant, et quel est l'intérêt de transformer le caisson en composant ici ?
- Quelle distance laisses-tu entre deux jardinières ? Justifie.

### Activité 2 · je recherche : la liste des planches à couper

Complète la nomenclature à partir de ton modèle, puis calcule le nombre de palettes nécessaires en sachant qu'une palette fournit 5 planches utiles de 1,2 m sur 0,1 m.

- Quelle longueur totale de planche faut-il ?
- Combien de palettes pour une jardinière, puis pour les huit ?

## Après : ce que je retiens

Un modèle 3D permet de passer du **cahier des charges** à la **nomenclature** des pièces à fabriquer.  
La jardinière mesure **1,20** m sur **0,80** m et **0,32** m de haut, pour un volume utile d'environ **220** litres.  
Les parois courtes mesurent **0,76** m, car il faut retirer les deux **épaisseurs** des parois longues.  
Un **composant** se met à jour dans toutes ses copies, contrairement à un **groupe**.  
La nomenclature indique qu'il faut environ **16,4** m de planche, soit **3** palettes par jardinière.  
Le modèle sert donc à vérifier les **contraintes** et à préparer la **découpe** avant de scier quoi que ce soit.

**La question de la prochaine séance.** La jardinière est modélisée. Mais le paillage, dont parle le cahier des charges, fait-il vraiment économiser de l'eau ? Il va falloir le mesurer.

## Matériel

- un poste par binôme
- script 01_5e_jardiniere.rb pour la démonstration par étapes
- plan coté vierge à compléter
- fiche élève
