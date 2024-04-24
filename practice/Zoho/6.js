// Write a program to print the following output for the given input. You can assume the string is of odd length

// Eg 1: Input: 12345
//        Output:
// 1       5
//   2   4
//     3
//   2  4
// 1      5
// Eg 2: Input: geeksforgeeks
//          Output:
// g                         s
//   e                     k
//     e                 e
//       k             e
//         s         g
//           f      r
//              o
//           f     r
//         s         g
//       k             e
//     e                 e
//   e                      k
// g                  


let string="geeksforgeeks"
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