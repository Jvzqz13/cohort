
// console.log(this); //points to window object 


// const person = {
    //     userName: 'max',
    //     age: 22,
    //     role: "Devloper",
    //     sayHi: function sayHi(){
        //         console.log(`Hello my name is ${this.userName} and Im a ${this.role}, and I am ${this.age} years old`);
        //     }
        // }
        
        // person.sayHi();
        
        // sayHi();  
        
        // function sayHi(){
            //     console.log(`Hello my name is ${this.userName} and Im a ${this.role}, and I am ${this.age} years old`);
            // }
            
            // person.sayHi = sayHi;
            // person.sayHi();
// // class Car {

// // maker = "";
// // year = 0;
// // model = "";

// // }



// class Car {
//     constructor (maker, year, model){
//         this.maker = maker;
//         this.year = year;
//         this.model = model;
//         this.speed = 100;
//     }
//     increedSpeed = function (){
//         this.speed += 200;
//     }
// }

// const honda = new Car('honda', 2007, "civic")
// console.log(honda);
// const toyota = new Car('toyota', 2007, "civic");
// toyota.increedSpeed();
// console.log(toyota.speed);
// console.log(toyota);


// class Animal {
//     constructor (fur, type, prey){
//         this.fur = fur;
//         this.type = type; 
//         this.prey = prey;
//     }

//     speak(sound){
//         console.log(sound);
//     }

//     shaved(){
//         this.fur = "shaved"
//     }
// }

// const cat = new Animal(true, 'feline', 'humans')
// console.log(cat);
// cat.speak("meow");
// cat.shaved();
// console.log(cat);

// const dog = new Animal(true, 'K9', 'everything')
// console.log(dog);

const contactsDiv = document.getElementById('contacts-list');
const form = document.querySelector('form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');

const contacts = [];

class Contact {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.createdAt = new Date(Date.now())
    }
    toString(){
        console.log(`Contact name ${this.name} and email is ${this.email}`);
    }
}







form.addEventListener('submit', function (e){
    e.preventDefault();
    
    const newContact = new Contact(nameInput.value, emailInput.value)
    console.log(newContact);
    newContact.toString();

    contacts.push(newContact);

    console.log(contacts);

    displayContacts();

    nameInput.value = '';
    emailInput. value = '';
})

function displayContacts(){
    contacts.forEach(contact => {
        const div = document.createElement('div');
        const h2 = document.createElement('h4');
        const h3 = document.createElement('h6');

        
        //adding text
        h2.textContent = contact.name;
        h3.textContent = contact.email;

        //appending elements
        div.appendChild(h2);
        div.appendChild(h3);

        contactsDiv.appendChild(div);
    })
}