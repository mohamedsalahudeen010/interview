// Rajesh was going through alternative array sorting. 
// He wishes to print the array alternatively.
//  Hence hired you. Your task is to help rajesh in printing the array alternatively.

// An alternative array is an array in which 
// first element is maximum of the whole array second element is minimum of the whole array. 
// Third element is the second largest. 
// Fourth element is the second smallest And so on. print the array in the desired manner.


let arr=[1,7,11,16,19];


const alternateSort=(arr)=>{
    let sortedArr=arr.sort((a,b)=>a-b)

    let res=[]
   for(let i=0;i<arr.length;i++){
        if(res.length<sortedArr.length){
            if(i===arr.length-1-i){
                res.push(sortedArr[arr.length-1-i])
            }
            else{res.push(sortedArr[arr.length-1-i],sortedArr[i])}
        }
       
   }
   return res
}

console.log(alternateSort(arr))