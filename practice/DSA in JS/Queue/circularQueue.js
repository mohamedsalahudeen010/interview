

const MyCircularQueue=function(n){
    this.queue=[];
    this.size=n;
}

MyCircularQueue.prototype.enQueue=function(ele){
        if(this.isFull())return false
        else{this.queue.push(ele)}
        return true
}
MyCircularQueue.prototype.deQueue=function(){
    if(this.isEmpty())return false
    else{
        this.queue.shift()
        return true
    }
}
MyCircularQueue.prototype.isEmpty=function(){
    return this.queue.length===0
}
MyCircularQueue.prototype.start=function(){
    if(this.isEmpty())return -1
    return this.queue[0]
}
MyCircularQueue.prototype.end=function(){
    if(this.isEmpty())return -1
    return this.queue[this.queue.length-1]
}
MyCircularQueue.prototype.isFull=function(){
    return this.size===this.queue.length
}


const queue1=new MyCircularQueue(3)

queue1.enQueue(20);
queue1.enQueue(30);
queue1.enQueue(40);
queue1.enQueue(50);
console.log(queue1.enQueue(50))
console.log(queue1.queue)
console.log(queue1.start())
console.log(queue1.end())
queue1.deQueue();
console.log(queue1.queue)




////Practised
const MyCircularQueue1=function(n){
    this.queue=[];
    this.size=n?n:0
}

MyCircularQueue1.prototype.enQueue=function(data){
if(this.isFull()){
    console.error("Queue Is Full")
    
}
else{
    this.queue.push(data)
}
}

MyCircularQueue1.prototype.deQueue=function(){
if(this.isEmpty()){
    return
}
else{
    this.queue.shift()
}
}
MyCircularQueue1.prototype.start=function(){
    if(this.isEmpty()){
        return "Queue is Empty"
    }
    return this.queue[0]
    }

MyCircularQueue1.prototype.end=function(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        return this.queue[this.queue.length-1]
        }
        
MyCircularQueue1.prototype.isFull=function(){
return this.queue.length===this.size
}

MyCircularQueue1.prototype.isEmpty=function(){
    return this.queue.length===0
    }

MyCircularQueue1.prototype.printBasedOnN=function(n){
    if(this.isEmpty()){
        return "Queue is Empty"
    }
    let j=0
    for(let i=0;i<n;i++){
        
        if(j===this.queue.length-1){
            j=0
        }
        console.log("Queueee",this.queue[j])
        j++
    }
        }


let q1=new MyCircularQueue1(5)

q1.enQueue(20)
q1.enQueue(30)
q1.enQueue(40)
q1.enQueue(50)
q1.enQueue(60)
q1.enQueue(70)
q1.deQueue()
console.log(q1)
console.log(q1.start())

console.log(q1.end())

//print circular Queue based on index

q1.printBasedOnN(10)
