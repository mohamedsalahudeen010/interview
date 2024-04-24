let arr=[1,2,3,4,0,0,5,3,0,5,6,0,1,4,5,0]

const moveZeroToRight=(arr)=>{

    for(let i=0,j=0;i<arr.length;i++){
        if(arr[i]!==0){
            let temp=arr[i];
            arr[i]=0;
            arr[j]=temp
            j++
        }
    }
    return arr
}
console.log(moveZeroToRight(arr))