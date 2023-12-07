const div = document.getElementById('contacts-list');

console.log(this); //points to window object 


const person = {
    userName: 'max',
    age: 22,
    role: "Devloper",
    sayHi: function sayHi(){
        console.log(`Hello my name is ${this.userName} and Im a ${this.role}, and I am ${this.age} years old`);
    }
}

person.sayHi();

// sayHi();  

// function sayHi(){
//     console.log(`Hello my name is ${this.userName} and Im a ${this.role}, and I am ${this.age} years old`);
// }

// person.sayHi = sayHi;
// person.sayHi();

div.addEventListener('click', function(){
    console.dir(this);
});


// class Car {

// maker = "";
// year = 0;
// model = "";

// }



class Car {
    constructor (maker, year, model){
        this.maker = maker;
        this.year = year;
        this.model = model;
        this.speed = 100;
    }
    increedSpeed = function (){
        this.speed += 200;
    }
}

const honda = new Car('honda', 2007, "civic")
console.log(honda);
const toyota = new Car('toyota', 2007, "civic");
toyota.increedSpeed();
console.log(toyota.speed);
console.log(toyota);


class Animal {
    constructor (fur, type, prey){
        this.fur = fur;
        this.type = type; 
        this.prey = prey;
    }

    speak(sound){
        console.log(sound);
    }

    shaved(){
        this.fur = "shaved"
    }
}

const cat = new Animal(true, 'feline', 'humans')
console.log(cat);
cat.speak("meow");
cat.shaved();
console.log(cat);

const dog = new Animal(true, 'K9', 'everything')
console.log(dog);