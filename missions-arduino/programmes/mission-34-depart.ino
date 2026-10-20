// Mission 34 · Le chauffage de la serre
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

const int CHAUFFAGE = 13;
const float SEUIL_BAS = ___;
const float SEUIL_HAUT = ___;
bool chauffage = false;   // mémorisé d'un tour à l'autre

float lireTemperature() {
  return (analogRead(A1) * 5.0 / 1024.0 - 0.5) * 100;
}

void setup() {
  pinMode(CHAUFFAGE, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  float t = lireTemperature();
  if (t < SEUIL_BAS) {
    chauffage = ___;
  } else if (t > SEUIL_HAUT) {
    chauffage = ___;
  }
  digitalWrite(CHAUFFAGE, chauffage ? HIGH : LOW);
  Serial.println(t);
  delay(500);
}
