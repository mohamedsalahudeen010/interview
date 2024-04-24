// // 1.
//  "use strict"
// v="HI! I'am a strict mode script"
// console.log(v)
// //while use strict mode ==> v is not defined
// //in normal mode ==>HI! I'am a strict mode script 
//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

// 2.
// function Pers(n,j,y){
//     this.n=n;
//     this.j=j;
//     this.y=y
// }
// console.log(Pers.prototype)
//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

// 3.
// var x=0;

// function foo(){
//     x++;
//     let X=x;
//     return foo;
// }
// var bar=new foo;
// console.log(bar.x)//=> undefined
// console.log(foo().X)//=> undefined
// //cannot access the data inside function
//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

//4.
// const obj = {
//     value: 42,
//     getValue: function() {
//       console.log(this.value)
//     }
//   };
  
//   const getValueFn = obj.getValue;
//   getValueFn() //==>undefined 
// //   because when we assign 
// //   obj.getValue to getValueFn this will
// //   not bound to the object obj
// obj.getValue()//==>42
// //   because in getValue() this will be bound to object obj
//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

// //5.
// const obj1 = {
//     value: 42,
//     getValue: function() {
//       return () => console.log(this.value);
//     }
//   };
  
//   const arrowFn = obj1.getValue();
//   arrowFn();
  //<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

//6.
//order of execution
// console.log('Start');

// setTimeout(() => console.log('Timeout'), 0);

// Promise.resolve().then(() => console.log('Promise'));

// console.log('End');
//Order=> Start>End>Promise>Timeout
//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

// 7.
// var c=1
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 3000);
//     c++
//     console.log(c)
//   }
//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

// 8.
//DeStructuring
// const person = { name: 'John', age: 30 };
// const { name, age } = person;
// console.log(name, age);
//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

// //9.CLASS
// //Demonstrates class inheritance. It logs 'Buddy barks'
// //1.with constructor in child class
// //we can take data from both parent and child classes
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a sound.`);
//     }
//   }
  
//   class Dog extends Animal {
    
//     constructor(name,breed) {
//         super(name)
//         this.name = name;
//         this.breed=breed
//       }
//     spoke() {
//       console.log(`${this.name} is a ${this.breed} Breed.`);
//     }

//   }
  
//   const dog = new Dog('Buddy','German Sheperd');
//   dog.spoke();//=>Buddy is a German Sheperd Breed.

//   //2.without constructor in child class
//   //only take data from parent class
//   class Animal1 {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a sound.`);
//     }
//   }
  
//   class Dog1 extends Animal1 {
//     spoke() {
//       console.log(`${this.name} is a ${this.breed} Breed.`);
//     }

//   }
  
//   const dog1 = new Dog1('Buddy','German Sheperd');
//   dog1.spoke();//=>Buddy is a undefined Breed.
//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

//10.
// const map = new Map();
// map.set('a', 1).set('b', 2);

// const set = new Set([1, 2, 3, 3, 4]);

// console.log(map)//=>{ 'a' => 1, 'b' => 2 }
// console.log(map.get('a')); //=>1
// console.log(set)//=>{ 1, 2, 3, 4 }
// console.log(set);
//<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>

//11.promise
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function asyncFunction() {
//     console.log('Start');
//     await delay(2000);
//     console.log('End');
//     console.log('Start');
//   }
  
//   asyncFunction();
  























