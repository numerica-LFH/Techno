// Mission 45 · Un protocole de commandes
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

const int RELAIS = 7;
int seuil = 30;

void setup() {
  pinMode(RELAIS, OUTPUT);
  Serial.begin(9600);
  Serial.setTimeout(50);
}

void loop() {
  if (Serial.available() > 0) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();
    if (cmd == "ETAT") {
      Serial.print("OK humidite=");
      Serial.print(map(analogRead(A0), 0, 876, 0, 100));
      Serial.print(" seuil=");
      Serial.println(seuil);
    } else if (cmd.startsWith("SEUIL ")) {
      int v = cmd.substring(___).toInt();
      if (v >= 10 && v <= ___) { seuil = v; Serial.println("OK"); }
      else Serial.println("ERREUR valeur");
    } else if (cmd.startsWith("ARROSE ")) {
      int s = cmd.substring(7).toInt();
      if (s >= 1 && s <= 10) {
        digitalWrite(RELAIS, HIGH); delay(s * 1000UL); digitalWrite(RELAIS, LOW);
        Serial.println("OK");
      } else Serial.println("ERREUR valeur");
    } else {
      Serial.println(___);
    }
  }
}
