class Node{
    constructor(data){
        this.data=data,
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }


    addNodeAtStart(data){
        const newNode=new Node(data)
        newNode.next=this.head;
        this.head=newNode
    }

    addNodeAtEnd(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode
    }

    size(){
        let current=this.head
        let count=0;
        while(current){
            count++
            current=current.next
        }
        return count
    }
    
    addNodeBasedOnIndex(index,data){
        if(index<0||index>this.size()){
            console.error("Invalid Index")
            return
        }
        const newNode=new Node(data)
        if(index===0){
            newNode.next = this.head;
          this.head = newNode;
            return
        }
        let current=this.head
       for(let i=0;i<index-1;i++){
        current=current.next
       }
       newNode.next=current.next
       current.next=newNode
     
    }

   
    deleteAtTop(){
        let current=this.head
        this.head=current.next
    }
    deleteAtEnd(){
        if(!this.head){
            return
        }
        let current=this.head
        while(current.next.next){
            current=current.next
        }
        current.next=null
    }
    deleteBasedOnIndex(index){
        if(index<0||index>this.size()){
            console.error("Invalid Index")
            return
        }
      
        if(index===0){
            this.head=this.head.next
            return
        }
        let current=this.head
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        if(current.next){
            current.next=current.next.next
        }
    }

    palin(){
        let string1=[]
        let string2=[]
        let current=this.head
        while(current){ 
            string1.push(current.data)
            string2.unshift(current.data)
            current=current.next
        }
        console.log(
            string1.join("")
        )
        console.log(
            string2.join("")
        )
        return string1.join("")==string2.join("")

    }

    reverse(){
        let reverse=[];
        let current=this.head
        while(current){
            reverse.unshift(current.data)
            current=current.next
        }
        return reverse.join("")
    }

    //Delete Particular Node but you can not access head Node
//you will be given the node to be deleted
//eg 1->2->3->4->5 you have to delete particular node 2 or 3 or 4 or 5 and
// cannot access head node
//if 1->2->3->4->5 delete 2 from this
deleteNode(node){
  
    //above node will be given in pblms but here we taken by accessing
    //  head consider this as given one
    //here we have to delete 2 from this so that we take given as 
    // this.head.next 
    //if we want to delete 3 then we take given as this.head.next.next 
    
    console.log("Node:",node)
    node.data=node.next.data;
    node.next=node.next.next

}

//To Empty Linked List
deleteLinkedList(){
    this.head=null
}

//To remove Nth element from End
//for Example if n =2 in 1->2->3->4->5->6 we have to delete 4
//note : we can not traverse linked list from right to left
deleteNthElementFromEnd(n){

    let prevVal=this.head;

    if(n<0||n>this.size()){
        console.error("Invalid Entry")
        return
    }
    if(n===0){
        return
    }
    if(n===this.size()){
        this.head=this.head.next
        return
    }
    for(let i=0;i<this.size()-n-1;i++){
        prevVal=prevVal.next
    }
    prevVal.next=prevVal.next.next
}

print(){
    let current=this.head
    while(current){
        console.log(current.data)
        current=current.next
    }
}
addTwoLinkedList(l1,l2){
   let res=new Node(0);

   res.next=this.head;
   this.head=res;
   let current=this.head;

   l1=l1.head;
   l2=l2.head;
    let carry=0;
   while(l1||l2||carry>0){
    let val1=l1?l1.data:0;
    let val2=l2?l2.data:0;
    let sum=val1+val2+carry
    carry=Math.floor(sum/10);
    sum=sum%10
    current.next=new Node(sum);
    current=current.next
    if(l1)l1=l1.next
    if(l2)l2=l2.next
   }
   
}

}


let linkedList=new LinkedList()

linkedList.addNodeAtEnd(4);

linkedList.addNodeAtStart(3);

linkedList.addNodeAtStart(2);
linkedList.addNodeAtStart(1);
linkedList.addNodeAtEnd(5);

console.log(linkedList)

linkedList.print()

console.log(linkedList.size())

// linkedList.deleteBasedOnIndex(0)
console.log(linkedList)

linkedList.print()

console.log("Palin : ", linkedList.palin())

console.log("Reverse : ", linkedList.reverse())



//Delete Particular Node but you can not access head Node
//you will be given the node to be deleted
//eg 1->2->3->4->5 you have to delete particular node 2 or 3 or 4 or 5 and cannot access head node
//if 1->2->3->4->5 delete 2 from this
// deleteNode(node){
//     node.data=node.next.data;
//     // 1->3->3->4->5 
//     node.next=node.next.next
//     // 1->3->4->5 

// }

// linkedList.deleteNode(linkedList.head.next.next)

console.log("After DeleNode:::",linkedList)

linkedList.deleteNthElementFromEnd(0)
linkedList.print()

//ADD TWO LINKED LIST
const linkedList1=new LinkedList();
const linkedList2=new LinkedList();

linkedList1.addNodeAtEnd(2)
linkedList1.addNodeAtEnd(4)
linkedList1.addNodeAtEnd(3)
// linkedList1=>5->4->6
linkedList2.addNodeAtEnd(5)
linkedList2.addNodeAtEnd(6)
linkedList2.addNodeAtEnd(4)
// linkedList1=>6->7->8
linkedList1.print()
linkedList2.print()

const result=new LinkedList()
result.addTwoLinkedList(linkedList1,linkedList2)
result.deleteAtTop()
result.print()



//LEATCODE SUM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node=new ListNode(0);
    let current=node
    let carry=0
    while(l1||l2||carry>0){
    let val1=l1?l1.val:0
 
    let val2=l2?l2.val:0
   
    let sum=val1+val2+carry
 
    carry=Math.floor(sum/10)
    sum=sum%10

    current.next=new ListNode(sum)
    current=current.next
    if(l1)l1=l1.next
    if(l2)l2=l2.next
    }

    return node.next
};