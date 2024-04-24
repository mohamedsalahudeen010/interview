// "Write a JS Code for the below requirement 
                
//  Given an array nums containing n distinct numbers
// in the range [0, n], return the only number in the range 
//that is missing from the array.
//                 Ex: [3,0,1], 2"

let arr=[1,2,3,5,6,7,8,9,10,15];

let max=Math.max(...arr);
let min=Math.min(...arr);
res=[]
for(let i=min;i<=max;i++){
    if(!arr.includes(i)){
        res.push(i)
    }
}

console.log(res)