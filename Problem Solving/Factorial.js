//find Factorial of given

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let a=10;

const factorial1=(a)=>{

if(a===0) {return 1}

else {return a*factorial1(a-1)}

}

console.log(factorial1(a))

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let n=8;

const factorial2=(n)=>{
  let res=1;
  for(let i=n;i>=2;i--){
    res= res*i
    }
    return res
  }
  
  console.log(factorial(n))

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



let b=8;

const factorial=(b)=>{
let res =1;

for(let i=2;i<=a;i++){
res=res*i
}
return res
}

console.log(factorial(b))