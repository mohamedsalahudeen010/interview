// Find if a String2 is substring of String1. If it is, return the index of the first occurrence. else return -1.

// Eg 1:Input:
//         String 1: test123string
//          String 2: 123
//         Output: 4
// Eg 2: Input:
//         String 1: testing12
//         String 2: 1234 
//         Output: -1

let string1="test123string";
let string2="123";

const findSubString=(s1,s2)=>{
    let str=new RegExp([s2] ,"i","g")
    console.log(s1.search(str))
}

findSubString(string1,string2)

// let myString = "Hello World"
// let myVariable = "H"
// let myReg = new RegExp(myVariable + ".*")
// let myMatch = myString.match(myReg)
// console.log(myMatch)