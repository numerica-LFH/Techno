// Mission 46 · Un menu de réglage
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd(0);
const int BOUTON = 2;
int enregistre = 30, propose = 30, affiche = -1;
bool avant = false;

void setup() {
  pinMode(BOUTON, INPUT);
  lcd.begin(16, 2);
}

void loop() {
  propose = map(analogRead(A2), 0, 1023, ___, ___);
  bool maintenant = digitalRead(BOUTON) == HIGH;
  if (maintenant && ___) {       // front montant
    enregistre = propose;
    lcd.clear();
    lcd.print("Enregistre");
    delay(800);
    affiche = -1;
  }
  avant = maintenant;
  if (propose != affiche) {          // réécrire seulement si la valeur change
    lcd.clear();
    lcd.print("Seuil : ");
    lcd.print(propose);
    lcd.print(" %");
    lcd.setCursor(0, 1);
    lcd.print("Actuel : ");
    lcd.print(___);
    affiche = propose;
  }
}
