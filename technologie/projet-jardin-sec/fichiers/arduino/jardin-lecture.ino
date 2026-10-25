// Jardin sec : lire le capteur d'humidité (étalonnage)
// Capteur d'humidité Grove sur le port A0 du Base Shield.
const int CAPTEUR = A0;

void setup() {
  Serial.begin(9600);            // moniteur série à 9600 bauds
}

void loop() {
  int humidite = analogRead(CAPTEUR);   // nombre entre 0 et 1023
  Serial.println(humidite);
  delay(1000);                   // une mesure par seconde
}
