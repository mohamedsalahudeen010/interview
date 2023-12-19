let arr=[1,2,3,4,5]

let res=0
for(let i=0;i<arr.length;i++){
    let sum=arr[i]
    for(let j=i+2;j<arr.length;j=j+2){
        sum +=arr[j];
        if(sum>res){res=sum}
    }
}

console.log(res)