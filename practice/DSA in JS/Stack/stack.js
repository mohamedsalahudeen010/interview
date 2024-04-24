

class Stack{
    constructor(){
        this.stack=[]
    }

    push=(ele)=>{
        return this.stack.push(ele)
    }
    
    pop=()=>{
        if(this.isEmpty()){
            return "Stack is Empty cannot do POP"
        }
        else{
            return this.stack.pop()
        }
    }
    peek=()=>{
        if(this.isEmpty()){
            return "Stack is Empty cannot do PEEK" 
        }
        else{
            return this.stack[this.size()-1]
        }
    }

    isEmpty=()=>{
        return this.size()===0;
    }

    size=()=>{
        return this.stack.length
    }
}


const sta=new Stack();


sta.push(20)

sta.push(30)
sta.push(40)
console.log(sta.stack)
console.log(sta.size())
console.log(sta.isEmpty())
console.log(sta.peek())