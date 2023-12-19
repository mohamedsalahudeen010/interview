let n=9
let arr=[1,6,4,56,56,56,6,4,2];
let occ={}
let dummy=[]
res=[]
// <<<<<<<<<<<<<<<FUNC 1>>>>>>>>>>>>>>>>
const leastOcc=(occ)=>{
   for(let i in occ){
       dummy.push(occ[i])
   }
   let min=Math.min(...dummy);
   
   for(let i in occ){
       if(occ[i]===min){res.push(i)}
   }

  console.log(res)
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
}
occurence(arr,n)