// Mission 49 · Tester son programme
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

const int SEUIL_BAS = 30, SEUIL_HAUT = 50;
int reussis = 0, total = 0;

bool decider(int h, bool avant) {
  if (h < 0 || h > 100) return false;   // valeur impossible
  if (h < SEUIL_BAS) return true;
  if (h > SEUIL_HAUT) return ___;
  return ___;                     // entre les seuils : on garde
}

void verifier(int h, bool avant, bool attendu) {
  total++;
  bool obtenu = decider(h, avant);
  if (obtenu == attendu) { reussis++; Serial.print("OK     "); }
  else Serial.print("ECHEC  ");
  Serial.print("h="); Serial.print(h);
  Serial.print(" avant="); Serial.print(avant);
  Serial.print(" attendu="); Serial.println(attendu);
}

void setup() {
  Serial.begin(9600);
  verifier(20, false, true);
  verifier(20, true, true);
  verifier(40, false, ___);
  verifier(40, true, ___);
  verifier(60, true, false);
  verifier(60, false, false);
  verifier(30, false, false);   // au seuil exact : pas encore sous 30
  verifier(-5, true, false);
  Serial.print(reussis); Serial.print(" / "); Serial.println(total);
}

void loop() {
}
