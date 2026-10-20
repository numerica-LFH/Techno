// bouton-v1 : la LED s'allume tant qu'on appuie sur le bouton
// Montage : bouton entre 5V et broche 2 ; résistance de rappel 10 kilohms entre broche 2 et GND
//           LED sur la broche 8 avec sa résistance de 220 ohms

const int BOUTON = 2;
const int LED = 8;

void setup() {
  pinMode(BOUTON, INPUT);
  pinMode(LED, OUTPUT);
  Serial.begin(9600);           // ouvrir le moniteur série à 9600 bauds
}

void loop() {
  int etat = digitalRead(BOUTON);   // 1 si appuyé, 0 sinon
  Serial.println(etat);
  if (etat == HIGH) {
    digitalWrite(LED, HIGH);
  } else {
    digitalWrite(LED, LOW);
  }
  delay(100);
}
