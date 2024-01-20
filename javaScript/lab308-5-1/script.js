//////////////////// Part 1 ////////////////////

// Take an array of numbers and return the sum.
let arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;

arrayOfNum.forEach( num => {
    sum +=num
})
console.log(sum);

// Take an array of numbers and return the average.

let averageOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let avr = 0;

arrayOfNum.forEach( num => {
    avr +=num / arrayOfNum.length;
})
console.log(avr);

// Take an array of strings and return the longest string.
let stringArray = ["hello","world","whatsup","dude","hi"];

function longest(arr){

    let longestString = arr[0]; 

   for(let i = 0; i < arr.length; i++){

    if(arr[i].length > longestString.length){
        longestString = arr[i];
        return longestString;
    }
   }
}
let longestStr = longest(stringArray);
console.log(longestStr);

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
