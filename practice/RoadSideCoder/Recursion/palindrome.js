// Ques 3 : Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

function isPalindrome(str) {
    // str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
    
  if(str.length==0)return false
  if(str.length=1)return true

  if(str[0]!==str[str.length-1])return false

  return isPalindrome(str.slice(1,-1))

  }
  
  console.log(isPalindrome("1"));



  