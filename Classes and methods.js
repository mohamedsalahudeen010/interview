
//CLASSES
//classes are a template to create Object
//three types we can create classes

//1
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
}
//Method
const person1=new Person("sala",28)

//2
const Rectangle=class{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth
    }
    calcArea=()=>{
        return this.length*this.breadth
    }
}

const rectangle1=new Rectangle(20,5)

//3

let Rectangle2=class Rectangle2 {
    constructor(l,b){
        this.l=l;
        this.b=b
    }
    showSides=()=>{
        return `${this.l},${this.b}`
    }
}

const rectangle2=new Rectangle2(10,5)

console.log(person1);
console.log(person1.name);
console.log(rectangle1);
console.log(rectangle2);
console.log(rectangle1.calcArea())
console.log(rectangle2.showSides())


//Extents

//SYNTAX:class ChildClass extends ParentClass { /* … */ }

class Parent{
    constructor(parentData){
        this.parentData=parentData
      
    }
}


class Child extends Parent{
    constructor(childData,parentData){
        super(parentData)
        this.parentData=parentData;
        this.childData=childData
    }
    console=()=>{console.log(`${this.parentData},${this.childData}`)}
}

let parent1=new Parent("PARENT")
let child1=new Child("CHILD");


console.log(parent1)
console.log(child1)
child1.console()