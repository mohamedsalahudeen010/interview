//iterate from reverse
//inp="salah"
//out=>ah
//     al

let string="salah";

const charVowels=(s)=>{

    for(let i=s.length;i>=0;i--){
        let pattern=/[aeiou]/
        console.log(pattern.exec(s[i]))
       
    }
    // console.log(s.match(/[aeiou]/))
}

console.log(charVowels(string))