#include <Servo.h>
Servo myServo;
int pot = A1;
int val;

void setup() {
  myServo.attach(8);
  Serial.begin(9600);

}

void loop() {
  val = analogRead(pot);
  Serial.println(val);
  val = map(val, 0, 1023, 0, 180);
  myServo.write (val);

}
