// Mission 33 · L'alarme de la serre
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

const int PORTE = 2, PANIQUE = 3, BUZZER = 8;
const int NUIT = ___;   // sous cette valeur, il fait nuit (à mesurer)

void setup() {
  pinMode(PORTE, INPUT);
  pinMode(PANIQUE, INPUT);
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  bool porte = digitalRead(PORTE) == HIGH;
  bool panique = digitalRead(PANIQUE) == HIGH;
  bool nuit = analogRead(A0) ___ NUIT;
  if ((porte ___ nuit) ___ panique) {
    tone(BUZZER, 880, 150);
    delay(300);
  }
}
