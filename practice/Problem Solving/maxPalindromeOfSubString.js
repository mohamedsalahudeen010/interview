
let string="XORO"
let getDromeIndex=(left,right,string)=>{
    while(left>=0 && right<string.length){
        if(string[left]!==string[right])break;
        left--
        right++
    }
    return [left+1,right]
}


let longestPalindrome=(string)=>{

    let max=[0,1]

    for(let i=0;i<string.length;i++){
        let odd=getDromeIndex(i-1,i+1,string);
        let even=getDromeIndex(i-1,i,string);
        let curMax=odd[1]-odd[0]>even[1]-even[0]?odd:even;
        max=max[1]-max[0]>curMax[1]-curMax[0]?max:curMax;
    }

    return string.slice(max[0],max[1])
}

console.log(longestPalindrome(string))
