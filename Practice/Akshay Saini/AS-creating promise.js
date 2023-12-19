const cart =["shoes","pant","shirt"];

const promise=createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
}).catch(function(err){
    console.log(err.message)
})


//PROMISE PRODUSER

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        if (!validateCart(cart)){
            setTimeout(function(){
                const err=new Error("cart is not valid");
                reject(err);
            },5000)
           
        }
        const orderId="45574";
        if (orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    })
    return pr
}

function validateCart(cart){
    return true
}
