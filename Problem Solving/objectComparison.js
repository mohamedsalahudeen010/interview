let obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 5,
  },
  e: 10,
  f:{
    0:20,
    1:30
  }
};

let obj2 = {
 
  b: {
    d: 5,
    c: 2,
  },
  e: 10,
  a: 1,
  f:[20,30]
};

//OBJECT COMPARE
const compare=(obj1,obj2)=>{
    if(typeof obj1!== typeof obj2)return false
    if(Array.isArray(obj1) || Array.isArray(obj2))return false
    if(Object.keys(obj1).length!=Object.keys(obj2).length)return false 

    for(let i of Object.keys(obj1)){
        if(typeof obj1[i]==="object"){
            x=compare(obj1[i],obj2[i])
            if(!x)return false
        }
        else if(obj1[i]!=obj2[i])return false
    }
    return true
}
console.log(compare(obj1,obj2))