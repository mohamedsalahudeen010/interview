let cart=["Shoes"];

const order=(cart)=>{
    let prom=new Promise((resolve,reject)=>{

        if(cartValidation(cart)){
            
            setTimeout(()=>{
                let orderKey=123456
                resolve(orderKey)
            },2000)
        }
        if(!cartValidation(cart)){
            setTimeout(()=>{
                let err=new Error("cart is Not valid")
                reject(err)
            },2000)
        }
    })
    return prom
}

const cartValidation=(cart)=>{
    if(cart.length>0)return true
    else return false
}

let buy=order(cart).then((data)=>console.log(data)).
catch((err)=>console.log(err))