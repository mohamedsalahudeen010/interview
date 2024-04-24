let arr=[0,1,2,3,4,5,6,7,8,9,10]

let target=0;


const binarySearch=(arr,tar)=>{
    let start=0;
    let end=arr.length-1;

    while(start<=end){
        let middle=Math.floor((start+end)/2)
        if(arr[middle]===tar){
            return middle
        }
        else if(arr[middle]<tar){
            start=middle+1
        }
        else{
            end=middle-1
        }
    }
    return -1
}

console.log(binarySearch(arr,target))