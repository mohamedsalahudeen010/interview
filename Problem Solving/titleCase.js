//make first letter as UpperCase
let titlecase =(string)=>{
    let words=string.toLowerCase().split(" ");
    for (let i=0;i<words.length;i++){
        words[i]=words[i][0].toUpperCase() +words[i].slice(1);
        
    }
    words=words.join(" ")
  return words ;    
    
};
console.log(titlecase("i went to shop to buy some snacks")); 





const titlecase2=(string)=>{
  let str=string.toLowerCase().split(" ")
  console.log("STR:::",str)
  for(let i=0;i<str.length;i++){
    str[i]=str[i][0].toUpperCase()+str[i].slice(1)
  }
  return str.join(" ")
}

console.log(titlecase2("i went to shop to buy some snacks")); 
