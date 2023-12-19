let arr1=[1,3,4,6,7,9];

let arr2=[1,2,3,4,7,10]


let res=[];
for(let i=0;i<arr1.length;i++){


    for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            res.push(arr1[i])
            break;
        }
    }
}


let result=[...new Set(res)]

console.log(result)

// EASY WAY
let commonElements=arr1.filter((ele)=>arr2.includes(ele));

console.log(commonElements)