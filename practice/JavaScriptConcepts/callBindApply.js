//polyfill=>Polyfills are implementaion of features that is given by browser

//Call => FUNCTION BORROWING
//call method of function instances calls this function with a this value and
//arguements provided individually
let printDetails=function(state,country,method){
    console.log(
`Hi This is ${this.firstName} ${this.secondName} And I am from ${this.town},${state},${country} 
 and this is form ${method} Method`)
}
let person={

    firstName:"Mohamed",
    secondName:"Salahudeen",
    town:"Ramanathapuram"
}

let person2={

    firstName:"Sachin",
    secondName:"Tendulkar",
    town:"Mumbai"
}

printDetails.call(person,"TamilNadu","india","call")
printDetails.call(person2,"maharashtra","india","call")

// APPLY
//apply method of function  instances calls this function with this value  and arguements provided as an array
//main diff between call and apply is passing way of second parameter
//in call we pass second parameters in comma seperated but in apply it will be in array

printDetails.apply(person,["TamilNadu","india","apply"])
printDetails.apply(person2,["maharashtra","india","apply"])

//BIND
//bind method of function instances creates new function and it can call later
//whenever it is called calls this function with this value and arguements provided seperately
//diff is gives you a copy

const bindFunc=printDetails.bind(person,"TamilNadu","india","Bind")
bindFunc()

//Call and Apply immediately invoked
//Bind returns method and can invoke later


//POLYFILLS for BIND With Call Method

Function.prototype.myBind=function(...args){
    let func=this;
    let obj=args[0];
    let args1=args.slice(1);
    return function(...args2){
        func.call(obj,...args1,...args2)
    }
}
const bindPolyfill=printDetails.myBind(person,"tamilNadu","India")
bindPolyfill("myBind and Call")

//2nd Method
//POLYFILLS for BIND With apply Method

Function.prototype.myBind2=function(...args){
    let func=this
    let thisObj=args[0];
    let arguements=args.slice(1);
    
    return function(...args2){
        func.apply(thisObj,[...arguements,...args2])
    }
}

const bindPolyfill2=printDetails.myBind2(person,"TamilNadu","India")
bindPolyfill2("myBind and Apply")