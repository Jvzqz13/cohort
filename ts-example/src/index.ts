console.log('Helo World');
//
async function Hello(){
    return "Hello World";
}

function pow(x:number, y:number){
    return Math.pow(x,y)
}
pow(5,10)

type Mylist =[number?, string?, boolean?]
const arr: Mylist = []

arr.push(1)
arr.push('John')
arr.push(false)

let numbers: number[]=[]
numbers[0] = 1
numbers[1] = 2

let user: [number, string] = [30, 'jorge']

enum Size {Small = 's', Medium = 'm', Large = 'l'}
let mySize: Size = Size.Medium 


type Employee = {
    readonly id: number,
    name: string,
}

let employee: Employee = {
    id: 1,
    name: 'Jorge'
}

console.log(employee);

function howHeavyIsIt (weight: number | string):number{
if(typeof weight ==='number')
return weight*2.2

else 
    return parseInt(weight) *22
}

howHeavyIsIt(1)
howHeavyIsIt('seven')
