// Mission 39 · Le journal de données
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

unsigned long debut = 0;

float lireTemperature() {
  return (analogRead(A1) * 5.0 / 1024.0 - 0.5) * 100;
}

void setup() {
  Serial.begin(9600);
  Serial.println("___");   // en-tête du journal
  debut = millis();
}

void loop() {
  int humidite = map(analogRead(A0), 0, 876, 0, 100);
  Serial.print((millis() - debut) / 1000);
  Serial.print(___);
  Serial.print(humidite);
  Serial.print(";");
  Serial.println(lireTemperature(), 1);
  delay(___);
}
