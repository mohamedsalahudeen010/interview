// Factorial
function fact(num){
    if(num==0){return 1}
    else{return num*fact(num-1)}
  }
  
  let n=7;
  
  console.log(fact(n));

  //Sum of n numbers

  function sum(num){
    if(num==1){return 1}
    else{return num+sum(num-1)}
  }
  let number=9;

  console.log(sum(number))