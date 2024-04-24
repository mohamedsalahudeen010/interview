//Throttling
//it is a technique used for optimization
//limiting the rate of function execution

//makes the function call at front and make next call after certain time limit
//First click executed Immediately and then execute function in certain time limit

//consider a shooting game
//if i make first shoot and first function call will be done
//then the second function call will make with a certain period of time
//during that period of time i may make 10 shoots or 50 shoots that doesn't matter


// Throttling sometimes also called throttle function is a practice used in websites. 
// Throttling is used to call a function after every millisecond or a particular interval 
// of time only the first click is executed immediately.

// Without throttling Function:
// Without throttling, a function may be invoked rapidly, 
// leading to performance issues, unnecessary resource consumption, 
// and a potentially poor user experience.

let fetch=()=>{
    console.log("Throttling Function")
}

const throttling=(func,delay)=>{
    let flag=true
    return function(){
        let context=this;
        let args=arguments;
        if(flag){
            func.apply(context,args)
            //or
            // func()
            flag=false
            setTimeout(()=>{
                flag=true
            },delay)
        }
        
    }
}


const betterFuncThrottling=throttling(fetch,300)