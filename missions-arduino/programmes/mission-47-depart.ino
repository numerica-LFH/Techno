// Mission 47 · Deux cartes qui se parlent
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

// ===== CARTE 1 : capteur (émetteur) =====
// void setup() { Serial.begin(9600); }
// void loop() {
//   int h = map(analogRead(A0), 0, 876, 0, 100);
//   Serial.print("H:");
//   Serial.println(h);
//   delay(2000);
// }

// ===== CARTE 2 : station (récepteur) =====
#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd(0);

void setup() {
  Serial.begin(___);
  lcd.begin(16, 2);
  lcd.print("En attente");
}

void loop() {
  if (Serial.available() > 0) {
    String trame = Serial.readStringUntil('\n');
    trame.trim();
    if (trame.startsWith(___)) {
      int h = trame.substring(___).toInt();
      lcd.clear();
      lcd.print("Humidite ");
      lcd.print(h);
      lcd.print(" %");
    }
  }
}
