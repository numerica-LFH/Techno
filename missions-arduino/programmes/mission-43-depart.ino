// Mission 43 · Le feu piéton en états
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

enum Etat { VOITURES, ORANGE, PIETONS };
Etat etat = VOITURES;
unsigned long debut = 0;
const int V_ROUGE = 12, V_ORANGE = 11, V_VERT = 10, P_ROUGE = 7, P_VERT = 6, BOUTON = 2;

void feux(int vr, int vo, int vv, int pr, int pv) {
  digitalWrite(V_ROUGE, vr); digitalWrite(V_ORANGE, vo); digitalWrite(V_VERT, vv);
  digitalWrite(P_ROUGE, pr); digitalWrite(P_VERT, pv);
}

void changer(Etat nouvel) {
  etat = nouvel;
  debut = ___;
}

void setup() {
  for (int b = 6; b <= 12; b++) pinMode(b, OUTPUT);
  pinMode(BOUTON, INPUT);
}

void loop() {
  unsigned long duree = millis() - debut;
  switch (etat) {
    case VOITURES:
      feux(0, 0, 1, 1, 0);
      if (digitalRead(BOUTON) == HIGH) changer(___);
      break;
    case ORANGE:
      feux(0, 1, 0, 1, 0);
      if (duree > ___) changer(PIETONS);
      break;
    case PIETONS:
      feux(1, 0, 0, 0, 1);
      if (duree > 5000) changer(___);
      break;
  }
}
