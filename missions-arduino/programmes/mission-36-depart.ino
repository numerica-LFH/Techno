// Mission 36 · La lumière qui attend
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

const int PIR = 4, LUMIERE = 13;
const unsigned long DUREE = ___;   // 10 s
unsigned long derniere = 0;

void setup() {
  pinMode(PIR, INPUT);
  pinMode(LUMIERE, OUTPUT);
}

void loop() {
  if (digitalRead(PIR) == HIGH) {
    derniere = ___;
    digitalWrite(LUMIERE, HIGH);
  }
  if (millis() - derniere > ___) {
    digitalWrite(LUMIERE, LOW);
  }
}
