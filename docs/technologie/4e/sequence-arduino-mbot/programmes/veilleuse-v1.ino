// veilleuse-v1 : la LED s'allume quand il fait sombre
// Montage : photorésistance entre 5V et A0 ; résistance 10 kilohms entre A0 et GND
//           (plus il y a de lumière, plus la valeur lue est grande)
//           LED sur la broche 8 avec sa résistance de 220 ohms

const int CAPTEUR = A0;
const int LED = 8;
const int SEUIL = 300;       // à régler après les mesures au moniteur série

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lumiere = analogRead(CAPTEUR);    // valeur entre 0 et 1023
  Serial.println(lumiere);
  if (lumiere < SEUIL) {
    digitalWrite(LED, HIGH);            // sombre : on allume
  } else {
    digitalWrite(LED, LOW);
  }
  delay(200);
}
