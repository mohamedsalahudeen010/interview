// "Write a JS Code for the below requirement  

// Given an integer array nums, 
//    return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//       The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//       You must write an algorithm that runs in O(n) time and without using the division operation.
//       Input: nums = [1,2,3,4]
//       Output: [24,12,8,6]"

let nums=[1,2,3,4];
let output=[]
// for(let i=0;i<nums.length;i++){
//     let newArr=nums.filter((ele,index)=>index!=i);
//     output.push(newArr.reduce((acc,cv)=>acc*cv))
// }
let n=0
const mul=(arr,n)=>{
    let rae=arr.filter((ele,i)=>n!=i)
    console.log(rae)
    output.push(rae.reduce((acc,cv)=>acc*cv))
    
    if(n<arr.length-1){
        mul(arr,n+1)
    }
    return output
}

console.log(mul(nums,n))
// console.log(nums.filter((ele,i)=>nums.indexOf(ele)!==i))
console.log(output)



var str = "spanner, span, spaniel, span";
str = str.replace(/[ ]/g,"").split(",");

console.log(str)