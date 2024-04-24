let arr=["hi","i","am","salahudeen"];

console.log(arr.sort())

let arr2=[1,5,2,6,5,15,4,54,59,895,26,549,569,59]

console.log(arr2.sort((a,b)=>a-b))
console.log(arr2.sort((a,b)=>-1))
let obj=[{name:"Sala",age:28},
         {name:"Raj",age:27},
         {name:"Sathish",age:27},
         {name:"Kiya",age:23},]

         //Sorting based On age
         console.log(obj.sort((a,b)=>a.age-b.age))
         //Sorting based On name
         console.log(obj.sort((a,b)=>a.name-b.name))