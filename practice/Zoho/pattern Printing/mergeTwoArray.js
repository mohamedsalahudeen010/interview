//Merge Two Array Without merge and sort


let arr1=[2,6,8,9,10,12,15,18]
let arr2=[1,2,3,4,5,6,7,8,9]

const merge=(arr1,arr2)=>{
   let res=[];

   while(arr1.length&&arr2.length){
    let next=arr1[0]<arr2[0]?arr1.shift():arr2.shift()
    res.push(next)
   }
   if(arr1.length){
    res=[...res,...arr1];
   }
   else if(arr2.length){
    res=[...res,...arr2]
   }
return res

}

console.log(merge(arr1,arr2))