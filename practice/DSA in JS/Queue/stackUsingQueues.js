// Ques 2 : Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).

let MyStack=function(){
    this.q1=[],
    this.q2=[]
}


MyStack.prototype.push=function(x){
    while(this.q1.length!==0){
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x)
    while(this.q2.length!==0){
        this.q1.push(this.q2.shift())
    }
}

MyStack.prototype.pop=function(){
    if(this.empty()){
        return "cannot do pop"
    }
    else{
        this.q1.shift()
    }
}

MyStack.prototype.top=function(){
    if(this.empty()){
        return "cannot do top"
    }
    else{
        this.q1[0]
    }
}

MyStack.prototype.size=function(){
    return this.q1.length
}

MyStack.prototype.empty=function(){
    return this.q1.length===0
}


const stack1=new MyStack()


stack1.push(20)
stack1.push(30)
stack1.push(40)
stack1.push(50)

console.log(stack1)
stack1.pop()
console.log(stack1)