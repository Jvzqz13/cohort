//data type: string
console.log("running script....");

//data type: Number
console.log(5);
console.log(3.5);

//data type: Boolnean
console.log(true);
console.log(false);

//data type: Null
console.log(null);

const msg = "hello world"
console.log(typeof msg);

let op1 = !(1 > 2 && 6 == 7); // thisLogic is true
console.log(op1);

let op2 = !(1 > 2 || 6 == 7); // thisLogic is true
console.log(op2);

console.log(!false);



/////// IF .. ELSE //////

// let num = 20;

// if(num > 0) {
//     console.log("positive");
// } else {
//     console.log("its negative");
// }

// let age = 0;

// if (age >= 18) {
//     console.log("Access Granted");
// } else {
//     console.log("GET OUT 18+ ONLY");
// }


// let aNum = 200;
// if( aNum > 0 && aNum > 100) {
//     console.log("its positive");
// } else {
//     console.log("Error");
// }


let grade = 55;

if(grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70){
    console.log("C");
} else if (grade >= 55) {
    console.log("D")
} else { 
    console.log("FAIL");
}