let arr1=[1,3,4,6,7,9];

let arr2=[1,2,3,4,7,10]

//First Method
let res=[];
for(let i=0;i<arr1.length;i++){
    if(arr1.includes(arr2[i])){
        res.push(arr2[i])
    }
}

console.log(res)

//Extra
// let result=[...new Set(res)]

// console.log(result)

//Second Method
// EASY WAY
let commonElements=arr1.filter((ele)=>arr2.includes(ele));

console.log(commonElements)

