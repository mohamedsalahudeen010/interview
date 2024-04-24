// Reverse and add a number until it forms a palindrome or exceeds 5 repetitions.


let num=196;

const funcPalin=(num)=>{
    for(let i=0;i<=5;i++){
        let palin=num.toString().split("");
        if(palin.join("")===palin.toReversed().join("")){
            return num
        }
        else{
            num += +palin.reverse().join("")
        }
    }
    return "No palindrome exist"
    
}


console.log(funcPalin(num))