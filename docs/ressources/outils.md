# Les outils

Les logiciels utilisés en classe sont libres ou gratuits et fonctionnent aussi
bien à la maison qu'au lycée. Les adresses complètes sont regroupées sur la page
[Liens utiles](liens.md).

## Programmation

| Outil | Usage | Niveau |
|---|---|---|
| Scratch | Programmation par blocs | 5e |
| Python (Thonny) | Traitement de données, images | SNT |
| micro:bit (MakeCode) | Objets connectés, capteurs | 4e, 3e |

### Installer Python et Thonny

*À venir.*

### Travailler sans rien installer

Un environnement Python en ligne suffit pour la plupart des activités de SNT.
Le lien est donné en classe.

## Écrire des pages web

Le thème [Le Web](../snt/web.md) demande d'écrire soi-même des fichiers `.html`
et `.css`. L'outil retenu est **Phoenix Code**, à l'adresse
[web.phcode.dev](https://web.phcode.dev/).

Il tourne entièrement dans le navigateur : aucune installation, aucun compte,
et il fonctionne à l'identique au lycée et à la maison. Il colore le code et
affiche la page à côté, ce qui change tout quand on cherche une balise mal
fermée.

Phoenix Code est le successeur direct de Brackets, dont Adobe a arrêté le
support en septembre 2021. Même ergonomie, même aperçu en direct : les
documents de cours écrits pour Brackets restent utilisables tels quels.

### Prise en main, en trois gestes

1. Ouvrir [web.phcode.dev](https://web.phcode.dev/) et cliquer sur **Open Folder**.
   Choisir, ou créer, le dossier de travail sur le disque. C'est le geste à ne
   pas sauter : sans dossier ouvert, chaque enregistrement repart de zéro.
2. Créer les fichiers dans ce dossier. Ils restent sur le disque de l'élève,
   rien n'est envoyé nulle part.
3. Le bouton d'aperçu affiche la page à côté du code, et la rafraîchit à chaque
   frappe.

!!! warning "Un traitement de texte n'est pas un éditeur de code"

    Word ou Docs enregistrent en `.docx`, ajoutent des guillemets typographiques
    et remplacent les apostrophes. Le fichier obtenu n'est pas du HTML valide.
    Sur un poste sans éditeur installé, le Bloc-notes ou TextEdit en mode texte
    brut dépannent, à condition d'enregistrer explicitement en `.html`.

Deux règles à rappeler à chaque séance : toutes les pages d'un même mini-site
vont **dans le même dossier**, et le nom écrit dans un lien doit correspondre
exactement au nom du fichier, extension et majuscules comprises.

## Modélisation et dessin

Le projet jardin sec demande de dessiner en trois dimensions avant de construire.
L'outil retenu est **SketchUp Web**, à l'adresse
[app.sketchup.com](https://app.sketchup.com/).

Il s'ouvre dans un onglet du navigateur : rien à installer, un compte Trimble
gratuit suffit, et on retrouve son modèle au lycée comme à la maison. La
méthode tient en deux gestes, tracer une surface plane puis l'étirer en volume
avec l'outil Pousser/Tirer. Les dimensions se tapent au clavier pendant le
tracé, ce qui fait travailler aux cotes réelles du projet.

### SketchUp, prise en main en trois gestes

1. Ouvrir [app.sketchup.com](https://app.sketchup.com/), se connecter, puis
   choisir un modèle de départ en mètres. C'est le geste à ne pas sauter :
   changer d'unité en cours de dessin oblige à tout recoter.
2. Tracer un rectangle, le tirer vers le haut avec Pousser/Tirer, et taper la
   valeur au clavier au lieu de viser à la souris.
3. Nommer le modèle dès la première minute, sous la forme `jardin-nom-classe`.
   Sur un poste partagé, le télécharger en `.skp` en fin de séance.

!!! warning "Ce que la version gratuite ne fait pas"

    Elle modélise et cote sans limite, mais l'import de fichiers extérieurs est
    réservé aux offres payantes et l'image exportée porte un filigrane. Le
    téléchargement du modèle reste possible en `.skp`, et en `.stl` pour
    l'impression 3D.

Les trois pas à pas du projet, douze étapes chacun, se font entièrement dans
cette version : [vue d'ensemble](../technologie/projet-jardin-sec/sketchup/index.md),
[5e](../technologie/projet-jardin-sec/sketchup/5e.md),
[4e](../technologie/projet-jardin-sec/sketchup/4e.md),
[3e](../technologie/projet-jardin-sec/sketchup/3e.md).

## Simuler un montage électronique

Avant de câbler une carte micro:bit et ses composants, le montage se teste à
l'écran avec **Tinkercad Circuits**, à l'adresse
[tinkercad.com/circuits](https://www.tinkercad.com/circuits).

On pose une plaque d'essai, on tire les fils, on branche une LED, une
résistance, un moteur ou un capteur, puis on lance la simulation. Les cartes
micro:bit et Arduino Uno y sont simulées et se programment en blocs, comme dans
MakeCode. Un montage faux se voit tout de suite, sans composant grillé.

### Tinkercad, prise en main en trois gestes

1. Ouvrir [tinkercad.com/circuits](https://www.tinkercad.com/circuits) et se
   connecter, avec le compte Autodesk ou par le code de classe donné en séance.
2. Câbler le montage, écrire le programme dans le panneau Code, puis cliquer sur
   Démarrer la simulation.
3. Partager le lien du montage pour le rendre ou le reprendre à la maison.

!!! warning "Le simulateur ne remplace pas le montage réel"

    À l'écran, une LED branchée sans résistance s'allume quand même. Sur la
    table, elle grille. Les règles de câblage, polarité et résistance de
    protection, se vérifient sur le vrai montage.

## Travailler à plusieurs sur une même page

Les activités de groupe passent par un pad partagé (Digipad). Le professeur
donne le lien, chaque élève dépose sa contribution au même endroit et tout le
monde voit le résultat se construire. Adresse et mode d'emploi sur la page
[Liens utiles](liens.md).

C'est aussi l'outil du recueil des représentations initiales : en début de
séquence, chacun y dépose ce qu'il croit savoir, avant toute recherche. Le pad
est rouvert en fin de séquence pour mesurer le chemin parcouru.

## Questionnaires et évaluations courtes

Les évaluations de fin de séquence passent par un questionnaire en ligne corrigé
automatiquement. L'élève voit son résultat immédiatement, et chaque mauvaise
réponse renvoie au passage du cours concerné. Le professeur récupère de son côté
le taux de réussite question par question, ce qui indique quoi reprendre à la
séance suivante.

## Bureautique et rendu de travaux

Les dossiers de projet sont rendus en PDF. Un export depuis n'importe quel
traitement de texte convient.

## Compte et mot de passe

Un mot de passe unique par service, jamais réutilisé. Un gestionnaire de mots
de passe règle le problème une fois pour toutes.
