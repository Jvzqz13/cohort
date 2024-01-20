//////////// Part 1 /////////////////

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// let x = 0; 
// while(x < 100) {
//     if (x % 3 == 0){
//         console.log(`${x} Fizz`);
//     } 
//     if (x % 5 == 0) {
//         console.log(`${x} Buzz`);
//     }
//     if (x % 3 == 0 && x % 5 == 0){
//         console.log(`${x} Fizz Buzz`);
//     } else {
//         console.log(x);
//     }
//     x++
// }

//////////// Part 2 /////////////////

// for ( let n = 4; n <= 40; n++){
//     let isPrime = true; //flag 
    
//     for(let i = 2; i < n; i++){
//         // i = 2,3,4 
//         if (n % i == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(`${n} is a prime number`);
//     }

// }

//////////// Part 3 /////////////////

// Loop through the string
// store each cell in a variable
// if there is a coma move to next cell
// if is a \n move to next row


const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232\n"

let currentCell = 1;
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

for(let i = 0; i < csvString.length; i++) {
    // console.log(csvString[i]);
    
    if (csvString[i] === ","){

        currentCell++;

    } else if (csvString[i] === "\n") {
        console.log(cell1, cell2, cell3, cell4);
        currentCell = 1;
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
    } else {
        
        if(currentCell === 1){
            cell1+= csvString[i]; 
        } else if ( currentCell === 2) {
            cell2+= csvString[i];
        } else if (currentCell === 3) {
            cell3+= csvString[i];
        } else if (currentCell === 4){
            cell4+= csvString[i];
        }

    }
}