//SET => set is an js object that holdes only unique values
//Here ADD
let set=new Set();

set.add(20);

console.log(set)
set.add(20);//=>does not take the value 20 because already exist
set.add(10);

console.log(set)

//Another Example

let set2=new Set()
let random=()=>{
    return Math.round(Math.random()*10)
}

while(set2.size<10){
    set2.add(random())
}
console.log([...set2])

// MAP
//=> Map is an JS object which holds key :value pairs
//=> remebers the order of insertion
//=> object and primitive values can be assign as both key and pair values

//Here SET
const calc={
    add:(a,b)=>{return a+b},
    minus:(a,b)=>{return a-b}

}

const myMap=new Map();

myMap.set(calc.add,"This is Additional Function");
myMap.set(calc.minus,"This is Subtraction Function")

console.log(myMap)  
//OUT => Map(2) {
//     [Function: add] => 'This is Additional Function',
//     [Function: minus] => 'This is Subtraction Function'
//   }

console.log(myMap.get(calc.add))//=>This is Additional Function
console.log(myMap.get(calc.minus))//=>This is Subtraction Function



