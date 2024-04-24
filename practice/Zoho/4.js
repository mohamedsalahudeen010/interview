// Write a program to calculate the sum of primes present as digits of a given number N.

let N=20;

let res=[];
for(let i=2;i<N;i++){
    let count=0;
    for(let j=2;j<=i;j++){
        if(i%j===0){
            count++
        }
    }
    if(count<2){
        res.push(i)
    }
}

console.log(res.reduce((acc,cv)=>acc+cv))
// 2, 3, 5, 7, 11, 13, 17 and 19