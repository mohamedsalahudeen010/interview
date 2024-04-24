let arr=["sala","hello","higuvi","ivug"]
let target="vihigu"
let res=arr.some((ele)=>{
   return(ele+ele).match(target)
})

console.log(res)