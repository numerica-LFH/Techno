# Séance 3 — Programmer l'arrosage avec le kit Grove, puis l'évaluation

!!! info "Séance 3 sur 3 · 40 minutes · Demi-groupe (salle informatique)"

    Je lis le programme d'arrosage, je règle le seuil, je le teste sur le kit de la classe, puis je passe l'évaluation de la séquence.

    [Fiche élève à imprimer (PDF)](fiches/4e-jardin-seance3-eleve.pdf)

    [Trace écrite de la séance](trace-ecrite-seance-3.md)

## AVANT — j'entre dans la question

#### J'observe

Le professeur ouvre le moniteur série de l'Arduino IDE, projeté au tableau. Il laisse le capteur à l'air, puis le plonge dans un verre d'eau. Je regarde les nombres qui défilent.

| Je regarde | Ce que j'observe |
|---|---|
| Le nombre affiché quand le capteur est à l'air |   |
| Le nombre affiché dans le verre d'eau |   |

#### Ce qu'on cherche

La règle « si la terre est sèche, alors arroser » existe sur papier. Il faut maintenant l'écrire dans la carte, avec le bon seuil, et vérifier par un essai que la pompe obéit.

**Comment régler le programme pour qu'il n'arrose que quand nos plantes en ont besoin ?**

J'écris trois choses que je crois savoir. Je n'ai pas besoin d'avoir raison : je reviendrai sur ces lignes à la fin de l'heure.

| N° | Mes hypothèses de départ | Vérifié en fin de séance (✔ / ✘) |
|---|---|---|
| 1 |   |   |
| 2 |   |   |
| 3 |   |   |

#### Vocabulaire à repérer

| Mot | Ce que j'en comprends, avec mes mots |
|---|---|
| **programme** |   |
| **constante** |   |
| **téléverser** |   |
| **essai** |   |

## PENDANT — je recherche

### Activité 1 · Je règle et je teste le programme d'arrosage

Sur mon poste, j'ouvre le programme `jardin-4e-arrosage.ino` dans l'Arduino IDE. Je le lis avec l'algorigramme de la séance 2.

*jardin-4e-arrosage.ino*

```cpp
// Jardin sec 4e : arroser quand la terre est trop sèche
const int CAPTEUR = A0;             // capteur d'humidité, port A0
const int RELAIS = 7;               // relais de la pompe, port D7
const int SEUIL = 320;              // sous 320 (30 %), la terre est trop sèche
const long DUREE_ARROSAGE = 3000;   // pompe en marche 3 s
const long ATTENTE = 10000;         // essai : 10 s (dans le jardin : 1800000, soit 30 min)

void setup() {
  pinMode(RELAIS, OUTPUT);
  digitalWrite(RELAIS, LOW);        // pompe arrêtée au démarrage
  Serial.begin(9600);
}

void loop() {
  int humidite = analogRead(CAPTEUR);
  Serial.print("Humidite : ");
  Serial.println(humidite);
  if (humidite < SEUIL) {
    digitalWrite(RELAIS, HIGH);     // la pompe démarre
    delay(DUREE_ARROSAGE);
    digitalWrite(RELAIS, LOW);      // la pompe s'arrête
    delay(ATTENTE);                 // l'eau descend jusqu'au capteur
  }
  delay(1000);
}
```

a\. Quelle ligne contient le seuil ? Que faut-il y changer pour arroser plus tôt ?

b\. Dans le jardin, l'attente est de 30 minutes. Pourquoi la réduire à 10 secondes pour l'essai ?

1. Je clique sur **Vérifier** (✓) : le programme ne doit afficher aucune erreur.
2. À tour de rôle, un binôme branche le kit (USB), choisit le port, puis clique sur **Téléverser** (→).
3. Le binôme plante le capteur dans la terre sèche, puis dans la terre arrosée, et observe la pompe.

| Essai | Valeur lue | La pompe tourne-t-elle ? | Conforme à la règle ? |
|---|---|---|---|
| capteur dans la terre sèche |   |   |   |
| capteur dans la terre arrosée |   |   |   |

### Activité 2 · L'évaluation de fin de séquence

Je ferme l'Arduino IDE. J'ouvre la page de la séquence et je clique sur **Évaluation de fin de séquence**. J'indique mon nom, mon prénom et ma classe. Je réponds aux 40 questions, puis je termine : ma note s'affiche et elle est envoyée au professeur.

| Ma note | Ce que je dois revoir |
|---|---|
| / 20 |   |

### Mon défi

!!! example "Mon défi · 4e"

    Si j'ai terminé l'évaluation en avance : avec huit goutteurs de 2 L/h, combien de secondes la pompe doit-elle tourner pour apporter 0,4 L ? Quelle ligne du programme faut-il changer ?

    *Prolongement : en fin d'heure si le temps le permet, sinon à la maison.*

## APRÈS — je fixe ce que j'ai appris

#### À retenir

!!! note "Deux documents, deux usages"

    Ce bloc se complète en classe, à la fin de l'heure : les phrases à trous se remplissent
    pendant la mise en commun. La [trace écrite de la séance](trace-ecrite-seance-3.md)
    reprend les mêmes notions rédigées, avec les définitions exactes et les compétences
    évaluées. C'est elle qui se colle dans le cahier.

Le **programme** traduit l'algorigramme : lire le capteur, comparer au seuil, commander le relais, attendre.

Les réglages (broches, seuil, durées) sont écrits en **constantes** au début : on les change en un seul endroit.

Après avoir vérifié le programme, on le **téléverse** dans la carte, puis on fait des **essais** dans des conditions connues (terre sèche, terre arrosée) pour valider qu'il fait ce qui est prévu.

Je complète : Envoyer le programme de l'ordinateur vers la carte, c'est `..........`.

Je complète : Le seuil d'arrosage est écrit dans une `..........` au début du programme.

#### Je reviens sur mes observations et mes hypothèses

Je coche ✔ ou ✘ chaque hypothèse. J'explique ensuite ce que j'ai observé au début de la séance, avec le vocabulaire de la séance :

## S'entraîner

[Ouvrir l'exercice autocorrectif :material-arrow-right:](exercices-seance-3.html){ .md-button .md-button--primary target=_blank }

Huit questions sur la séance. Je réponds, puis je vérifie : la correction et une explication s'affichent sous chaque question. Je recommence autant de fois que je veux ; rien n'est envoyé.

## S'évaluer : l'évaluation de la séquence

[Ouvrir l'évaluation de fin de séquence :material-arrow-right:](evaluation-sequence.html){ .md-button .md-button--primary target=_blank }

40 questions sur toute la séquence. J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au professeur.
