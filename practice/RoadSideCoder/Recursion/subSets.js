// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]


const subSet=(arr)=>{
  let result=[];
  let temp=[];
  const subSetRecursion=(arr,i)=>{
    if(arr.length===i){
      result.push([...temp])
    }
    else{
      temp.push(arr[i])
      subSetRecursion(arr,i+1)
      temp.pop()
      subSetRecursion(arr,i+1)
    }
   
  }
  subSetRecursion(arr,0)
  return result.sort()
}

console.log(subSet([1,2]))