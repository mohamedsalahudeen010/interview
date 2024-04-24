const recu=(a,b)=>{
    if(b==0)return 0;
    if(b%2==0)return recu(a+a,Math.floor(b/2));
    return recu(a+a,Math.floor(b/2))+a;
}
let a=10,b=7;

let z=recu(b,a)

console.log(z)