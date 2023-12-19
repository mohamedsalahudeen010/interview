const cart =["shoes","pant","shirt"];

const promise=createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
    return orderId
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);

})
.catch(function(err){
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

function proceedToPayment(orderId){
    const PP=new Promise(function(resolve,reject){
       resolve("payment is successful"); 
    });
}

function validateCart(cart){
    return true;
}
