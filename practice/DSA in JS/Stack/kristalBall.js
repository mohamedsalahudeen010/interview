// 4) A program to design a data structure nStacks , 
    //n number of Stacks having an overall fixed capacity of k elements . 
    //It should have operations like push(int element,int stackNumber) and pop(int stackNumber) , 
    //which should do respective operation on the given stack number . 
    //Underlying data structure to store elements should be only one array .
class nStacks{
    constructor(n,k){
        this.stack=new Array(n)
        this.n=n
        this.capacity=k
    }

    push(ele,stackNumber){
        if(stackNumber<0 || stackNumber>=this.n){
            console.log(`${stackNumber} is invalid Stack Number`)
            return
        }
        if(this.stack[stackNumber]==undefined)
            {this.stack[stackNumber]=[]}
        if(this.stack[stackNumber].length>=this.capacity){
            console.log(`Stack ${stackNumber} is full`)
            return
        }
        else{
            
            this.stack[stackNumber].push(ele)
        }
    }

    pop(stackNumber){
        if(stackNumber>this.n||this.stack[stackNumber]===undefined
            ||this.stack[stackNumber].length<=0){
            console.log(`Cannot do POP Stack ${stackNumber} is empty`)
            return
        }
        else{
            return this.stack[stackNumber].pop()
        }
    }
}


let stack1=new nStacks(5,3)

console.log(stack1)


// for(let i=0;i<20;i++){
// stack1.push(parseInt(Math.random()*100),parseInt(Math.random()*5))
// }

stack1.push(20,0)
stack1.push(20,0)
stack1.push(20,0)

stack1.push(20,1)
stack1.push(20,1)
stack1.push(20,1)

stack1.push(20,2)
stack1.push(20,2)
stack1.push(20,2)


stack1.push(20,3)
stack1.push(20,3)
stack1.push(20,3)

stack1.push(20,4)
stack1.push(20,4)
stack1.push(20,4)

stack1.push(20,0)
stack1.push(20,1)
stack1.push(20,2)
stack1.push(20,3)
stack1.push(20,4)
stack1.push(20,5)
stack1.push(20,6)
console.log(stack1)

stack1.pop(4)
stack1.pop(4)
stack1.pop(4)
stack1.pop(4)
console.log(stack1)