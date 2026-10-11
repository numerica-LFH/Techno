// Mission 41 · Découper en fonctions
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd(0);
const int RELAIS = 7, SEUIL = 30;
const unsigned long DOSE = 3000;

int lireHumidite() {
  return map(analogRead(A0), 0, 876, 0, ___);
}

void afficher(int h) {
  lcd.clear();
  lcd.print("Humidite ");
  lcd.print(___);
  lcd.print(" %");
}

void arroser(unsigned long dose) {
  digitalWrite(RELAIS, HIGH);
  delay(___);
  digitalWrite(RELAIS, LOW);
}

void setup() {
  pinMode(RELAIS, OUTPUT);
  lcd.begin(16, 2);
}

void loop() {
  int h = ___;
  afficher(h);
  if (h < SEUIL) arroser(DOSE);
  delay(5000);
}
