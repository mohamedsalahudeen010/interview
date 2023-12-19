


//callback function

const cart=["shoe","pant","shirt"]


//passing a function to another function
createOrder(cart, function (OrderId){
    proceedTopayment(OrderId,function(paymentInfo){
        showOrdersummary(paymentInfo,function(){
            UpdateWallet()
        })
    });
});

//promise-chaining

const promise1=createOrder(cart)
.then (function (OrderId){
    proceedTopayment(OrderId);
})
.then(function(paymentInfo){
    showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){
    updateWallet(paymentInfo)
})

//<<<<<<<<<<OR>>>>>>>>>>>>>//

createOrder(cart)
.then((OrderId)=>proceedTopayment(OrderId))
.then ((paymentInfo)=>showOrderSummary(paymentInfo))
.then((paymentInfo)=>updateWallet(paymentInfo))




const promise= createOrder(cart);

//{data:undefined}
//eventually it will filled with datas
//{data:OrderDetails}

//here we are attaching a function to another function 
promise.then(function (OrderId){
    proceedTopayment(OrderId);
})




const user=fetch("https://restcountries.com/v2/all")



const value=user.then((data)=>data.json())


const value1 = () => {value.then((data)=>console.log(data))}



value1()










