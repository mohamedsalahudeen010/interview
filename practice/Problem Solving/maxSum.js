//Sum of Non Adjacent numbers
// let arr=[1,2,3,4,5]
let arr2=[3, 2, 5, 10, 7];

let k=2
let res=0
let length=arr2.length

const adjSumFun=(arr,k)=>{
    for(let i=0;i<length;i++){
        let sum=arr[i];
        for(let j=i+k;j<length;j=j+k){
            sum+=arr[j];
            if(sum>res){
                res=sum
            }
        }
        if(k<length){
            adjSumFun(arr,k+1)
        }

    }
    return res
}
console.log(adjSumFun(arr2,k))
