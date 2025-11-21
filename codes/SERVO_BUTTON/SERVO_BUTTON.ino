#include <Servo.h>

Servo myServo;

const int button1 = 2;
const int button2 = 3;

void setup() {
  myServo.attach(9);
  pinMode(button1, INPUT_PULLUP);
  pinMode(button2, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(button1) == LOW) {
    myServo.write(0);
  }
  if (digitalRead(button2) == LOW) {
    myServo.write(180);
  }
}
