let person =[
    { "firstname":"mohamed", "middlename":"salahudeen", "lastname":"jamaldeen", "age":26 },
    { "firstname":"mohamed", "middlename":"irfandeen", "lastname":"jamaldeen",  "age":29 },
    { "firstname":"mohamed", "middlename":"kiyathudeen", "lastname":"jamaldeen","age":21 },
    { "firstname":"raj",     "middlename":"mohan",    "lastname":"vijayan",   "age":26 },
    { "firstname":"sathish", "middlename":"kumar",     "lastname":"kannabiran", "age":26 },];
             
  const cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }
 
]


let output2=person.map((x)=>`my name is ${x.firstname} ${x.middlename} `)
console.log(output2);

const output1=cars.map((x)=>`my car colour is  ${x.color}`);
console.log(output1);
console.log(cars[0].color)

let output3=person.filter((x)=>x.age<27).map((x)=>`${x.firstname} ${x.middlename}`)
console.log(output3)

let output4=person.reduce((acc,cv)=>{
    if (acc[cv.age]){
      acc[cv.age]++  
    }
    else acc[cv.age]=1
   return acc
},{})
console.log(output4)


let output5=person.reduce((acc,cv)=>{
    if (acc[cv.age]<27){
      acc[cv.firstname]
    }
    else acc[cv.firstname]=1
   return acc
},{})
console.log(output5)