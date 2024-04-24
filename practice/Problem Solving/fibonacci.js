// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1


// Normal Solution
const fibNormal=(n)=>{

    let arr=[0,1];

    for(let i=1;i<=n;i++){
        arr.push(arr[i]+arr[i-1]);
    }
    return arr[n]
}

console.log("fibNormal",fibNormal(10))
//Optimized solution

const fibOptimized=(n)=>{

    let prev=0;
    let current=1
    let next
    for(let i=1;i<n;i++){
        next=prev+current;
        prev=current;
        current=next

    }
    return next
}

console.log("fibOptimized",fibOptimized(10))


//recursive

const fibByRecursive=(n)=>{

    if(n<=1)return n

    return fibByRecursive(n-1)+fibByRecursive(n-2)
}

console.log("fibByRecursive",fibByRecursive(10))