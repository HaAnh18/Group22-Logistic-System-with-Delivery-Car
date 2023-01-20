
#include <Servo.h>
Servo myservo; 
Servo myservo1; 
Servo myservo2; 

String inByte;


int pos = 120;
int repos = 0;


void setup() {
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
  pinMode(6, OUTPUT);
  myservo.attach(9);
  myservo1.attach(8);
  myservo2.attach(10);
  myservo.write(repos);
  myservo1.write(repos);
  myservo2.write(repos);

  Serial.begin(9600);
}

void loop()
{        digitalWrite(12, LOW);
  digitalWrite(13, HIGH);
  digitalWrite(6,HIGH);

  if(Serial.available())  
    { 
    inByte = Serial.readString();    
    Serial.print("Servo in position: " + inByte.substring(0,3));  

    if(inByte.substring(0,3) == "ON1"){
      myservo.write(pos);     
      delay(1000);
      myservo.write(repos);     


    }
    if(inByte.substring(0,3) == "ON2"){
      myservo1.write(pos);   
      delay(1000);
      myservo1.write(repos);     


    }
    if(inByte.substring(0,3) == "ON3"){
      myservo2.write(pos);    
      delay(1000);
      myservo2.write(repos);     

    }
    }
}
