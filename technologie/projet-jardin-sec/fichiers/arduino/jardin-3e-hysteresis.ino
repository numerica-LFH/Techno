// Jardin sec 3e : arrosage à deux seuils et journal de données
const int CAPTEUR = A0;             // capteur d'humidité, port A0
const int RELAIS = 7;               // relais de la pompe, port D7
const int SEUIL_BAS = 320;          // 30 % : on commence à arroser
const int SEUIL_HAUT = 400;         // 50 % : on arrête d'arroser
const int MINI = 50;                // en dessous : capteur débranché
const int MAXI = 950;               // au-dessus : valeur impossible dans la terre
const long DOSE = 3000;             // une dose : pompe en marche 3 s
const long PAUSE = 10000;           // essai : 10 s (dans le jardin : 1800000, soit 30 min)

bool arrosage = false;              // mémorise si l'on est en période d'arrosage

void setup() {
  pinMode(RELAIS, OUTPUT);
  digitalWrite(RELAIS, LOW);
  Serial.begin(9600);
  Serial.println("temps;valeur;arrosage");   // en-tête du journal
}

void loop() {
  int valeur = analogRead(CAPTEUR);
  if (valeur < MINI || valeur > MAXI) {
    arrosage = false;               // valeur aberrante : on n'arrose pas
  } else if (valeur < SEUIL_BAS) {
    arrosage = true;                // terre sèche : on démarre
  } else if (valeur > SEUIL_HAUT) {
    arrosage = false;               // terre assez humide : on arrête
  }                                 // entre les deux seuils : rien ne change
  if (arrosage) {
    digitalWrite(RELAIS, HIGH);     // une dose d'eau
    delay(DOSE);
    digitalWrite(RELAIS, LOW);
  }
  Serial.print(millis() / 1000);    // temps en secondes depuis la mise en marche
  Serial.print(";");
  Serial.print(valeur);
  Serial.print(";");
  Serial.println(arrosage ? 1 : 0);
  delay(PAUSE);
}
