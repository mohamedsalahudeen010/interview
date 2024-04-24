let n=123456789;


let rem=0;

while(n>0){
    rem=rem*10+n%10;
    n=Math.floor(n/10)
}

console.log(rem)

//using Method

let n1=123456789;

let res=n1.toString().split("").reverse().join("")

console.log(res)