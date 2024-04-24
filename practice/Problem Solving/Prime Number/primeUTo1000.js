let primeArr=[false,false];

const prime=(n)=>{
    for(let i=2;i<n;i++){
        if(primeArr[i]==undefined){
            primeArr[i]=true;
            for(let j=i*i;j<n;j=i+j){
                primeArr[j]=false
            }
        }
    }
    return primeArr
}


prime(100);
let res=[];
for(let i=2;i<1000;i++){
    if(primeArr[i]){
        res.push(i)
    }
}
console.log(res)