// === parent or super class
class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = 'Animal') {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    return super.toString("Cat");
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("Cow");
  }
}

///
// class Cat extends Animal{
//  constructor(fur, isAwake, isMoving){
//     super(2, 4, isAwake, isMoving)
//     this.fur = fur;
//  }}


class Human extends Animal {
    constructor (name, toes, thumbs, hair, isAwake, isMoving){
        super(2,2, isAwake, isMoving)
        this.name = name;
        this.toes = toes;
        this.thumbs = thumbs;
        this.hair = hair;
    }
    speak(){
        super.speak("whatsup")
    }
 }

 const max = new Human("Max",8, 1, "long", "false", "true")
 console.log(max);
 max.speak();
 

 const timmy = new Human("Timmy", 6,2,"short","false", "true")
 console.log(timmy);