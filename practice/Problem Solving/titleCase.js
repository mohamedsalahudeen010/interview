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





const titlecase2=(sentence)=>{
  let string=sentence.split(" ")
  for(let i=0;i<string.length;i++){
    string[i]=string[i][0].toUpperCase()+string[i].slice(1)
  }
  return string.join(" ")
}

console.log(titlecase2("i went to shop to buy some snacks")); 
