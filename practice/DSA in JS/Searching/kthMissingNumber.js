let arr=[1,2,4,6,7,8,11];
let k=3
const findMiss=(arr,k)=>{
let count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]<= k+count){
        count++
    }
}
return k+count
}

console.log(findMiss(arr,k))