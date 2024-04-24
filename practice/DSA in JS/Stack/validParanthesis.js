let str="{}()[]{}";


class Stack{
    constructor(){
        this.stack=[]
    }
    push=(ele)=>{
        return this.stack.push(ele)
    }

    pop=()=>{
        if(this.isEmpty()){
            return "Stack is Empty POP"
        }
        else{
            this.stack.pop()
        }
    }
    peek=()=>{
        if(this.isEmpty()){
            return "Stack is Empty PEEK"
        }
        else{
            this.stack[this.stack.length-1]
        }
    }
    isEmpty=()=>{
        return this.stack.length===0
    }
}



const findValidParanthesis=(par)=>{
   let stack=new Stack()
    for(let i=0;i<par.length;i++){
        let val=par[i];

        if(val==="("||val==="["||val==="{"){
            stack.stack.push(val)
        }
        else if(val===")"||val==="]"||val==="}"){
            if(stack.isEmpty()){
                return false
            }
            let pop=stack.stack.pop()

            if((val===")"&&pop!=="(")||(val==="]"&&pop!=="[")||(val==="}"&&pop!=="{")){
                return false
            }
        }
    }
    return stack.isEmpty()
}


console.log(findValidParanthesis(str))