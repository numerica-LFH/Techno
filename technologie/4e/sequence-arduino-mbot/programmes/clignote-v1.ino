// clignote-v1 : une LED branchée sur la broche 8 clignote
// Montage : broche 8 -> résistance 220 ohms -> patte longue de la LED ; patte courte -> GND

const int LED = 8;        // numéro de la broche de la LED

void setup() {
  pinMode(LED, OUTPUT);   // la broche 8 est une sortie
}

void loop() {
  digitalWrite(LED, HIGH);  // allumer
  delay(500);               // attendre 500 ms
  digitalWrite(LED, LOW);   // éteindre
  delay(500);
}
