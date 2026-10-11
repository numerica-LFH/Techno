// Mission 48 · Statistiques sur 24 mesures
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd(0);
const int N = 24;
int mesures[N];
int indice = 0, remplies = 0;

void setup() {
  lcd.begin(16, 2);
}

void loop() {
  mesures[indice] = map(analogRead(A0), 0, 876, 0, 100);
  indice = (indice + 1) % ___;
  if (remplies < N) remplies++;
  int mini = 100, maxi = 0;
  long somme = 0;
  for (int i = 0; i < ___; i++) {
    if (mesures[i] < mini) mini = mesures[i];
    if (mesures[i] > maxi) maxi = ___;
    somme += mesures[i];
  }
  lcd.clear();
  lcd.print("min "); lcd.print(mini);
  lcd.print(" max "); lcd.print(maxi);
  lcd.setCursor(0, 1);
  lcd.print("moy "); lcd.print(somme / remplies);
  delay(1000);
}
