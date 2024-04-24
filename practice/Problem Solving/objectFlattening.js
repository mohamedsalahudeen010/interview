
//OBJECT Flat
//out=> a: 1, 'b.c': 2, 'd.e.f': 3 }
let obj={ a: 1, b: { c: 2 }, d: { e: { f: 3 } } }

let objectFlattening=(obj)=>{
    let res={};
    for(let key in obj){
        if(typeof obj[key]==="object" && Array.isArray(obj[key])){
            let temp=objectFlattening(obj[key])
            for(let key2 in temp){
                res[key+"."+key2]=temp[key]
            }
        }
        else res[key]=obj[key]
    }
    return res
}

console.log(objectFlattening(obj))