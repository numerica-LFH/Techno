// Mission 50 · Atelier violet : le jardin connecté
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

// Station (carte 2) : extrait central, la carte capteur reprend la mission 47
#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd(0);
enum Etat { REPOS, DOSE, PAUSE, ALERTE };
Etat etat = REPOS;
const int RELAIS = 7;
int seuilBas = 30, seuilHaut = 50, humidite = -1;
bool arrosage = false;
unsigned long debut = 0, derniereTrame = 0;
const unsigned long DUREE_DOSE = 3000, DUREE_PAUSE = 5000, SILENCE = 10000;

bool decider(int h, bool avant) {
  if (h < 0 || h > 100) return false;
  if (h < seuilBas) return true;
  if (h > seuilHaut) return false;
  return avant;
}

void changer(Etat e) { etat = e; debut = millis(); }

void recevoir() {
  if (Serial.available() > 0) {
    String t = Serial.readStringUntil('\n');
    t.trim();
    if (t.startsWith("H:")) {
      humidite = t.substring(2).toInt();
      derniereTrame = millis();
    } else if (t.startsWith("SEUIL ")) {
      int v = t.substring(6).toInt();
      if (v >= 10 && v < seuilHaut) { seuilBas = v; Serial.println("OK"); } else Serial.println("ERREUR valeur");
    } else if (t == "ETAT") {
      Serial.print("OK h="); Serial.print(humidite); Serial.print(" etat="); Serial.println(etat);
    }
  }
}

void setup() {
  pinMode(RELAIS, OUTPUT);
  lcd.begin(16, 2);
  Serial.begin(9600);
}

void loop() {
  recevoir();
  unsigned long duree = millis() - debut;
  if (millis() - derniereTrame > ___) etat = ALERTE;
  switch (etat) {
    case REPOS:
      arrosage = decider(humidite, arrosage);
      if (arrosage) { digitalWrite(RELAIS, HIGH); changer(___); }
      break;
    case DOSE:
      if (duree > DUREE_DOSE) { digitalWrite(RELAIS, LOW); changer(PAUSE); }
      break;
    case PAUSE:
      if (duree > ___) changer(REPOS);
      break;
    case ALERTE:
      digitalWrite(RELAIS, LOW);
      if (millis() - derniereTrame < SILENCE) changer(REPOS);
      break;
  }
  lcd.setCursor(0, 0);
  lcd.print("H "); lcd.print(humidite); lcd.print(" %   ");
  lcd.setCursor(0, 1);
  const char* noms[] = {"Repos ", "Dose  ", "Pause ", "ALERTE"};
  lcd.print(noms[etat]);
}
