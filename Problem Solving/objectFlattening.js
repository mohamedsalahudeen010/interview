
//OBJECT Flat
//out=> a: 1, 'b.c': 2, 'd.e.f': 3 }
let obj={ a: 1, b: { c: 2 }, d: { e: { f: 3 } } }
let objectFlattening=(obj)=>{
    let res={}
    for(let i in obj){
        if(typeof obj[i]==="object" && !Array.isArray(obj[i])){
            const temp=objectFlattening(obj[i])
            for(let j in temp){
                res[i+"."+j]=temp[j]
            }
            // res={...res,...objectFlattening(obj[i])}
            console.log(res)
        }else res[i]=obj[i]
        console.log(res)
    }
    return res
}

console.log(objectFlattening(obj))