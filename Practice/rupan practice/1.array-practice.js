let arr=[4,3,5,1,6,11,5];
 
 let target =8;
 
 function tofindValues(arr,target){
     
     let obj=[];
 
 for(let i=0;i<arr.length;i++){
     
     for (let j=i+1;j<arr.length;j++){
         if(arr[i]+arr[j]==target){
             obj.push(arr[i])&&obj.push(arr[j]);
         }
     }
     
 }
 console.log(obj);
 }
 
 
 tofindValues(arr,target);