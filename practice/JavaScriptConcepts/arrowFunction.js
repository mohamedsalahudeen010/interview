//1.Syntax
//2.Hoisting
//3.done by function expression only
//4.Deos not have arguement binding
    // Normal 
function arguementNormal(){
    console.log("Normal Function Arguement :",[...arguments])//=>Returns [ 1, 2, 3, 4, 5 ]
}
arguementNormal(1,2,3,4,5)
//Arrow
const arguementArrow=()=>{
    console.log("Arrow Function Arguement :",[...arguments])//=>does not return values
}
arguementArrow(1,2,3,4,5)

//to get the out have to use rest Operatorn in Arrow Function
const arguementArrowRest=(...rest)=>{
    console.log("Arrow Function Arguement With Rest Operator :",[...rest])//=>return [ 1, 2, 3, 4, 5 ]
}
arguementArrowRest(1,2,3,4,5)

//5.Does not have own this binding 

// Normal 
function name1(){
    console.log(this)//=>Returns an object
}
name1()
//Arrow
const name2=()=>{
    console.log(this)//=>Returns Global Object {}
}
name2()


