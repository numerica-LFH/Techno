// Mission 40 · Atelier orange : l'arrosage intelligent
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd(0);
const int RELAIS = 7;
const int SEUIL_BAS = ___, SEUIL_HAUT = ___;   // en %
const int MINI = 5, MAXI = 95;                       // hors de cette plage : valeur impossible
const unsigned long DOSE = 3000, PAUSE = 5000;       // jardin réel : PAUSE de 30 min
bool arrosage = false;

void setup() {
  pinMode(RELAIS, OUTPUT);
  lcd.begin(16, 2);
  Serial.begin(9600);
  Serial.println("temps;humidite;arrosage");
}

void loop() {
  int h = map(analogRead(A0), 0, 876, 0, 100);
  if (h < MINI || h > MAXI) {
    arrosage = ___;               // filtre
  } else if (h < SEUIL_BAS) {
    arrosage = true;
  } else if (h > SEUIL_HAUT) {
    arrosage = false;
  }
  lcd.clear();
  lcd.print("Humidite ");
  lcd.print(h);
  lcd.print(" %");
  lcd.setCursor(0, 1);
  lcd.print(arrosage ? "Arrosage" : "Repos");
  if (___) {
    digitalWrite(RELAIS, HIGH);
    delay(___);
    digitalWrite(RELAIS, LOW);
  }
  Serial.print(millis() / 1000); Serial.print(";");
  Serial.print(h); Serial.print(";");
  Serial.println(arrosage ? 1 : 0);
  delay(PAUSE);
}
