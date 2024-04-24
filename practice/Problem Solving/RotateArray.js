//Rotate Array In IIFE
(function arrayRot(arr,k){

    if(k>0){
      for(let i=0;i<k;i++){
        arr.unshift(arr.pop())
      }
      console.log(arr)
    }
    })([1,2,8,6,9,5,7,4,5],5)
    