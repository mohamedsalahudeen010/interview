// let arr=[1,2,-20,4,5,6,10,2,-10]
//MAX Sum of SUBARRAY
let arr=[25,-25,5,4,-1,7,8]

let sumOfSubArray=()=>{

    let sum=0;
    let max=Math.max(...arr)
    for(let i=0;i<arr.length;i++){
        if(sum+arr[i]<0){
            sum=0
        }
        else{
            sum +=arr[i]
            max=Math.max(max,sum)
        }
    }
    return max
}

console.log(sumOfSubArray())