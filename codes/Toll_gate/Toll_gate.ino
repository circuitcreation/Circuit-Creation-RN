
#define TRIGGER_PIN  9 // Arduino pin connected to the trigger pin of ultrasonic sensor
#define ECHO_PIN     10 // Arduino pin connected to the echo pin of ultrasonic sensor

void setup() {
  Serial.begin(9600);
  pinMode(TRIGGER_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}
void loop(){
  long duration, distance;
  digitalWrite(TRIGGER_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIGGER_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER_PIN, LOW);
  duration = pulseIn(ECHO_PIN, HIGH);
  distance = (duration / 2) / 29.1; // Calculate distance in centimeters

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(1000); // Wait for 1 second before taking the next reading
}

