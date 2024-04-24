//input=[2,3,2,2,5,5,4]

//out=>2(3),3(1),5(2),4(1)


let arr=[2,3,2,2,5,5,4]

const func=(arr)=>{

    let res={};

    for(let i=0;i<arr.length;i++){
        if(res[arr[i]]){res[arr[i]]+=1}
        else{res[arr[i]]=1}
    }
    let string=""
    for(let i in res){
        string+=`${i}(${res[i]}),`
    }
    return string.slice(0,-1)
}

console.log(func(arr))