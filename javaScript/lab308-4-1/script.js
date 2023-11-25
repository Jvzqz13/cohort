
//////////////////// PART 1 & 2 ///////////////////
console.log("//////////////////// PART 1 & 2 ///////////////////");

const csvString1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

let csvTableObject = [];

const table = csvString1.split('\n');
// console.log(table);

table.forEach(row => { 
    const columns = row.split(',');
    console.log(columns);

    csvTableObject.push(columns)
});

console.log(csvTableObject);

//////////////////// PART 3 ///////////////////
console.log("//////////////////// PART 3 ///////////////////");


let newArray = [
["ID", "Name", "Occupation", "Age"], 
["42", "Bruce", "Knight", "41"], 
["57", "Bob", "Fry Cook", "19"], 
["63", "Blaine", "Quiz Master", "58"], 
["98", "Bill", "Doctor's Assistant", "26"]
];
// console.log(newArray);

const keys = newArray[0];
const keysLowerCase = keys.map((headers)=> headers.toLowerCase());

let employeeData = []; 

for(let i = 1; i < newArray.length; i++){
    
    const obj = {};
    
    for(let j = 0; j < keysLowerCase.length; j++){
        
        obj[keysLowerCase[j]] = newArray[i][j]
    }
    employeeData.push(obj);
}
console.log(employeeData);

//////////////////// PART 4 ///////////////////
console.log("//////////////////// PART 4 ///////////////////");

console.log(employeeData.pop());
console.log(employeeData);

console.log(employeeData.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" }));
console.log(employeeData);

console.log(employeeData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }));
console.log(employeeData);

// console.log(employeeData[0].age);

let sum = 0;

for(let i = 0; i < employeeData.length; i++){
    console.log(employeeData[i].age);

    sum += Number(employeeData[i].age)
}
averageAge = sum / employeeData.length;
console.log(` Average age of employees is ${averageAge}`);

//////////////////// PART 5 ///////////////////
console.log("//////////////////// PART 5 ///////////////////");

console.log(employeeData);

const objValue = [];

for(let i = 0; i < employeeData.length; i++){
    
    objValue.push(Object.values(employeeData[i]))
    
}

const objKeys = Object.keys(employeeData[0]).join(',');
let joinedValues = objValue.join(',');

let convertToCsv = objKeys.concat(joinedValues);

console.log(convertToCsv);

