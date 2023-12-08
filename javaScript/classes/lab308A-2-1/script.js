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
    constructor (name) {
      this.name = name;
      this.health = 100;
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
    constructor (name, role, health) {
      super(name, health);

      // Adventurers have specialized roles.
      this.role = role;

      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  const jack = new Adventurer ("Jack", "Theif")
  console.log(jack);