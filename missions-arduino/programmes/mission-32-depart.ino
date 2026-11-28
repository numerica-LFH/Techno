// Mission 32 · Constantes et commentaires
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

// Feu tricolore : constantes et commentaires
const int ROUGE = ___;
const int ORANGE = ___;
const int VERT = ___;
const int DUREE_VERT = 4000;    // en millisecondes
const int DUREE_ORANGE = 1000;
const int DUREE_ROUGE = 4000;

void setup() {
  pinMode(ROUGE, OUTPUT);
  pinMode(ORANGE, OUTPUT);
  pinMode(VERT, OUTPUT);
}

void loop() {
  // vert
  digitalWrite(VERT, HIGH);
  digitalWrite(ROUGE, LOW);
  delay(___);
  // orange
  digitalWrite(VERT, LOW);
  digitalWrite(___, HIGH);
  delay(DUREE_ORANGE);
  // rouge
  digitalWrite(ORANGE, LOW);
  digitalWrite(___, HIGH);
  delay(DUREE_ROUGE);
}
