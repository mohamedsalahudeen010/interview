const findSecondLargestElem=(arr,n)=>{

  let first=arr[0];let second=arr[0];

  for(let i=1;i<arr.length;i++){
      if(first<arr[i]){
        second=first
        first=arr[i]
      }
      else if(arr[i]>second && arr[i]!=first){
        second=arr[i]
      }
  }
  console.log(second)
}


let arr =[4,65,4,6,4,654,45,4,4,51];
let n=arr.length;
findSecondLargestElem(arr,n);



// To Find Second Smallest
function findSecondSmallestElem(arr,n){
  let first = arr[0] , second = arr[0];
  
  for(let i=0;i<n;i++){
    if(arr[i]<first){
      second=first;
      first=arr[i]
      }
      else if(arr[i]<second && arr[i]!=first){
        second=arr[i]}
    }
  
  console.log("INDEX OF SECOND ELE :",arr.indexOf(second))
  console.log(second)
  console.log(first)
}


findSecondSmallestElem(arr,n);