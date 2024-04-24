// Using Recursion reverse the string such as

// Eg 1: Input: one two three
//       Output: three two one
// Eg 2: Input: I love india
//       Output: india love I 


let input=["one","two","three"];
let input2=["I","love","india"];

let n=input.length-1;
let n2=input.length-1;
let res=[];
let res2=[];
const rec=(input,n,res)=>{

    res.push(input[n]);
    if(n>0){
        rec(input,n-1,res)
    }
    return res.join(" ")
}

console.log(rec(input,n,res))
console.log(rec(input2,n2,res2))