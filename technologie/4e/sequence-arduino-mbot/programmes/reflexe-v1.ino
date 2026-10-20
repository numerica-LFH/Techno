// reflexe-v1 : jeu « attrape la lumière »
// La LED s'allume au hasard ; il faut appuyer sur le bouton en moins d'une demi-seconde.
// Montage : LED sur la broche 8 (220 ohms), bouton sur la broche 2 (rappel 10 kilohms vers GND)
// Cette version contient une triche : à trouver pendant la séance.

const int LED = 8;
const int BOUTON = 2;
int score = 0;
int vies = 3;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BOUTON, INPUT);
  Serial.begin(9600);
  randomSeed(analogRead(A0));    // broche A0 en l'air : un départ différent à chaque fois
  Serial.println("Attrape la lumiere !");
}

void loop() {
  if (vies < 1) {                // partie terminée : on ne fait plus rien
    return;
  }
  delay(random(1000, 3000));     // attente au hasard entre 1 et 3 secondes
  digitalWrite(LED, HIGH);
  unsigned long debut = millis();
  bool attrape = false;
  while (millis() - debut < 500) {        // pendant 500 ms
    if (digitalRead(BOUTON) == HIGH) {
      attrape = true;
    }
  }
  digitalWrite(LED, LOW);
  if (attrape) {
    score = score + 1;
  } else {
    vies = vies - 1;
  }
  Serial.print("Score : ");
  Serial.print(score);
  Serial.print("   Vies : ");
  Serial.println(vies);
  if (vies < 1) {
    Serial.println("Perdu !");
  }
}
