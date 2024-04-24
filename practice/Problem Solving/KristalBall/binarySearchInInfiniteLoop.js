// const binarySearchInfuniteLoop=(arr,target)=>{

//   let start=0;
//   let end=1;

//   while(arr[end]<target){
//     start=end
//     end=end*2
//     }

//     while(start<end){
//       let mid=parseInt((start+end)/2);
//       if(arr[mid]===target)return mid
//       if(arr[mid]<target)start=mid+1;
//       if(arr[mid]>target)end=mid-1
//     }
//     return -1
//   }

//   let ind=0;
//   let arr=[];

//   while(ind<=0){
//     for(let i=0;i<500;i++){
//       arr.push(parseInt(Math.random()*1000))
//     }
//     arr.sort((a, b) => a - b);
//     let ele=parseInt(Math.random()*100)
//     ind=binarySearchInfuniteLoop(arr,ele)
//     console.log(ele,ind)
//   }

  const binarySearchWithInfiniteLoop=(arr,target)=>{
    let start=0;
    let end=1;
  
    while(arr[end]<target){
      start=end;
      end=end*2
    }
  
    while(start<end){
      let middle=parseInt((start+end)/2)
      if(arr[middle]===target){
        return middle
      }else if(arr[middle]<target){
        start=middle+1
      }else end=middle-1
    }
    return -1
  }
  
  let res=0;
  let arr=[];
  
  while(res<=0){
  for(let i=0;i<1000;i++){
    arr.push(parseInt(Math.random()*100))
  }
  console.log(arr.length)
  arr.sort((a,b)=>a-b);
  let target=parseInt(Math.random()*1000)
  console.log(target);
  res=binarySearchWithInfiniteLoop(arr,target);
  console.log(target,res)
  }
  


//Normal Binary Search
  let arr2=[1,2,3,5,6,7,8,9,10];
  let tar=7
  const binarySearch=(arr,target)=>{
    let left=0;
    let right=arr.length-1

    for(let i=0;i<arr.length;i++){
      let middle=Math.floor((left+right)/2)
      if(arr[middle]===target){
        return middle
      }else if(arr[middle]<target){
        left=middle+1
      }else right=middle-1

    }
    // console.log(left,right)
  }


  console.log(binarySearch(arr2,tar))