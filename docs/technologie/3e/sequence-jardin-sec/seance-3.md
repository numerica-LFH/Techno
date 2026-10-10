# Séance 3 — Le programme à deux seuils, puis l'évaluation

!!! info "Séance 3 sur 3 · 40 minutes · Demi-groupe (salle informatique)"

    Je lis et je teste le programme final, avec deux seuils et un filtre, puis je passe l'évaluation de la séquence.

    [Fiche élève à imprimer (PDF)](fiches/3e-jardin-seance3-eleve.pdf)

    [Trace écrite de la séance](trace-ecrite-seance-3.md)

## AVANT — j'entre dans la question

#### J'observe

Le professeur fait tourner le programme à un seul seuil des 4e et maintient le capteur dans une terre juste à la limite. J'écoute le relais et je regarde les valeurs projetées.

| Je regarde | Ce que j'observe |
|---|---|
| Le relais quand la valeur est proche de 320 |   |
| Les valeurs affichées |   |

#### Ce qu'on cherche

Un arrosage par petits coups rapprochés use la pompe et le relais, et une mesure fausse peut vider le fût. Le programme final doit prendre ses décisions avec plus de recul.

**Comment empêcher le système d'arroser par petits coups rapprochés et de réagir à une mesure fausse ?**

J'écris trois choses que je crois savoir. Je n'ai pas besoin d'avoir raison : je reviendrai sur ces lignes à la fin de l'heure.

| N° | Mes hypothèses de départ | Vérifié en fin de séance (✔ / ✘) |
|---|---|---|
| 1 |   |   |
| 2 |   |   |
| 3 |   |   |

#### Vocabulaire à repérer

| Mot | Ce que j'en comprends, avec mes mots |
|---|---|
| **hystérésis** |   |
| **variable** |   |
| **filtre** |   |
| **condition** |   |

## PENDANT — je recherche

### Activité 1 · Je lis et je teste le programme final

J'ouvre `jardin-3e-hysteresis.ino` dans l'Arduino IDE et je le lis.

*jardin-3e-hysteresis.ino*

```cpp
// Jardin sec 3e : arrosage à deux seuils et journal de données
const int CAPTEUR = A0;             // capteur d'humidité, port A0
const int RELAIS = 7;               // relais de la pompe, port D7
const int SEUIL_BAS = 320;          // 30 % : on commence à arroser
const int SEUIL_HAUT = 400;         // 50 % : on arrête d'arroser
const int MINI = 50;                // en dessous : capteur débranché
const int MAXI = 950;               // au-dessus : valeur impossible dans la terre
const long DOSE = 3000;             // une dose : pompe en marche 3 s
const long PAUSE = 10000;           // essai : 10 s (dans le jardin : 1800000, soit 30 min)

bool arrosage = false;              // mémorise si l'on est en période d'arrosage

void setup() {
  pinMode(RELAIS, OUTPUT);
  digitalWrite(RELAIS, LOW);
  Serial.begin(9600);
  Serial.println("temps;valeur;arrosage");   // en-tête du journal
}

void loop() {
  int valeur = analogRead(CAPTEUR);
  if (valeur < MINI || valeur > MAXI) {
    arrosage = false;               // valeur aberrante : on n'arrose pas
  } else if (valeur < SEUIL_BAS) {
    arrosage = true;                // terre sèche : on démarre
  } else if (valeur > SEUIL_HAUT) {
    arrosage = false;               // terre assez humide : on arrête
  }                                 // entre les deux seuils : rien ne change
  if (arrosage) {
    digitalWrite(RELAIS, HIGH);     // une dose d'eau
    delay(DOSE);
    digitalWrite(RELAIS, LOW);
  }
  Serial.print(millis() / 1000);    // temps en secondes depuis la mise en marche
  Serial.print(";");
  Serial.print(valeur);
  Serial.print(";");
  Serial.println(arrosage ? 1 : 0);
  delay(PAUSE);
}
```

a\. Quels sont les deux seuils, en valeur et en pourcentage ? Comment s'appelle ce réglage ?

b\. À quoi sert la variable `arrosage` ? Que se passe-t-il quand la valeur est entre 320 et 400 ?

| Valeur lue (dans l'ordre) | arrosage après la lecture | Pourquoi |
|---|---|---|
| 250 |   |   |
| 350 |   |   |
| 420 |   |   |
| 350 |   |   |
| 0 |   |   |

1. Je clique sur **Vérifier** (✓).
2. À tour de rôle, un binôme téléverse sur le kit, plante le capteur dans la terre sèche puis arrosée, et compare le journal du moniteur série au tableau.

### Activité 2 · L'évaluation de fin de séquence

Je ferme l'Arduino IDE. J'ouvre la page de la séquence et je clique sur **Évaluation de fin de séquence**. J'indique mon nom, mon prénom et ma classe. Je réponds aux 40 questions, puis je termine : ma note s'affiche et elle est envoyée au professeur.

| Ma note | Ce que je dois revoir |
|---|---|
| / 20 |   |

### Mon défi

!!! example "Mon défi · 3e"

    Si j'ai terminé l'évaluation en avance : j'ouvre le [pas à pas SketchUp 3e](../../projet-jardin-sec/sketchup/3e.md), je commence le modèle complet du jardin, puis je fais son test en ligne.

    *Prolongement : en fin d'heure si le temps le permet, sinon à la maison.*

## APRÈS — je fixe ce que j'ai appris

#### À retenir

!!! note "Deux documents, deux usages"

    Ce bloc se complète en classe, à la fin de l'heure : les phrases à trous se remplissent
    pendant la mise en commun. La [trace écrite de la séance](trace-ecrite-seance-3.md)
    reprend les mêmes notions rédigées, avec les définitions exactes et les compétences
    évaluées. C'est elle qui se colle dans le cahier.

Avec un seuil unique, une valeur proche du seuil fait démarrer et arrêter la pompe sans cesse. L'**hystérésis** utilise deux seuils : on démarre sous 320 (30 %) et on s'arrête au-dessus de 400 (50 %).

La **variable** `arrosage` garde la décision en mémoire : entre les deux seuils, rien ne change.

Le **filtre** écarte les valeurs impossibles (sous 50 ou au-dessus de 950) : une mesure fausse ne déclenche plus d'arrosage.

Le programme écrit chaque mesure dans le moniteur série : c'est le journal qui permet de valider le système.

Je complète : Le réglage à deux seuils s'appelle une `..........`.

Je complète : La partie du programme qui écarte les valeurs impossibles est le `..........`.

#### Je reviens sur mes observations et mes hypothèses

Je coche ✔ ou ✘ chaque hypothèse. J'explique ensuite ce que j'ai observé au début de la séance, avec le vocabulaire de la séance :

## S'entraîner

[Ouvrir l'exercice autocorrectif :material-arrow-right:](exercices-seance-3.html){ .md-button .md-button--primary target=_blank }

Neuf questions sur la séance. Je réponds, puis je vérifie : la correction et une explication s'affichent sous chaque question. Je recommence autant de fois que je veux ; rien n'est envoyé.

## S'évaluer : l'évaluation de la séquence

[Ouvrir l'évaluation de fin de séquence :material-arrow-right:](evaluation-sequence.html){ .md-button .md-button--primary target=_blank }

40 questions sur toute la séquence. J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au professeur.
