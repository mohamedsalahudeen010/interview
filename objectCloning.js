
let obj={
    name:"Sala",
    age:28,
    weight:96,
    scores:{
        match1:25,
        match2:30,
        match3:58,
        match4:22,
    }
}

//Shallow Copy => spread,Object.assign()
//Only copy the first level of object and other levels are refrenced 
//so that if we change value in copied nested object changes will occur in original object also
let objSpread={...obj}

console.log("Obj : ",obj)
console.log("objSpread : ",objSpread)
objSpread.name="raj"
objSpread.weight=60
objSpread.scores.match4=70
console.log("Obj : ",obj)
console.log("objSpread : ",objSpread)

//Object.assign(obj)


let obj1={
    name:"Sala",
    age:28,
    weight:96,
    scores:{
        match1:25,
        match2:30,
        match3:58,
        match4:22,
    }
}
let objAssign=Object.assign(obj1);

console.log("objAssign : ",objAssign)
objAssign.name="raj"
objAssign.weight=60
objAssign.scores.match4=70

console.log("obj1 : ",obj1)
console.log("objAssign : ",objAssign)

//Deep Copy =>JSON.parse()
//Copy All level of object 
//so that if we change value in copied nested object NO changes will occur in original object also

let obj2={
    name:"Sala",
    age:28,
    weight:96,
    scores:{
        match1:25,
        match2:30,
        match3:58,
        match4:22,
    }
}

let objJSON=JSON.parse(JSON.stringify(obj2))
console.log("obj2 : ",obj2)
console.log("objJSON : ",objJSON)

objJSON.name="raj"
objJSON.weight=60
objJSON.scores.match4=70

console.log("obj2 : ",obj2)
console.log("objJSON : ",objJSON)