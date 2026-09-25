# Séance 6 — Le radar de recul

!!! info "Séance 6 sur 10 · 55 minutes · Demi-groupe"

    Je mesure une distance avec un capteur à ultrasons, je vérifie la mesure à la règle et je construis un radar de recul.

    [Fiche élève à imprimer (PDF)](fiches/4e-arduino-mbot-seance6-eleve.pdf)

    [Trace écrite de la séance](trace-ecrite-seance-6.md)

## AVANT — j'entre dans la question

#### J'observe

Le professeur approche lentement sa main d'un radar de recul fait avec la carte, un capteur à ultrasons et un buzzer.

| Je regarde | Ce que j'observe |
|---|---|
| Les deux « yeux » du capteur |   |
| Le son du buzzer quand la main approche |   |
| Le son quand la main est très près |   |

#### Ce qu'on cherche

Les voitures ont des radars de recul, les chauves-souris chassent de nuit : tous utilisent l'écho d'un son trop aigu pour nos oreilles, un ultrason.

**Comment un capteur peut-il mesurer une distance sans toucher l'obstacle ?**

#### Vocabulaire à repérer

| Mot | Ce que j'en comprends, avec mes mots |
|---|---|
| **ultrason** |   |
| **écho** |   |
| **étalonnage** |   |
| **fonction** |   |

## PENDANT — je recherche

### Activité 1 · Du temps à la distance

Le capteur émet une courte salve d'ultrasons, puis mesure la **durée** de l'aller-retour de l'écho, en microsecondes (µs). Le son parcourt 340 m/s, soit 0,034 cm par microseconde. Comme il fait l'aller et le retour :

**distance (cm) = durée × 0,034 ÷ 2**, ce qui revient à **distance ≈ durée ÷ 58**.

| Durée de l'écho | Distance calculée |
|---|---|
| 580 µs |   |
| 1 160 µs |   |
| 5 800 µs |   |

a\. Pourquoi divise-t-on par 2 ?

### Activité 2 · Mesurer et étalonner

Je câble le capteur (VCC 5V, GND, Trig broche 12, Echo broche 11), je téléverse **radar-v1.ino** et j'ouvre le moniteur série.

*radar-v1.ino*

```cpp
// radar-v1 : mesurer une distance avec le capteur à ultrasons HC-SR04
// Montage : VCC -> 5V, GND -> GND, Trig -> broche 12, Echo -> broche 11

const int TRIG = 12;
const int ECHO = 11;

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(TRIG, LOW);          // envoyer une impulsion de 10 microsecondes
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long duree = pulseIn(ECHO, HIGH, 30000);   // durée de l'écho en microsecondes (0 si rien)
  long distance = duree / 58;                // distance en centimètres
  Serial.print("Duree : ");
  Serial.print(duree);
  Serial.print(" us   Distance : ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(300);
}
```

Je place un livre à des distances mesurées à la règle et je relève trois mesures du capteur à chaque fois.

| Distance à la règle | Mesure 1 | Mesure 2 | Mesure 3 | Écart moyen |
|---|---|---|---|---|
| 10 cm |   |   |   |   |
| 20 cm |   |   |   |   |
| 40 cm |   |   |   |   |

b\. Le capteur est-il fiable ? Je justifie avec mes mesures.

### Activité 3 · Le radar de recul

J'ajoute un buzzer sur la broche 9 et je téléverse **radar-v2.ino**. La mesure est maintenant rangée dans une **fonction**.

*radar-v2.ino*

```cpp
// radar-v2 : radar de recul, le buzzer bipe de plus en plus vite quand l'obstacle approche
// Montage : HC-SR04 comme radar-v1 (Trig 12, Echo 11) ; buzzer entre la broche 9 et GND

const int TRIG = 12;
const int ECHO = 11;
const int BUZZER = 9;

long mesurerDistance() {            // fonction : renvoie la distance en cm (0 si rien détecté)
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long duree = pulseIn(ECHO, HIGH, 30000);
  return duree / 58;
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(BUZZER, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  long d = mesurerDistance();
  Serial.println(d);
  if (d == 0 || d > 100) {          // rien à moins d'un mètre : silence
    noTone(BUZZER);
    delay(100);
  } else if (d < 10) {              // très près : son continu
    tone(BUZZER, 1000);
    delay(100);
  } else {                          // entre 10 et 100 cm : bip, puis pause proportionnelle à la distance
    tone(BUZZER, 1000);
    delay(50);
    noTone(BUZZER);
    delay(d * 10);
  }
}
```

| Distance | Ce que fait le buzzer |
|---|---|
| plus de 100 cm ou rien |   |
| entre 10 et 100 cm |   |
| moins de 10 cm |   |

c\. À quoi sert la fonction `mesurerDistance()` ?

### Mon défi

!!! example "Mon défi · 4e"

    J'ajoute une LED sur la broche 8 qui s'allume quand l'obstacle est à moins de 10 cm.

## APRÈS — je fixe ce que j'ai appris

#### À retenir

!!! note "Deux documents, deux usages"

    Ce bloc se complète en classe, à la fin de l'heure : les phrases à trous se remplissent
    pendant la mise en commun. La [trace écrite de la séance](trace-ecrite-seance-6.md)
    reprend les mêmes notions rédigées, avec les définitions exactes et les compétences
    évaluées. C'est elle qui se colle dans le cahier.

Le capteur HC-SR04 émet des **ultrasons** et mesure la durée de l'**écho** : **distance (cm) ≈ durée (µs) ÷ 58**. On divise par 2 parce que le son fait l'aller et le retour.

Un capteur s'**étalonne** : on compare ses mesures à une référence, la règle, et on relève l'écart.

Une **fonction** range des instructions sous un nom ; on l'appelle quand on en a besoin.

Le radar de recul transforme une distance en son : c'est une chaîne d'information complète, du capteur à l'actionneur.

Je complète : Une durée d'écho de 1 160 µs correspond à `..........` cm.

Je complète : Comparer les mesures du capteur à celles d'une règle, c'est l'`..........`.

#### Retour sur mes observations

Je relis ce que j'ai noté dans « J'observe ». J'explique maintenant ce que j'ai vu, avec le vocabulaire de la séance :

#### La question de la prochaine séance

Qu'est-ce qui change quand le programme doit faire rouler un robot ?

## S'évaluer

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-6.html){ .md-button .md-button--primary target=_blank }

Douze questions reprenant les activités et le vocabulaire de la séance. J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au professeur. Je relis la trace écrite avant de commencer.
