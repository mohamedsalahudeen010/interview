let arr=[8,9,3,6,4,5,1,7,2,10]
let j=0
const sorting=(arr,j)=>{
        for(let i=1;i<arr.length;i++){
            if(arr[i-1]>arr[i]){
                temp=arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=temp
            }
        }
        if(j<arr.length){
            sorting(arr,j+1)
        }
        return arr
}

console.log(sorting(arr,j))

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<OR>>>>>>>>>>>>>>>>>>>>

const sorting2=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j];
                arr[j]=temp
            }
        }
    }
    return arr
}

console.log("SORTING 2 :::",sorting2(arr))