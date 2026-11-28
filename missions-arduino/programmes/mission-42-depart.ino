// Mission 42 · Deux rythmes sans bloquer
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

const int VERTE = 10, ROUGE = 12;
const unsigned long PERIODE_V = ___, PERIODE_R = ___;
unsigned long dernierV = 0, dernierR = 0;
bool etatV = false, etatR = false;

void setup() {
  pinMode(VERTE, OUTPUT);
  pinMode(ROUGE, OUTPUT);
}

void loop() {
  unsigned long maintenant = millis();
  if (maintenant - dernierV >= PERIODE_V) {
    dernierV = maintenant;
    etatV = ___;
    digitalWrite(VERTE, etatV);
  }
  if (maintenant - dernierR >= ___) {
    dernierR = maintenant;
    etatR = !etatR;
    digitalWrite(ROUGE, etatR);
  }
}
