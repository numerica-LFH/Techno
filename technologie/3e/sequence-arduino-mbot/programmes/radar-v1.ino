// radar-v1 : mesurer une distance avec le capteur à ultrasons HC-SR04
// Montage : VCC -> 5V, GND -> GND, Trig -> broche 12, Echo -> broche 11

const int TRIG = 12;
const int ECHO = 11;

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(TRIG, LOW);          // envoyer une impulsion de 10 microsecondes
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long duree = pulseIn(ECHO, HIGH, 30000);   // durée de l'écho en microsecondes (0 si rien)
  long distance = duree / 58;                // distance en centimètres
  Serial.print("Duree : ");
  Serial.print(duree);
  Serial.print(" us   Distance : ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(300);
}
