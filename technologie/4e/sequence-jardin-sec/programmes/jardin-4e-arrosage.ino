// Jardin sec 4e : arroser quand la terre est trop sèche
const int CAPTEUR = A0;             // capteur d'humidité, port A0
const int RELAIS = 7;               // relais de la pompe, port D7
const int SEUIL = 320;              // sous 320 (30 %), la terre est trop sèche
const long DUREE_ARROSAGE = 3000;   // pompe en marche 3 s
const long ATTENTE = 10000;         // essai : 10 s (dans le jardin : 1800000, soit 30 min)

void setup() {
  pinMode(RELAIS, OUTPUT);
  digitalWrite(RELAIS, LOW);        // pompe arrêtée au démarrage
  Serial.begin(9600);
}

void loop() {
  int humidite = analogRead(CAPTEUR);
  Serial.print("Humidite : ");
  Serial.println(humidite);
  if (humidite < SEUIL) {
    digitalWrite(RELAIS, HIGH);     // la pompe démarre
    delay(DUREE_ARROSAGE);
    digitalWrite(RELAIS, LOW);      // la pompe s'arrête
    delay(ATTENTE);                 // l'eau descend jusqu'au capteur
  }
  delay(1000);
}
