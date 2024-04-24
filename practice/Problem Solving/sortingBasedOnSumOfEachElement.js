let arr=[123,56,789,45,4565,555,22,652,222];


let n=arr.length;

const sumOfEachElement=(ele)=>{
    let sum=0;
    while(ele>0){
        sum+=ele%10;
       
    ele=Math.floor(ele/10)
    }
    return sum
}


const sortArr=(arr,n)=>{
    let res=[];
    for(let i=0;i<n;i++){
        res.push([sumOfEachElement(arr[i]),arr[i]])
    }
    res.sort()
    console.log(res)
    let finalVal=[]
for(let j=0;j<res.length;j++){
    finalVal.push(res[j][1])
}
    return finalVal
}

console.log(sortArr(arr,n))