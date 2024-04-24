let obj={
    name:"sala"
}
console.log(obj.__proto__) //=>object{}
//==>{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(obj.__proto__.__proto__) //=>null
//=>null

let fun=function(){
    console.log("sala")
}
console.log(fun.__proto__)//=>function()
//ƒ () { [native code] }
console.log(fun.__proto__.__proto__)//=>object{}
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(fun.__proto__.__proto__.__proto__)//=>null
//null

let arr=[]

console.log(arr.__proto__)//=>array[]
//[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(arr.__proto__.__proto__)//=>object{}
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(arr.__proto__.__proto__.__proto__)//=>null
//null


//Another example

let obj1={
    name:"sala",
    age:28,
    gender:"male"
}

let obj2={
    name:"raj"
}

//never do this in real life JUST FOR PRACTICE
obj2.__proto__=obj1//=> By doing this obj2 prototype will be obj1

console.log(obj2.__proto__)//=>{name: 'sala', age: 28, gender: 'male'}
console.log(obj2.name)//=>raj
//from above it search for name in obj2, 
//name is there and print the name
console.log(obj2.age)//=>28
//from above it search for age in obj2, 
//age is not there in obj2 so that it inherits from obj1 and 
//print the age from obj1


//Third example

Function.prototype.myBind=function(){
   console.log("Hi i am Sala") 
}

let fun1=function(){

}
console.log(fun1.myBind)
//out=>ƒ (){
//    console.log("Hi i am Sala") 
// }
//from above i can access myBind function by fun1.myBind
//because it is a prototype with function
//Function.prototype












































