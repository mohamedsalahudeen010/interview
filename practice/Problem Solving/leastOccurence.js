let n=9
let arr=[1,6,4,56,56,56,6,2];
let occ={}
let dummy=[]
let minOcc=[]
let maxOcc=[]
// <<<<<<<<<<<<<<<FUNC 1>>>>>>>>>>>>>>>>
const leastOcc=(occ)=>{
//    for(let i in occ){
//        dummy.push(occ[i])
//    }
//    let min=Math.min(...dummy);
//Replace above code BY

    let min=Math.min(...Object.values(occ))
   
   for(let i in occ){
       if(occ[i]===min){minOcc.push(i)}
   }

  console.log(minOcc)
}

const highOcc=(occ)=>{
    let max=Math.max(...Object.values(occ))

    for(let i in occ){
        if(max===occ[i]){
            maxOcc.push(i)
        }
    }

    console.log(maxOcc)
}
// <<<<<<<<<<<<<<<FUNC 1>>>>>>>>>>>>>>>>
const occurence=(arr,n)=>{
   
   arr.map((ele,i)=>{
       if(occ[ele]){
           occ[ele] +=1
       }
       else occ[ele]=1
   })  
leastOcc(occ)
highOcc(occ)
}
occurence(arr,n)