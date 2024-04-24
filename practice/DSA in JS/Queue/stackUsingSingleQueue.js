// Ques 2 : Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).

let MyStack=function(){
    this.q=[]
}


MyStack.prototype.push=function(x){
   this.q.push(x);
   for(let i=0;i<this.q.length-1;i++){
    let temp=this.q[0];
    this.q.shift()
    this.q.push(temp)
   }
}

MyStack.prototype.pop=function(){
    if(this.empty()){
        return "cannot do pop"
    }
    else{
        this.q.shift()
    }
}

MyStack.prototype.top=function(){
    if(this.empty()){
        return "cannot do top"
    }
    else{
        this.q[0]
    }
}

MyStack.prototype.size=function(){
    return this.q.length
}

MyStack.prototype.empty=function(){
    return this.q.length===0
}


const stack1=new MyStack()


stack1.push(20)
stack1.push(30)
stack1.push(40)
stack1.push(50)

console.log(stack1)
stack1.pop()
console.log(stack1)