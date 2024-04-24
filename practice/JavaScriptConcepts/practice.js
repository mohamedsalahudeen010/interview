
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var age =17;
// isMinor=age>=18?"yes":"No"
// console.log(isMinor)
// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var num=5;
// num -=2;
// console.log(num)

// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //Switch case
// var condition ="february"
// switch(condition){
//     case "january":
//         console.log("31 Days");
//         break;
//     case "february":
//         console.log("28 DAys");
//         break;
// }

// var age =20
// switch(true){
//     case (age>=18):
//         console.log("Is Major");
//         break;
//     case (age<18):
//         console.log("Is Minor");
//         break;
//         default:
//             console.log("Hello")
// }
// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //To find Data type
// let type=20
// console.log("typeof",typeof type)

// //To find ARRay or Not
// let arr=[2]
// console.log("instance of ARRAY",arr instanceof Array)
// console.log("instance of OBJECT",arr instanceof Object)

// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// //Slice

// //creates New Array, does not make any changes in existing array

// var array=[20,5,6,4,9,549,45]
// //Syntax array.slice(starting Index,ending Index)
// console.log("Slice :",array.slice(2));//out=>[6,4,9,549,45] get the elements form index given
// console.log(array)//out=>[20,5,6,4,9,549,45] get the elements form index given

// //Splice
// //Syntax array.slice(starting Index,No.of Values)
// //make changes in existing array

// console.log("Splice :",array.splice(2))//out=>[6,4,9,549,45] get the elements form index given
// console.log(array)// BUT here out=>[20,5] get the elements form index give

// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //SUM

// let numbers=[1,2,3,4,5];

// //DRY - Dont Repeat Yourself
// const area=(radius)=>{
// return (Math.PI*Math.pow(radius,2))
// }

// const circumFerence=(radius)=>{
//     return (Math.PI*radius*2)
// }
// const calculate=(numbers,logic)=>{
//     let res=[]
//     for(let i=0;i<numbers.length;i++){
//         res.push(logic(numbers[i]));
//     }
//     return res
// }

// console.log("Area",calculate(numbers,area))
// console.log("circumFerence",calculate(numbers,circumFerence))

// //DRY - Dont Repeat Yourself Using MAP

// let areaMap=numbers.map((ele)=>ele*ele*Math.PI)
// console.log(areaMap)

// let circumFerenceMap=numbers.map((ele)=>ele*2*Math.PI)
// console.log(circumFerenceMap)

// //<<<<<<<<<<OR>>>>>>>>>>>>>>>>>>>>>>>>

// let areaMap1=numbers.map((ele)=>area(ele))
// let circumFerenceMap1=numbers.map((ele)=>circumFerence(ele))


// //>>>>>>>>>>>>>>>>>

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 + i);
//   }


////
//IIFE
// (function() {
//     var a = b = 5;
//   })();
  
//   console.log(b);

/////////////////////////////////////////
//Arrow Function

const foo=()=>{
  console.log("foo : ",this.name) //=>Undefined
}
foo.call({name:"sala"})

//out => Undefined 
//because arrow function does not have its own this function
// this inside arrow function represents Global object  OR
// this inside arrow function represents Parent object when it is nested eg. given below

function foo1()
{
  const bar=()=>{
    console.log("foo1 : ",this.name) //=> out:sala
  }
  bar()
}
foo1.call({name:"sala"})




