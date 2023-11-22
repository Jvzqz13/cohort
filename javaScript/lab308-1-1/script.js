///////////////////////// PART 1 ///////////////////////// 

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 4) + (n2 % 1) + (n3 % 4) + (n4 % 1) >= 2;
console.log(isTwoOdd);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isUnder25);


// Divisble by 5
const isDiv5 = (n1 / 5) + (n2 / 5) + (n3 / 5) + (n4 / 5) >= 0;
console.log(isDiv5); 
let divide = n1 % 5;

// check is n1 is larger than n4
const isLargerThanLast = n1 > n4;
console.log(isLargerThanLast);

//weird math equation
const mathProblem = ((n2 - n1) * n3) % n4;
console.log(mathProblem);



// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  ///////////////////////// PART 2 /////////////////////////
  const totalDistance = 1500;
  const fuelBudget = 175; 
  const averageCost = 3;

  const mph55 = 30;
  const mph60 = 28;
  const mph75 = 23;
  
// How many gallons of fuel will you need for the entire trip?
  let Totalgal55 = totalDistance / mph55;
  console.log(`At 55MPH, ${Totalgal55} gallons will be needed to travel 1,500 miles.`);
  let Totalgal60 = totalDistance / mph60;
  console.log(`At 60MPH, ${Totalgal60} gallons will be needed to travel 1,500 miles.`);
  let Totalgal75 = totalDistance / mph75;
  console.log(`At 75MPH, ${Totalgal75} gallons will be needed to travel 1,500 miles.`);

// Will your budget be enough to cover the fuel expense?
const budgetAt55 = Totalgal55 * averageCost;
console.log(`Total cost of fuel going at 55MPH will be ${budgetAt55}`);

const budgetAt60 = Totalgal60 * averageCost;
console.log(`Total cost of fuel going at 60MPH will be ${budgetAt60}`);

const budgetAt75 = Totalgal75 * averageCost;
console.log(`Total cost of fuel going at 75MPH will be ${budgetAt75}`);

const fuelExpense1 = budgetAt55 < fuelBudget;
console.log(fuelExpense1);

const fuelExpense2 = budgetAt60 < fuelBudget;
console.log(fuelExpense2);

const fuelExpense3 = budgetAt75 < fuelBudget;
console.log(fuelExpense3);

// How long will the trip take, in hours?
const mph1 = 55;
const mph2 = 60;
const mph3 = 75; 

const hoursAt55 = totalDistance / mph1;
console.log(`At 55MPH, it will take ${hoursAt55} hours to travel 1500miles`);

const hoursAt60 = totalDistance / mph2;
console.log(`At 60MPH, it will take ${hoursAt60} hours to travel 1500miles`);

const hoursAt75 = totalDistance / mph3;
console.log(`At 75MPH, it will take ${hoursAt75} hours to travel 1500miles`);