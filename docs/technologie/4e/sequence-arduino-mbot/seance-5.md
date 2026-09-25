# Séance 5 — Mesurer la lumière

!!! info "Séance 5 sur 10 · 55 minutes · Classe entière (salle info)"

    Je mesure la lumière avec une photorésistance et j'allume une veilleuse sous un seuil.

    [Fiche élève à imprimer (PDF)](fiches/4e-arduino-mbot-seance5-eleve.pdf)

    [Trace écrite de la séance](trace-ecrite-seance-5.md)

## AVANT — j'entre dans la question

#### Ce qu'on cherche

Un bouton ne donne que deux états. La lumière, elle, varie de façon continue : du plein soleil à l'obscurité. Une veilleuse doit s'allumer quand il fait assez sombre.

**Comment la carte mesure-t-elle une grandeur qui varie, comme la lumière ?**

J'écris trois choses que je crois savoir. Je n'ai pas besoin d'avoir raison : je reviendrai sur ces lignes à la fin de l'heure.

| N° | Mes hypothèses de départ | Vérifié en fin de séance (✔ / ✘) |
|---|---|---|
| 1 |   |   |
| 2 |   |   |
| 3 |   |   |

#### Vocabulaire à repérer

| Mot | Ce que j'en comprends, avec mes mots |
|---|---|
| **grandeur analogique** |   |
| **entrée analogique** |   |
| **conversion analogique-numérique** |   |
| **seuil** |   |

## PENDANT — je recherche

### Activité 1 · Relever des valeurs

Dans Tinkercad, j'ouvre le circuit de la photorésistance : elle est reliée au 5 V et à la broche A0, une résistance de 10 kΩ relie A0 à GND. Le programme affiche `analogRead(A0)` au moniteur série. Je fais varier la lumière avec le curseur de la simulation.

| Situation | Valeur lue |
|---|---|
| Beaucoup de lumière |   |
| Lumière de la classe |   |
| Obscurité |   |

a\. Comment la valeur lue évolue-t-elle quand la lumière augmente ?

b\. Pourquoi dit-on que la lumière est une grandeur analogique ?

### Activité 2 · De la tension au nombre

La carte convertit la tension de la broche A0 (de 0 à 5 V) en un nombre entier de **0 à 1023**. Ce convertisseur travaille sur 10 bits : 2¹⁰ = 1 024 valeurs possibles.

| Valeur lue | Tension sur A0 (environ) |
|---|---|
| 0 |   |
| 512 |   |
| 1023 |   |

c\. Je calcule la tension pour une valeur lue de 205. (Tension = valeur × 5 ÷ 1023)

### Activité 3 · La veilleuse

J'ajoute une LED sur la broche 8 et j'ouvre **veilleuse-v1.ino**.

*veilleuse-v1.ino*

```cpp
// veilleuse-v1 : la LED s'allume quand il fait sombre
// Montage : photorésistance entre 5V et A0 ; résistance 10 kilohms entre A0 et GND
//           (plus il y a de lumière, plus la valeur lue est grande)
//           LED sur la broche 8 avec sa résistance de 220 ohms

const int CAPTEUR = A0;
const int LED = 8;
const int SEUIL = 300;       // à régler après les mesures au moniteur série

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lumiere = analogRead(CAPTEUR);    // valeur entre 0 et 1023
  Serial.println(lumiere);
  if (lumiere < SEUIL) {
    digitalWrite(LED, HIGH);            // sombre : on allume
  } else {
    digitalWrite(LED, LOW);
  }
  delay(200);
}
```

d\. Que fait le programme quand la valeur lue est inférieure à 300 ?

e\. Je choisis un seuil adapté à la classe à partir de mes mesures. Lequel, et pourquoi ?

### Mon défi

!!! example "Mon défi · 4e"

    Je règle le seuil pour que la veilleuse s'allume quand je couvre le capteur avec ma main, et pas avant. J'écris la valeur choisie et comment je l'ai trouvée.

## APRÈS — je fixe ce que j'ai appris

#### À retenir

!!! note "Deux documents, deux usages"

    Ce bloc se complète en classe, à la fin de l'heure : les phrases à trous se remplissent
    pendant la mise en commun. La [trace écrite de la séance](trace-ecrite-seance-5.md)
    reprend les mêmes notions rédigées, avec les définitions exactes et les compétences
    évaluées. C'est elle qui se colle dans le cahier.

La lumière est une **grandeur analogique** : elle varie de façon continue.

Une **entrée analogique** (A0 à A5) mesure une tension de 0 à 5 V. La **conversion analogique-numérique** la transforme en un nombre de **0 à 1023** : `analogRead(A0)`.

Le programme compare la mesure à un **seuil** pour décider : sous le seuil, la veilleuse s'allume.

On choisit le seuil à partir de **mesures** relevées au moniteur série.

Je complète : analogRead renvoie une valeur entre 0 et `..........`.

Je complète : Une valeur lue de 512 correspond à environ `..........` V.

#### Je reviens sur mes hypothèses

Je remonte en haut de la fiche et je coche ✔ ou ✘. J'écris ici ce qui m'a le plus surpris :

#### La question de la prochaine séance

Comment un capteur peut-il mesurer une distance sans toucher l'obstacle ?

## S'évaluer

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-5.html){ .md-button .md-button--primary target=_blank }

Douze questions reprenant les activités et le vocabulaire de la séance. J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au professeur. Je relis la trace écrite avant de commencer.
