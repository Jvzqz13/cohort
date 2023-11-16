//Part 1//

//area = pi * radius * radius;
const pi = 3.1415;
const radius = 5;
const areaOfContainer = pi *radius *radius; //area of plant container 

let weeks = 2;
const minSpace = .8; 
const numOfPlants = 20;
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






