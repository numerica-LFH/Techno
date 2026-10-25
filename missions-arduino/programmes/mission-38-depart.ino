// Mission 38 · Piloter depuis le moniteur série
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

const int LED = 13, RELAIS = 7;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(RELAIS, OUTPUT);
  Serial.begin(9600);
  Serial.println("Commandes : a, e, p, ?");
}

void loop() {
  if (Serial.available() > 0) {
    char c = Serial.read();
    switch (c) {
      case 'a': digitalWrite(LED, HIGH); Serial.println("LED allumee"); break;
      case 'e': digitalWrite(LED, LOW);  Serial.println("LED eteinte"); break;
      case 'p':
        Serial.println("Arrosage 2 s");
        digitalWrite(RELAIS, HIGH); delay(___); digitalWrite(RELAIS, LOW);
        break;
      case '?':
        Serial.print("Humidite : ");
        Serial.println(map(analogRead(A0), 0, 876, 0, 100));
        break;
      case '\n': case '\r': break;   // fin de ligne envoyée par le moniteur
      default: Serial.println("Commande inconnue");
    }
  }
}
