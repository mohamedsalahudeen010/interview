//find first greater element in right side if not return -1

let arr=[13,12,14,15,13];

let max=(arr)=>{
   
    let stack=[];
   
   let n=arr.length-1
   stack.push(arr[n])
   arr[n]=-1
   console.log(arr)
    for(let i=n-1;i>=0;i--){
        if(arr[i]<stack[stack.length-1]){
            let temp=arr[i]
            arr[i]=stack[stack.length-1]
            stack.push(temp)
        }else{
            let temp=-1
            while(stack.length!==0){
               let pop=stack[stack.length-1];
                if(pop>arr[i]){
                    temp=pop
                    break;}
                stack.pop();
            }
            stack.push(arr[i]);
            arr[i]=temp
        }
    }
    
    console.log("STACK ::",stack)
    return arr
}

console.log(max(arr))