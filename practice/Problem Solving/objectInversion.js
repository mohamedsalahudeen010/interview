let obj={
    a:1,b:2,c:3,d:4
}
let res={}


for(let i in obj){
    res[obj[i]]=i
}

console.log(res)

//Another method but above method is efficient

//to extract keys from object
let res2={}
let keys=Object.keys(obj) //out=>[ 'a', 'b', 'c', 'd' ]
console.log(keys)
let values=Object.values(obj)//out=>[ 1, 2, 3, 4 ]
console.log(values)

for(let i=0;i<keys.length;i++){
    res2[values[i]]=keys[i]
}

console.log("RES2 : ", res2)