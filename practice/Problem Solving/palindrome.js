// For Numbers
const isPalindrome=(number)=>{
return number<=0?false:
number === +number.toString().split("").reverse().join("")
}
  const res = isPalindrome(11);
  console.log(res);

//For Letters

const isPalindrome1=(string)=>{
  let reversed=string.split("").reverse().join("")
  return reversed===string
}

console.log("isPalindrome1",isPalindrome1("madam"))


const isPalindrome2=(string)=>{
  let mid=parseInt(string.length/2)
  for(let i=0;i<mid;i++){
    if(string[i]!==string[string.length-1-i]){
      return false
    }
  }
  return true
}

console.log("isPalindrome2",isPalindrome2("madams"))


const isPalindrome3=(string)=>{
  let start=0;
  let end=string.length-1
  while(start<end){
    if(string[start]!==string[end]){
      return false
    }
    start++
    end--
  }
  return true
}

console.log("isPalindrome3",isPalindrome3("madams"))