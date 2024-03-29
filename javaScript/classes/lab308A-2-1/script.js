// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion:{
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small hat", "sunglasses"]
//         }
//     },
//     //Robins Roll
//     roll (mod = 0){ 
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`);
//     },
//     }

// //gets access to sword
// console.log(adventurer.inventory[0]);

// //logs each item in the inventory
// adventurer.inventory.forEach(item => console.log(item));

// //testing Robins Roll 
// adventurer.roll();
// adventurer.roll();
// adventurer.roll();
    
// //Character Class 
class Character {
    static MAX_HEALTH = 100;
    
    constructor (name) {
      this.name = name;
      this.health = 80;
      this.inventory = [];
    }
    roll (mod = 0){ 
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    }
  }

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];


// console.log(robin.companion)
// robin.companion.roll();
// console.log(robin.companion.companion);
// robin.companion.companion.roll();

class Adventurer extends Character {
    companion = {
        name: "",
        type: "",
    }

    static ROLES = ['Fighter', 'Healer', 'Wizard', 'Fairy', 'Archer','Theif']
    
    constructor (name, role, health,) {
        super(name, health,);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");

        function isValidRole(role){
            return Adventurer.ROLES.includes(role);
        }

        // console.log(isValidRole('Fighter'));

        if(!isValidRole(role)){
            throw new Error("Invalid Role")
        }
    }
    
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

  }

  class Companion extends Character {
    constructor(name, type, inventory){
        super(name, inventory)
        this.type = type;
    }
  }

  const jack = new Adventurer ("Jack", "Theif")
  console.log(jack);


  
  const bunny = new Companion ("Bunny","Rabbit")
  console.log(bunny);

  const lenny = new Adventurer("lenny", "Healer")
  const benny = new Companion("benny", "rat")
  lenny.companion = benny;
  
  console.log(lenny);
