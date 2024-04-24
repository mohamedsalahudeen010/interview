// Q10. Write a program to print the following output for the given input. You can assume the string is of odd length.
// Input: 12345

// Output: 

// 1 5

//  2    4

//     3

//  2   4

// 1 5

// Ans

let string="12345";
let string2="SALAHUDEE"

const crossFunc=(str)=>{
    for(let left=0;left<str.length;left++){
        let right=str.length-1-left;
        let resString=""
        for(let i=0;i<str.length;i++){
            if(left===i || right===i){
                resString+=str[i]
            }
            else { resString+=" "}
        }
        console.log(resString)
    }
}
crossFunc(string)