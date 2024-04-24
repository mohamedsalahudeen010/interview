const print=(arr)=>{
  arr.map((ele)=>console.log(ele.join(" ")))
}

const innerPattern=(n)=>{

  let size=n*2-1
  let arr=new Array(size).fill(0).map(()=>new Array(size).fill(0))
  
 let start=0;
 let end=size-1
  while(n!==0){
    for(let i=start;i<=end;i++){
      for(let j=start;j<=end;j++){
        if(i===start || i===end || j===start || j===end){
          arr[i][j]=n
        }
      }
    }
    start+=1;
    end-=1
    n-=1
  }
  print(arr)
}

innerPattern(4)
