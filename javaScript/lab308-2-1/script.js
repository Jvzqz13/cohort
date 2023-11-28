// Part 1 //

//area = pi * radius * radius;
const pi = 3.1415;
const radius = 5;
const areaOfContainer = pi *radius *radius; //max capacity 

let weeks = 2;
const minSpace = .8;
let numOfPlants = 20;
let doubleWeekly = numOfPlants * 2 ** weeks;

let currentCap = minSpace * doubleWeekly; 
let capPercent = currentCap / areaOfContainer;

if (capPercent >= 0.8) {
    console.log("Need to prune");
} else if (capPercent <= 0.8 && capPercent > 0.5){
    console.log("we good");
} else {
    console.log("plan it");
}

// Part 2 // 
numOfPlants = 100;
weeks = 10;
let newTotalAreaNeeded = numOfPlants * weeks;
console.log(newTotalAreaNeeded);

//part 3 

try {
    if (capPercent >= 0.8) {
      throw new Error("The space required for the plants exceeds the available space.");
    } else if (capPercent <= 0.8 && capPercent > 0.5) {
      console.log("We're good");
    } else {
      console.log("Plant more");
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }