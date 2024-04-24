let string ="I am a Proud  Indian"
class Stack{
    constructor(){
        this.stack=[]
    }
    push=(ele)=>{
        return this.stack.push(ele)
    }
    pop=()=>{
        if(this.isEmpty()){
            return "Stack is empty, Cannot Perform POP"
        }
        else return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty, Cannot Perform PEEK"
        }
        else{
            return this.stack[this.size()-1]
        }
    }
    isEmpty=()=>{
        return this.size()===0
    }
    size=()=>{
        return this.stack.length
    }
}
const reverseWithStack=(str)=>{
    let split=str.split(" ");
   
    let s=new Stack();

    for(let i of split){
        s.stack.push(i)
    }

    let resultString="";

    while(!s.isEmpty()){
        let current=s.stack.pop()
        if(current){
            resultString+=" "+current;
        }
       
        
    }
    return resultString.trim()
}

console.log(reverseWithStack(string))