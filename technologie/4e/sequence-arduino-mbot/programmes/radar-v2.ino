// radar-v2 : radar de recul, le buzzer bipe de plus en plus vite quand l'obstacle approche
// Montage : HC-SR04 comme radar-v1 (Trig 12, Echo 11) ; buzzer entre la broche 9 et GND

const int TRIG = 12;
const int ECHO = 11;
const int BUZZER = 9;

long mesurerDistance() {            // fonction : renvoie la distance en cm (0 si rien détecté)
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long duree = pulseIn(ECHO, HIGH, 30000);
  return duree / 58;
}

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(BUZZER, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  long d = mesurerDistance();
  Serial.println(d);
  if (d == 0 || d > 100) {          // rien à moins d'un mètre : silence
    noTone(BUZZER);
    delay(100);
  } else if (d < 10) {              // très près : son continu
    tone(BUZZER, 1000);
    delay(100);
  } else {                          // entre 10 et 100 cm : bip, puis pause proportionnelle à la distance
    tone(BUZZER, 1000);
    delay(50);
    noTone(BUZZER);
    delay(d * 10);
  }
}
