//sum

let sum=(a)=>{
return (b)=>{
   return b? sum(a+b):a
}
}

console.log(sum(1)(2)(4)())
// can reduce the syntax
let sum1=a=>b=>b?sum1(a+b):a

console.log(sum1(1)(2)(5)())

// Multiply
 let mul=(a)=>{
    return (b)=>{
       return b?mul(b*a):a
    }
 }
 console.log(mul(1)(2)(3)())
// can reduce the syntax
let mul1=a=>b=>b?mul1(a*b):a
 console.log(mul1(1)(2)(3)())