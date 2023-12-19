let arr=[8,9,3,6,4,5,1,7,2,10]

let min=arr[0]
for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
        if(arr[j-1]>arr[j]){
            let temp=arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=temp
        }
    }
}

console.log(arr)