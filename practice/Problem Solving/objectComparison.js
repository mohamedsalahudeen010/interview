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
  f:{
    0:20,
    1:3
  }
};

//OBJECT COMPARE
const compare=(o1,o2)=>{
  if(typeof o1!== typeof o2)return false
  if(Array.isArray(o1)||Array.isArray(o2))return false
  if(Object.keys(o1).length!==Object.keys(o2).length)return false

  for(let key of Object.keys(o1)){
    if(typeof o1[key]==="object"){
      x=compare(o1[key],o2[key])
      if(!x)return false
    } 
    else if(o1[key]!==o2[key]){
      return false
    }
  }

  return true
}
console.log(compare(obj1,obj2))