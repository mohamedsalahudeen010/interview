// Write a program to sort the elements in odd positions in descending order and elements in even positions in ascending order


let arr=[0, 1, 2, 3, 4, 5, 6, 7];

const sortFunc=(arr)=>{
    let oddPos=[]
    let evenPos=[]
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(i%2===0){
            evenPos.push(arr[i])
        }
        else{
            oddPos.push(arr[i])
        }
    }

    oddPos=oddPos.sort((a,b)=>b-a);
    evenPos=evenPos.sort((a,b)=>a-b);
    let i=0;
    while(res.length!==arr.length){
       
        res.push(evenPos[i],oddPos[i])
        i++
    }

    return res
}


console.log(sortFunc(arr))