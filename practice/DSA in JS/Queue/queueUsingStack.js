// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).


let MyQueue=function(){
    this.s1=[],
    this.s2=[]
}

MyQueue.prototype.enQueue=function(x){
    while(this.s1.length!==0){
        this.s2.push(this.s1.pop())
    }
    this.s1.push(x)
    while(this.s2.length!==0){
        this.s1.push(this.s2.pop())
    }

}

MyQueue.prototype.deQueue=function(){
    if(this.empty()){
        return "Cannot"
    }
    else{
        return this.s1.pop()
    }
}

MyQueue.prototype.front=function(){
    return this.s1[this.s1.length-1]
}

MyQueue.prototype.empty=function(){
    return this.s1.length===0
}

MyQueue.prototype.size=function(){
    return this.s1.length
}



let q1=new MyQueue()

q1.enQueue(20)
q1.enQueue(30)
q1.enQueue(40)

console.log(q1)
q1.deQueue()
console.log(q1)

console.log(q1.size())
console.log(q1.empty())
console.log(q1.size())
