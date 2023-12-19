//CURRYING
//Two ways
//1,By bind method
//2, By Closure

//1,By bind method

function mult(a,b){
console.log(a*b)
}

const multBy2=mult.bind(this,2);
multBy2(3)

const multBy3=mult.bind(this,3);
multBy3(3)

//2, By Closure

function mult1(x){
    return function(y){
        console.log(x*y)
    }
}

let multBy_2=mult1(2);
multBy_2(3)

let multBy_3=mult1(3);
multBy_3(3)