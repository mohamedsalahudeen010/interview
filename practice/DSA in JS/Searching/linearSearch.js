
let arr=[1,2,3,1,5,0,4,8,6,4,56,0,0]

let target=10;


const localLinearSearch=(arr,target)=>{

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target)return i
    }
    return -1
}
console.log(localLinearSearch(arr,target))

const globalLinearSearch=(arr,target)=>{
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target)res.push(i)
    }
    if(res.length===0){
        return -1
    }
    return res
}
console.log(globalLinearSearch(arr,target))