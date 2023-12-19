let string="HR05-AA-2669";
let sum=0;

//to Find number inside a string
 let matches = string.match(/[0-9]+/g)
 console.log("Number matches :",matches)
 //<<<<<<<<<<<<<OR>>>>>>>>>>>
 let matches2 = string.match(/\d+/g)
 console.log("Number matches2 :",matches2)

let str=matches.join("").split("").map(Number)

let res=str.reduce((acc,cv)=>acc+cv)

console.log(res);

//to Find String inside a string
var letr =  string.match(/[a-zA-Z]+/g);


console.log("String MAtch :",letr)