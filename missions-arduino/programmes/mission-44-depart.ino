// Mission 44 · La mélodie en tableaux
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

const int BUZZER = 8;
// do do do ré mi ré do mi ré ré do
const int notes[]  = {262, 262, 262, 294, 330, 294, 262, 330, 294, 294, 262};
const int durees[] = {400, 400, 400, 400, 800, 800, 400, 400, 400, 400, 800};
const int NB = sizeof(notes) / sizeof(___);

void setup() {
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  for (int i = 0; i < ___; i++) {
    tone(BUZZER, notes[i], durees[i]);
    delay(durees[i] + ___);
  }
  delay(2000);
}
