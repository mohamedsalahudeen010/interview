// Debouncing accepts a function and transforms it in to an updated (debounced)
// function so that the code inside the original function is 
// executed after a certain period of time

// Debouncing is a programming practice used to ensure that
// time-consuming functions do not invoked so often, that affects the performance of the web page. 
// In other words, it limits the rate of function gets invoked.

// Debouncing in JavaScript is a practice used to improve browser performance. 
// There might be some functionality in a web page that requires time-consuming computations.
//  If such a method is invoked frequently, it might greatly affect the performance of the browser,
//  as JavaScript is a single-threaded language. 

let count=0;

let fetch=()=>{
    count++
    console.log(`clicked  ${count} times`)
}

const deBouncing=(func,delay)=>{

    return function(){
        clearTimeout(timeOut);

        const timeOut=setTimeout(()=>{
            func()
        },delay)
    }
}

const betterFunc=deBouncing(fetch,300)