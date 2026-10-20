// Mission 37 · La jauge lumineuse
// Fichier de départ : je remplace chaque ___ puis je copie tout dans l'onglet Code (Texte) de Tinkercad.

#include <Adafruit_NeoPixel.h>

const int BROCHE = 6, NB = ___;
Adafruit_NeoPixel pixels(NB, BROCHE, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
}

void loop() {
  int humidite = map(analogRead(A0), 0, 876, 0, 100);
  int n = humidite * NB / ___;
  uint32_t couleur = humidite < 30 ? pixels.Color(255, 0, 0) : pixels.Color(0, 200, 0);
  for (int i = 0; i < NB; i++) {
    if (i < ___) pixels.setPixelColor(i, couleur);
    else pixels.setPixelColor(i, 0);
  }
  pixels.___();
  delay(200);
}
