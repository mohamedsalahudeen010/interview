let cart=[];


const createOrder=(cart)=>{
    const prom= new Promise((resolve, reject) => { 
        if(!cartValidation(cart)){
            setTimeout(()=>{
                const err=new Error("Cart Is Not valid")
                reject(err)
            },5000)
        }if(cartValidation(cart)){
            setTimeout(()=>{
                orderId="order6415151",
                resolve(orderId)
            },5000)
        }
     })
     return prom
}

const cartValidation=(cart)=>{
    if(cart.length>0){
        return true
    }
    else return false
}

const res=createOrder(cart)
res.then((data)=>console.log(data))
.catch(err=>console.log(err.message))