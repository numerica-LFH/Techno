// Mission 35 · Des mesures qui tremblent
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

int lireBruite() {
  int v = analogRead(A0) + random(-30, 31);   // bruit imité
  if (random(0, 20) == 0) v = 0;              // une valeur aberrante de temps en temps
  return v;
}

int moyenne() {
  long somme = 0;
  for (int i = 0; i < ___; i++) {
    somme = somme + lireBruite();
  }
  return somme / ___;
}

int mediane3(int a, int b, int c) {
  if ((a <= b && b <= c) || (c <= b && b <= a)) return b;
  if ((b <= a && a <= c) || (c <= a && a <= b)) return ___;
  return ___;
}

void setup() {
  Serial.begin(9600);
}

void loop() {
  int brut = lireBruite();
  int med = mediane3(lireBruite(), lireBruite(), lireBruite());
  Serial.print(brut);
  Serial.print(" ");
  Serial.print(moyenne());
  Serial.print(" ");
  Serial.println(med);
  delay(200);
}
