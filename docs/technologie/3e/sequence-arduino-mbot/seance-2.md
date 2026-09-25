# Séance 2 — Une LED sur plaque d'essai

!!! info "Séance 2 sur 10 · 55 minutes · Demi-groupe"

    Je câble une LED avec sa résistance, je téléverse mon premier programme dans la carte et je corrige les erreurs.

    [Fiche élève à imprimer (PDF)](fiches/3e-arduino-mbot-seance2-eleve.pdf)

    [Trace écrite de la séance](trace-ecrite-seance-2.md)

## AVANT — j'entre dans la question

#### J'observe

Le professeur montre deux montages : une LED branchée dans un sens, puis dans l'autre. Je regarde de près.

| Je regarde | Ce que j'observe |
|---|---|
| Les deux pattes de la LED |   |
| La LED branchée dans un sens, puis dans l'autre |   |
| Le composant placé entre la broche et la LED |   |

#### Ce qu'on cherche

Une LED ne supporte qu'un faible courant. Branchée directement sur une broche de 5 V, elle risque de griller, et la carte aussi. Il faut aussi la brancher dans le bon sens.

**Comment brancher une LED sur la carte et la commander sans rien abîmer ?**

#### Vocabulaire à repérer

| Mot | Ce que j'en comprends, avec mes mots |
|---|---|
| **plaque d'essai** |   |
| **résistance** |   |
| **polarité** |   |
| **téléverser** |   |

## PENDANT — je recherche

### Activité 1 · Le montage

Carte débranchée, je réalise le montage avec mon binôme.

1. Je relie la broche **8** de la carte à une rangée de la plaque d'essai.
2. Je place la **résistance de 220 Ω** entre cette rangée et une autre rangée.
3. Je place la **patte longue** de la LED dans la rangée de la résistance, la patte courte dans une rangée libre.
4. Je relie la rangée de la patte courte à une broche **GND** de la carte.
5. Je fais vérifier le montage par le professeur avant de brancher le câble USB.

a\. À quoi sert la résistance ?

b\. Pourquoi la LED ne s'allume-t-elle que dans un sens ?

### Activité 2 · Téléverser clignote-v1

J'ouvre le logiciel Arduino IDE et le fichier **clignote-v1.ino**.

*clignote-v1.ino*

```cpp
// clignote-v1 : une LED branchée sur la broche 8 clignote
// Montage : broche 8 -> résistance 220 ohms -> patte longue de la LED ; patte courte -> GND

const int LED = 8;        // numéro de la broche de la LED

void setup() {
  pinMode(LED, OUTPUT);   // la broche 8 est une sortie
}

void loop() {
  digitalWrite(LED, HIGH);  // allumer
  delay(500);               // attendre 500 ms
  digitalWrite(LED, LOW);   // éteindre
  delay(500);
}
```

1. Menu Outils, Type de carte : **Arduino Uno**.
2. Menu Outils, Port : le port où la carte est branchée.
3. Bouton **Vérifier** (✓) : le programme est compilé, les erreurs s'affichent en bas.
4. Bouton **Téléverser** (→) : le programme part dans la carte.

c\. Pourquoi le programme utilise-t-il `const int LED = 8;` au lieu d'écrire 8 partout ?

d\. Je débranche le câble USB puis j'alimente la carte avec une pile. La LED clignote-t-elle encore ? Pourquoi ?

### Activité 3 · Chasse aux bogues

Chaque binôme reçoit une étiquette avec une panne. Je trouve la cause et la correction.

| Ce que je constate | Cause possible | Correction |
|---|---|---|
| La LED ne s'allume jamais, le programme est bien téléversé |   |   |
| Message « expected ';' before » en bas de l'écran |   |   |
| La LED reste allumée en permanence |   |   |
| Le téléversement échoue |   |   |

e\. Pourquoi une LED éteinte sans `delay()` semble-t-elle toujours allumée ?

### Mon défi

!!! example "Mon défi · 3e"

    Je câble trois LED (rouge 8, orange 9, verte 10) et je programme un feu tricolore : vert 5 s, orange 1 s, rouge 5 s.

## APRÈS — je fixe ce que j'ai appris

#### À retenir

!!! note "Deux documents, deux usages"

    Ce bloc se complète en classe, à la fin de l'heure : les phrases à trous se remplissent
    pendant la mise en commun. La [trace écrite de la séance](trace-ecrite-seance-2.md)
    reprend les mêmes notions rédigées, avec les définitions exactes et les compétences
    évaluées. C'est elle qui se colle dans le cahier.

Une LED se branche avec une **résistance** de 220 Ω qui limite le courant, et dans le bon sens : c'est sa **polarité** (patte longue vers la broche, patte courte vers GND).

La **plaque d'essai** relie les composants sans soudure.

Avant de **téléverser**, je **vérifie** : le logiciel compile le programme et signale les erreurs. Une fois téléversé, le programme reste dans la carte.

Pour trouver un bogue, je sépare les causes possibles : montage, programme, réglages du logiciel.

Je complète : La patte `..........` de la LED se branche du côté de la broche 8.

Je complète : Le bouton Vérifier `..........` le programme avant le téléversement.

#### Retour sur mes observations

Je relis ce que j'ai noté dans « J'observe ». J'explique maintenant ce que j'ai vu, avec le vocabulaire de la séance :

#### La question de la prochaine séance

Comment la carte sait-elle qu'on appuie sur un bouton ?

## S'évaluer

[Ouvrir l'évaluation de la séance :material-arrow-right:](evaluation-seance-2.html){ .md-button .md-button--primary target=_blank }

Treize questions reprenant les activités et le vocabulaire de la séance. J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au professeur. Je relis la trace écrite avant de commencer.
