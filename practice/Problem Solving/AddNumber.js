let a="12345565";

let add=(a)=>{
  a=a.split("");
  
  return a.reduce((a,b)=>(parseInt(a)+parseInt(b)),0)
  }
  
  console.log(add(a))