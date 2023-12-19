let arr=[1,2,3,4,5]


let gcd=(a,b)=>a?gcd(b%a,a):b

let lcm=(a,b)=>a*b/gcd(a,b)

let res=arr.reduce(lcm)

console.log(res)
