let obj={
    name:"Sala",
    age:28,
    weight:96
}

let res={}
for(let key in obj){
   res[key.toUpperCase()]=obj[key]
}



console.log(obj)
console.log(res)