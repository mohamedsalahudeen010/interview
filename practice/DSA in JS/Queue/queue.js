//enQueue
//deQueue
//peek or front
//isEmpty
//size
class Queue{
    constructor(){
        this.queue=[]
    }
//enQueue
enQueue(ele){
 return this.queue.push(ele)
}
//deQueue
deQueue(){
    if(this.isEmpty()){
        return "No elements and Cannot perform deQueue"
    }else{
        return this.queue.shift()
    }
}
//peek or front
front(){
    if(this.isEmpty()){
        return "cannot do peek, queue is Empty"
    }
    else{
        return this.queue[0]
    }
}

isEmpty(){
    return this.size()===0
}
size(){
    return this.queue.length
}
}


const myQueue=new Queue
myQueue.enQueue(20)
myQueue.enQueue(30)
myQueue.enQueue(40)
console.log(myQueue.queue)
console.log(myQueue.front())
console.log(myQueue.isEmpty())
console.log(myQueue.size())
console.log(myQueue.deQueue())
console.log(myQueue.queue)