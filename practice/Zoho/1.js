// Q9. Write a program to get the output:
// Eg. 1: input: a1b10

// Output abbbbbbbbb

// Eg. 2 input b3c6d15

// output bbbccccccddddddddddddddd

// The number varies from 1 to 99.

let input="a1b10"
let input2="b3c6d15"

const mainFun=(input)=>{

    let nums=input.match(/[0-9]+/g);
    console.log(nums)
    let cons=input.match(/[a-zA-Z]+/g);
    let n=cons.length-1

    let k=0;
    let res=[];
    const fun=(num,con)=>{
        for(let i=0;i<num;i++){
            res.push(con);
        }
        if(cons.indexOf(con)!==n){
            fun(nums[k+1],cons[k+1])
        }
        return res.join("")
    }
return fun(nums[k],cons[k])
}



console.log(mainFun(input))
// console.log(mainFun(input2))

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<OR>>>>>>>>>>>>>>>>>>>>>>>>

const func2=(input)=>{
    let nums=input.match(/[0-9]+/g);
    let cons=input.match(/[a-zA-Z]+/g);
    let res=[];
    for(let i=0;i<nums.length;i++){
        let num=+nums[i];
        let con=cons[i];
        for(let j=0;j<num;j++){
            res.push(con)
        }
    }
    return res.join("")
}

console.log(func2(input))
console.log(func2(input2))