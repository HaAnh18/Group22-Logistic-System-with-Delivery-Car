#define BLYNK_TEMPLATE_ID "TMPLvcve47Hq"
#define BLYNK_DEVICE_NAME "testESP8266"

#include <BlynkSimpleEsp8266.h>
#include <ESP8266WiFi.h>

const char* auth = "vkLKvSWg8YkxhBYpm5-IA72Uq2gqiEZ0";
const char* ssid="Nana";
const char* password = "12345678";

bool forward;
bool backward;
bool left;
bool right;
bool autoC;

int speedCar = 150;         
int sensorPin1 = D3;
int sensorPin2 = 3;
int sensorPin3 = D1;
int ENA = D2;
int ENB = D5;
int IN_1 = 1;
int IN_2 = D6;
int IN_3 = D7;
int IN_4 = D8;
int ValSensor1=0;
int ValSensor2=0;
int ValSensor3=0;


void setup() {
  Blynk.begin(auth, ssid, password);
  pinMode(sensorPin2, FUNCTION_3);
  pinMode(IN_1, FUNCTION_3);
  pinMode(INPUT,sensorPin1);
  pinMode(INPUT,sensorPin2);
  pinMode(INPUT,sensorPin3);
  pinMode(IN_1,OUTPUT);
  pinMode(IN_2,OUTPUT);
  pinMode(IN_3,OUTPUT);
  pinMode(IN_4,OUTPUT);
  pinMode(ENA,OUTPUT);
  pinMode(ENB,OUTPUT);
  digitalWrite(IN_1,LOW);
  digitalWrite(IN_2,LOW);
  digitalWrite(IN_3,LOW);
  digitalWrite(IN_4,LOW);
}

BLYNK_WRITE(V0){
  forward = param.asInt();
}

BLYNK_WRITE(V6){
  left = param.asInt();
}

BLYNK_WRITE(V2){
  right = param.asInt();
}

BLYNK_WRITE(V3){
  backward = param.asInt();
}

BLYNK_WRITE(V4){
  autoC = param.asInt();
}

BLYNK_WRITE(V5){
  speedCar = param.asInt();
}
 
void loop() {     
  Blynk.run();
  if(autoC == 1){
    SensorDrive();
  }else if(autoC == 0){
    manualDrive();
  }
}

void Forward(){
  analogWrite(ENA, speedCar);
  analogWrite(ENB, speedCar);
  digitalWrite(IN_1, HIGH);
  digitalWrite(IN_2, LOW);
  digitalWrite(IN_3, HIGH);
  digitalWrite(IN_4, LOW);
}

void Back(){
  analogWrite(ENA, speedCar);
  analogWrite(ENB, speedCar);
  digitalWrite(IN_1, LOW);
  digitalWrite(IN_2, HIGH);
  digitalWrite(IN_3, LOW);
  digitalWrite(IN_4, HIGH);
}
void Left(){
  analogWrite(ENA, speedCar);
  analogWrite(ENB, speedCar);
  digitalWrite(IN_1, HIGH);
  digitalWrite(IN_2, LOW);
  digitalWrite(IN_3, LOW);
  digitalWrite(IN_4, LOW);
}

void Right(){
  analogWrite(ENA, speedCar);
  analogWrite(ENB, speedCar);
  digitalWrite(IN_1, LOW);
  digitalWrite(IN_2, LOW);
  digitalWrite(IN_3, HIGH);
  digitalWrite(IN_4, LOW);
}

void RightBack(){
  analogWrite(ENA, speedCar);
  analogWrite(ENB, speedCar);
  digitalWrite(IN_1, LOW);
  digitalWrite(IN_2, LOW);
  digitalWrite(IN_3, LOW);
  digitalWrite(IN_4, HIGH);
}

void Stop(){
  analogWrite(ENA, speedCar);
  analogWrite(ENB, speedCar);
  digitalWrite(IN_1, HIGH);
  digitalWrite(IN_2, HIGH);
  digitalWrite(IN_3, HIGH);
  digitalWrite(IN_4, HIGH);
}

void manualDrive(){
  if(forward == 1 && backward == 0 && left == 0 && right == 0){
    Forward();
  }
  if(backward == 1 && left == 0 && right == 0 && forward == 0){
    Back();
  }
  if(left == 1 && forward == 0 && backward == 0 && right == 0 ){
    Left();
  }
  if(right == 1 && forward == 0 && backward == 0 && left == 0){
    Right();
  }
  if(forward == 0 && backward == 0 && left == 0 && right == 0){
    Stop();
  }
}

void SensorDrive(){
  ValSensor1 = digitalRead(sensorPin1);
  ValSensor2 = digitalRead(sensorPin2);
  ValSensor3 = digitalRead(sensorPin3);
  
  if(ValSensor1==LOW && ValSensor2==HIGH && ValSensor3==LOW){ Forward(); } 
  else if(ValSensor1==HIGH && ValSensor2==HIGH && ValSensor3==LOW){ 
    Left();
  } 
  else if(ValSensor1==HIGH && ValSensor2==LOW && ValSensor3==LOW){ Left();     }
  else if(ValSensor1==LOW && ValSensor2==LOW && ValSensor3==HIGH){ Right();      }
  else if(ValSensor1==LOW && ValSensor2==HIGH && ValSensor3==HIGH){ 
    Right();
  }
  else  Stop(); 

}




