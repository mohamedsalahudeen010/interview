let given=101;


const findPrime=(n,i)=>{

    if(n<=1) return false;
    if(n==2) return true;
    if(n%i===0) return false;
    if(i*i>n)return true;
 return findPrime(n, i + 1);
}

console.log("Prime1",findPrime(given,2))

const prime=(n)=>{
    debugger
if(n<2)return false;
if(n==2)return true;
for(let i=3;i*i<=n;i+=2){
    if(n%i===0){
        return false
    }
}
return true
}

console.log("Prime2",prime(given))