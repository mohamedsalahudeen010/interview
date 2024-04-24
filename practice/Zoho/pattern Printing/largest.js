let arr=[1,2,3,3,8];

//=>return index of largest Number when other elements are 
//=> ele*2<=largestNumber


const large=(arr)=>{
let largeNumber=arr.reduce((a,b)=>Math.max(a,b));
let count=false;
for(let i=0;i<arr.length;i++){
    if(arr[i]!==largeNumber && arr[i]*2>largeNumber){
        return -1
    }  
}
return arr.indexOf(largeNumber)
}

console.log(large(arr))